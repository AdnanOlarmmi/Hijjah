export const siteConfig = {
  name: "Hijjah Hajj & Umrah Services",
  tagline: "Hajj & Umrah Services",
  description:
    "Trusted Hajj & Umrah services dedicated to helping pilgrims experience a smooth, comfortable, and spiritually fulfilling journey to the Holy Cities.",
  url: "https://hijjah.com",
  ogImage: "/images/og.jpg",
  links: {
    twitter: "https://x.com/hijjah",
    facebook: "https://facebook.com/hijjah",
    instagram: "https://instagram.com/hijjah",
    whatsapp: "https://wa.me/2348130036768",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Packages", href: "/packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export const trustStats = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Pilgrims Assisted" },
  { value: 2, suffix: "", label: "Office Locations" },
  { value: 100, suffix: "%", label: "Commitment to Customer Care" },
];

export const whyChooseUs = [
  {
    title: "Trusted Guidance",
    description:
      "Our experienced team provides reliable support before, during, and after your pilgrimage.",
    icon: "ShieldCheck",
  },
  {
    title: "Complete Travel Support",
    description:
      "We assist with visa processing, flight bookings, accommodation, transportation, and travel planning.",
    icon: "Headphones",
  },
  {
    title: "Comfortable Accommodation",
    description:
      "We carefully arrange quality accommodation to ensure a comfortable and convenient stay.",
    icon: "Star",
  },
  {
    title: "Personalized Service",
    description:
      "Every pilgrim's journey is unique. We provide dedicated support tailored to your individual needs.",
    icon: "BookOpen",
  },
];

export const packages = [
  {
    id: 1,
    slug: "economy-umrah",
    title: "Economy Umrah",
    price: 2499,
    duration: "10 Days",
    hotel: "3-Star",
    flight: "Economy",
    meals: "Half Board",
    visa: true,
    transport: "Shared",
    scholar: false,
    remainingSeats: 12,
    popular: false,
  },
  {
    id: 2,
    slug: "standard-umrah",
    title: "Standard Umrah",
    price: 3999,
    duration: "14 Days",
    hotel: "4-Star",
    flight: "Premium Economy",
    meals: "Full Board",
    visa: true,
    transport: "Private",
    scholar: true,
    remainingSeats: 8,
    popular: true,
  },
  {
    id: 3,
    slug: "premium-umrah",
    title: "Premium Umrah",
    price: 6999,
    duration: "21 Days",
    hotel: "5-Star",
    flight: "Business",
    meals: "All Inclusive",
    visa: true,
    transport: "Private + VIP",
    scholar: true,
    remainingSeats: 4,
    popular: false,
  },
];

export const faqs = [
  {
    question: "What documents do I need for Umrah?",
    answer:
      "You need a valid passport (6+ months validity), passport-sized photographs, and a completed visa application form. We guide you through every step of the documentation process.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 2–3 months in advance to secure the best rates and availability, especially during peak seasons like Ramadan.",
  },
  {
    question: "Is visa assistance included?",
    answer:
      "Yes, we provide full visa assistance as part of our service. Our team handles the entire application process on your behalf.",
  },
  {
    question: "What is included in the package?",
    answer:
      "Our packages include visa assistance, flight bookings, accommodation, transportation coordination, and travel support throughout your journey.",
  },
  {
    question: "Can I travel with my family?",
    answer:
      "Absolutely. We welcome families and can arrange group bookings. Contact our team for a tailored package that suits your family's needs.",
  },
  {
    question: "Do you provide group leaders?",
    answer:
      "Yes, our group packages include an experienced group leader who accompanies and assists pilgrims throughout the journey.",
  },
  {
    question: "Can I pay in installments?",
    answer:
      "Yes, we offer flexible installment payment plans to make your pilgrimage more affordable. Contact our team for details.",
  },
  {
    question: "What should I pack for Hajj or Umrah?",
    answer:
      "We provide a detailed packing checklist upon booking. Essentials include Ihram clothing, comfortable footwear, personal toiletries, medications, and important documents. We guide you through everything you need.",
  },
];

export const testimonials = [
  {
    name: "Ammatullah Adam",
    location: "Kogi State, Nigeria",
    rating: 5,
    text: "Alhamdulillah! My journey with Hijjah was everything I prayed for and more. From the visa processing to our accommodation in Makkah, everything was perfectly arranged. As a first-time pilgrim from Kogi, I was nervous, but their team held my hand through every step. I Left Nigeria with peace of mind and returned with a heart full of gratitude.",
    image: "/images/testimonials/aisha.svg",
  },
  {
    name: "Abdullah Oladapo",
    location: "Ekiti State, Nigeria",
    rating: 5,
    text: "Hijjah made my Umrah experience truly unforgettable. The coordination from Lagos to Jeddah was seamless, the hotels were comfortable, and the group leader was always available to assist. Coming from Ekiti, I was worried about the logistics, but they handled everything. I highly recommend Hijjah to any Nigerian Muslim seeking a stress-free pilgrimage.",
    image: "/images/testimonials/ahmed.svg",
  },
  {
    name: "Salahudeen Muslim",
    location: "Ilorin, Kwara State, Nigeria",
    rating: 5,
    text: "Masha Allah! What an amazing experience with Hijjah. From our departure from Nigeria to our return, every detail was taken care of. The accommodation was close to the Haram, the transport was well organized, and the scholars on ground answered all our questions. I went with family from Ilorin and we all came back deeply fulfilled. BarakAllahu feekum!",
    image: "/images/testimonials/fatima.svg",
  },
];

export const galleryStories = [
  {
    id: 1,
    title: "A Blessed Departure",
    location: "King Abdulaziz International Airport",
    image: "/images/gallery/departure.jpg",
    category: "Departure",
  },
  {
    id: 2,
    title: "First Sight of the Kaaba",
    location: "Masjid al-Haram, Makkah",
    image: "/images/gallery/kaaba.jpg",
    category: "Arrival",
  },
  {
    id: 3,
    title: "Tawaf Under the Stars",
    location: "Masjid al-Haram, Makkah",
    image: "/images/gallery/tawaf.jpg",
    category: "First Tawaf",
  },
  {
    id: 4,
    title: "Peace in Madinah",
    location: "Masjid an-Nabawi, Madinah",
    image: "/images/gallery/madinah.jpg",
    category: "Madinah",
  },
  {
    id: 5,
    title: "Brotherhood in Worship",
    location: "Mina, Makkah",
    image: "/images/gallery/group.jpg",
    category: "Group Meals",
  },
  {
    id: 6,
    title: "Guided Learning Session",
    location: "Hotel Conference Room, Makkah",
    image: "/images/gallery/lecture.jpg",
    category: "Lectures",
  },
  {
    id: 7,
    title: "Farewell Tawaf",
    location: "Masjid al-Haram, Makkah",
    image: "/images/gallery/farewell.svg",
    category: "Return",
  },
  {
    id: 8,
    title: "A Journey to Remember",
    location: "Makkah Skyline",
    image: "/images/gallery/journey.svg",
    category: "Return",
  },
];
