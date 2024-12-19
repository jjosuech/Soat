import { Injectable } from '@angular/core';
import { Soat } from '../interfaces/soat';

@Injectable({
  providedIn: 'root'
})
export class SoatService {
  soat: Soat[] = [];

  constructor() {
    const localSoat=localStorage.getItem('soat');

    if (localSoat){
      this.soat=JSON.parse(localSoat);
    }  
  }


  insert(placa:string){
    console.log('soat')
    
    this.soat.push({
      placa: placa
    });
    this.save();
  }

  save(){
    localStorage.setItem('soat', JSON.stringify(this.soat));
  }
}
