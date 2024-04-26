import { Advertising } from "./Advertising";

export interface Comment {
    commentid?: number;
    contenu: string;
    date: Date; // Vous pouvez utiliser le type de date approprié pour Angular
    advertising?: Advertising; // Assurez-vous que le nom de la propriété correspond à la casse de la classe Java
  }