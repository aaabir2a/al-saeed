import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  className?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  className = ''
}: ServiceCardProps) {
  return (
    <div className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-neutral-100 ${className}`}>
      <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-6 shadow-md">
        <div className="text-primary-600">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-neutral-900 mb-3 font-display">{title}</h3>
      <p className="text-neutral-600 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-neutral-700">
            <span className="text-primary-500 mr-2 font-bold">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}