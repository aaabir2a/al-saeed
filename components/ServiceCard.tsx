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
    <div className={`bg-white p-10 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2 border border-neutral-100 group ${className}`}>
      <div className="w-20 h-20 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:shadow-md transition-all duration-500 group-hover:scale-110">
        <div className="text-primary-600 transition-transform duration-500 group-hover:rotate-6">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-neutral-900 mb-4 font-display group-hover:text-primary-600 transition-colors duration-300">{title}</h3>
      <p className="text-neutral-600 mb-8 leading-relaxed">{description}</p>
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