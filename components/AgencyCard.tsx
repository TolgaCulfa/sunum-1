  
import React from 'react';
import { Agency } from '../types';

interface AgencyCardProps {
  agency: Agency;
  accentColor?: string;
}

const AgencyCard: React.FC<AgencyCardProps> = ({ agency, accentColor = 'bg-red-600' }) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={agency.imageUrl} 
          alt={agency.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white ${accentColor}`}>
          Est. {agency.founded}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{agency.name}</h3>
        <p className="text-sm text-slate-500 mb-4 flex items-center">
          <i className="fa-solid fa-location-dot mr-2 text-red-600"></i>
          {agency.headquarters}
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
          {agency.description}
        </p>
        
        <div className="grid grid-cols-3 gap-2 border-t pt-4">
          <div className="text-center border-r">
            <p className="text-[10px] uppercase font-bold text-slate-400">Ülke</p>
            <p className="text-xs font-semibold text-slate-800">{agency.stats.countries}</p>
          </div>
          <div className="text-center border-r">
            <p className="text-[10px] uppercase font-bold text-slate-400">Personel</p>
            <p className="text-xs font-semibold text-slate-800">{agency.stats.staff}</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] uppercase font-bold text-slate-400">Diller</p>
            <p className="text-xs font-semibold text-slate-800">{agency.stats.languages.split(',')[0]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyCard;
