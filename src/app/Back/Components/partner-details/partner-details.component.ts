/*import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BankAccount } from 'src/app/Models/BankAccount';
import { PartnerService } from 'src/app/Services/partner.service';
import { Partner } from 'src/app/Models/Partner';
import { __param } from 'tslib';
import { Promotion } from 'src/app/Models/Promotion';
@Component({
  selector: 'app-partner-details',
  templateUrl: './partner-details.component.html',
  styleUrls: ['./partner-details.component.css']
})
export class PartnerDetailsComponent implements OnInit {
  partnerid=0;
  partner: any;
  Promotions : any;
  JobOffers : any;
  newPromotion: any = {};
  newFormation: any = {};
  newJobOffer: any = {};
  isAddPromotionModalOpen = false; // Variable pour contrôler l'affichage de la fenêtre modale
  isAddFormationModalOpen = false;
  isAddJobOfferModalOpen = false;
  selectedFile: File | null = null;

  constructor(private formBuilder: FormBuilder ,private route: ActivatedRoute, private partnerService: PartnerService) { }

  ngOnInit(): void {
    // Récupérez l'ID du partenaire à partir de l'URL
    this.route.params.subscribe(params => {
      this.partnerid = +params['partnerid']; // Convertissez la chaîne en nombre
      // Chargez les détails du partenaire
      this.loadPartnerDetails();
      // Initialiser le formulaire réactif
    });
  }

  loadPartnerDetails() {
    this.partnerService.getPartnerById(this.partnerid).subscribe((partner: Partner) => {
      this.partner = partner;
    });
  }

  openAddPromotionModal(): void { 
    console.log('openAddPromotionModal() called');
  this.isAddPromotionModalOpen = true;
  }

  closeAddPromotionModal(): void {
    this.isAddPromotionModalOpen = false;
  }
  openAddFormationModal(): void { 
   // console.log('openAddPromotionModal() called');
  this.isAddFormationModalOpen = true;
  }

  closeAddFormationModal(): void {
    this.isAddFormationModalOpen = false;
  }
  openAddJobOfferModal(): void { 
   this.isAddJobOfferModalOpen = true;
   }
 
   closeAddJobOfferModal(): void {
     this.isAddJobOfferModalOpen = false;
   }
  
  addPromotion(): void {
    if (this.partner && this.newPromotion) {
      this.partnerService.addPromotion(this.partner.partnerid, this.newPromotion).subscribe(promotion => {
        console.log('Nouvelle promotion ajoutée:', promotion);
        this.loadPartnerDetails(); // Rafraîchir les détails du partenaire après l'ajout de la promotion
        this.closeAddPromotionModal(); // Fermer la fenêtre modale après l'ajout de la promotion
      });
    }
  }
  addFormation(): void {
    if (this.partner && this.newFormation) {
      this.partnerService.addFormation(this.partner.partnerid, this.newFormation).subscribe(formation => {
        console.log('Nouvelle Formation ajoutée:', formation);
        this.loadPartnerDetails(); 
        this.closeAddFormationModal(); 
      });
    }
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }



  addJobOffer(): void {
    if (this.partner && this.newJobOffer) {
      this.partnerService.addJobOffer(this.partner.partnerid, this.newJobOffer).subscribe(jobOffer => {
        console.log('Nouvelle JobOffer ajoutée:', jobOffer);
        this.loadPartnerDetails(); 
        this.closeAddJobOfferModal(); 
      });
    }
  }

}*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PartnerService } from 'src/app/Services/partner.service';
import { Partner } from 'src/app/Models/Partner';
import { Promotion } from 'src/app/Models/Promotion';
import { Formation } from 'src/app/Models/Formation';
import { JobOffer } from 'src/app/Models/JobOffer';

@Component({
  selector: 'app-partner-details',
  templateUrl: './partner-details.component.html',
  styleUrls: ['./partner-details.component.css']
})
export class PartnerDetailsComponent implements OnInit {
  partnerid=0;
  partner: any;
  Promotions : any;
  JobOffers : any;
  newPromotion: any = {};
  newFormation: any = {};
  newJobOffer: any = {};
  isAddPromotionModalOpen = false;
  isAddFormationModalOpen = false;
  isAddJobOfferModalOpen = false;
  //newPromotion: any = {}; // Utilisation du type Promotion
 // newFormation: any = {}; // Utilisation du type Formation
  //newJobOffer: any = {}; // Utilisation du type JobOffer
  selectedFile: File | undefined; // Utilisation du type File pour récupérer le fichier sélectionné
  newFormationForm: FormGroup; // Ajout de la propriété newFormationForm de type FormGroup

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private partnerService: PartnerService) {
    // Initialisation de newFormationForm dans le constructeur
    this.newFormationForm = this.formBuilder.group({
      type: ['PAYYANT'],
      sujet: [''],
      titre: [''],
      categorie: [''],
      pdfFile: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.partnerid = +params['partnerid'];
      this.loadPartnerDetails();
    });
  }

  loadPartnerDetails(): void {
    this.partnerService.getPartnerById(this.partnerid).subscribe((partner: Partner) => {
      this.partner = partner;
    });
  }

  openAddPromotionModal(): void {
    this.isAddPromotionModalOpen = true;
  }

  closeAddPromotionModal(): void {
    this.isAddPromotionModalOpen = false;
  }

  openAddFormationModal(): void {
    this.isAddFormationModalOpen = true;
  }

  closeAddFormationModal(): void {
    this.isAddFormationModalOpen = false;
  }

  openAddJobOfferModal(): void {
    this.isAddJobOfferModalOpen = true;
  }

  closeAddJobOfferModal(): void {
    this.isAddJobOfferModalOpen = false;
  }

  addPromotion(): void {
    if (this.partner && this.newPromotion) {
      this.partnerService.addPromotion(this.partner.partnerid, this.newPromotion).subscribe(promotion => {
        console.log('Nouvelle promotion ajoutée:', promotion);
        this.loadPartnerDetails();
        this.closeAddPromotionModal();
      });
    }
  }

  addFormation(): void {
    if (this.partner && this.newFormation) {
      const formDataa = new FormData();
      formDataa.append('type', this.newFormation.type);
      formDataa.append('sujet', this.newFormation.sujet);
      formDataa.append('titre', this.newFormation.titre);
      formDataa.append('categorie', this.newFormation.categorie);
      if (this.selectedFile) {
        formDataa.append('pdfFile', this.selectedFile);
      }

      this.partnerService.addFormation(this.partner.partnerid, this.newFormation).subscribe(formation => {
        console.log('Nouvelle formation ajoutée avec succès:', formation);
        this.loadPartnerDetails();
        this.closeAddFormationModal();
      });
    }
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  addJobOffer(): void {
    if (this.partner && this.newJobOffer) {
      this.partnerService.addJobOffer(this.partner.partnerid, this.newJobOffer).subscribe(jobOffer => {
        console.log('Nouvelle JobOffer ajoutée:', jobOffer);
        this.loadPartnerDetails(); 
        this.closeAddJobOfferModal(); 
      });
    }
  }
}



