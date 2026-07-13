import type { LegalPageContent } from "@/content/types";

export function LegalTemplate({ content }: { content: LegalPageContent }) {
  return (
    <>
      <section className="bg-ink py-14 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-semibold sm:text-4xl">
            {content.h1}
          </h1>
          <p className="eyebrow mt-4 text-mist">{content.updated}</p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6 lg:px-8">
          {content.sections.map((section) => (
            <div key={section.h2}>
              <h2 className="font-display text-xl font-semibold text-ink">
                {section.h2}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="mt-3 text-sm leading-relaxed text-slate-ink sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
