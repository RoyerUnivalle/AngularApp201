import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routingApp';
  nombre = 'royer';
  iterador: number;

  estudiantes = ['Alejandro', 'Gian Luca', 'Steven posada', 'Daniel', 'Jorge', 'Fernand', 'Johan', 'Marlon', 'Royer'];

  viewStudent(name, i) {
    this.iterador = i;

  }
}
