// Portfolio Data Management
// This file contains all portfolio items and can be easily updated

export const portfolioData = {
  designer: {
    name: "Sue",
    title: "Fashion Designer",
    description: "Passionate fashion designer creating innovative and sustainable designs that blend contemporary trends with timeless elegance.",
    email: "sue@fashion.com",
    phone: "+82 10-1234-5678",
    instagram: "@sue_designs",
    location: "Seoul, South Korea"
  },
  
  portfolio: [
    {
      id: 1,
      title: "Urban Elegance Collection",
      description: "A modern take on urban fashion, combining comfort with sophistication. This collection features clean lines, neutral tones, and versatile pieces perfect for the contemporary professional.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      tags: ["Urban", "Professional", "Minimalist"],
      year: "2024",
      category: "Ready-to-Wear",
      githubUrl: "https://github.com/sue/urban-elegance-collection"
    },
    {
      id: 2,
      title: "Floral Dreams",
      description: "Inspired by spring gardens, this collection brings nature's beauty to fashion. Delicate floral patterns and soft pastels create a romantic and feminine aesthetic.",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=600&fit=crop",
      tags: ["Floral", "Romantic", "Spring"],
      year: "2024",
      category: "Prêt-à-Porter",
      githubUrl: "https://github.com/sue/floral-dreams-collection"
    },
    {
      id: 3,
      title: "Sustainable Future",
      description: "An eco-conscious collection using recycled materials and sustainable practices. Each piece tells a story of environmental responsibility while maintaining high fashion standards.",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=600&fit=crop",
      tags: ["Sustainable", "Eco-friendly", "Innovative"],
      year: "2023",
      category: "Sustainable Fashion",
      githubUrl: "https://github.com/sue/sustainable-future-collection"
    },
    {
      id: 4,
      title: "Midnight Glamour",
      description: "Evening wear collection featuring luxurious fabrics and dramatic silhouettes. Perfect for special occasions and red carpet events.",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=600&fit=crop",
      tags: ["Evening", "Luxury", "Dramatic"],
      year: "2023",
      category: "Evening Wear",
      githubUrl: "https://github.com/sue/midnight-glamour-collection"
    },
    {
      id: 5,
      title: "Street Art Fusion",
      description: "Bold and vibrant collection inspired by street art and graffiti. This collection breaks traditional fashion boundaries with its edgy and artistic approach.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      tags: ["Street", "Artistic", "Bold"],
      year: "2023",
      category: "Streetwear",
      githubUrl: "https://github.com/sue/street-art-fusion-collection"
    },
    {
      id: 6,
      title: "Heritage Revival",
      description: "A tribute to traditional Korean fashion with modern interpretations. This collection honors cultural heritage while embracing contemporary design principles.",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=600&fit=crop",
      tags: ["Traditional", "Cultural", "Modern"],
      year: "2022",
      category: "Cultural Fashion",
      githubUrl: "https://github.com/sue/heritage-revival-collection"
    }
  ],
  
  about: {
    story: "With over 8 years of experience in the fashion industry, Sue has established herself as a visionary designer who seamlessly blends traditional craftsmanship with contemporary innovation. Her journey began at the prestigious Parsons School of Design in New York, where she developed her unique aesthetic and passion for sustainable fashion.",
    philosophy: "Fashion should not only be beautiful but also meaningful. Every design tells a story, and every piece should empower the wearer while respecting our planet.",
    achievements: [
      "Winner of Seoul Fashion Week Emerging Designer Award 2023",
      "Featured in Vogue Korea's 'Designers to Watch' 2022",
      "Sustainable Fashion Award from Korean Fashion Council 2021",
      "Graduate with Honors from Parsons School of Design 2019"
    ]
  },
  
  stats: [
    { number: "50+", label: "Collections Designed" },
    { number: "200+", label: "Individual Pieces" },
    { number: "15+", label: "Fashion Shows" },
    { number: "5+", label: "Years Experience" }
  ]
};

export default portfolioData;
