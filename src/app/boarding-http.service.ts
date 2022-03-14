import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";
import {map, Observable} from "rxjs";
import {ResponseModel} from "./models/response-model";
import {CreateBoardingComponent} from "./create-boarding/create-boarding.component";
import {CreateBoardingModel} from "./models/create-boarding-model";
import {UpdateBoardingModel} from "./models/update-boarding-model";

@Injectable({
  providedIn: 'root'
})
export class BoardingHttpService {
  url: string;
  headers = new HttpHeaders();

  constructor(private httpClient: HttpClient) {
    this.url = environment.apiEndPointUrl;
  }

  get(id: string): Observable<ResponseModel> {
    return this.httpClient.get(this.url + id).pipe(map(response => {
      return response as ResponseModel;
    }))
  }

  post(boardingModel: CreateBoardingModel): Observable<any> {
    console.log(this.url);
    return this.httpClient.post(this.url, boardingModel).pipe(map(response => {
      return response;
    }))
  }

  put(boardingModel: UpdateBoardingModel, id: string): Observable<any> {
    return this.httpClient.put(this.url + id, boardingModel).pipe(map(response => {
      return response;
    }));
  }

  patch(boardingModel: UpdateBoardingModel, id: string): Observable<any> {
    return this.httpClient.patch(this.url + id, boardingModel).pipe(map(response => {
      return response;
    }))
  }

  sign(id: string): Observable<any> {
    return this.httpClient.post(this.url + id + '/sign', {}).pipe(response => {
      return response;
    })
  }
}
