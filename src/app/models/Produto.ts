import { Grupo } from './Grupo';

export class Produto{
    constructor (
        public cod:number, 
        public desc:string, 
        public reg_anvisa:string, 
        public controlado:boolean,
        public cod_grupo:number
        ){}
}