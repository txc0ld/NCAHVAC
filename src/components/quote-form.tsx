"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";

const SERVICES = [
  ["new-installation", "New installation"],
  ["replacement-upgrade", "Replacement / upgrade"],
  ["service-maintenance", "Service / maintenance"],
  ["breakdown-repair", "Breakdown / repair"],
  ["commercial-hvac", "Commercial HVAC"],
  ["commercial-refrigeration", "Commercial refrigeration"],
  ["ventilation", "Ventilation"],
  ["other", "Other"],
] as const;

const TIMEFRAMES = [
  ["asap", "As soon as possible"],
  ["within-1-week", "Within 1 week"],
  ["within-2-4-weeks", "Within 2-4 weeks"],
  ["planning-budgeting", "Planning / budgeting"],
  ["other", "Other"],
] as const;

const MAX_FILES = 5;
const MAX_FILE_MB = 10;
const MAX_TOTAL_MB = 25;
const ACCEPTED = ["image/jpeg", "image/png", "image/heic"];

const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  phone: "Phone",
  email: "Email",
  suburb: "Suburb / job location",
  propertyType: "Property type",
  service: "Service required",
  description: "Job / fault description",
  timeframe: "Preferred timeframe",
};

type Errors = Record<string, string>;

const TURNSTILE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: {
          sitekey: string;
          theme?: string;
          size?: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
        },
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

function validateField(name: string, value: string): string | null {
  switch (name) {
    case "name":
      return value.trim().length >= 2 ? null : "Please enter your name.";
    case "phone": {
      const digits = value.replace(/\D/g, "");
      return digits.length >= 8 && digits.length <= 15
        ? null
        : "Please enter a valid phone number.";
    }
    case "email":
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? null
        : "Please enter a valid email address.";
    case "suburb":
      return value.trim().length >= 2
        ? null
        : "Please enter the suburb or job location.";
    case "propertyType":
      return value ? null : "Please choose residential or commercial.";
    case "service":
      return value ? null : "Please choose the service you need.";
    case "description":
      return value.trim().length >= 10
        ? null
        : "Please describe the job or fault (a sentence or two helps).";
    case "timeframe":
      return value ? null : "Please choose a preferred timeframe.";
    default:
      return null;
  }
}

