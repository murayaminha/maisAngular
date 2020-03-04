import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Grupo } from '../models/Grupo';
import { map } from "rxjs/operators"
import { Produto } from '../models/Produto';
const URL: string = "https://rdcrud.herokuapp.com"


function adaptadorDeGrupo(data: any[]) {
  return data.map(
    (el) => { return new Grupo(el.COD_GRUPO, el.DESC) }
  )
}
function adaptadorDeProduto(data: any[]) {
  return data.map(
    (ele) => { return new Produto(ele.COD_PRODUTO, 
      ele.DESC,
       ele.REG_ANVISA,
       ele.FL_CONTROLADO,
       ele.COD_PRODUTO) 
    }
    
    )
}


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getGrupos() {
    let obs = this.http.get(URL + "/grupos");
    return obs.pipe(
      map(adaptadorDeGrupo)
      )
  }
  getProdutos() {
    let obs = this.http.get(URL + "/produtos");
    return obs.pipe(
      map(adaptadorDeProduto)
      )
  }
}
