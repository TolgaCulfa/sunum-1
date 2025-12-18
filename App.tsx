
import React, { useState } from 'react';
import { PRESENTERS } from './constants';
import { Presenter, Agency } from './types';

type Screen = 'selection' | 'presentation' | 'end';

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('selection');
  const [currentPresenter, setCurrentPresenter] = useState<Presenter | null>(null);
  const [agencyIndex, setAgencyIndex] = useState(0);
  const [finishedPresenters, setFinishedPresenters] = useState<string[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const startPresentation = (presenter: Presenter) => {
    setCurrentPresenter(presenter);
    setAgencyIndex(0);
    setScreen('presentation');
  };

  const nextSlide = () => {
    if (currentPresenter && agencyIndex < currentPresenter.agencies.length - 1) {
      setAgencyIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (agencyIndex > 0) {
      setAgencyIndex(prev => prev - 1);
    }
  };

  const finishCurrentPresenter = () => {
    if (currentPresenter) {
      const newFinished = [...finishedPresenters, currentPresenter.id];
      setFinishedPresenters(newFinished);
      if (newFinished.length === PRESENTERS.length) {
        setScreen('end');
      } else {
        setScreen('selection');
      }
    }
  };

  const currentAgency: Agency | undefined = currentPresenter?.agencies[agencyIndex];

  // SELECTION SCREEN - Smart Board Optimized
  if (screen === 'selection') {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 md:p-12 font-sans overflow-hidden">
        <div className="text-center mb-16 animate-fadeInDown">
          <div className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-black mb-4 tracking-widest uppercase">
            Medya Eğitimi Serisi
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-800 mb-6 tracking-tighter">Sunum Başlıyor!</h1>
          <p className="text-slate-500 text-xl md:text-2xl max-w-3xl mx-auto font-medium">Lütfen ekrandaki büyük butonlardan birine dokunarak sunumu başlatın.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
          {PRESENTERS.map((p, idx) => {
            const isDone = finishedPresenters.includes(p.id);
            return (
              <button
                key={p.id}
                disabled={isDone}
                onClick={() => startPresentation(p)}
                className={`p-14 rounded-[3rem] transition-all duration-500 transform hover:scale-105 group relative overflow-hidden shadow-xl ${
                  isDone 
                  ? 'bg-slate-200 cursor-not-allowed opacity-50' 
                  : 'bg-white hover:shadow-2xl border-2 border-transparent hover:border-red-500 active:scale-95'
                } animate-slideInUp`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className={`w-24 h-24 rounded-3xl mb-8 mx-auto flex items-center justify-center transition-all duration-300 ${isDone ? 'bg-slate-300' : 'bg-red-50 group-hover:bg-red-500 group-hover:rotate-12'}`}>
                  <i className={`fa-solid ${isDone ? 'fa-check text-slate-500' : 'fa-user-graduate text-red-600 group-hover:text-white'} text-4xl`}></i>
                </div>
                <span className={`text-3xl font-black block mb-3 tracking-tight ${isDone ? 'text-slate-500' : 'text-slate-900'}`}>{p.name}</span>
                <span className={`text-sm font-black tracking-[0.2em] transition-colors ${isDone ? 'text-slate-400' : 'text-red-600'}`}>
                  {isDone ? 'BÖLÜM TAMAMLANDI' : 'SIRADAKİ SUNUMCU'}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // END SCREEN - Professional & Warm
  if (screen === 'end') {
    return (
      <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center text-center p-12 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-blue-600/10 pointer-events-none"></div>
        
        <div className="relative z-10 animate-scaleIn">
          <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_80px_rgba(255,255,255,0.2)] animate-pulse">
            <i className="fa-solid fa-heart text-6xl text-red-600"></i>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter">Harikaydınız!</h1>
          
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            <p className="text-slate-300 text-2xl md:text-3xl leading-relaxed font-light">
              Geleceğin gazeteci adayları olarak sergilediğiniz bu harika performans için hepinize teşekkür ederiz. Unutmayın; doğru bilgi, en büyük güçtür!
            </p>
            
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-center gap-8 shadow-2xl">
              <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center shrink-0">
                <i className="fa-solid fa-chalkboard-user text-3xl text-white"></i>
              </div>
              <div className="text-left">
                <p className="text-red-500 text-sm font-black tracking-widest mb-1 uppercase">DANIŞMAN ÖĞRETMEN</p>
                <p className="text-white text-3xl font-bold">Eda Nur Güven</p>
                <p className="text-slate-400 text-lg">Uzmanlık: Gazetecilik Alanı</p>
              </div>
              <div className="hidden md:block w-px h-16 bg-white/10 mx-4"></div>
              <p className="text-white/60 italic text-xl max-w-xs">
              </p>
            </div>
          </div>

          <button 
            onClick={() => { setFinishedPresenters([]); setScreen('selection'); }}
            className="px-12 py-5 bg-white hover:bg-red-600 text-slate-900 hover:text-white font-black text-xl rounded-3xl transition-all shadow-2xl hover:shadow-red-500/40 flex items-center mx-auto group"
          >
            <i className="fa-solid fa-rotate-left mr-3 group-hover:rotate-[-180deg] transition-transform duration-700"></i>
            YENİ SUNUM BAŞLAT
          </button>
        </div>
      </div>
    );
  }

  // PRESENTATION SCREEN - Smart Board Navigation
  return (
    <div className={`min-h-screen transition-all duration-700 ${isDarkMode ? 'bg-[#0f172a]' : 'bg-slate-100'} flex items-center justify-center p-6 md:p-12 overflow-hidden relative`}>
      
      {/* Smart Board Controls - Theme & Close */}
      <div className="fixed top-8 right-8 flex gap-4 z-50">
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-6 rounded-3xl shadow-xl transition-all active:scale-90 ${isDarkMode ? 'bg-slate-800 text-yellow-400' : 'bg-white text-slate-600'}`}
        >
          <i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-2xl`}></i>
        </button>
      </div>

      {/* Presenter Label */}
      <div className="fixed top-8 left-8 flex items-center gap-6 z-40 bg-white shadow-xl px-8 py-4 rounded-3xl border border-slate-100 animate-slideInDown">
        <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
          <i className="fa-solid fa-microphone text-2xl"></i>
        </div>
        <div>
          <p className="text-xs font-black text-slate-400 uppercase tracking-widest">KÜRSÜDEKİ İSİM</p>
          <p className="text-2xl font-black text-slate-800">{currentPresenter?.name}</p>
        </div>
      </div>

      {/* Touch Navigation - Left */}
      <button 
        onClick={prevSlide}
        disabled={agencyIndex === 0}
        className={`fixed left-4 md:left-12 z-50 p-10 rounded-[2.5rem] transition-all ${agencyIndex === 0 ? 'opacity-0 pointer-events-none' : 'bg-white text-slate-900 shadow-2xl hover:bg-red-600 hover:text-white hover:scale-110 active:scale-90'}`}
      >
        <i className="fa-solid fa-chevron-left text-4xl"></i>
      </button>

      {/* Main Presentation Hub */}
      <div className={`w-full max-w-[1400px] rounded-[3.5rem] overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.2)] flex flex-col md:flex-row transition-all duration-700 border-8 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-white'}`}>
        
        {/* Media Block */}
        <div className="w-full md:w-1/2 h-[400px] md:h-auto relative overflow-hidden group">
          <img 
            key={currentAgency?.imageUrl}
            src={currentAgency?.imageUrl} 
            className="w-full h-full object-cover animate-gentlePan"
            alt={currentAgency?.name}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-black/20"></div>
          
          <div className="absolute bottom-16 left-16 right-16">
            <div className="inline-block px-6 py-2 bg-red-600 text-white text-sm font-black rounded-2xl mb-6 tracking-widest uppercase shadow-xl">
              BÖLÜM {agencyIndex + 1} / 2
            </div>
            <h2 className="text-white text-5xl font-black leading-tight tracking-tighter drop-shadow-2xl">
              {currentAgency?.shortName}
            </h2>
          </div>
        </div>

        {/* Text Block */}
        <div className="w-full md:w-1/2 p-16 md:p-24 flex flex-col justify-between relative">
          <div className="animate-fadeIn">
            <h1 className={`text-5xl md:text-7xl font-black mb-10 leading-[1.05] tracking-tighter ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {currentAgency?.name}
            </h1>
            
            <div className="relative mb-14">
              <div className="absolute -left-10 top-0 bottom-0 w-2 bg-red-600 rounded-full"></div>
              <p className={`text-2xl md:text-3xl leading-relaxed text-justify font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {currentAgency?.description}
              </p>
            </div>

            <div className={`grid grid-cols-2 gap-8 p-8 rounded-[2rem] ${isDarkMode ? 'bg-white/5' : 'bg-slate-50'}`}>
              <div>
                <span className="block text-sm font-black text-slate-400 uppercase tracking-widest mb-2">OPERASYON</span>
                <span className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{currentAgency?.stats.countries}</span>
              </div>
              <div>
                <span className="block text-sm font-black text-slate-400 uppercase tracking-widest mb-2">DURUM</span>
                <span className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{currentAgency?.stats.staff}</span>
              </div>
            </div>
          </div>

          {/* Action Area */}
          <div className="mt-16">
            {agencyIndex === 1 ? (
              <button 
                onClick={finishCurrentPresenter}
                className="w-full py-8 bg-green-600 hover:bg-green-700 text-white font-black text-3xl rounded-[2rem] transition-all shadow-2xl hover:shadow-green-500/40 flex items-center justify-center group active:scale-95"
              >
                SUNUMU BİTİR
                <i className="fa-solid fa-circle-check ml-4 group-hover:scale-125 transition-transform"></i>
              </button>
            ) : (
              <button 
                onClick={nextSlide}
                className="w-full py-8 bg-red-600 hover:bg-red-700 text-white font-black text-3xl rounded-[2rem] transition-all shadow-2xl hover:shadow-red-500/40 flex items-center justify-center group active:scale-95"
              >
                DİĞER BÖLÜM
                <i className="fa-solid fa-chevron-right ml-4 group-hover:translate-x-3 transition-transform"></i>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Touch Navigation - Right */}
      <button 
        onClick={nextSlide}
        disabled={agencyIndex === 1}
        className={`fixed right-4 md:right-12 z-50 p-10 rounded-[2.5rem] transition-all ${agencyIndex === 1 ? 'opacity-0 pointer-events-none' : 'bg-white text-slate-900 shadow-2xl hover:bg-red-600 hover:text-white hover:scale-110 active:scale-90'}`}
      >
        <i className="fa-solid fa-chevron-right text-4xl"></i>
      </button>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes gentlePan {
          from { transform: scale(1.05) translate(0, 0); }
          to { transform: scale(1.2) translate(-2%, -2%); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-gentlePan { animation: gentlePan 20s ease-in-out infinite alternate; }
        .animate-scaleIn { animation: scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}} />
    </div>
  );
};

export default App;
