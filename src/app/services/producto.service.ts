import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { Calification } from '../models/calification';
import { Category } from '../models/category';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public delOrUpd = 1;
  private productos: Producto[] = [];

  private cat: Category[] = [];

  constructor(private cate: CategoryService) { 
    
    this.cat = cate.getCatego();
    this.productos.push({
      sku: '1',
      name: 'Ojo de Dios Shaquira CH',
      description: 'Ojo de Dios hecho con shaquiras de colores de tamaño chico',
      price: 1200,
      category: this.cat[2],
      calification: [{   
        name: 'Pedro Rivera',
        coment: 'Pesimo producto',
        calification: 2,
        fecha: new Date()
      }],
      //discant:
      stock: 10,
      photo: 'https://picsum.photos/id/2/200/300',
      promCal: 2
    },{
      sku: '2',
      name: 'Mandala Spiderman XL',
      description: 'Mandala con diseño del fantastico hombre araña, hecho con siete hilos de la mejor calidad, tamaño extra grande',
      price: 2500,
      category: this.cat[1],
      calification: [{  
        name: 'Carmen Valencia',
        coment: 'Mediana calidad de producto',
        calification: 3,
        fecha: new Date()
      }],
      stock: 3,
      photo: 'https://picsum.photos/id/3/200/300',
      promCal: 3
    },{
      sku: '3',
      name: 'Atrapa sueños Trailero',
      description: 'Atrapa sueños con diseño colorido, resalta sus hermosos colores bajo los influjos de sustancias psicoactivas.',
      price: 999,
      category: this.cat[0],
      calification: [],
      stock: 18,
      photo: 'https://picsum.photos/id/4/200/300',
      promCal: 0
    },{
      sku: '4',
      name: 'Atrapa sueños Trailero',
      description: 'Atrapa sueños con diseño colorido, resalta sus hermosos colores bajo los influjos de sustancias psicoactivas.',
      price: 999,
      category: this.cat[0],
      calification: [{     
        name: 'Raul Perez',
        coment: 'Excelente producto',
        calification: 5,
        fecha: new Date()
      },{     
        name: 'Raul Perez',
        coment: 'Excelente producto',
        calification: 5,
        fecha: new Date()
      },{     
        name: 'Raul Perez',
        coment: 'Excelente producto',
        calification: 5,
        fecha: new Date()
      },{     
        name: 'Raul Perez',
        coment: 'Excelente producto',
        calification: 5,
        fecha: new Date()
      }],
      stock: 18,
      photo: 'https://picsum.photos/id/12/200/300',
      promCal: 5
    });
  }

  public getProductos(): Producto[] {
    return this.productos;    
  }

  public getProductoFiltradoPorCategoria(idCategoriaOk: string): Producto[] {
    return this.productos.filter( prod => {prod.category?.idCategoryOK == idCategoriaOk});
  }

  public deleteProducto(prod: Producto): Producto[] {
    const pos = this.productos.findIndex( 
      (p) =>  p.sku == prod.sku
    );
    this.productos.splice(pos,1);
    return this.productos;
  }

  public uploadProduct(prod: Producto) {
    const pos = this.productos.findIndex( (_prod) => _prod.sku == prod.sku);
    this.productos[pos] = prod;
    this.productos[pos].promCal = this.getPromCal(prod);
  }

  public addProduct(prod:Producto) {
    prod.calification = [];
    this.productos.push(prod);
  }

  public getPromCal( prod: Producto ): number {
    const calif = prod.calification.map(c => c.calification);
    return Math.round(calif.reduce((a,b) => a+b,0)/calif.length);
  }

}
