import { Formation } from "./Formation";

export interface User {
    id?: number;
    name: string;
    lastName: string;
    email: string;
    password: string;
    numTel: number;
    birthDate: Date; // Vous pouvez utiliser une chaîne ou un objet Date selon vos besoins
    nationality: string; // Assurez-vous que le nom de la propriété correspond à la casse de la classe Java
    formations?: Formation[];
}