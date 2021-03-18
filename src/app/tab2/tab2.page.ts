import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PedidosComponent } from '../pages/pedidos/pedidos.component';
import { ComidasComponent } from '../pages/comidas/comidas.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public sesion:boolean=true;
  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  constructor(
    private modalCtrl:ModalController
  ) {}

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  async pedidos(){
    const modal = await this.modalCtrl.create({
      component:PedidosComponent,
      componentProps:{
        id:1
      }
    })

    modal.present();
    
  }

  async nueva_comida(){
    const modal = await this.modalCtrl.create({
      component:ComidasComponent,
      componentProps:{
        id:1
      }
    });

    modal.present();
  }

}
