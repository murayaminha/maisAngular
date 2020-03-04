import { Component, OnInit } from '@angular/core';
import {Grupo} from 'src/app/models/Grupo';
import { ListaDeProdutosComponent } from '../lista-de-produtos/lista-de-produtos.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // listaDeProdutos:ListaDeProdutosComponent=@
  constructor() { }
  listarGrupo =(grupo:Grupo)=>{
    console.log(grupo)
   
  }

  ngOnInit(): void {
  }

}
