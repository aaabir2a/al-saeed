interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export default function StatCard({ value, label, className = '' }: StatCardProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-4xl md:text-5xl font-bold mb-2 text-white font-display">{value}</div>
      <div className="text-primary-100">{label}</div>
    </div>
  );
}