import { Comment } from "./Comment";
import { Partner } from "./Partner";

export interface Advertising {
    pubid?: number;
    description: string;
    type: string;
    titre: string;
    partner?: Partner; // Assurez-vous que le nom de la propriété correspond à la casse de la classe Java
    comments?: Comment[]; // Assurez-vous que le nom de la propriété correspond à la casse de la classe Java
  }