import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';


import { SerieFibonacciComponent } from './components/serie-fibonacci/serie-fibonacci.component';


const routes: Routes=[
{path:'', component:SerieFibonacciComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
