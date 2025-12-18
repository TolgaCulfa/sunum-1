
import React from 'react';
import { COMPARISON_TABLE_DATA } from '../constants';

const ComparisonTable: React.FC = () => {
  return (
    <div className="overflow-x-auto rounded-xl shadow-md">
      <table className="w-full text-left border-collapse bg-white">
        <thead>
          <tr className="bg-[#001f3f] text-white">
            <th className="px-6 py-4 font-semibold uppercase text-sm">Ajans İsmi</th>
            <th className="px-6 py-4 font-semibold uppercase text-sm">Kapsama Alanı</th>
            <th className="px-6 py-4 font-semibold uppercase text-sm">Çalışan Sayısı</th>
            <th className="px-6 py-4 font-semibold uppercase text-sm">Kuruluş</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {COMPARISON_TABLE_DATA.map((item, idx) => (
            <tr key={item.agency} className={`hover:bg-slate-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
              <td className="px-6 py-4 font-bold text-slate-800">{item.agency}</td>
              <td className="px-6 py-4 text-slate-600">{item.scope}</td>
              <td className="px-6 py-4 text-slate-600">{item.employees}</td>
              <td className="px-6 py-4 text-slate-600">{item.founded}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
