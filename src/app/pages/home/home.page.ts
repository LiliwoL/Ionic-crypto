import { Component, OnInit } from '@angular/core';
import { CoinlayerService } from 'src/app/services/coinlayer.service';

export class CryptoRate {
  constructor( public symbol: string, public rate: number){}
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  cryptoRates: CryptoRate[] = [];

  constructor(
    private coinLayerService: CoinlayerService,
  ) {

  }

  ngOnInit() {
    this.coinLayerService.getCryptoRates().subscribe(
      (response) => {
        console.log( response.rates );

        // Traduction d el'objet en tableau
        this.cryptoRates = Object.keys( response.rates ).map(function (key): CryptoRate {

          // Using Number() to convert key to number type
          // Using obj[key] to retrieve key value
          return new CryptoRate( key, response.rates[key] );
        });

        console.log (this.cryptoRates);
      }
    )
  }
}