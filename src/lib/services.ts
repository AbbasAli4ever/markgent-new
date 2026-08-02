export type ServiceTheme = "paper" | "ink";

export type Service = {
  slug: string;
  name: string;
  category: string;
  description: string;
  capabilities: string[];
  image: string;
  cta: string;
  theme: ServiceTheme;
};

export const SERVICES: Service[] = [
  {
    slug: "branding",
    name: "Branding",
    category: "Identity",
    description:
      "Build a strong, memorable brand identity that stays consistent from your storefront to every product listing and campaign.",
    capabilities: ["Logo design", "Visual identity", "Brand strategy", "Creative assets"],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&q=85",
    cta: "Start a branding project",
    theme: "paper",
  },
  {
    slug: "social-media-management",
    name: "Social Media Management",
    category: "Audience",
    description:
      "Keep your channels active and useful with account management, engaging content, scheduled publishing, and steady audience development.",
    capabilities: ["Account management", "Content creation", "Post scheduling", "Audience growth"],
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1400&q=85",
    cta: "Grow your channels",
    theme: "paper",
  },
  {
    slug: "product-tester-program",
    name: "Product Tester Program",
    category: "Feedback",
    description:
      "Connect products with selected testers who provide genuine evaluations and practical feedback before issues become costly returns or poor customer experiences.",
    capabilities: ["Tester matching", "Product evaluation", "Structured feedback", "Quality insights"],
    image:
      "https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&w=1400&q=85",
    cta: "Build a tester program",
    theme: "ink",
  },
  {
    slug: "website-design",
    name: "Website Design",
    category: "Storefront",
    description:
      "Modern, responsive, SEO-friendly business and e-commerce websites designed around clear journeys, strong product presentation, and conversion.",
    capabilities: ["Responsive design", "E-commerce UX", "SEO foundations", "Conversion structure"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
    cta: "Plan your storefront",
    theme: "paper",
  },
  {
    slug: "content-writing",
    name: "Content Writing",
    category: "Copy",
    description:
      "Professional content for websites, product listings, blogs, and online stores that communicates clearly while supporting search visibility and sales.",
    capabilities: ["Website copy", "Product listings", "Blog content", "Store content"],
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=85",
    cta: "Strengthen your content",
    theme: "paper",
  },
  {
    slug: "product-photography-editing",
    name: "Product Photography & Editing",
    category: "Visuals",
    description:
      "High-quality product photography, lifestyle imagery, infographics, and professional editing prepared for the requirements of e-commerce platforms.",
    capabilities: ["Product photography", "Lifestyle images", "Infographics", "Image editing"],
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=85",
    cta: "Upgrade your product imagery",
    theme: "ink",
  },
  {
    slug: "customer-feedback-management",
    name: "Customer Feedback Management",
    category: "Support",
    description:
      "Manage customer inquiries and feedback professionally across e-commerce platforms while identifying recurring issues that affect satisfaction.",
    capabilities: ["Inquiry handling", "Feedback responses", "Review workflows", "Satisfaction insights"],
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
    cta: "Improve customer support",
    theme: "paper",
  },
  {
    slug: "amazon-ppc-management",
    name: "Amazon PPC Management",
    category: "Paid Media",
    description:
      "Campaign setup, keyword research, bid optimization, and ongoing advertising management focused on improving efficiency and return on investment.",
    capabilities: ["Campaign setup", "Keyword research", "Bid optimization", "Performance reporting"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
    cta: "Improve your campaigns",
    theme: "paper",
  },
];
