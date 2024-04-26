import { Formation } from "./Formation";

export interface Evaluation {
    evalid?: number;
    description: string;
    rating: number; // Nombre d'étoiles attribuées (de 1 à 5)
    formation?: Formation; // Assurez-vous que le nom de la propriété correspond à la casse de la classe Java
  }