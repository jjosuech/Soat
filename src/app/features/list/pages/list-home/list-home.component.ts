import { Component } from '@angular/core';
import { SoatService } from '../../../../core/service/soat.service';
import { Soat } from '../../../../core/interfaces/soat';
import { SoatApiService } from '../../../../core/service/soat-api.service';

@Component({
  selector: 'app-list-home',
  imports: [],
  templateUrl: './list-home.component.html',
  styleUrl: './list-home.component.css'
})
export class ListHomeComponent {

  soat: Soat[] =[];

  constructor(
    private soatService: SoatService,
    private soatApiService: SoatApiService,
  ){
    //this.soat=soatService.soat;
    this.getSoat();
  }

  getSoat(){
    this.soatApiService.getAll()
    .subscribe({
      next: (response)=>{
        console.log(response);
        this.soat=response as Soat[];
      },
      error:(err) =>{
        console.error(err);
      }
    });
  }

}
