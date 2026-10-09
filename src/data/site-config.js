// site-config.js — Centralized Creator Media Kit Data & Settings

export const creatorConfig = {
  name: "Amazing Mkhonta",
  creatorName: "Amazing",
  handle: "@techgirlamazing",
  tagline: "Content Creator • Video Editor • Creator Educator",
  corePositioning: "I help aspiring creators create better content, edit like a pro, and stand out online — while sharing lifestyle, travel and everyday creator experiences.",
  heroHeadline: "I MAKE CONTENT PEOPLE ACTUALLY WANT TO WATCH.",
  heroSubheadline: "Content creator, video editor & creator educator helping aspiring creators create better videos, tell better stories and stand out online.",
  
  socialStats: {
    tiktok: { count: "13.4K", raw: 13400, label: "TikTok Followers", handle: "@techgirlamazing", url: "https://www.tiktok.com/@techgirlamazing?is_from_webapp=1&sender_device=pc" },
    instagram: { count: "2.7K", raw: 2700, label: "Instagram Followers", handle: "@amazing.mkhonta", url: "https://www.instagram.com/amazing.mkhonta/" },
    facebook: { count: "6K", raw: 6000, label: "Facebook Followers", handle: "Amazing Mkhonta", url: "#" },
    combined: { count: "22K+", raw: 22100, label: "Combined Community" }
  },

  contact: {
    email: "mkhontaamazing@gmail.com",
    location: "South Africa & Eswatini",
    portfolioUrl: "https://www.instagram.com/amazing.mkhonta/",
    tiktokUrl: "https://www.tiktok.com/@techgirlamazing?is_from_webapp=1&sender_device=pc",
    instagramUrl: "https://www.instagram.com/amazing.mkhonta/"
  },

  images: {
    mainHero: "/images/hero-profile0.png",              // Profile 0 (Main Picture)
    laptopBrand: "/images/amazing-laptop-brand.jpg",     // First Picture ("AMAZING" Laptop)
    redSuit: "/images/amazing-red-suit.jpg",             // Third Picture (Red Suit)
    whiteBlazer: "/images/amazing-white-blazer.jpg",     // Second Picture (White Blazer)
    editsCollage: "/images/amazing-edits-collage.jpg"    // Fourth Picture ("AMAZING EDITS" collage)
  },

  brandTraits: [
    { title: "CREATIVE", desc: "Unique hooks, slick transitions & dynamic storytelling" },
    { title: "EDUCATIONAL", desc: "Step-by-step editing hacks & creator growth tactics" },
    { title: "RELATABLE", desc: "Authentic day-in-the-life & genuine creator moments" },
    { title: "AUTHENTIC", desc: "Honest tech reviews & organic brand integrations" }
  ],

  pillars: [
    {
      id: "editing",
      number: "01",
      title: "Video Editing",
      tagline: "Professional-looking edits made simple.",
      desc: "CapCut tutorials, editing hacks, transitions, effects, storytelling, and practical editing techniques for high-retention short-form video.",
      icon: "video",
      image: "/images/amazing-red-suit.jpg"
    },
    {
      id: "creator",
      number: "02",
      title: "Creator Education",
      tagline: "Practical tips for creators who want to stand out.",
      desc: "Filming strategy, content ideation, scroll-stopping hooks, pacing tricks, and methods for building a recognizable personal brand.",
      icon: "sparkles",
      image: "/images/amazing-white-blazer.jpg"
    },
    {
      id: "lifestyle",
      number: "03",
      title: "Lifestyle",
      tagline: "Real moments, experiences and everyday inspiration.",
      desc: "Day-in-the-life creator vlogs, routines, fashion moments, productivity setups, and personal aesthetic storytelling.",
      icon: "sun",
      image: "/images/hero-profile0.png"
    },
    {
      id: "vlogs",
      number: "04",
      title: "Vlogs & Travel",
      tagline: "Stories from places, adventures and experiences.",
      desc: "Destination guides, resort reviews, events, beach getaways, food exploration, and immersive lifestyle travel vlogs.",
      icon: "compass",
      image: "/images/amazing-laptop-brand.jpg"
    },
    {
      id: "tech",
      number: "05",
      title: "Creator Tools & Tech",
      tagline: "Apps, AI, tech and tools that help creators create better.",
      desc: "Editing software, AI creator tools, mobile photography, smartphone cameras, microphones, lighting, and creator productivity gear.",
      icon: "cpu",
      image: "/images/amazing-edits-collage.jpg"
    }
  ],

  demographics: {
    keyHighlight: "89% of the TikTok audience is between 18–34.",
    gender: [
      { label: "Female", percentage: 56, color: "#FF3B60" },
      { label: "Male", percentage: 44, color: "#1E1E24" }
    ],
    ageBreakdown: [
      { range: "18–24", percentage: 54.6, isPrimary: true },
      { range: "25–34", percentage: 34.4, isPrimary: true },
      { range: "35–44", percentage: 7.2, isPrimary: false },
      { range: "45–54", percentage: 2.2, isPrimary: false },
      { range: "55+", percentage: 1.6, isPrimary: false }
    ],
    locations: [
      { country: "South Africa", flag: "🇿🇦", isPrimary: true },
      { country: "Eswatini", flag: "🇸🇿", isPrimary: true },
      { country: "Nigeria", flag: "🇳🇬", isPrimary: false },
      { country: "United States", flag: "🇺🇸", isPrimary: false },
      { country: "Zimbabwe", flag: "🇿🇼", isPrimary: false },
      { country: "Kenya", flag: "🇰🇪", isPrimary: false },
      { country: "Botswana", flag: "🇧🇼", isPrimary: false },
      { country: "Zambia", flag: "🇿🇲", isPrimary: false },
      { country: "Ghana", flag: "🇬🇭", isPrimary: false },
      { country: "Liberia", flag: "🇱🇷", isPrimary: false }
    ]
  },

  whyBrandsWorkWithMe: [
    {
      number: "01",
      title: "I KNOW CONTENT",
      desc: "I'm not simply recommending products. I understand hooks, editing, storytelling, pacing, and audience retention."
    },
    {
      number: "02",
      title: "I TEACH",
      desc: "Educational content allows brands to become part of genuinely useful content instead of feeling like an interruption."
    },
    {
      number: "03",
      title: "I CREATE ACROSS PLATFORMS",
      desc: "Content is seamlessly adapted and optimized for TikTok, Instagram Reels, and Facebook Shorts."
    },
    {
      number: "04",
      title: "I UNDERSTAND DIGITAL AUDIENCES",
      desc: "My core audience is 18–34 digital natives actively seeking tech recommendations, editing hacks, and lifestyle inspiration across Africa and beyond."
    },
    {
      number: "05",
      title: "I MAKE PRODUCTS PART OF THE STORY",
      desc: "Instead of simply saying 'here's this product,' I demonstrate how it solves a real problem in a creator's workflow."
    }
  ],

  collaborationFormats: [
    {
      icon: "clapperboard",
      title: "SPONSORED SHORT-FORM VIDEO",
      desc: "Native TikTok or Instagram Reel content featuring your brand or product integrated with engaging storytelling."
    },
    {
      icon: "instagram",
      title: "INSTAGRAM CONTENT",
      desc: "Reels, carousel posts, Story takeovers, and visual product showcases designed to drive engagement."
    },
    {
      icon: "video",
      title: "UGC (USER-GENERATED CONTENT)",
      desc: "Authentic, high-converting creator-style videos delivered to your team for use on your own brand channels & ads."
    },
    {
      icon: "box",
      title: "PRODUCT DEMONSTRATIONS",
      desc: "Detailed tutorials, unboxings, reviews, and practical demonstrations showing your product solving real problems."
    },
    {
      icon: "globe",
      title: "CAMPAIGN CONTENT",
      desc: "Multi-platform integrated campaigns combining educational hooks, vlogs, and lifestyle storytelling."
    },
    {
      icon: "gift",
      title: "PR / PRODUCT SEEDING",
      desc: "Open to receiving products that genuinely align with creator gear, editing software, fashion, and lifestyle."
    }
  ],

  brandFits: [
    "CREATOR TOOLS",
    "AI",
    "EDITING SOFTWARE",
    "SMARTPHONES",
    "CAMERAS",
    "CREATOR EQUIPMENT",
    "EDUCATION",
    "FASHION",
    "BEAUTY",
    "LIFESTYLE",
    "TRAVEL",
    "HOTELS & RESORTS",
    "TOURISM",
    "EVENTS"
  ]
};
