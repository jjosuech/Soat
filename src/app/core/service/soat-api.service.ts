import { Injectable } from '@angular/core';
import { Soat } from '../interfaces/soat';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SoatApiService {
  soat:Soat[]=[];

  constructor(
    private http:HttpClient
  ) { }

  getAll(){
    return this.http.get('http://localhost:8080/auto');

  }
  insert(placa: string){}
}
