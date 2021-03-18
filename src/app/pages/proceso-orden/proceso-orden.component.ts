import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-proceso-orden',
  templateUrl: './proceso-orden.component.html',
  styleUrls: ['./proceso-orden.component.scss'],
})
export class ProcesoOrdenComponent implements OnInit {
  public ordeno:boolean = true;

  constructor(
    private modalCtrl:ModalController
  ) { }

  ngOnInit() {}

  back(){
    this.modalCtrl.dismiss();
  }

}
