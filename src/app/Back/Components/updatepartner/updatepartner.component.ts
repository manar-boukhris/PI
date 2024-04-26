import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Partner } from 'src/app/Models/Partner';
import { PartnerService } from 'src/app/Services/partner.service';

@Component({
  selector: 'app-updatepartner',
  templateUrl: './updatepartner.component.html',
  styleUrls: ['./updatepartner.component.css']
})
export class UpdatepartnerComponent implements OnInit {

  partner?: Partner;
  form: FormGroup;

  constructor(
    private service: PartnerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = new FormGroup({
      partnerid: new FormControl(''),
      name: new FormControl('', [Validators.required])
    });
    
  }

  ngOnInit(): void {
    let partnerid = this.route.snapshot.params['partnerid'];
    this.service.getPartnerById(partnerid).subscribe(data => {     
      this.partner = data;
      this.form.patchValue({
        partnerid: this.partner?.partnerid,
        name: this.partner?.name
      
      });
    });
  }

  submit() {
    if (this.form.valid) {
      const formData = this.form.value;
      this.service.updatePartner(formData.partnerid, formData).subscribe(data => {
        console.log(data);
        this.router.navigate(['/']);
      });
    }
  }

}
