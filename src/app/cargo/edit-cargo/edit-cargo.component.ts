import { Component, OnInit } from '@angular/core';
// importar
import { Cargo } from 'src/app/models/cargo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { CargoService } from 'src/app/servicio/cargo.service';
import swal from 'sweetalert2';
import {first} from 'rxjs/operators';
@Component({
  selector: 'app-edit-cargo',
  templateUrl: './edit-cargo.component.html',
  styleUrls: ['./edit-cargo.component.css']
})
export class EditCargoComponent implements OnInit {

  editarForm: FormGroup;
  cargo: Cargo;
  
  constructor(private formBuilder: FormBuilder, private ruta: Router, private servicioCargo: CargoService) { }

  ngOnInit() {
    const cargoId = localStorage.getItem('editarCargoId');
    if(!cargoId){
      alert('Acción invalida');
      this.ruta.navigate(['list-cargo']);
      return;
    }

    this.editarForm = this.formBuilder.group({
      id: [],
      carnombre:  ['', Validators.required],
      carestado:  ['', Validators.required],
      created_at: ['', Validators.required],
      updated_at: ['', Validators.required]
    });

    this.servicioCargo.getCargo(+cargoId).subscribe( data =>{
      this.editarForm.setValue(data);
    });
  }

  onSubmit() {
    this.servicioCargo.actualizarCargo(this.editarForm.value)
    .pipe(first())
    .subscribe( data => {
      this.ruta.navigate(['list-cargo']);
      swal({
        position: 'top',
        type: 'success',
        title: 'Cargo modificado con exito!',
        showConfirmButton: false,
        timer: 1800
      });
    }, error =>{
      alert('Hubo un error al modificar el cargo:' + error.message);
    });
  }
  
  volver_listado_cargo(): void {
    this.ruta.navigate(['list-cargo']);
  }

}
