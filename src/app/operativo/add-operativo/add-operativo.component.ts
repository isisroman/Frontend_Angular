import { Component, OnInit } from '@angular/core';
// importar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { OperativoService } from 'src/app/servicio/operativo.service';
import { CargoService} from 'src/app/servicio/cargo.service';
import { Cargo } from 'src/app/models/cargo';
import swal from 'sweetalert2';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-add-operativo',
  templateUrl: './add-operativo.component.html',
  styleUrls: ['./add-operativo.component.css']
})
export class AddOperativoComponent implements OnInit {
  validarForm: FormGroup;
  selectEstado: string = "";
  selectCargo: string = ""; 
  listcargos =  new Array<Cargo>();
  
  constructor(private formBuilder: FormBuilder, private ruta: Router, private servicioOperativo: OperativoService, private servicioCargo:CargoService) { }
  
  ngOnInit() {
    this.listar_cargos();
    
    this.validarForm = this.formBuilder.group({
      id: 0,
      openombre:  ['', Validators.required],
      opeci:      ['', Validators.required],
      opefechanac:['', Validators.required],
      opeestado:  [1, Validators.required],
      idcargo:    [this.selectCargo, Validators.required]
    });
  }
  onSubmit(){
    this.servicioOperativo.crearOperativo(this.validarForm.value)
    .subscribe(data =>{
        this.ruta.navigate(['list-operativo']);
        swal({
          position: 'top',
          type: 'success',
          title: 'Operativo creado exitosamente!',
          showConfirmButton: false,
          timer: 1800
        });
      }); 
  }
  volver_listado_operativo(): void {
    this.ruta.navigate(['list-operativo']);
  }

  listar_cargos() {
    this.servicioCargo.getListadoCargos().subscribe(
      data => {
          this.listcargos= data,
          console.log('listado de cargos: ' + this.listcargos);
        }, (err) =>{
          console.log('Hubo un error en listar cargos: ' + err);
        }
      );
  }
   //event handler for the select element's change event
   selectChangeHandler (event: any) {
    //update the ui
       this.selectEstado = event.target.value;
  } 
  selectChangeCargo (event: any) {
    //update the ui
       this.selectCargo = event.target.value;
  }

}
