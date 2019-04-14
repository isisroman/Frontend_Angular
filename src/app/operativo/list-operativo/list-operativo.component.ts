import { Component, OnInit } from '@angular/core';
// importar
import { Operativo } from 'src/app/models/operativo';
import { Cargo } from 'src/app/models/cargo';
import { Router } from '@angular/router';
import { OperativoService } from 'src/app/servicio/operativo.service';
import { CargoService} from 'src/app/servicio/cargo.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-operativo',
  templateUrl: './list-operativo.component.html',
  styleUrls: ['./list-operativo.component.css']
})
export class ListOperativoComponent implements OnInit {

  listoperativos=  new Array<Operativo>();
  constructor(private ruta: Router, private servicioOperativo: OperativoService, private servicioCargo:CargoService) {}


  ngOnInit() {
    this.listar_operativos();
  }

  listar_operativos() {
    this.servicioOperativo.getListadoOperativos().subscribe(
      data => {
          this.listoperativos= data
          //console.log('listado de operativos: ' + this.listoperativos);
        }
      );
 }

 getCargoId(id:number) {
  this.servicioCargo.getListadoCargos().subscribe(
    data => {
        this.listoperativos= data,
        console.log('listado de cargo: ' + this.listoperativos);
      }
    );
}
 
  eliminar_operativo( myoperativo:Operativo):void{
    swal({
      title: '¿Está seguro?',
      text: '¿Seguro desea eliminar el operativo: ' + myoperativo.openombre + '?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then( result => {
        if(result.value){
           this.servicioOperativo.deleteOperativo(myoperativo.id).subscribe( 
             data =>{
               this.listar_operativos();
              }, (err) => {
                console.log('Hubo un error al Eliminar el Operativo => '+ err.toString());
              });
          
          swal('Eliminado', 'Se ha eliminado el operativo: ' + myoperativo.openombre, 'success');
        }
    });
  }
  editar_operativo(myoperativo: Operativo): void {
    localStorage.removeItem('editarOperativoId');
    localStorage.setItem('editarOperativoId', myoperativo.id.toString());
    this.ruta.navigate(['edit-operativo']);
  }
  add_operativo(): void {
    this.ruta.navigate(['add-operativo']);
  }

  list_cargo():void{
    this.ruta.navigate(['list-cargo']);
  }

}
