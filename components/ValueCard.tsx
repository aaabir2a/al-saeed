import { ReactNode } from 'react';

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="bg-gradient-to-br from-white to-neutral-50 p-8 rounded-2xl border border-neutral-200 shadow-md hover:shadow-xl transition-all duration-300">
      <div className="text-primary-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-neutral-900 mb-2 font-display">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
}