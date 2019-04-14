import { Injectable } from '@angular/core';
// importar
import { Cargo } from './../models/cargo';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CargoService {


  private API_REST = 'http://127.0.0.1:8080/www/apilumen/public/api/cargo';
  private httpHeader = new HttpHeaders( {
              'Content-Type' : 'application/json' ,
               'Authorization': 'RcgkvUAAOpGckyWonLANuTAZEFtU7VkZ' 
              });
  
  constructor(private http:HttpClient) {
    console.log('Servicio Cargo Running...!');
   }
   // Obtener todos los cargos
  getListadoCargos():Observable<any[]>{
     return this.http.get<Cargo[]>(this.API_REST);
   }
  // obtener cargo segun id
  getCargo(id:number): Observable <any>{
    return this.http.get<Cargo>(this.API_REST + '/' + id);
  }
  // Crea un nuevo registro cargo
  crearCargo(newcargo:Cargo): Observable<any>{
    return this.http.post<Cargo>( this.API_REST, newcargo , { headers: this.httpHeader});
  }
  // Actualiza un cargo
  actualizarCargo(mycargo:Cargo): Observable<any>{
    return this.http.put<Cargo>( this.API_REST+ '/' + mycargo.id, mycargo , { headers: this.httpHeader});
  }
  // Elimina un cargo segun id
  deleteCargo(id:number): Observable<any>{
    return this.http.delete<Cargo>( this.API_REST + '/' +id, { headers: this.httpHeader});
  }
}
