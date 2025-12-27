interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  className = ''
}: SectionTitleProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-5xl md:text-6xl font-black text-neutral-950 mb-6 font-display tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-neutral-500 max-w-2xl mx-auto font-medium leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}