import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NuevaComidaComponent } from '../nueva-comida/nueva-comida.component';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.scss'],
})
export class ComidasComponent implements OnInit {
  public seleccionados = [];

  constructor(
    private modalCtrl:ModalController
  ) { }

  public comidas = [
    {id:1,comida:'Bistec en salsa verde',check:false},
    {id:2,comida:'Bistec en salsa verde',check:false},
    {id:3,comida:'Bistec en salsa verde',check:false},
    {id:4,comida:'Bistec en salsa verde',check:false},
    {id:5,comida:'Bistec en salsa verde',check:false},
    {id:6,comida:'Bistec en salsa verde',check:false}
  ];
  

  ngOnInit() {}

  async nueva_comida(){
    const modal = await this.modalCtrl.create({
      component:NuevaComidaComponent,
      componentProps:{
        id:1
      }
    });
    modal.present();
  }

  async verifyEvent(id){
    let dato = await this.comidas.filter(item=> item.id == id);
    this.seleccionados.push(dato);
  }

  agregar_menu(){
    console.log(this.seleccionados);
  }

  back(){
    this.modalCtrl.dismiss();
  }

}
