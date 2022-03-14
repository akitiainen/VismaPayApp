import {Component, OnInit, ViewChild} from '@angular/core';
import {FormData} from "../models/form-data";
import {UpdateBoardingModel} from "../models/update-boarding-model";
import {BoardingService} from "../boarding.service";
import {ResponseModel} from "../models/response-model";
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {
  private boardingId: string;
  registerForm: FormGroup;
  updateBoardingModel = new UpdateBoardingModel();


  constructor(private boardingService: BoardingService, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      companyName: ['', [Validators.pattern('^[\\-\'\\w@&\\/()?!+£$#€.,:*% \u00C0-\u0292\u0400-\u04FF]{1,100}$')]],
      companyPhone: ['', [Validators.pattern('^([+]{0,1}[\\d\\(\\) -]){1,25}$')]],
      companyAddressStreet: ['', [Validators.pattern('^[\\w\u00C0-\u0292\u0400-\u04FF \\/,.\'-]{1,100}$')]],
      companyPostal: ['', [Validators.pattern('^[\\w\u00C0-\u0292\u0400-\u04FF ,.\'-]{1,50}$')]],
      companyCity: ['', [Validators.pattern('^[\\w\u00C0-\u0292\u0400-\u04FF ,.\'-]{1,50}$')]],
    });
    this.boardingId = '136af85054842f54811dc5e3d6b7c8b7af59e00413e98a99f35a5f64bc02f92c';
  }

  ngOnInit(): void {
    this.boardingService.get(this.boardingId).subscribe(response => {
      console.log(response);
    })
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  updateValues() {
    console.log(this.registerForm.value)
    this.updateBoardingModel.formData = this.registerForm.value;
    this.boardingService.patch(this.updateBoardingModel, this.boardingId).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error.error.validationErrorMessages[0].error)
      alert(error.error.validationErrorMessages[0].error + ' in field ' + error.error.validationErrorMessages[0].field)
    })
  }

}
