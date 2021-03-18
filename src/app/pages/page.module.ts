import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrdenComponent } from './orden/orden.component';
import { ProcesoOrdenComponent } from './proceso-orden/proceso-orden.component';
import { ComidasComponent } from './comidas/comidas.component';
import { NuevaComidaComponent } from './nueva-comida/nueva-comida.component';
import { DetallePedidoComponent } from './detalle-pedido/detalle-pedido.component';



@NgModule({
  declarations: [
    OrdenComponent,
    ProcesoOrdenComponent,
    ComidasComponent,
    NuevaComidaComponent,
    DetallePedidoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PageModule { }
