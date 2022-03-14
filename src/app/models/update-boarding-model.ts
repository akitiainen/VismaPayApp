import {FormData} from "./form-data";

export class UpdateBoardingModel {
  formData?: FormData;
  lang?: UpdateBoardingModel.LangEnum;

  constructor(formData?: FormData, lang?: UpdateBoardingModel.LangEnum) {
    this.formData = formData;
    this.lang = lang;
  }
}

export namespace UpdateBoardingModel {
  export type LangEnum = 'fi' | 'en';
  export const LangEnum = {
    Fi: 'fi' as LangEnum,
    En: 'en' as LangEnum
  }
}
