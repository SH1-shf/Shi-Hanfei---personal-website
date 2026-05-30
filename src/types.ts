export interface Project {
  id: string;
  num: string;
  title: string;
  tags: string[];
  description: string;
  image: string;
  circleColor: string;
  caseStudy: CaseStudyContent;
}

export interface CaseStudyContent {
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  metrics: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization?: string;
  period?: string;
  description: string;
  iconType: 'drafting' | 'graduation' | 'badminton';
  bgColor: string;
  iconColor: string;
}

export interface StatCard {
  id: string;
  title: string;
  text: string;
  subtext?: string;
  iconType: 'university' | 'gpa' | 'ielts' | 'focus';
  iconColor: string;
  bgColor: string;
}
