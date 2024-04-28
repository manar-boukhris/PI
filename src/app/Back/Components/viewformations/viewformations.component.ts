import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormationService } from 'src/app/Services/formation.service';

@Component({
  selector: 'app-viewformations',
  templateUrl: './viewformations.component.html',
  styleUrls: ['./viewformations.component.css']
})
export class ViewformationsComponent implements OnInit {

  formations: any[] | undefined
    url: string = "http://localhost:8088/";
  
    constructor(private service: FormationService, private router: Router) { 
     
    }
  
    ngOnInit(): void {
      this.service.getFormations().subscribe(data => {
        this.formations = data;
      })
    }
    // Dans votre composant TypeScript
    generateStarArray(rating: number): any[] {
      return Array(rating).fill(0);
    }
    calculateAverageRating(evaluations: any[]): number {
      if (!evaluations || evaluations.length === 0) {
        return 0;
      }
      const totalRating = evaluations.reduce((acc, curr) => acc + curr.rating, 0);
      return totalRating / evaluations.length;
    }

    joinFormation(formationid: number) {
      // Récupérer l'ID de l'utilisateur connecté depuis votre service ou votre authentification
      const id = 1; // Exemple d'ID utilisateur
      this.service.affectUserToFormation(formationid, id).subscribe(response => {
        alert(response); // Afficher un message de confirmation
        this.router.navigate(['/formation/', formationid]);
      }, error => {
        console.error(error); // Gérer les erreurs éventuelles
      });
    }

  /*
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
    }*/
  

}
