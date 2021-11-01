import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';//Se importa el formgroup
import Swal from 'sweetalert2';



@Component({
  selector: 'app-serie-fibonacci',
  templateUrl: './serie-fibonacci.component.html',
  styleUrls: ['./serie-fibonacci.component.css']
})
export class SerieFibonacciComponent implements OnInit {
  numeroFibo:FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.numeroFibo = this.fb.group({
      numero: ['', Validators.compose([Validators.required, Validators.min(-1) ,Validators.pattern('^(0|[1-9][0-9]*)$')]) ]
    })
   }

  ngOnInit(): void {
  }

  ComprobarNumero(){
    const NUMERO:any={
      numero: this.numeroFibo.get('numero')?.value,
    }
    console.log(NUMERO.numero);

    let x1,x2;

    x1 = 5*Math.pow(NUMERO.numero,2)+4;
    x2 = 5*Math.pow(NUMERO.numero,2)-4;

    if((Math.sqrt(x2)%1 ===0) || (Math.sqrt(x1)%1 === 0)){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Genial! Es un numero de Fibonacci!',
        showConfirmButton: false,
        timer: 1500
      })
    }
    else{
      console.log(`${NUMERO.numero} no es fibonacci`);
      Swal.fire({
        position: 'top-end',
        title: 'No pertenece al la serie de Fibonacci',
        text: 'Intenta con otro numero :(',
        icon: 'error',
        showConfirmButton: false,
        timer: 2000
      })
    }
    
  }

  poner(boton:any){
    console.log(boton)
    this.numeroFibo.setValue({
      numero: boton
    })
  }



}
