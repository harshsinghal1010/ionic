import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-testbarcode',
  templateUrl: './testbarcode.page.html',
  styleUrls: ['./testbarcode.page.scss'],
})
export class TestbarcodePage implements OnInit {

  data:string;

  ngOnInit() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.data=barcodeData.text;
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }

  constructor(private barcodeScanner: BarcodeScanner) { }
  
  
  
  
 
}
