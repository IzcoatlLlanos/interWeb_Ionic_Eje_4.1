import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { Carrito } from '../models/carrito';
import { ProductoService } from './producto.service';
import { CategoryService } from './category.service';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private cat: Category[] = [];
    carritoMamalon: Carrito[] = [];
  constructor(private prod: ProductoService, private cate: CategoryService) {
    this.cat = cate.getCatego();
    this.carritoMamalon.push({
      idCarritoOK: "1",
      productos: [
        {
          sku: '1',
          name: 'Galletas de cajeta',
          description: 'Paquete ded deliciosas galletas rellenas de cajeta organica traida de Talpa de Allende.',
          price: 40,
          category: this.cat[0],
          calification: [],
          stock: 10,
          photo: 'https://i.pinimg.com/originals/cd/69/d5/cd69d59f6475fe623ecbb89d662c06ee.png',
          promCal: 2
        }
      ]
    });
  }
  public getCarrito() {
    return this.carritoMamalon;
 }
}

/*
this.cat.push({
      idCategoryOK: '1',
      idCategoryBK: 'Rellenas'
    },{
      idCategoryOK: '2',
      idCategoryBK: 'Frutos Secos'
    },{
      idCategoryOK: '3',
      idCategoryBK: 'Semillas'
    },{
      idCategoryOK: '4',
      idCategoryBK: 'Mixtas'
    });
*/ 