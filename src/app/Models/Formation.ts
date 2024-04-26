import { Evaluation } from "./Evaluation";
import { Partner } from "./Partner";
import { User } from "./User";

export interface Formation {
    formationid?: number;
    sujet: string;
    type: TypeFormation; // Ou enum TypeFormation si vous le définissez dans Angular
    titre: string;
    categorie: string;
    partner?: Partner; // Assurez-vous que le nom de la propriété correspond à la casse de la classe Java
    evaluations?: Evaluation[]; // Ajoutez la liste des évaluations si nécessaire
    users?: User[]; // Ajoutez la liste des utilisateurs si nécessaire
    completed: boolean;
  }
  export enum TypeFormation {
    PAYYANT,
    NON_PAYYANT,
}
  