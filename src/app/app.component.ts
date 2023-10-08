import { Component } from '@angular/core';

@Component({
  selector: 'app-root',// selector
  templateUrl: './app.component.html', //plantilla
  styleUrls: ['./app.component.css'] // archivo estilos
})
export class AppComponent {
  title = 'miPrimerApp';

  saludo = "Hola alumnos de Angular";
}
