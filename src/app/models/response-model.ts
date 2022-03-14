import {FormData} from "./form-data";

export class ResponseModel {
  lang?: ResponseModel.LangEnum;
  id?: string;
  boardingStatus?: ResponseModel.BoardingStatusEnum;
  pricePackage?: string;
  vatNumber?: string;
  priceData?: any;
  createdAt?: string;
  formData?: FormData;

  constructor(lang?: ResponseModel.LangEnum, id?: string, boardingStatus?: ResponseModel.BoardingStatusEnum, pricePackage?: string, vatNumber?: string, priceData?: any, createdAt?: string, formData?: FormData) {
    this.lang = lang;
    this.id = id;
    this.boardingStatus = boardingStatus;
    this.pricePackage = pricePackage;
    this.vatNumber = vatNumber;
    this.priceData = priceData;
    this.createdAt = createdAt;
    this.formData = formData;
  }
}

export namespace ResponseModel {
  export type LangEnum = 'fi' | 'en';
  export const LangEnum = {
    Fi: 'fi' as LangEnum,
    En: 'en' as LangEnum
  };
  export type BoardingStatusEnum = 'pending' | 'waitingForSignatures' | 'signingError' | 'signingCancelled' | 'signed' | 'completed' | 'rejected';
  export const BoardingStatusEnum = {
    Pending: 'pending' as BoardingStatusEnum,
    WaitingForSignatures: 'waitingForSignatures' as BoardingStatusEnum,
    SigningError: 'signingError' as BoardingStatusEnum,
    SigningCancelled: 'signingCancelled' as BoardingStatusEnum,
    Signed: 'signed' as BoardingStatusEnum,
    Completed: 'completed' as BoardingStatusEnum,
    Rejected: 'rejected' as BoardingStatusEnum
  };
}
