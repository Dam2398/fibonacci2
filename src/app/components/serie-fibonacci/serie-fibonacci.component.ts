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
      numero: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  ComprobarNumero(){
    const NUMERO:any={
      numero: this.numeroFibo.get('numero')?.value,
    }
    console.log(NUMERO.numero);
    let raiz1, raiz2;
    let x1,x2;

    x1 = 5*Math.pow(NUMERO.numero,2)+4;
    x2 = 5*Math.pow(NUMERO.numero,2)-4;

    if (Math.sqrt(x1)%1 === 0) {
      console.log(`${x1} es numero perfecto 1`);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      
    }else if(Math.sqrt(x2)%1 ===0){
      console.log(`${x2} es numero perfecto 2`);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
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
