
import { Presenter } from './types';

export const PRESENTERS: Presenter[] = [
  {
    id: 'nuh-yusuf',
    name: 'Nuh Yusuf Oktay',
    agencies: [
      {
        id: 'aa-1',
        name: 'Anadolu Ajansı: Milli Mücadele Ruhu',
        shortName: 'AA - Bölüm 1',
        founded: 1920,
        headquarters: 'Ankara, Türkiye',
        description: '6 Nisan 1920\'de Atatürk\'ün talimatıyla kurulan AA, Cumhuriyet tarihimizin en köklü kurumudur. Milli Mücadele döneminde Anadolu\'nun sesini dünyaya duyurarak bağımsızlık ateşini harlamıştır. Halide Edip Adıvar ve Yunus Nadi\'nin kaleminden çıkan ilk haberlerle Türk basınının temel taşı olmuştur.',
        imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200',
        stats: { countries: '100+', staff: 'Köklü Geçmiş', languages: '13 Dil' }
      },
      {
        id: 'aa-2',
        name: 'Anadolu Ajansı: Küresel Operasyon',
        shortName: 'AA - Bölüm 2',
        founded: 1920,
        headquarters: 'Global Ağ',
        description: 'Bugün AA, 13 dilde yaptığı yayınlarla dünyanın her noktasına ulaşan dev bir haber fabrikasıdır. 124 ülkedeki yaygın ağı ve savaş muhabirliği tecrübesiyle, uluslararası arenada Türkiye\'nin en güçlü sesi ve en güvenilir bilgi kaynağı olarak kabul edilmektedir.',
        imageUrl: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1200',
        stats: { countries: '124 Ülke', staff: '3,000+ Ekip', languages: '13 Dil' }
      }
    ]
  },
  {
    id: 'metin-sarikaya',
    name: 'Metin Sarıkaya',
    agencies: [
      {
        id: 'iha-1',
        name: 'İhlas Haber Ajansı: Özel Habercilik',
        shortName: 'İHA - Bölüm 1',
        founded: 1993,
        headquarters: 'İstanbul, Türkiye',
        description: '1993\'te kurulan İHA, Türkiye\'nin özel teşebbüs eliyle hayata geçirilen en büyük ajansıdır. Haberde hız ve doğruluk ilkesiyle yola çıkan ajans, kısa sürede Türkiye\'nin her ilinde örgütlenerek yerel haberciliğin lokomotifi haline gelmiştir.',
        imageUrl: 'data:image/png;base64,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',
        stats: { countries: '40+ Ülke', staff: '1,000+ Ekip', languages: 'Görüntülü' }
      },
      {
        id: 'iha-2',
        name: 'İhlas Haber Ajansı: Teknoloji ve Hız',
        shortName: 'İHA - Bölüm 2',
        founded: 1993,
        headquarters: 'Dijital Altyapı',
        description: 'İHA, özellikle canlı yayın araç filosu ve uydu teknolojilerindeki üstünlüğüyle tanınır. Dünyanın her yerinden anlık görüntü aktarma kapasitesi sayesinde, küresel televizyon kanallarının en önemli görsel içerik sağlayıcılarından biridir.',
        imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200',
        stats: { countries: 'Global Yayın', staff: 'Drone Filosu', languages: 'Teknolojik' }
      }
    ]
  },
  {
    id: 'ozgur-cam',
    name: 'Özgür Çam',
    agencies: [
      {
        id: 'reuters-1',
        name: 'Reuters: Finansal Miras',
        shortName: 'Reuters - Bölüm 1',
        founded: 1851,
        headquarters: 'Londra, BK',
        description: '1851\'de posta güvercinleriyle borsa verisi taşıyarak başlayan bu yolculuk, bugün küresel ekonominin can damarı haline gelmiştir. Reuters, 150 yılı aşkın süredir finans dünyasının ve genel haberciliğin tarafsızlık abidesi olarak kabul edilir.',
        imageUrl: 'https://images.unsplash.com/photo-1585829365234-784c0556092d?q=80&w=1200',
        stats: { countries: '150+', staff: '2,500+ Gazeteci', languages: '16 Dil' }
      },
      {
        id: 'reuters-2',
        name: 'Reuters: Küresel Otorite',
        shortName: 'Reuters - Bölüm 2',
        founded: 1851,
        headquarters: 'Dünya Borsaları',
        description: 'Reuters bugün saniyelerle yarışan veri akışıyla dünya piyasalarına yön vermektedir. Pulitzer ödüllü fotoğrafçılığı ve araştırmacı gazetecilik dosyalarıyla dezenformasyonun karşısında duran en büyük küresel haber gücüdür.',
        imageUrl: 'https://images.unsplash.com/photo-1523995442457-7df58d55846a?q=80&w=1200',
        stats: { countries: 'Dünya Lideri', staff: 'Veri Madenciliği', languages: 'Otorite' }
      }
    ]
  }
];

export const COMPARISON_TABLE_DATA = [
  { agency: 'Anadolu Ajansı', scope: '100+ Ülke', employees: '3,000+', founded: 1920 },
  { agency: 'İHA', scope: '40+ Ülke', employees: '1,000+', founded: 1993 },
  { agency: 'Reuters', scope: '150+ Ülke', employees: '2,500+', founded: 1851 }
];
