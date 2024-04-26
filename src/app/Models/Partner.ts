
import { BankAccount } from '../Models/BankAccount';
export interface Partner {
    partnerid: number
    name: string
    domain: string
    nbtransaction: number
    beneficenet: number
    chiffredaffaires : number
    chargesfixes: number
    bankAccount : BankAccount
}
 