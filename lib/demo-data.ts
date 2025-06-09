// Mock user data for demo mode
export const demoUser = {
  id: "demo-user-123",
  name: "Demo User",
  username: "demouser",
  email: "demo@ringsapp.io",
  avatar: "/abstract-profile.png",
  bio: "This is a demo account to explore the Rings platform.",
  company: "Demo Company",
  position: "Network Explorer",
  industry: "Technology",
  influenceScore: 78,
  joinedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days ago
}

// Mock contacts for demo mode
export const demoContacts = [
  {
    id: "contact-1",
    name: "Jane Smith",
    avatar: "/woman-profile.png",
    position: "Marketing Director",
    company: "TechGrowth Inc.",
    email: "jane.smith@example.com",
    phone: "+1 (555) 123-4567",
    lastContact: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    notes: "Met at TechConf 2023. Interested in collaboration on marketing campaigns.",
    tags: ["marketing", "potential-partner"],
    connectionStrength: 85,
  },
  {
    id: "contact-2",
    name: "John Doe",
    avatar: "/man-profile.png",
    position: "CTO",
    company: "InnovateTech",
    email: "john.doe@example.com",
    phone: "+1 (555) 987-6543",
    lastContact: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
    notes: "Discussed potential integration of our APIs. Follow up next week.",
    tags: ["technical", "decision-maker"],
    connectionStrength: 72,
  },
  {
    id: "contact-3",
    name: "Alex Johnson",
    avatar: "/tech-woman-profile.png",
    position: "Product Manager",
    company: "SaaS Solutions",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 456-7890",
    lastContact: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days ago
    notes: "Interested in our enterprise plan. Schedule a demo next month.",
    tags: ["prospect", "enterprise"],
    connectionStrength: 60,
  },
  {
    id: "contact-4",
    name: "Sam Wilson",
    avatar: "/abstract-profile.png",
    position: "Investor",
    company: "Venture Capital Partners",
    email: "sam.wilson@example.com",
    phone: "+1 (555) 789-0123",
    lastContact: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(), // 21 days ago
    notes: "Looking for promising startups in the networking space. Keep in touch quarterly.",
    tags: ["investor", "networking"],
    connectionStrength: 45,
  },
  {
    id: "contact-5",
    name: "Taylor Reed",
    avatar: "/professional-woman-headshot.png",
    position: "Sales Director",
    company: "Global Connect",
    email: "taylor.reed@example.com",
    phone: "+1 (555) 234-5678",
    lastContact: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
    notes: "Potential reseller partnership. Schedule follow-up call next week.",
    tags: ["sales", "partnership"],
    connectionStrength: 90,
  },
]

// Mock ripples for demo mode
export const demoRipples = [
  {
    id: "ripple-1",
    title: "Q4 Product Launch",
    description: "Announcing our new features for Q4",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    scheduledFor: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days from now
    status: "scheduled",
    audience: {
      size: 120,
      targetIndustries: ["Technology", "Marketing", "Sales"],
      connectionStrength: "strong",
    },
    engagement: {
      views: 0,
      responses: 0,
      forwards: 0,
      conversionRate: 0,
    },
  },
  {
    id: "ripple-2",
    title: "Networking Workshop Invitation",
    description: "Join us for a virtual workshop on effective networking",
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 days ago
    scheduledFor: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    status: "sent",
    audience: {
      size: 85,
      targetIndustries: ["Professional Services", "Consulting", "HR"],
      connectionStrength: "all",
    },
    engagement: {
      views: 62,
      responses: 28,
      forwards: 15,
      conversionRate: 0.33,
    },
  },
  {
    id: "ripple-3",
    title: "Partnership Opportunity",
    description: "Exploring potential partnerships in the SaaS space",
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(), // 15 days ago
    scheduledFor: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(), // 8 days ago
    status: "sent",
    audience: {
      size: 35,
      targetIndustries: ["SaaS", "Technology", "Startups"],
      connectionStrength: "strong",
    },
    engagement: {
      views: 30,
      responses: 18,
      forwards: 7,
      conversionRate: 0.51,
    },
  },
]

