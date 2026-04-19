type LegalSection = {
  title: string;
  paragraphs: string[];
};

type LegalFact = {
  label: string;
  value: string;
};

type LegalPageFrameProps = {
  eyebrow: string;
  title: string;
  description?: string;
  lastUpdatedLabel?: string;
  lastUpdatedValue?: string;
  sections?: LegalSection[];
  facts?: LegalFact[];
  noteTitle?: string;
  noteParagraphs?: string[];
};

export default function LegalPageFrame({
  eyebrow,
  title,
  description,
  lastUpdatedLabel,
  lastUpdatedValue,
  sections,
  facts,
  noteTitle,
  noteParagraphs,
}: LegalPageFrameProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto translate-y-10">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4 font-medium">
            {eyebrow}
          </p>
          <h1 className="text-5xl font-light text-white tracking-tight mb-4">{title}</h1>
          {description ? (
            <p className="text-white/50 text-sm max-w-2xl">{description}</p>
          ) : null}
          {lastUpdatedLabel && lastUpdatedValue ? (
            <p className="text-white/40 text-xs mt-3">
              {lastUpdatedLabel}: {lastUpdatedValue}
            </p>
          ) : null}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16 space-y-5">
        {facts?.length ? (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {facts.map((fact, index) => (
              <div
                key={`${fact.label}-${index}`}
                className={`flex flex-col gap-1 px-8 py-5 md:flex-row md:gap-6 ${
                  index < facts.length - 1 ? 'border-b border-gray-50' : ''
                }`}
              >
                <span className="text-gray-400 text-sm w-48 shrink-0 pt-0.5">{fact.label}</span>
                <span className="text-gray-900 text-sm">{fact.value}</span>
              </div>
            ))}
          </div>
        ) : null}

        {sections?.map((section, index) => (
          <div
            key={`${section.title}-${index}`}
            className="bg-white rounded-xl border border-gray-100 shadow-sm px-8 py-7"
          >
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-accent/15 text-accent text-[10px] flex items-center justify-center font-bold shrink-0">
                {index + 1}
              </span>
              {section.title.replace(/^\d+\.\s*/, '')}
            </h2>
            <div className="space-y-3">
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p
                  key={`${section.title}-${paragraphIndex}`}
                  className="text-gray-600 text-sm leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}

        {noteTitle && noteParagraphs?.length ? (
          <div className="bg-primary/4 border border-primary/10 rounded-xl px-8 py-6">
            <h2 className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              {noteTitle}
            </h2>
            <div className="space-y-3">
              {noteParagraphs.map((paragraph, index) => (
                <p key={`${noteTitle}-${index}`} className="text-gray-600 text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
