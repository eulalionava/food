import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetallePedidoComponent } from '../detalle-pedido/detalle-pedido.component';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss'],
})
export class PedidosComponent implements OnInit {

  constructor(
    private modalCtrl:ModalController
  ) { }

  ngOnInit() {}

  back(){
    this.modalCtrl.dismiss();
  }
  segmentChanged(event:any){
    console.log(event);
  }

  async detalle_pedido(){
    const modal = await this.modalCtrl.create({
      component:DetallePedidoComponent,
      componentProps:{
        id:1
      }
    });

    modal.present();

    
  }

}
