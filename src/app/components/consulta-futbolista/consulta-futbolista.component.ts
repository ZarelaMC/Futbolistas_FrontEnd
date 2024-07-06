import { Component, OnInit, ViewChild } from '@angular/core';
import { AppMaterialModule } from '../../app.material.module';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MenuComponent } from '../../menu/menu.component';
import { CommonModule } from '@angular/common';
import { UtilService } from '../../services/util.service';
import { FutbolistaService } from '../../services/futbolista.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-consulta-futbolista',
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule, MenuComponent, ReactiveFormsModule],
  templateUrl: './consulta-futbolista.component.html',
  styleUrl: './consulta-futbolista.component.css'
})
export class ConsultaFutbolistaComponent implements OnInit {
  // Grilla
  dataSource: any;

  // Clase para la paginacion
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  // Cabecera
  displayedColumns = ["idFutbolista", "nombres", "apellidos", "fechaNacimiento","caracteristicas", "posicion"];

  //Variable - parámetro de búsqueda ID
  varIdFutbolista: number = -1;
  

    constructor(
    private UtilService : UtilService,
    private futbolistaService: FutbolistaService,
    ) {}

    buscarID(){
      console.log(">>> Filtrar [inicio]"); 
      console.log(">>> ID del Futbolista" + this.varIdFutbolista); 

      this.futbolistaService.listarFutbolistaSegunId(this.varIdFutbolista).subscribe(
          x => {
            this.dataSource = new MatTableDataSource(x);
            this.dataSource.paginator = this.paginator;
          }
      );
      console.log(">>> Filtrar [fin]"); 
    }


    listarTodosFutbolistas(){
      this.futbolistaService.listarFutbolistaTodos().subscribe(
        x => {
          this.dataSource = new MatTableDataSource(x);
          this.dataSource.paginator = this.paginator;
        }
    );
    }

  ngOnInit(): void {
    this.listarTodosFutbolistas();
  }



}
