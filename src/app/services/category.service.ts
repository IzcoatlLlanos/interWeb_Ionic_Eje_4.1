import { Injectable } from '@angular/core';
import { Category } from '../models/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private cat: Category[] = [];

  constructor() {
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
  }

  public getCatego(): Category[] {
    return this.cat;
  }
}
