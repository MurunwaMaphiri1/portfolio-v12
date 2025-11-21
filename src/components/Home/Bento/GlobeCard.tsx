import BentoCard from './BentoCard';
import Globe from './Globe'; 
import { MapPin } from 'lucide-react';

const GlobeCard = () => {
  return (
        <BentoCard
        className={`group/globe col-span-5 row-span-1 h-56 mt-5 mb-5
                    rounded-xl
                    border border-white/10
                    bg-black/20
                    shadow-[0_0_40px_-10px_rgba(255,255,255,0.15)_inset]
                    backdrop-blur-sm`}
        >
        {/* Header */}
        <div className="absolute top-4 left-4 z-10">
            <div className="flex items-center gap-2">
            <MapPin className="size-4 text-white/80" />
            <h2 className="bg-gradient-to-r from-[#8ebac7] via-[#4d8b9d] to-[#2a4b55] bg-clip-text font-neu text-sm font-medium text-transparent">
                Pretoria, South Africa
            </h2>
            </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="relative translate-y-[35%]"> 
            <Globe width={380} height={380} />
            </div>
        </div>
        </BentoCard>
    );
};

export default GlobeCard;