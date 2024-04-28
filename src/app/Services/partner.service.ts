import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import {  Partner } from '../Models/Partner';
import { BankAccount } from '../Models/BankAccount';
import { Promotion } from '../Models/Promotion';
import { Formation } from '../Models/Formation';
import { JobOffer } from '../Models/JobOffer';


@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  private url = "http://localhost:8088/";

  constructor(private http: HttpClient) { }

  // Add - Create
  Addpartner(partner: Partner){
    return this.http.post<Partner>(`${this.url}partner/add`, partner)
  }

  // Get - Read
  getPartners(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'partner')
  }

  
  getPartnerById(partnerid: number): Observable<Partner>{
    return this.http.get<Partner>(`${this.url}partner/${partnerid}`)
  }
  
  // Update User - Update
  updatePartner(partnerid?: number ,partner?: any): Observable<any>{
    return this.http.put<any>(`${this.url}partner/update/${partnerid}`, partner)
  }

  // Delete User - Delete
  deletePartner(partnerid: number): Observable<any>{
    return this.http.delete<any>(`${this.url}partner/delete/${partnerid}`)
  }

  // Obtenir une liste de comptes bancaires disponibles
  getAvailableBankAccounts(): Observable<BankAccount[]> {
    return this.http.get<BankAccount[]>(`${this.url}compte/available`);
  }
  addPromotion(partnerid: number, promotion: Promotion): Observable<Promotion> {
    return this.http.post<Promotion>(`${this.url}promo/${partnerid}`, promotion);
  }
  addFormation(partnerid: number, formation: Formation): Observable<Formation> {
    return this.http.post<Formation>(`${this.url}formation/${partnerid}`, formation);
  }
  addJobOffer(partnerid: number, jobOffer: JobOffer): Observable<JobOffer> {
    return this.http.post<JobOffer>(`${this.url}job/${partnerid}`, jobOffer);
  }

}
