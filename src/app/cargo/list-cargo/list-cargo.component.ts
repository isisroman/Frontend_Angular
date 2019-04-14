import { Component, OnInit } from '@angular/core';

import { Cargo } from 'src/app/models/cargo';
import { Operativo} from 'src/app/models/operativo'
import { Router } from '@angular/router';
import { CargoService } from 'src/app/servicio/cargo.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-list-cargo',
  templateUrl: './list-cargo.component.html',
  styleUrls: ['./list-cargo.component.css']
})
export class ListCargoComponent implements OnInit {

  listcargos =  new Array<Cargo>();
  nombreCargo = "";
  constructor(private ruta: Router, private servicioCargo: CargoService) {}

  ngOnInit() {
      this.listar_cargos();
 } 

 listar_cargos() {
    this.servicioCargo.getListadoCargos().subscribe(
      data => {
          this.listcargos = data
          //console.log('listado de cargos: ' + this.listcargos)
        }
      );
 }
  eliminar_cargo( mycargo: Cargo):void{
    swal({
      title: '¿Está seguro?',
      text: '¿Seguro desea eliminar el cargo: ' + mycargo.carnombre + '?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then( result => {
        if(result.value){
           this.servicioCargo.deleteCargo(mycargo.id).subscribe( 
             data =>{
               this.listar_cargos();
              }, (err) => {
                console.log('Hubo un error al Eliminar el Cargo => '+ err.toString());
              });
          
          swal('Eliminado', 'Se ha eliminado el cargo: ' + mycargo.carnombre, 'success');
        }
    });
  }
  editar_cargo(mycargo: Cargo): void {
    localStorage.removeItem('editarCargoId');
    localStorage.setItem('editarCargoId', mycargo.id.toString());
    this.ruta.navigate(['edit-cargo']);
  }
  add_cargo(): void {
    this.ruta.navigate(['add-cargo']);
  }

  volver_listado_operativo(): void {
    this.ruta.navigate(['list-operativo']);
  }

}
