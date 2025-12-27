interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export default function StatCard({ value, label, className = '' }: StatCardProps) {
  return (
    <div className={`p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-center transition-all duration-300 hover:bg-white/10 ${className}`}>
      <div className="text-5xl md:text-6xl font-bold mb-3 text-white font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-primary-100">
        {value}
      </div>
      <div className="text-primary-100/80 font-medium tracking-wide uppercase text-sm">{label}</div>
    </div>
  );
}