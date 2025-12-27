import { ReactNode } from 'react';

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="group bg-white p-10 rounded-3xl border border-neutral-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-0 group-hover:h-full bg-primary-500 transition-all duration-500"></div>
      <div className="text-primary-500 mb-6 transform group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-neutral-900 mb-4 font-display group-hover:text-primary-600 transition-colors">{title}</h3>
      <p className="text-neutral-600 leading-relaxed">{description}</p>
    </div>
  );
}