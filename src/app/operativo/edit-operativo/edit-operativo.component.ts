import { Component, OnInit } from '@angular/core';
// importar
import { Cargo } from 'src/app/models/cargo';
import { Operativo } from 'src/app/models/operativo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { CargoService } from 'src/app/servicio/cargo.service';
import { OperativoService } from 'src/app/servicio/operativo.service';
import swal from 'sweetalert2';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-edit-operativo',
  templateUrl: './edit-operativo.component.html',
  styleUrls: ['./edit-operativo.component.css']
})
export class EditOperativoComponent implements OnInit {

  editarForm: FormGroup;
  operativo: Operativo;
  listcargos =  new Array<Cargo>();
  constructor(private formBuilder: FormBuilder, private ruta: Router, private servicioOperativo: OperativoService,private servicioCargo:CargoService) { }

  ngOnInit() {
    this.listar_cargos();
  
    const operativoId = localStorage.getItem('editarOperativoId');
    if(!operativoId){
      alert('Acción invalida');
      this.ruta.navigate(['list-operativo']);
      return;
    }
    this.editarForm = this.formBuilder.group({
      id: [],
      openombre:  ['', Validators.required],
      opeci:  ['', Validators.required],
      opefechanac:  ['', Validators.required],
      opeestado:  ['', Validators.required],
      idcargo:  ['', Validators.required],
      created_at: ['', Validators.required],
      updated_at: ['', Validators.required]
    });

    this.servicioOperativo.getOperativo(+operativoId).subscribe( data =>{
      this.editarForm.setValue(data);
    });
  }

  onSubmit() {
    this.servicioOperativo.actualizarOperativo(this.editarForm.value)
    .pipe(first())
    .subscribe( data => {
      this.ruta.navigate(['list-operativo']);
      swal({
        position: 'top',
        type: 'success',
        title: 'Operativo modificado con exito!',
        showConfirmButton: false,
        timer: 1800
      });
    }, error =>{
      alert('Hubo un error al modificar el operativo :' + error.message);
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
}
