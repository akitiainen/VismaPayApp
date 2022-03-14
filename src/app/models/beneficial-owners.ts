export class BeneficialOwners {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  shareAmount: number;
  country: string;
  pic: string;

  constructor(firstName: string, lastName: string, dateOfBirth: string, shareAmount: number, country: string, pic: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.shareAmount = shareAmount;
    this.country = country;
    this.pic = pic;
  }
}