// Mock campaigns for demo mode
export const demoCampaigns = [
  {
    id: "campaign-1",
    name: "Q4 Outreach Initiative",
    description: "Strategic outreach to key decision makers for Q4",
    status: "active",
    startDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(), // 15 days ago
    endDate: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString(), // 45 days from now
    budget: 5000,
    ripples: ["ripple-1", "ripple-3"],
    metrics: {
      reach: 155,
      engagement: 48,
      conversion: 12,
      roi: 2.4,
    },
  },
  {
    id: "campaign-2",
    name: "Networking Events Series",
    description: "Monthly virtual networking events for professionals",
    status: "planning",
    startDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 days from now
    endDate: new Date(Date.now() + 100 * 24 * 60 * 60 * 1000).toISOString(), // 100 days from now
    budget: 3000,
    ripples: ["ripple-2"],
    metrics: {
      reach: 0,
      engagement: 0,
      conversion: 0,
      roi: 0,
    },
  },
]

// Mock network data for demo mode
export const demoNetworkData = {
  nodes: [
    { id: "demo-user-123", type: "user", name: "Demo User", image: "/abstract-profile.png", influence: 78 },
    { id: "contact-1", type: "contact", name: "Jane Smith", image: "/woman-profile.png", influence: 85 },
    { id: "contact-2", type: "contact", name: "John Doe", image: "/man-profile.png", influence: 72 },
    { id: "contact-3", type: "contact", name: "Alex Johnson", image: "/tech-woman-profile.png", influence: 60 },
    { id: "contact-4", type: "contact", name: "Sam Wilson", image: "/abstract-profile.png", influence: 45 },
    { id: "contact-5", type: "contact", name: "Taylor Reed", image: "/professional-woman-headshot.png", influence: 90 },
    { id: "ripple-1", type: "ripple", name: "Q4 Product Launch", influence: 65 },
    { id: "ripple-2", type: "ripple", name: "Networking Workshop", influence: 70 },
    { id: "ripple-3", type: "ripple", name: "Partnership Opportunity", influence: 55 },
  ],
  links: [
    { source: "demo-user-123", target: "contact-1", strength: 0.85 },
    { source: "demo-user-123", target: "contact-2", strength: 0.72 },
    { source: "demo-user-123", target: "contact-3", strength: 0.6 },
    { source: "demo-user-123", target: "contact-4", strength: 0.45 },
    { source: "demo-user-123", target: "contact-5", strength: 0.9 },
    { source: "demo-user-123", target: "ripple-1", strength: 0.65 },
    { source: "demo-user-123", target: "ripple-2", strength: 0.7 },
    { source: "demo-user-123", target: "ripple-3", strength: 0.55 },
    { source: "contact-1", target: "contact-2", strength: 0.4 },
    { source: "contact-1", target: "contact-5", strength: 0.65 },
    { source: "contact-2", target: "contact-3", strength: 0.55 },
    { source: "contact-3", target: "contact-4", strength: 0.3 },
    { source: "contact-5", target: "contact-4", strength: 0.25 },
  ],
}

// Mock analytics data for demo mode
export const demoAnalyticsData = {
  networkGrowth: [
    { date: "2023-06-01", connections: 10 },
    { date: "2023-07-01", connections: 25 },
    { date: "2023-08-01", connections: 40 },
    { date: "2023-09-01", connections: 65 },
    { date: "2023-10-01", connections: 85 },
    { date: "2023-11-01", connections: 120 },
  ],
  rippleEngagement: [
    { date: "2023-06-01", engagement: 5 },
    { date: "2023-07-01", engagement: 15 },
    { date: "2023-08-01", engagement: 30 },
    { date: "2023-09-01", engagement: 45 },
    { date: "2023-10-01", engagement: 60 },
    { date: "2023-11-01", engagement: 90 },
  ],
  influenceScore: [
    { date: "2023-06-01", score: 20 },
    { date: "2023-07-01", score: 35 },
    { date: "2023-08-01", score: 45 },
    { date: "2023-09-01", score: 55 },
    { date: "2023-10-01", score: 65 },
    { date: "2023-11-01", score: 78 },
  ],
  industryBreakdown: [
    { industry: "Technology", percentage: 40 },
    { industry: "Marketing", percentage: 25 },
    { industry: "Sales", percentage: 15 },
    { industry: "Finance", percentage: 10 },
    { industry: "Other", percentage: 10 },
  ],
}

// Demo data service to fetch mock data
export const demoDataService = {
  getUser: () => demoUser,
  getContacts: () => demoContacts,
  getContact: (id: string) => demoContacts.find((contact) => contact.id === id),
  getRipples: () => demoRipples,
  getRipple: (id: string) => demoRipples.find((ripple) => ripple.id === id),
  getCampaigns: () => demoCampaigns,
  getCampaign: (id: string) => demoCampaigns.find((campaign) => campaign.id === id),
  getNetworkData: () => demoNetworkData,
  getAnalyticsData: () => demoAnalyticsData,
}
