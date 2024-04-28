//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartnerService } from 'src/app/Services/partner.service';

@Component({
  selector: 'app-viewpartners',
  templateUrl: './viewpartners.component.html',
  styleUrls: ['./viewpartners.component.css']
})
export class ViewpartnersComponent implements OnInit {

  partners: any[] | undefined
  partner:any;
    url: string = "http://localhost:8088/";
  
    constructor(private service: PartnerService, private router: Router) { 
     
    }
  
    ngOnInit(): void {
      this.service.getPartners().subscribe(data => {
        this.partners = data;
      })
    }
    getPartnerById(partnerid: number): void {
      this.service.getPartnerById(partnerid).subscribe(
        (data) => {
          this.partner = data;
        },
        (error) => {
          console.error("Une erreur s'est produite lors de la récupération du partenaire :", error);
          // Gérer l'erreur, par exemple afficher un message à l'utilisateur
        }
      );
    }
    
    deletePartner(partnerid: number){
      this.service.deletePartner(partnerid).subscribe(data => {
        this.partners = this.partners?.filter(partner => partner.partnerid !== partnerid);
      })
      
        setTimeout(()=>{
          window.location.reload();
        }, 100);
    
    }
  
    updatePartner(partnerid: number){
      this.router.navigate(['partner/update', partnerid]);
    }
  
  }
