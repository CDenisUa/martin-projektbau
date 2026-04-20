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
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <div className="bg-primary py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4 font-medium">
            {eyebrow}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight mb-4 wrap-break-word">
            {title}
          </h1>
          {description ? (
            <p className="text-white/50 text-sm max-w-2xl wrap-break-word">{description}</p>
          ) : null}
          {lastUpdatedLabel && lastUpdatedValue ? (
            <p className="text-white/40 text-xs mt-3">
              {lastUpdatedLabel}: {lastUpdatedValue}
            </p>
          ) : null}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-0 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-3 sm:space-y-5">
        {facts?.length ? (
          <div className="bg-white sm:rounded-2xl border-y sm:border border-gray-100 shadow-sm overflow-hidden">
            {facts.map((fact, index) => (
              <div
                key={`${fact.label}-${index}`}
                className={`flex flex-col gap-1 px-4 sm:px-8 py-4 sm:py-5 md:flex-row md:gap-6 ${
                  index < facts.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <span className="text-gray-400 text-xs sm:text-sm font-medium sm:w-48 sm:shrink-0 sm:pt-0.5">
                  {fact.label}
                </span>
                <span className="text-gray-900 text-sm wrap-break-word">{fact.value}</span>
              </div>
            ))}
          </div>
        ) : null}

        {sections?.map((section, index) => (
          <div
            key={`${section.title}-${index}`}
            className="bg-white sm:rounded-xl border-y sm:border border-gray-100 shadow-sm px-4 sm:px-8 py-5 sm:py-7"
          >
            <h2 className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide mb-3 flex items-center gap-2 sm:gap-3">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent/15 text-accent text-[10px] flex items-center justify-center font-bold shrink-0">
                {index + 1}
              </span>
              <span className="wrap-break-word">{section.title.replace(/^\d+\.\s*/, '')}</span>
            </h2>
            <div className="space-y-3">
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p
                  key={`${section.title}-${paragraphIndex}`}
                  className="text-gray-600 text-sm leading-relaxed wrap-break-word"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}

        {noteTitle && noteParagraphs?.length ? (
          <div className="bg-primary/4 border-y sm:border border-primary/10 sm:rounded-xl px-4 sm:px-8 py-5 sm:py-6">
            <h2 className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              {noteTitle}
            </h2>
            <div className="space-y-3">
              {noteParagraphs.map((paragraph, index) => (
                <p key={`${noteTitle}-${index}`} className="text-gray-600 text-sm leading-relaxed wrap-break-word">
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
