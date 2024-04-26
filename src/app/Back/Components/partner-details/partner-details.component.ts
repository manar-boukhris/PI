import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  isAddPromotionModalOpen = false; // Variable pour contrôler l'affichage de la fenêtre modale

  constructor(private route: ActivatedRoute, private partnerService: PartnerService) { }

  ngOnInit(): void {
    // Récupérez l'ID du partenaire à partir de l'URL
    this.route.params.subscribe(params => {
      this.partnerid = +params['partnerid']; // Convertissez la chaîne en nombre
      // Chargez les détails du partenaire
      this.loadPartnerDetails();
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
  addPromotion(): void {
    if (this.partner && this.newPromotion) {
      this.partnerService.addPromotion(this.partner.partnerid, this.newPromotion).subscribe(promotion => {
        console.log('Nouvelle promotion ajoutée:', promotion);
        this.loadPartnerDetails(); // Rafraîchir les détails du partenaire après l'ajout de la promotion
        this.closeAddPromotionModal(); // Fermer la fenêtre modale après l'ajout de la promotion
      });
    }
  }

}


