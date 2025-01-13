export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  highlights?: string[];
  inProgress?: boolean;
  detailedDescription?: string;
  features?: string[];
  challenges?: string[];
  outcomes?: string[];
  skills?: {
    category: string;
    items: string[];
  }[];
  learningOutcomes?: {
    code: string;
    description: string;
    achievement: string;
  }[];
}