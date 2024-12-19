import { Component } from '@angular/core';
import { SoatService } from '../../../../core/service/soat.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-home',
  imports: [
    FormsModule,
  ],
  templateUrl: './register-home.component.html',
  styleUrls: ['./register-home.component.css']
})
export class RegisterHomeComponent {
  placa='';
  
  constructor(
    private soatService: SoatService
  ){

  }
  register(){
    this.soatService.insert(this.placa);
    this.placa='';
  }
}
