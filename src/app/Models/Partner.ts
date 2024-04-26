
import { BankAccount } from '../Models/BankAccount';
import { Advertising } from './Advertising';
import { Formation } from './Formation';
import { JobOffer } from './JobOffer';
import { Promotion } from './Promotion';

export interface Partner {
    partnerid: number
    name: string
    domain: string
    nbtransaction: number
    beneficenet: number
    chiffredaffaires : number
    chargesfixes: number
    bankAccount : BankAccount
    promotions: Promotion[]; 
    advertising : Advertising;
    JobOffers : JobOffer[];
    formations : Formation[];
    
}
 