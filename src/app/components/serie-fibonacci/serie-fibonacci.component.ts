/*
Juan Damian Osornio Gutierrez
ojuandamian@gmail.com
url:  https://dam2398.github.io/fibonacci2/
*/

/*
Programa que saber si un numero entero positivo 'x' es un numero de
Fibonacci. Esto es cierto si y solo si al menos uno de los resultados de:
  (5*x^2 + 4) o (5*x^2 - 4)
es un cuadrado perfecto.

Esto se debe a un despeje de la formular de Binet.

Un cuadrado perfecto es un numero entero que es resultado del cuadrado de un numero entero
Por ejemplo, 9 es un numero cuadrado ya que 3x3 = 9
*/

//Importamos los modulos necesarios
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';//Se importa el formgroup
import Swal from 'sweetalert2';



@Component({
  selector: 'app-serie-fibonacci',
  templateUrl: './serie-fibonacci.component.html',
  styleUrls: ['./serie-fibonacci.component.css']
})
export class SerieFibonacciComponent implements OnInit {
  numeroFibo:FormGroup;//numeroFibo es el nombre del formulario que va en el html

  constructor(
    //Inyectamos el servicio FormBuilder
    private fb: FormBuilder//FormBuilder es un servicio que porporciona metodos para generar controles sobre el formulario 'numeroFibo'
  ) {
    //Generamos los controles del formulario
    this.numeroFibo = this.fb.group({//El metodo group() define las porpiedades, asignamos el valor inicial que es vacio -> ''
      //Usamos Validator para garantizar que la entrada del usuario sea completa y correcta
      //En este caso usamos tres metodos de validaciones
      //  'numero' tiene que ser un valor no vacio, como minimo -1 y debe ser cualquier patron de numeros posotivos
      numero: ['', Validators.compose([Validators.required, Validators.min(-1) ,Validators.pattern('^(0|[1-9][0-9]*)$')]) ]
    })
   }

   //Feuncion que se ejecuta cada que se accede a este componente
  ngOnInit(): void {//En este caso no es necesario
  }

  //Funcion que identifica si un numero entero positivo pertecene a la serie de Fibonacci  
  ComprobarNumero(){
    //Se declara un objeto por si el formulario llega a necesitar mas valores
    const NUMERO:any={//El objeto tendra un unico valor 'numero'
      numero: this.numeroFibo.get('numero')?.value,
      //se le asigna a 'numero' el valor que usuario ingrese al formulario con el metodo get(formControlName declarado en el html)
    }

    let x1,x2;//Declaramos las variables x1,x2

    //Obtenemos los valores de (5*x^2 + 4) o (5*x^2 - 4)
    x1 = 5*Math.pow(NUMERO.numero,2)+4;
    x2 = 5*Math.pow(NUMERO.numero,2)-4;

    //Sacamos las raices de los resultados anteriores, para saber si alguno es un cuadrado perfecto 
    if((Math.sqrt(x2)%1 ===0) || (Math.sqrt(x1)%1 === 0)){
      //Si se cumple la condicion es porque es un numero de Fibonacci
      Swal.fire({//Declaramos un objeto con las opciones para desplear un modal
        position: 'top-end',
        icon: 'success',
        title: 'Genial! Es un numero de Fibonacci!',
        showConfirmButton: false,
        timer: 1500
      })
    }
    else{//Sino se cumple, no pertenece a la sucesion de Fibonacci
      Swal.fire({//Declaramos un objeto con las opciones para desplear un modal
        position: 'top-end',
        title: 'No pertenece al la serie de Fibonacci',
        text: 'Intenta con otro numero :(',
        icon: 'error',
        showConfirmButton: false,
        timer: 2000
      })
    }
    
  }

  //Funcion para cambiar(actualizar) el valor en la etiqueta <input> del formulario
  //Recibe como atributo un numero
  poner(boton:any){//'boton' en el valor recibe del html cuando el usuario presiona algun boton de los ejemplos de Fibonacci
    this.numeroFibo.setValue({//  setValue, metodo para actualizar el valor 'numero' del formulario numeroFibo 
      numero: boton
    })
  }



}
