export interface PortfolioInfo {
  title: string;
  subtitle?: string;
  description?: string;
  shortdescription?: string;
  photo?: string;
  location?: string;
  availability?: string;
}

export interface SkillGroup {
  name: string;
  skills: string[];
  icon?: string;
}

export interface ProjectItem {
  name: string;
  description?: string;
  technologies?: string[];
  link?: string;
  image?: string;
}

export interface SocialLinks {
  linkedin?: string;
  github?: string;
  upwork?: string;
}

export interface ContactInfo {
  email?: string;
  phone?: string;
}

export interface StaticData {
  portfolio: PortfolioInfo;
  skills?: SkillGroup[];
  projects?: ProjectItem[];
  socialLinks?: SocialLinks;
  contactInfo?: ContactInfo;
}

// exported types only; no runtime default export
