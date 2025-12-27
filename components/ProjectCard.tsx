import { Building2 } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  location: string;
  category: string;
  imageUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  location,
  category,
  imageUrl
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="h-64 bg-gradient-to-br from-primary-300 via-primary-400 to-primary-500 flex items-center justify-center relative overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <Building2 className="w-24 h-24 text-white opacity-30" />
        )}
      </div>
      <div className="p-6">
        <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-3">
          {category}
        </div>
        <h3 className="text-xl font-bold text-neutral-900 mb-2 font-display">{title}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>
        <p className="text-sm text-primary-600 font-semibold flex items-center">
          <span className="mr-2">📍</span>
          {location}
        </p>
      </div>
    </div>
  );
}