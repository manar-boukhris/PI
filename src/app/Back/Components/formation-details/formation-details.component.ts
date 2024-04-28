import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/Models/Formation';
import { FormationService } from 'src/app/Services/formation.service';

@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.css']
})
export class FormationDetailsComponent implements OnInit {
  formation: Formation | undefined;
  formationid: number | undefined;
  pdfContent: string | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formationService: FormationService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.formationid = Number(params.get('id'));
      if (this.formationid) {
        this.getFormationDetails(this.formationid);
      } else {
        // Gérer l'erreur, par exemple rediriger l'utilisateur vers une page d'erreur
        this.router.navigate(['/']);
      }
    });
  }

  getFormationDetails(formationid: number): void {
    this.formationService.getFormationById(formationid).subscribe({
      next: (formation) => {
        this.formation = formation;
        if (formation.pdfFile instanceof Blob) {
          this.readPdfFileContent(formation.pdfFile);
        } else {
          console.error("Le fichier PDF n'est pas valide.");
        }
      },
      error: (error) => {
        console.error(error);
        // Gérer l'erreur, par exemple rediriger l'utilisateur vers une page d'erreur
        this.router.navigate(['/']);
      }
    });
  }
  
  readPdfFileContent(file: Blob): void {
    const reader = new FileReader();
    reader.onloadend = () => {
      const arrayBuffer = reader.result as ArrayBuffer;
      // Convertir l'ArrayBuffer en chaîne hexadécimale
      const uint8Array = new Uint8Array(arrayBuffer);
      let binaryString = '';
      for (let i = 0; i < uint8Array.length; i++) {
        binaryString += String.fromCharCode(uint8Array[i]);
      }
      // Convertir la chaîne hexadécimale en base64
      this.pdfContent = btoa(binaryString);
    };
    reader.readAsArrayBuffer(file);
  }
  
  

 
  
}
