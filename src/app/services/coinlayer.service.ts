import { Injectable } from '@angular/core';

// Module pour faire des requêtes HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


export class CryptoRate {
  symbol: string;
  rate: number;
}
export class CryptoRates {
  rates: CryptoRate[];
}

@Injectable({
  providedIn: 'root'
})
export class CoinlayerService {

  // endPoint
  endpoint = 'http://api.coinlayer.com/api/live?access_key=799c41d08a8fa1645a56ae2a953df09f&target=EUR';

  httpOptions = {
    headers: new HttpHeaders( { 'Content-Type': 'application/json' })
  };

  // Injection de dép.
  constructor( private httpClient: HttpClient ) {}

  // Methode d'appel
  getCryptoRates(): Observable<CryptoRates>
  {
    return this.httpClient
    .get<CryptoRates>( this.endpoint )
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  processError(err: any)
  {
    let message = '';

    if (err.error instanceof ErrorEvent)
    {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }

    console.log(message);
    return throwError(
      () => {
        message;
      }
    );
  }
}