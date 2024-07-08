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
  varIdFutbolista: string = "";
  
    //Validators - 
    formFutbolista = this.formBuilder.group
    ({
      validaFiltro: ['', [Validators.pattern(/^([0-9\s]*)$/)]]
    });

    constructor(
    private UtilService : UtilService,
    private futbolistaService: FutbolistaService,
    private formBuilder: FormBuilder,
    ) {}

    buscarID(){
      try{
          if (this.varIdFutbolista.trim() !== "") {
            console.log(">>> Filtrar [inicio]"); 
            console.log(">>> ID del Futbolista" + this.varIdFutbolista); 

            this.futbolistaService.listarFutbolistaSegunId(parseInt(this.varIdFutbolista)).subscribe(
                x => {
                  this.dataSource = new MatTableDataSource(x);
                  this.dataSource.paginator = this.paginator;
                }
            );
            console.log(">>> Filtrar [fin]"); 
          } else {
            this.futbolistaService.listarFutbolistaSegunId(parseInt("-1")).subscribe(
              x => {
                this.dataSource = new MatTableDataSource(x);
                this.dataSource.paginator = this.paginator;
              }
          );
          }
          
      } catch (error) {
        console.error('Error al buscar ID:', error);
      }
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
