
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class ComplexityService {
    fileName: string;
    inheritanceUrl = environment.apiUri + '/size/' + this.fileName;
    controlStructureUrl = 'http://localhost:3002/transactions';
    sizeUrl = '';
    recurtion = '';
    nestingLevel = '';
    user: any[];

    constructor(private _http: HttpClient) { }

    // checkCard(cardNumber: number, cvc: number) {
    //     console.log(cardNumber);
    //   return this._http.get( this.cardUrl + '/' + cvc  + '/' + cardNumber );
    // }

    // addTransaction( trans ) {
    //     return this._http.post(this.transectionsUrl, trans );
    // }

    getCiValue(fileName) {
      this.fileName = fileName;
      return this._http.get(' http://localhost:8080/api/measure/inheritance/' + fileName);
    }

    getcomplexityValue(fileName) {
      this.fileName = fileName;
      return this._http.get(' http://localhost:8080/api/measure/' + fileName);
    }

  }