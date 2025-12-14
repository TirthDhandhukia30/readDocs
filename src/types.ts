export interface Resource {
  title: string;
  url: string;
  source: string;
}

export interface LearningStep {
  id: string;
  title: string;
  description: string;
  order: number;
  prerequisite: string | null;
  resources: Resource[];
}

export interface LearningPath {
  id: string;
  name: string;
  description: string;
  steps: LearningStep[];
}

export interface Domain {
  id: string;
  name: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'framework' | 'library' | 'tool' | 'language' | 'cloud' | 'database' | 'runtime' | 'protocol';
}
