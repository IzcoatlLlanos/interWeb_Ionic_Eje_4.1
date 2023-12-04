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
      name: 'Galletas Rellenas',
      description: 'Paquete ded deliciosas galletas rellenas de mermelada de fresa.',
      price: 40,
      category: this.cat[0],
      calification: [{   
        name: 'Pedro Rivera',
        coment: 'Muy ricas las galletas',
        calification: 4,
        fecha: new Date()
      },{   
        name: 'Jorge Victor Vera Gaytan',
        coment: 'Muy ricas las galletas, sepa quien las hará',
        calification: 5,
        fecha: new Date()
      }],
      //discant:
      stock: 10,
      photo: 'https://i.pinimg.com/originals/cd/69/d5/cd69d59f6475fe623ecbb89d662c06ee.png',
      promCal: 2
    },{
      sku: '2',
      name: 'Galletas de Semillas',
      description: 'Paquete de deliciosas galletas con semillas; almendra, nuez o chía.',
      price: 45,
      category: this.cat[2],
      calification: [{  
        name: 'Carmen Valencia',
        coment: 'Excelente calidad de producto',
        calification: 5,
        fecha: new Date()
      }],
      stock: 3,
      photo: 'https://assets.unileversolutions.com/recipes-v2/38531.jpg',
      promCal: 3
    },{
      sku: '3',
      name: 'Galletas de Frutos Secos',
      description: 'Paquete de deliciosas galletas con la mejor calidad de: arandanos, ciruelas y pasas.',
      price: 45,
      category: this.cat[1],
      calification: [{  
        name: 'Hector Izcoatl Llanos Godoy',
        coment: 'Me agradó bastante el sabor de los arandanos y tambien la rica harina de la galleta',
        calification: 5,
        fecha: new Date()
      }],
      stock: 18,
      photo: 'https://vainillamolina.com/uploads/images/289x263-galletas-arandano.jpg',
      promCal: 0
    },{
      sku: '4',
      name: 'Galletas de zarzamora',
      description: 'Paquete de galletas de zarzamora.',
      price: 45,
      category: this.cat[3],
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
      photo: 'https://i.pinimg.com/originals/cd/69/d5/cd69d59f6475fe623ecbb89d662c06ee.png',
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
