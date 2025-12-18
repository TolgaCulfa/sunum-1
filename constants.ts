
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
        imageUrl: 'https://commons.wikimedia.org/wiki/File:Anadolu_Agency_logo_2023_%282%29.svg',
        stats: { countries: '100+', staff: 'Köklü Geçmiş', languages: '13 Dil' }
      },
      {
        id: 'aa-2',
        name: 'Anadolu Ajansı: Küresel Operasyon',
        shortName: 'AA - Bölüm 2',
        founded: 1920,
        headquarters: 'Global Ağ',
        description: 'Bugün AA, 13 dilde yaptığı yayınlarla dünyanın her noktasına ulaşan dev bir haber fabrikasıdır. 124 ülkedeki yaygın ağı ve savaş muhabirliği tecrübesiyle, uluslararası arenada Türkiye\'nin en güçlü sesi ve en güvenilir bilgi kaynağı olarak kabul edilmektedir.',
        imageUrl: 'https://commons.wikimedia.org/wiki/File:Anadolu_Agency_logo_2023_%282%29.svg',
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
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpYMj90DoN0TgxBQG0XsWUR0Y90WpICqxpcA&s',
        stats: { countries: '40+ Ülke', staff: '1,000+ Ekip', languages: 'Görüntülü' }
      },
      {
        id: 'iha-2',
        name: 'İhlas Haber Ajansı: Teknoloji ve Hız',
        shortName: 'İHA - Bölüm 2',
        founded: 1993,
        headquarters: 'Dijital Altyapı',
        description: 'İHA, özellikle canlı yayın araç filosu ve uydu teknolojilerindeki üstünlüğüyle tanınır. Dünyanın her yerinden anlık görüntü aktarma kapasitesi sayesinde, küresel televizyon kanallarının en önemli görsel içerik sağlayıcılarından biridir.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpYMj90DoN0TgxBQG0XsWUR0Y90WpICqxpcA&s',
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
        imageUrl: 'https://www.reuters.com/article/technology/reuters-ranked-as-second-most-trusted-news-brand-in-globalwebindex-report-idUSKCN1U62DU/',
        stats: { countries: '150+', staff: '2,500+ Gazeteci', languages: '16 Dil' }
      },
      {
        id: 'reuters-2',
        name: 'Reuters: Küresel Otorite',
        shortName: 'Reuters - Bölüm 2',
        founded: 1851,
        headquarters: 'Dünya Borsaları',
        description: 'Reuters bugün saniyelerle yarışan veri akışıyla dünya piyasalarına yön vermektedir. Pulitzer ödüllü fotoğrafçılığı ve araştırmacı gazetecilik dosyalarıyla dezenformasyonun karşısında duran en büyük küresel haber gücüdür.',
        imageUrl: 'https://www.reuters.com/article/technology/reuters-ranked-as-second-most-trusted-news-brand-in-globalwebindex-report-idUSKCN1U62DU/',
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
