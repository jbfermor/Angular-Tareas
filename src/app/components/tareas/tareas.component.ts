import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  listTareas: Tarea[] = [];
  nombreTarea = '';

  constructor() { }

  ngOnInit() {
  }

  agregarTarea(){
    //crear un objeto tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    };
    //agregar el objeto al array
    this.listTareas.push(tarea);
    //resetear input
    this.nombreTarea = ''
  }

  eliminarTarea(index: number): void {
    this.listTareas.splice(index, 1);
  }

  actualizarTarea(tarea: Tarea, index: number): void {
    this.listTareas[index].estado = !tarea.estado
  }
}
