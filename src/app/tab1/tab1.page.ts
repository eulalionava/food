import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrdenComponent } from '../pages/orden/orden.component';
import { ProcesoOrdenComponent } from '../pages/proceso-orden/proceso-orden.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public sesion:number = 1;

  constructor(
    private modalCtrl:ModalController
  ) {}

  async ordernar(){
    const modal = await this.modalCtrl.create({
      component:OrdenComponent,
      componentProps:{
        id:1
      }
    });

    modal.present();
    
  }

  async procesoOrden(){
    
    const modal = await this.modalCtrl.create({
      component:ProcesoOrdenComponent,
      componentProps:{
        id:1
      }
    });

    modal.present();
  }


}
