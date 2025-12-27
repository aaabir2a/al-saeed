import { Building2, MapPin } from 'lucide-react';

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
    <div className="group bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2 border border-neutral-100">
      <div className="h-72 bg-neutral-100 relative overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
            <Building2 className="w-20 h-20 text-white opacity-20" />
          </div>
        )}
        <div className="absolute top-4 left-4">
          <div className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-primary-700 text-xs font-black uppercase tracking-widest rounded-full shadow-lg">
            {category}
          </div>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-neutral-900 mb-3 font-display group-hover:text-primary-600 transition-colors">{title}</h3>
        <p className="text-neutral-600 mb-6 line-clamp-2 leading-relaxed">{description}</p>
        <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
          <div className="flex items-center text-sm font-bold text-neutral-400 uppercase tracking-widest">
            <MapPin className="w-4 h-4 mr-2 text-primary-500" />
            {location}
          </div>
          <div className="text-primary-600 font-black text-xs uppercase tracking-tighter">View Details →</div>
        </div>
      </div>
    </div>
  );
}