export function QuoteForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [started, setStarted] = useState(false);
  const tokenRef = useRef<string>("");
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!TURNSTILE_KEY || !widgetRef.current) return;
    const render = () => {
      if (window.turnstile && widgetRef.current) {
        widgetIdRef.current = window.turnstile.render(widgetRef.current, {
          sitekey: TURNSTILE_KEY,
          theme: "dark",
          size: "flexible",
          callback: (token) => {
            tokenRef.current = token;
          },
          "expired-callback": () => {
            tokenRef.current = "";
          },
        });
      }
    };
    if (window.turnstile) {
      render();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.onload = render;
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (started) track("quote_form_start");
  }, [started]);

  const onStart = () => setStarted(true);

  const onBlurField = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const message = validateField(name, value);
    setErrors((prev) => {
      const next = { ...prev };
      if (message) next[name] = message;
      else delete next[name];
      return next;
    });
  };

  const onFilesChosen = (list: FileList | null) => {
    if (!list) return;
    const chosen = [...files, ...Array.from(list)];
    setFileError(null);
    if (chosen.length > MAX_FILES) {
      setFileError(`Please attach no more than ${MAX_FILES} photos.`);
      return;
    }
    let total = 0;
    for (const f of chosen) {
      if (!ACCEPTED.includes(f.type) && !/\.(heic|jpe?g|png)$/i.test(f.name)) {
        setFileError(`"${f.name}" is not a supported format. Use JPG, PNG or HEIC.`);
        return;
      }
      if (f.size > MAX_FILE_MB * 1024 * 1024) {
        setFileError(`"${f.name}" is larger than ${MAX_FILE_MB} MB.`);
        return;
      }
      total += f.size;
    }
    if (total > MAX_TOTAL_MB * 1024 * 1024) {
      setFileError(
        `Please keep photos under ${MAX_TOTAL_MB} MB in total across all files.`,
      );
      return;
    }
    setFiles(chosen);
    track("photo_upload", { count: chosen.length });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const nextErrors: Errors = {};
    for (const field of [
      "name",
      "phone",
      "email",
      "suburb",
      "propertyType",
      "service",
      "description",
      "timeframe",
    ]) {
      const message = validateField(field, String(data.get(field) ?? ""));
      if (message) nextErrors[field] = message;
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0 || fileError) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    data.delete("photos");
    for (const f of files) data.append("photos", f);
    data.set("turnstile_token", tokenRef.current);

    setStatus("submitting");
    setServerMessage(null);
    track("quote_form_submit");

    try {
      const res = await fetch("/api/quote", { method: "POST", body: data });
      const json = (await res.json()) as {
        ok: boolean;
        message?: string;
        errors?: Errors;
      };
      if (json.ok) {
        setStatus("success");
        track("quote_form_success");
      } else {
        setStatus("error");
        if (json.errors) setErrors(json.errors);
        setServerMessage(
          json.message ??
            "We couldn't send your request. Please try again or contact NCA HVAC directly by phone or email.",
        );
        track("quote_form_error");
        // Turnstile tokens are single-use: reset so a retry gets a new one.
        window.turnstile?.reset(widgetIdRef.current ?? undefined);
        tokenRef.current = "";
        requestAnimationFrame(() => summaryRef.current?.focus());
      }
    } catch {
      setStatus("error");
      setServerMessage(
        "We couldn't send your request. Please try again or contact NCA HVAC directly by phone or email.",
      );
      track("quote_form_error");
      window.turnstile?.reset(widgetIdRef.current ?? undefined);
      tokenRef.current = "";
      requestAnimationFrame(() => summaryRef.current?.focus());
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="border border-ink/5 bg-surface p-8 lg:p-10"
      >
        <span aria-hidden="true" className="block h-1 w-16 bg-primary" />
        <h3 className="mt-6 font-condensed text-3xl font-semibold uppercase">
          Request received
        </h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
          Thanks for getting in touch. NCA HVAC will contact you directly to
          discuss the job and arrange your free quote.
        </p>
      </div>
    );
  }

  const field = (name: string) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
    onBlur: onBlurField,
    onFocus: onStart,
  });

  const errorText = (name: string) =>
    errors[name] ? (
      <p id={`${name}-error`} className="mt-2 text-sm text-error">
        {errors[name]}
      </p>
    ) : null;

  const errorEntries = Object.entries(errors);

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="border border-ink/5 bg-surface p-6 sm:p-8 lg:p-10"
    >
      <div
        ref={summaryRef}
        tabIndex={-1}
        role="alert"
        aria-label="Form errors"
        className="outline-none"
      >
        {errorEntries.length > 0 || fileError ? (
          <div className="mb-6 border-l-2 border-error pl-4">
            <p className="font-condensed text-sm font-semibold tracking-[0.1em] text-ink uppercase">
              Please fix the following before sending
            </p>
            <ul className="mt-2 space-y-1 text-sm text-error">
              {errorEntries.map(([field, message]) => (
                <li key={field}>
                  {FIELD_LABELS[field] ?? field}: {message}
                </li>
              ))}
              {fileError ? <li>Photos: {fileError}</li> : null}
            </ul>
          </div>
        ) : null}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="q-name" className="field-label">
            Name
          </label>
          <input id="q-name" name="name" type="text" autoComplete="name" required className="field" {...field("name")} />
          {errorText("name")}
        </div>
        <div>
          <label htmlFor="q-phone" className="field-label">
            Phone
          </label>
          <input id="q-phone" name="phone" type="tel" autoComplete="tel" required className="field" {...field("phone")} />
          {errorText("phone")}
        </div>
        <div>
          <label htmlFor="q-email" className="field-label">
            Email
          </label>
          <input id="q-email" name="email" type="email" autoComplete="email" required className="field" {...field("email")} />
          {errorText("email")}
        </div>
        <div>
          <label htmlFor="q-suburb" className="field-label">
            Suburb / job location
          </label>
          <input id="q-suburb" name="suburb" type="text" required className="field" {...field("suburb")} />
          {errorText("suburb")}
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className="field-label">Property type</legend>
        <div className="grid grid-cols-2 gap-px bg-ink/10">
          {(["residential", "commercial"] as const).map((value) => (
            <label
              key={value}
              className="flex min-h-11 cursor-pointer items-center justify-center gap-2 bg-canvas px-4 py-3 font-condensed text-sm font-semibold tracking-[0.1em] uppercase transition-colors duration-300 has-checked:bg-primary has-checked:text-white has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary-bright"
            >
              <input
                type="radio"
                name="propertyType"
                value={value}
                defaultChecked={value === "residential"}
                className="sr-only"
                onFocus={onStart}
              />
              {value}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="q-service" className="field-label">
            Service required
          </label>
          <select
            id="q-service"
            name="service"
            required
            defaultValue={defaultService ?? ""}
            className="field appearance-none"
            {...field("service")}
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          {errorText("service")}
        </div>
        <div>
          <label htmlFor="q-timeframe" className="field-label">
            Preferred timeframe
          </label>
          <select
            id="q-timeframe"
            name="timeframe"
            required
            defaultValue=""
            className="field appearance-none"
            {...field("timeframe")}
          >
            <option value="" disabled>
              Select a timeframe
            </option>
            {TIMEFRAMES.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          {errorText("timeframe")}
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="q-description" className="field-label">
          Job / fault description
        </label>
        <textarea
          id="q-description"
          name="description"
          rows={4}
          required
          placeholder="Property, system and what you need done"
          className="field resize-y"
          {...field("description")}
        />
        {errorText("description")}
      </div>

      <div className="mt-6">
        <label htmlFor="q-photos" className="field-label">
          Photos <span className="text-ink/60">(optional, max 5)</span>
        </label>
        <input
          ref={fileInputRef}
          id="q-photos"
          name="photos"
          type="file"
          accept=".jpg,.jpeg,.png,.heic,image/jpeg,image/png,image/heic"
          multiple
          aria-describedby={fileError ? "photos-error" : undefined}
          onChange={(e) => onFilesChosen(e.target.files)}
          className="field cursor-pointer file:mr-4 file:cursor-pointer file:border-0 file:bg-primary file:px-4 file:py-1.5 file:font-condensed file:text-xs file:font-semibold file:tracking-[0.1em] file:text-white file:uppercase"
        />
        {files.length > 0 ? (
          <ul className="mt-3 space-y-1 text-sm text-muted">
            {files.map((f, i) => (
              <li key={`${f.name}-${i}`} className="flex items-center justify-between gap-4">
                <span className="truncate">{f.name}</span>
                <button
                  type="button"
                  onClick={() => {
                    setFiles(files.filter((_, j) => j !== i));
                    setFileError(null);
                    if (fileInputRef.current) fileInputRef.current.value = "";
                  }}
                  className="inline-flex min-h-11 items-center px-2 font-condensed text-xs font-semibold tracking-[0.1em] text-error uppercase hover:text-ink"
                >
                  Remove
                  <span className="sr-only"> {f.name}</span>
                </button>
              </li>
            ))}
          </ul>
        ) : null}
        {fileError ? (
          <p id="photos-error" role="alert" className="mt-2 text-sm text-error">
            {fileError}
          </p>
        ) : null}
      </div>

      {TURNSTILE_KEY ? <div ref={widgetRef} className="mt-6" /> : null}

      {serverMessage ? (
        <p role="alert" className="mt-6 border-l-2 border-error pl-4 text-sm text-ink">
          {serverMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "btn-primary mt-8 w-full",
          status === "submitting" && "cursor-wait opacity-70",
        )}
      >
        {status === "submitting" ? "Sending" : "Request My Free Quote"}
      </button>

      <p className="mt-4 text-xs leading-relaxed text-ink/60">
        Your details are used only to respond to this enquiry and are never
        sold. See our privacy statement for how information is handled.
      </p>
    </form>
  );
}
