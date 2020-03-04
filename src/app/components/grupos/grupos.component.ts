import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import {Grupo} from 'src/app/models/Grupo'
import { HttpService } from 'src/app/services/http.service';



@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {
 
  public grupos:Grupo[] = []

  @Output () grupoClicado = new EventEmitter;

  constructor(private http:HttpService) {
  this.http.getGrupos().subscribe(
    (data)=>{
      // console.log(data)
      // data.map(
      //   (el) => { return this.grupos.push(new Grupo(el.cod, el.desc)) }
      // )

      this.grupos=data
    }
    )
  //  this.grupos.push(new Grupo(1,"Bolas Universo"))
  //  this.grupos.push(new Grupo(2,"Bolas Metalicas"))
  //  this.grupos.push(new Grupo(3,"Bolas sei lá"))
   }
  ngOnInit(): void {
  }

}
