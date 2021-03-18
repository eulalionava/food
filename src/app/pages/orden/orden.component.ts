import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.scss'],
})
export class OrdenComponent implements OnInit {

  
  constructor(
    private modalCtrl:ModalController
  ) { }
  
  slideOpts = {
    slidesPerView:2.8,
    freeMode:true
  }

  public horarios:any[] = ['10:00','11:00','12:00','1:00','2:00','3:00','4:00','5:00'];
  public refrescos = ['pepsi','coca cola','mirinda','fanta','sindral munded','square'];
  numero_orden = 0;

  ngOnInit() {}

  finalizar(){
    this.modalCtrl.dismiss();
  }

}
