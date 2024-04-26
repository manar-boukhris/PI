//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankAccount } from 'src/app/Models/BankAccount';
//import { AppService } from 'src/app/app.service';
import { PartnerService } from 'src/app/Services/partner.service';
@Component({
  selector: 'app-addpartner',
  templateUrl: './addpartner.component.html',
  styleUrls: ['./addpartner.component.css']
})
export class AddpartnerComponent implements OnInit {

  constructor(private service: PartnerService, private router: Router) { }
  data: any
  //partner : any 
  bankAccounts: BankAccount[] = []; // Liste des comptes bancaires disponibles
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    domain: new FormControl('', [Validators.required]),
   
    beneficenet: new FormControl('', [Validators.required]),
    chiffredaffaires: new FormControl('', [Validators.required]),
    chargesfixes: new FormControl('', [Validators.required]),
    bankAccount: new FormControl('', [Validators.required]) // Contrôle pour sélectionner le compte bancaire
  })
  

  ngOnInit(): void {
    this.service.getAvailableBankAccounts().subscribe(data => {
      this.bankAccounts = data;
    });
  }

  /*submit(){
 




    this.data = this.form.value
    console.log(this.data)

    this.service.Addpartner(this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/']);
  }*/
  submit(){
    this.data = this.form.value;
    const selectedBankAccount = this.bankAccounts.find(account => account.rib === Number(this.form.value.bankAccount));

    // Assurez-vous que selectedBankAccount est défini avant de l'ajouter aux données à envoyer
    if (selectedBankAccount) {
      this.data.bankAccount = selectedBankAccount;
    }

    console.log(this.data);

    this.service.Addpartner(this.data).subscribe((partner: any) => {
      
      this.router.navigate(['/partner', partner.partnerid]);
    });
  }
}




