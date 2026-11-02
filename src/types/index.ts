export interface HolidayNotice {
  enabled: boolean;
  badge: string;
  title: string;
  message: string;
  linkText?: string;
  linkHref?: string;
}

export interface SecurityConfig {
  blockedIps: string[];
  enableRateLimit?: boolean;
  maxRequestsPerMinute?: number;
}

export interface SiteConfig {
  brandName: string;
  shortName: string;
  slogan: string;
  hotline: string;
  hotlineRaw: string;
  zalo: string;
  address?: string;
  workingHours: string;
  domain: string;
  operatingAreas: string[];
  holidayNotice?: HolidayNotice;
  security?: SecurityConfig;
}

export interface RoutePrice {
  from: string;
  to: string;
  distance: string;
  price4Seats: string;
  price7Seats: string;
  price16Seats?: string;
  note?: string;
  isPopular?: boolean;
}

export interface RouteDetail {
  slug: string;
  title: string;
  subtitle: string;
  category: 'noi-bai' | 'ha-noi' | 'phu-tho' | 'tam-dao' | 'duong-dai' | 'kcn';
  distance: string;
  duration: string;
  description: string;
  prices: {
    carType: string;
    oneWay: string;
    roundTrip: string;
    notes?: string;
  }[];
  pickupPoints: string[];
  dropoffPoints: string[];
  highlights: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface CarFleetItem {
  id: string;
  name: string;
  slug: string;
  category: '4-cho' | '7-cho' | '16-cho';
  seats: number;
  models: string[];
  tagline: string;
  description: string;
  luggage: string;
  features: string[];
  suitableFor: string[];
  basePricePerKm: string;
  image: string;
  gallery?: string[];
  pricingTable: {
    distance: string;
    price: string;
    roundTripDiscount: string;
  }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featuredImage: string;
  keywords: string[];
  content: string;
  isPinned?: boolean;
  isHoliday?: boolean;
  badgeText?: string;
}

export interface BookingRequest {
  pickup: string;
  dropoff: string;
  carType: '4' | '7' | '16';
  date: string;
  time: string;
  phone: string;
  customerName?: string;
  note?: string;
  isRoundTrip?: boolean;
}
