import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  cryptos: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cryptos = [
      { 'name': 'Bitcoin', 'price': '$8883,45' },
      { 'name': 'Ethereum', 'price': '$$635,25' },
      { 'name': 'Ripple', 'price': '$0,873466' },
      { 'name': 'Bitcoin Cash', 'price': '$1 392,80' },
      { 'name': 'EOS', 'price': '$11,57' },
      { 'name': 'Litecoin', 'price': '$150,95' },
      { 'name': 'Cardano', 'price': '$0,288146' },
      { 'name': 'Stellar', 'price': '$0,373197' },
      { 'name': 'IOTA', 'price': '$2,12' },
      { 'name': 'NEO', 'price': '$76,89' }
    ];
  }
}
