import { Injectable } from '@angular/core';
import {BoardingHttpService} from "./boarding-http.service";
import {Observable} from "rxjs";
import {ResponseModel} from "./models/response-model";
import {CreateBoardingModel} from "./models/create-boarding-model";
import {UpdateBoardingModel} from "./models/update-boarding-model";

@Injectable({
  providedIn: 'root'
})
export class BoardingService {

  constructor(private httpService: BoardingHttpService) { }

  get(id: string): Observable<ResponseModel> {
    return this.httpService.get(id);
  }

  createBoarding(values: CreateBoardingModel) {
    return this.httpService.post(values);
  }

  put(updateModel: UpdateBoardingModel, id: string): Observable<any> {
    return this.httpService.put(updateModel, id);
  }

  patch(updateModel: UpdateBoardingModel, id: string): Observable<any> {
    return this.httpService.patch(updateModel, id);
  }

  sign(id: string): Observable<any> {
    return this.httpService.sign(id);
  }
}
