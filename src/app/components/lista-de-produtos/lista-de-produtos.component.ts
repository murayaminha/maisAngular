import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Produto } from 'src/app/models/Produto';
@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.css']
  
})
export class ListaDeProdutosComponent implements OnInit {
public prod: Produto [] = []
  constructor(private http:HttpService) { 
  this.http.getProdutos().subscribe(
    (data)=>{
      this.prod = data
      // data.map(
      //   (el) => { return this.prod.push(new Produto(el.cod, el.desc, el.reg_anvisa,el.controlado,el.cod_grupo)) }
      // )
    })}
    ngOnInit(): void {
  }

}
