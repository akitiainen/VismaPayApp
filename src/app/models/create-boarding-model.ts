import {FormData} from "./form-data";

export class CreateBoardingModel {
  pricePackage: string;
  formData?: FormData;
  lang?: CreateBoardingModel.LangEnum;
  vatNumber: string;
  partnerCode?: string;
  partnerCallback?: {
    callbackSecret: string,
    statusUpdate: {
      url: string
    }
  };
  options?: {
    fetchCompanyDetails: boolean
  }


  constructor(pricePackage: string, vatNumber: string, formData?: FormData, lang?: CreateBoardingModel.LangEnum, partnerCode?: string, partnerCallback?: { callbackSecret: string; statusUpdate: { url: string } }, options?: { fetchCompanyDetails: boolean }) {
    this.pricePackage = pricePackage;
    this.formData = formData;
    this.lang = lang;
    this.vatNumber = vatNumber;
    this.partnerCode = partnerCode;
    this.partnerCallback = partnerCallback;
    this.options = options;
  }
}

export namespace CreateBoardingModel {
  export type LangEnum = 'fi' | 'en';
  export const LangEnum = {
    Fi: 'fi' as LangEnum,
    En: 'en' as LangEnum
  };
}
