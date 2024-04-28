import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../Models/Formation';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private url = "http://localhost:8088/";

  constructor(private http: HttpClient) { }

  

  // Get - Read
  getFormations(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'formation')
  }


  getFormationById(formationid: number): Observable<Formation>{
    return this.http.get<Formation>(`${this.url}formation/${formationid}`)
  }
  completeFormation(id: number, formationid: number): Observable<Blob> {
    return this.http.post(`${this.url}formation/${id}/${formationid}/complete`, {}, { responseType: 'blob' });
  }

  affectUserToFormation(formationid: number, id: number): Observable<string> {
    return this.http.post<string>(`${this.url}formation/${formationid}/users/${id}`, {});
  }
  

  
}
