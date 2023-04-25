import { Injectable } from '@angular/core';
import { Calification } from '../models/calification';

@Injectable({
  providedIn: 'root'
})
export class CalificationService {

  private califications: Calification[] = [];



  constructor() {
    this.califications.push({
      name: 'Josue Rivera',
      coment: 'Excelente producto',
      calification: 5,
      fecha: new Date()
    },{
      name: 'Karin Perez',
      coment: 'No muy fue lo que esperaba',
      calification: 3,
      fecha: new Date()
    })
  }

  public getCalifications() {
    return this.califications;
  }

}
