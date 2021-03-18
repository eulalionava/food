import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-nueva-comida',
  templateUrl: './nueva-comida.component.html',
  styleUrls: ['./nueva-comida.component.scss'],
})
export class NuevaComidaComponent implements OnInit {

  constructor(
    private modalCtrl:ModalController
  ) { }

  ngOnInit() {}

  back(){
    this.modalCtrl.dismiss();
  }

}
