import { Partner } from "./Partner";

export interface JobOffer {
    jobid?: number;
    titre: string;
    skills: string;
    description: string;
    experienceRequired: number;
    relevanceScore: number;
    location: string;
    salary: number;
    partner?: Partner; 
  }
  