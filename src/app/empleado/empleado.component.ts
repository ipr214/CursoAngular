import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template: "<p>Aquí iría un empleado</p>", // html en línea
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color:red;}"] //estilos en línea
})
export class EmpleadoComponent {
  nombre = "Jorge";
  apellido = "Canedo";
  edad = 54;
  //empresa = "Unitronics";

  /*llamaEmpresa(value:String){


  }*/

  habilitacionCuadro = false;
  usuarioRegistrado = true;

  getRegistroUsuario(){
    this.usuarioRegistrado= false;
  }

}
