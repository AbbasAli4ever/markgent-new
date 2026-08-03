export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "bullets"; items: string[]; ordered?: boolean }
  | { type: "callout"; title: string; text: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  category: string;
  publishedAt: string;
  displayDate: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  popular?: boolean;
  content: BlogContentBlock[];
};

const commerceImage = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=85";
const marketplaceImage = "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=85";
const brandImage = "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1600&q=85";
const adsImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85";
const testingImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85";
const socialImage = "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1600&q=85";
const writingImage = "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1600&q=85";
const supportImage = "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85";
const designImage = "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1600&q=85";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ecommerce-growth-system",
    title: "Build an E-commerce Growth System That Scales",
    excerpt: "Turn disconnected marketing tasks into a repeatable system for attracting, converting, and retaining customers.",
    description: "A practical framework for building a scalable e-commerce growth system across acquisition, conversion, retention, and operations.",
    category: "E-commerce Growth",
    publishedAt: "2026-07-28",
    displayDate: "July 28, 2026",
    readingTime: "8 min read",
    image: commerceImage,
    imageAlt: "Customer paying for an online purchase at a checkout counter",
    featured: true,
    popular: true,
    content: [
      { type: "paragraph", text: "Growth rarely stalls because a brand lacks ideas. It stalls because campaigns, content, listings, customer service, and reporting operate as separate projects. A growth system connects those activities around one customer journey and one set of commercial goals." },
      { type: "heading", text: "Start with the commercial foundation" },
      { type: "paragraph", text: "Before adding channels, define the offer, ideal customer, contribution margin, and reason to believe. These decisions determine which traffic is worth buying and what every product page needs to communicate." },
      { type: "bullets", ordered: true, items: ["Choose one primary customer segment and the problem your product solves.", "Set a target acquisition cost based on margin, returns, and repeat purchase behavior.", "Identify the proof—reviews, demonstrations, comparisons, or guarantees—that reduces hesitation.", "Agree on a small scorecard covering traffic, conversion, order value, and repeat revenue."] },
      { type: "image", src: adsImage, alt: "Marketing analytics dashboard on a laptop", caption: "A useful scorecard connects marketing activity to commercial outcomes." },
      { type: "heading", text: "Connect acquisition, conversion, and retention" },
      { type: "paragraph", text: "A healthy system treats the first click as the beginning, not the finish. Ad creative sets an expectation, the storefront fulfills it, and post-purchase communication gives customers a reason to return. When those stages use the same promise and language, conversion improves without depending only on higher ad spend." },
      { type: "callout", title: "The Markgent view", text: "Make one measurable improvement at the weakest stage of the journey before expanding into another channel. Focus creates cleaner learning and more durable growth." },
      { type: "heading", text: "Build a practical operating rhythm" },
      { type: "bullets", items: ["Review core metrics weekly and investigate the reason behind changes.", "Refresh creative from real customer questions and objections.", "Keep listing, website, ad, and support messaging aligned.", "Document wins so successful work can be repeated across products and marketplaces."] },
      { type: "paragraph", text: "Scalable growth is not a single campaign. It is a disciplined loop: observe customers, prioritize the biggest constraint, ship an improvement, measure the result, and carry the learning forward." },
    ],
  },
  {
    slug: "multi-marketplace-strategy",
    title: "A Smarter Multi-Marketplace Strategy for Growing Brands",
    excerpt: "Expand across Amazon, Walmart, Etsy, and Shopify without fragmenting your brand or operations.",
    description: "Learn how to choose and coordinate e-commerce marketplaces while preserving margins, brand consistency, and operational focus.",
    category: "Marketplace Strategy",
    publishedAt: "2026-07-21",
    displayDate: "July 21, 2026",
    readingTime: "7 min read",
    image: marketplaceImage,
    imageAlt: "Team collaborating around computers in a bright workspace",
    popular: true,
    content: [
      { type: "paragraph", text: "Selling everywhere can look like growth, but every new marketplace introduces different customers, fees, search behavior, content rules, and service expectations. Expansion works best when each channel has a clear role." },
      { type: "heading", text: "Choose channels for a reason" },
      { type: "bullets", items: ["Amazon offers high-intent demand and powerful discovery, with intense competition.", "Walmart can extend reach to value-conscious shoppers and omnichannel customers.", "Etsy rewards distinct products, storytelling, and a strong maker identity.", "Shopify provides the greatest control over experience, customer data, and retention."] },
      { type: "heading", text: "Create one brand system, then adapt it" },
      { type: "paragraph", text: "Your positioning, visual identity, claims, and tone should remain recognizable. Adapt titles, image sequences, descriptions, and promotions to the conventions of each platform rather than copying a listing word for word." },
      { type: "image", src: commerceImage, alt: "Shopper completing a digital payment", caption: "Every channel should feel native while still belonging to the same brand." },
      { type: "callout", title: "Protect operational focus", text: "Launch one marketplace at a time with defined ownership for inventory, listings, advertising, reviews, and customer messages." },
      { type: "heading", text: "Measure channel quality, not only revenue" },
      { type: "paragraph", text: "Compare contribution margin, return rate, organic ranking, support load, and repeat purchase potential. A smaller channel with loyal customers may contribute more value than a larger channel with high fees and constant discounting." },
    ],
  },
  {
    slug: "brand-identity-that-converts",
    title: "How to Build a Brand Identity That Also Converts",
    excerpt: "Create a distinctive brand system that earns recognition while making purchase decisions easier.",
    description: "A guide to e-commerce brand identity that balances visual distinction, customer trust, and conversion-focused communication.",
    category: "Branding",
    publishedAt: "2026-07-14",
    displayDate: "July 14, 2026",
    readingTime: "6 min read",
    image: brandImage,
    imageAlt: "Creative team discussing brand ideas at a table",
    popular: true,
    content: [
      { type: "paragraph", text: "A memorable logo cannot compensate for unclear positioning. For an e-commerce brand, identity is the complete set of signals that helps a shopper recognize the business, understand its value, and feel confident buying." },
      { type: "heading", text: "Define the idea behind the appearance" },
      { type: "paragraph", text: "Start with the customer, category, promise, and personality. A useful identity makes these choices visible in the words, colors, photography, packaging, and experience rather than treating design as decoration." },
      { type: "bullets", ordered: true, items: ["Write a one-sentence positioning statement.", "Choose three personality traits that guide voice and visuals.", "Build a flexible color, type, and image system.", "Create messaging for awareness, consideration, and purchase moments."] },
      { type: "image", src: designImage, alt: "Designer working on a colorful website interface", caption: "Consistency turns individual design choices into a recognizable system." },
      { type: "heading", text: "Design for confidence" },
      { type: "paragraph", text: "Strong product imagery, readable hierarchy, specific benefit statements, reviews, and transparent policies all express the brand. They also answer the questions that stand between interest and checkout." },
      { type: "callout", title: "Consistency compounds", text: "Use the same core promise and recognizable visual language across ads, listings, packaging, social posts, and support replies." },
      { type: "paragraph", text: "The best identity systems are distinctive enough to be remembered and practical enough for a growing team to use every day." },
    ],
  },
  {
    slug: "amazon-ppc-profitable-growth",
    title: "Amazon PPC: A Practical Path to Profitable Growth",
    excerpt: "Structure campaigns around intent, retail readiness, and margin—not vanity metrics.",
    description: "A practical Amazon PPC framework covering retail readiness, campaign structure, search terms, optimization, and profitability.",
    category: "Amazon PPC",
    publishedAt: "2026-07-07",
    displayDate: "July 7, 2026",
    readingTime: "8 min read",
    image: adsImage,
    imageAlt: "Analytics charts displayed on a laptop screen",
    popular: true,
    content: [
      { type: "paragraph", text: "Amazon advertising performs inside a retail environment. Bids matter, but the product detail page, price, reviews, inventory, and organic relevance determine how efficiently paid traffic converts." },
      { type: "heading", text: "Confirm retail readiness first" },
      { type: "bullets", items: ["Keep the featured offer and inventory stable.", "Use a clear main image and a benefit-led image sequence.", "Align titles and copy with the language shoppers use.", "Address recurring objections through content, reviews, and FAQs."] },
      { type: "heading", text: "Separate discovery from control" },
      { type: "paragraph", text: "Automatic and broad targeting can reveal demand. Exact campaigns give greater control over proven terms. Product targeting can defend detail pages or reach complementary and competing products. Separate these roles so budgets and decisions remain clear." },
      { type: "image", src: commerceImage, alt: "Customer making a purchase with a payment card", caption: "Advertising efficiency depends on the complete path from search to purchase." },
      { type: "callout", title: "Read ACOS in context", text: "Judge spend against contribution margin, organic ranking goals, new-to-brand demand, and total account sales—not a universal target." },
      { type: "heading", text: "Optimize with enough evidence" },
      { type: "paragraph", text: "Review search terms, placement performance, conversion, and wasted spend on a consistent cadence. Make measured changes, document them, and allow enough time for the result to become meaningful." },
    ],
  },
  {
    slug: "product-testing-better-launches",
    title: "Why Product Testing Creates Better E-commerce Launches",
    excerpt: "Use structured customer feedback to improve the product story before scaling promotion.",
    description: "Discover how ethical, structured product testing can improve positioning, content, customer experience, and launch readiness.",
    category: "Product Testing",
    publishedAt: "2026-06-30",
    displayDate: "June 30, 2026",
    readingTime: "6 min read",
    image: testingImage,
    imageAlt: "Team workshop with notes arranged across a table",
    content: [
      { type: "paragraph", text: "Teams close to a product know too much to experience it like a first-time customer. Product testing introduces an outside perspective before a brand commits more inventory and marketing budget." },
      { type: "heading", text: "Ask questions that lead to action" },
      { type: "bullets", items: ["What did the tester expect before opening the product?", "Which benefit became clear only after use?", "Where did instructions, packaging, or setup create friction?", "How would the tester describe the product to someone else?"] },
      { type: "heading", text: "Turn observations into better content" },
      { type: "paragraph", text: "Repeated phrases can sharpen headlines and ad concepts. Repeated confusion can guide image callouts, instructions, FAQs, or product improvements. The goal is not simply positive feedback; it is better decision-making." },
      { type: "image", src: supportImage, alt: "Colleagues reviewing notes together", caption: "A structured review process converts feedback into prioritized improvements." },
      { type: "callout", title: "Keep testing ethical", text: "Seek honest experience, disclose relationships where required, and never condition participation or compensation on a positive public review." },
      { type: "paragraph", text: "Testing creates the most value when insights are categorized, prioritized, assigned to an owner, and reviewed after changes are shipped." },
    ],
  },
  {
    slug: "social-content-that-sells",
    title: "A Social Content System That Supports Sales",
    excerpt: "Plan useful, recognizable content without turning every post into a product pitch.",
    description: "Build a sustainable social media content system that grows familiarity, trust, engagement, and e-commerce demand.",
    category: "Social Media",
    publishedAt: "2026-06-23",
    displayDate: "June 23, 2026",
    readingTime: "7 min read",
    image: socialImage,
    imageAlt: "Social media applications displayed on a smartphone",
    content: [
      { type: "paragraph", text: "Social media is most useful when it makes the brand familiar before a shopper is ready to buy. A sustainable system balances education, proof, personality, product discovery, and direct offers." },
      { type: "heading", text: "Build repeatable content pillars" },
      { type: "bullets", items: ["Teach customers how to solve a category problem.", "Demonstrate the product in real situations.", "Share customer outcomes and credible proof.", "Show the people, standards, and decisions behind the brand.", "Present offers clearly when there is a genuine reason to act."] },
      { type: "heading", text: "Create once, adapt deliberately" },
      { type: "paragraph", text: "One customer question can become a short video, carousel, email section, product-page FAQ, and support macro. Adapt the opening, pace, format, and call to action for each channel instead of publishing identical assets everywhere." },
      { type: "image", src: writingImage, alt: "Notebook and laptop prepared for content planning", caption: "A shared content calendar helps ideas travel across the customer journey." },
      { type: "callout", title: "Measure useful signals", text: "Track saves, qualified profile visits, product-page sessions, assisted conversions, and recurring questions alongside reach and likes." },
      { type: "paragraph", text: "Consistency becomes manageable when the team works from a clear strategy, reusable formats, a realistic cadence, and a library of approved brand assets." },
    ],
  },
  {
    slug: "product-content-for-humans-and-search",
    title: "Write Product Content for Humans and Search",
    excerpt: "Combine search language, customer insight, and clear hierarchy to make products easier to find and choose.",
    description: "Learn how to write product titles, descriptions, and supporting content that serves both search visibility and customer decisions.",
    category: "Content Writing",
    publishedAt: "2026-06-16",
    displayDate: "June 16, 2026",
    readingTime: "6 min read",
    image: writingImage,
    imageAlt: "Writer working beside a notebook and laptop",
    content: [
      { type: "paragraph", text: "Search optimization and persuasive writing are not competing goals. Both begin with understanding the words customers use and the information they need to make a confident decision." },
      { type: "heading", text: "Map language to intent" },
      { type: "paragraph", text: "Some searches name a product, while others describe a problem, use case, audience, material, or desired result. Organize these themes and match them to the title, bullets, description, FAQs, and educational content." },
      { type: "bullets", ordered: true, items: ["Lead with the clearest product and category language.", "Translate specifications into meaningful customer outcomes.", "Use concrete details instead of unsupported superlatives.", "Answer objections before repeating another benefit."] },
      { type: "image", src: marketplaceImage, alt: "Content team collaborating in a modern office", caption: "Strong content combines customer vocabulary with a deliberate information hierarchy." },
      { type: "heading", text: "Make every section earn its place" },
      { type: "paragraph", text: "A useful page moves from recognition to relevance, proof, practical detail, and reassurance. Scannable headings and short paragraphs help customers find what matters without losing the brand voice." },
      { type: "callout", title: "Write from evidence", text: "Customer messages, reviews, search-term reports, returns, and product tests are richer inputs than a blank-page brainstorming session." },
      { type: "paragraph", text: "Review content after launch. Search behavior, conversion data, and customer questions reveal where the next revision can improve clarity." },
    ],
  },
  {
    slug: "customer-support-retention-engine",
    title: "Turn Customer Support Into a Retention Engine",
    excerpt: "Build fast, human support that resolves issues and sends valuable insight back to the business.",
    description: "A framework for e-commerce customer support that protects trust, improves retention, and informs product and content decisions.",
    category: "Customer Support",
    publishedAt: "2026-06-09",
    displayDate: "June 9, 2026",
    readingTime: "7 min read",
    image: supportImage,
    imageAlt: "Customer support team collaborating around a desk",
    content: [
      { type: "paragraph", text: "Support is where brand promises meet real situations: late deliveries, damaged items, unclear instructions, returns, and product questions. The quality of that response often determines whether a customer leaves or becomes loyal." },
      { type: "heading", text: "Design for both speed and judgment" },
      { type: "bullets", items: ["Define ownership and response-time expectations by channel.", "Create flexible response frameworks for common situations.", "Give agents clear authority for refunds, replacements, and escalation.", "Keep order and customer context available in one workflow."] },
      { type: "heading", text: "Close the insight loop" },
      { type: "paragraph", text: "Tag conversations by issue and product, then report patterns. A recurring setup question may require a better insert or video. A repeated size complaint may need clearer imagery. Support insight becomes valuable when it reaches the team that can remove the cause." },
      { type: "image", src: testingImage, alt: "Team organizing customer insights during a workshop", caption: "Categorized conversations reveal improvements that benefit every future customer." },
      { type: "callout", title: "A macro is a starting point", text: "Templates create consistency, but agents should adapt them to the customer’s specific situation and emotional context." },
      { type: "paragraph", text: "Measure first-response time, resolution time, repeat contact, customer satisfaction, return reasons, and recurring topics. Together they show whether support is merely fast or genuinely effective." },
    ],
  },
  {
    slug: "storefront-design-conversion",
    title: "Design a Storefront That Makes Buying Easier",
    excerpt: "Use hierarchy, trust, performance, and focused journeys to turn a polished storefront into a commercial tool.",
    description: "Explore the essential UX, content, trust, and performance principles behind a high-converting e-commerce storefront.",
    category: "Web Design",
    publishedAt: "2026-06-02",
    displayDate: "June 2, 2026",
    readingTime: "8 min read",
    image: designImage,
    imageAlt: "Designer creating an e-commerce interface on a desktop screen",
    content: [
      { type: "paragraph", text: "A beautiful storefront can still make customers work too hard. Effective e-commerce design helps people orient themselves, compare options, understand the offer, trust the business, and complete a purchase on any screen." },
      { type: "heading", text: "Build around customer tasks" },
      { type: "bullets", items: ["Use navigation labels customers already understand.", "Make search and filtering useful for the size of the catalogue.", "Create a clear visual path from product value to selection and checkout.", "Keep shipping, returns, and support information easy to find."] },
      { type: "heading", text: "Treat mobile as the primary constraint" },
      { type: "paragraph", text: "Prioritize the information visible before scrolling, keep controls comfortably tappable, preserve readable type, and avoid interfaces that shift while images or scripts load. Performance is part of the experience and part of trust." },
      { type: "image", src: brandImage, alt: "Creative professionals reviewing a digital design", caption: "Design decisions should connect brand expression with practical shopping tasks." },
      { type: "callout", title: "Clarity before novelty", text: "Distinctive design should make the brand memorable without disguising familiar shopping actions or critical information." },
      { type: "heading", text: "Improve with focused evidence" },
      { type: "paragraph", text: "Combine analytics with session observations, customer questions, usability checks, and conversion data. Test meaningful changes to the journey rather than cycling through cosmetic details without a hypothesis." },
    ],
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 3) {
  const remaining = BLOG_POSTS.filter((candidate) => candidate.slug !== post.slug);
  return [
    ...remaining.filter((candidate) => candidate.category === post.category),
    ...remaining.filter((candidate) => candidate.category !== post.category),
  ].slice(0, limit);
}
