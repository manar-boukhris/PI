import { Partner } from "./Partner";

export interface Promotion {
    promoid?: number;
    descrption?: string;
    promo?: string;
    categ?: CategPromo;
    partner: Partner;
    
}
export enum CategPromo {
    PROMO_FOOD,
    PROMO_CLOTHES,
}