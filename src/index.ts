import { preguntar } from './lib/consola.ts';

function repetirLetra(letra: string, cantidad: number): string {
let texto:string = " ";
let contador:number = 0;

while(contador < cantidad){
texto = texto + letra;
contador = contador + 1;
}

return texto;
}


let caracter: string = preguntar('¿Con que caracter vas a dibujar el cuadrado? ');
let tamaño: number = Number(preguntar('¿De qué tamaño? '));

let contador:number=0;

while(contador < tamaño){
  console.log (repetirLetra(caracter,tamaño));
  contador = contador + 1
}