import { Evaluation } from "./Evaluation";
import { Partner } from "./Partner";
import { User } from "./User";

export interface Formation {
    formationid?: number;
    sujet: string;
    type: TypeFormation; 
    titre: string;
    categorie: string;
    partner?: Partner; 
    evaluations?: Evaluation[]; 
    users?: User[]; 
    completed: boolean;
    pdfFile: File;
  }
  export enum TypeFormation {
    PAYYANT,
    NON_PAYYANT,
}
  