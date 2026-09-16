export type ProjectCategory = 'Angular' | 'API' | 'DevOps' | 'Data';

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  summary: string;
  overview: string;
  technologies: readonly string[];
  highlights: readonly string[];
  course?: string;
  githubUrl?: string;
  featured: boolean;
}
