export const siteConfig = {
  name: "Hijjah",
  tagline: "Hajj & Umrah Services",
  description:
    "Premium Hajj and Umrah booking platform. Your journey to the House of Allah begins here.",
  url: "https://hijjah.com",
  ogImage: "/images/og.jpg",
  links: {
    twitter: "https://x.com/hijjah",
    facebook: "https://facebook.com/hijjah",
    instagram: "https://instagram.com/hijjah",
    whatsapp: "https://wa.me/1234567890",
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
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 5000, suffix: "+", label: "Pilgrims Served" },
  { value: 99, suffix: "%", label: "Customer Satisfaction" },
  { value: 50, suffix: "+", label: "Partner Hotels" },
];

export const whyChooseUs = [
  {
    title: "Licensed & Accredited",
    description:
      "Fully licensed by the Ministry of Hajj and Umrah. Your journey is in trusted hands.",
    icon: "ShieldCheck",
  },
  {
    title: "End-to-End Support",
    description:
      "From visa processing to airport assistance, we handle everything so you can focus on worship.",
    icon: "Headphones",
  },
  {
    title: "Premium Comfort",
    description:
      "Handpicked 5-star hotels, direct flights, and private transport for a dignified experience.",
    icon: "Star",
  },
  {
    title: "Guided by Scholars",
    description:
      "Accompanied by qualified scholars to guide you through every ritual with confidence.",
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
      "You need a valid passport (6+ months validity), visa photos, and a completed application form. We guide you through every step of the documentation process.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 2-3 months in advance to secure the best rates and availability, especially during peak seasons like Ramadan.",
  },
  {
    question: "Is the visa included in the package price?",
    answer:
      "Yes, all our packages include visa processing fees. We handle the entire visa application process on your behalf.",
  },
  {
    question: "Can I customize my package?",
    answer:
      "Absolutely. Contact our team and we will tailor a package that matches your specific needs, preferences, and budget.",
  },
  {
    question: "Do you provide group leaders?",
    answer:
      "Yes, all our group packages include an experienced group leader who will accompany you throughout the journey.",
  },
  {
    question: "What happens if my flight is delayed?",
    answer:
      "Our airport assistance team monitors all flights and will be there to greet you regardless of delays. We ensure a smooth arrival experience.",
  },
];

export const testimonials = [
  {
    name: "Aisha Mohammed",
    location: "Lagos, Nigeria",
    rating: 5,
    text: "Alhamdulillah, Hijjah made my first Umrah an absolutely seamless experience. From the visa processing to the hotel arrangements, everything was perfect. The group leader was knowledgeable and patient. I cannot recommend them enough.",
    image: "/images/testimonials/aisha.svg",
  },
  {
    name: "Ahmed Hassan",
    location: "Cairo, Egypt",
    rating: 5,
    text: "This was my fifth Umrah, and by far the most comfortable. The 5-star hotel was steps from the Haram, the scholar explained every ritual beautifully, and the private transport made everything convenient.",
    image: "/images/testimonials/ahmed.svg",
  },
  {
    name: "Fatima Ibrahim",
    location: "London, UK",
    rating: 4,
    text: "The attention to detail was remarkable. They even had a welcome kit with a prayer mat, tasbih, and a guidebook. My family felt truly cared for throughout our journey.",
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
