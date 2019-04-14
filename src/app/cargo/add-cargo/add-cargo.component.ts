import { Component, OnInit } from '@angular/core';
// importar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { CargoService } from 'src/app/servicio/cargo.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-cargo',
  templateUrl: './add-cargo.component.html',
  styleUrls: ['./add-cargo.component.css']
})
export class AddCargoComponent implements OnInit {
  validarForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private ruta: Router, private servicioCargo: CargoService) { }

  ngOnInit() {
    this.validarForm = this.formBuilder.group({
      id: 0,
      carnombre:  ['', Validators.required],
      carestado:  ['1', Validators.required]
    });
  }

  onSubmit(){
    this.servicioCargo.crearCargo(this.validarForm.value)
    .subscribe(data =>{
        this.ruta.navigate(['list-cargo']);
        swal({
          position: 'top',
          type: 'success',
          title: 'Cargo creado exitosamente!',
          showConfirmButton: false,
          timer: 1800
        });
      });
  }
  volver_listado_cargo(): void {
    this.ruta.navigate(['list-cargo']);
  }

}
