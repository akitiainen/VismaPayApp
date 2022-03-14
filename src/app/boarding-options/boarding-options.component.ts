import {Component, OnInit} from '@angular/core';
import {BoardingService} from "../boarding.service";
import {UpdateBoardingModel} from "../models/update-boarding-model";
import {FormData} from "../models/form-data";
import {Signatories} from "../models/signatories";
import {BeneficialOwners} from "../models/beneficial-owners";

@Component({
  selector: 'app-boarding-options',
  templateUrl: './boarding-options.component.html',
  styleUrls: ['./boarding-options.component.css']
})
export class BoardingOptionsComponent implements OnInit {
  boardingId: string;
  updateModel: UpdateBoardingModel;
  formData = {
    businessType: 5999,
    estimatedTotalRevenue: 5000,
    estimatedServiceRevenue: 2000,
    averageServicePurchase: 100,
    mostExpensiveServicePurchase: 10000,
    realBeneficialOwners: false,
    isPep: true,
    isRca: true,
    signatories: [{firstname: 'Tää', phone: '1500', email: 'test@paybyway.com', lastname: 'Jäbä'}],
    beneficialOwners: [{firstname: 'Se', dateOfBirth: '1989-02-01', shareAmount: 5, lastname: 'Jäbä', country: 'AF', pic: ''}],
    marketingName: 'es',
    websiteUrl: 'https://www.testsite.com',
    supportEmail: 'test@paybyway.com',
    supportPhone: '555',
    customerRepresenterFirstname: 'xev',
    customerRepresenterLastname: 'gsdg',
    customerRepresenterPhone: '666',
    customerRepresenterEmail: 'test@paybyway.com',
    bankIban: 'FI2356200920375952',
    bankOwner: 'ggwW',
    bankName: 'hfdzj',
    companyBillingPostal: '688',
    companyBillingCity: 'faj',
    companyBillingAddressStreet: 'jsjs',
    companyBillingEmail: 'test@paybyway.com',
    eInvoiceAddress: 'sjsmk',
    eInvoiceProcessor: 'pfoiu'
  }

  constructor(private boardingService: BoardingService) {
    this.boardingId = '136af85054842f54811dc5e3d6b7c8b7af59e00413e98a99f35a5f64bc02f92c';
    this.updateModel = new UpdateBoardingModel();
  }

  ngOnInit(): void {
    console.log(this.updateModel);
    this.boardingService.get(this.boardingId).subscribe(response => {
      this.updateModel.formData = {...this.formData, ...response.formData}
      this.updateModel.lang = response.lang
      console.log(response)
      console.log(this.formData)
      console.log(this.updateModel)
    })
  }

  updateBoardingOptions() {
    this.boardingService.put(this.updateModel, this.boardingId).subscribe(response => {
      console.log(response)
    }, error => {
      console.log(error)
    })
  }

}
