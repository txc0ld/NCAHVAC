import type { Block } from "@/content/blog";
import { SolarIcon } from "@/lib/icons";

export function headingId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

/** Renders a post body. Server component, semantic HTML only, no client JS. */
export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="article">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} id={block.id ?? headingId(block.text)}>
                {block.text}
              </h2>
            );
          case "h3":
            return <h3 key={i}>{block.text}</h3>;
          case "p":
            return <p key={i}>{block.text}</p>;
          case "ul":
            return (
              <ul key={i}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            );
          case "table":
            return (
              <div key={i} className="article-table">
                <table>
                  {block.caption ? <caption>{block.caption}</caption> : null}
                  <thead>
                    <tr>
                      {block.head.map((h) => (
                        <th key={h} scope="col">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) => (
                          <td key={c}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "callout":
            return (
              <aside key={i} className="article-callout">
                <p className="article-callout-title">
                  <SolarIcon name="info-circle-linear" className="text-lg text-primary" />
                  {block.title}
                </p>
                <p>{block.text}</p>
              </aside>
            );
          case "howto":
            return (
              <section key={i} className="article-howto" aria-label={block.name}>
                <ol>
                  {block.steps.map((step, s) => (
                    <li key={step.name}>
                      <p className="article-step-name">
                        <span aria-hidden="true">{String(s + 1).padStart(2, "0")}</span>
                        {step.name}
                      </p>
                      <p>{step.text}</p>
                    </li>
                  ))}
                </ol>
              </section>
            );
        }
      })}
    </div>
  );
}
