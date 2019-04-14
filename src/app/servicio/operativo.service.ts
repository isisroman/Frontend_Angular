import { Injectable } from '@angular/core';
// importar
import { Operativo } from './../models/operativo';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperativoService {

  private API_REST = 'http://127.0.0.1:8080/www/apilumen/public/api/operativo';
  private httpHeader = new HttpHeaders( {
                    'Content-Type' : 'application/json' ,
                    'Authorization': 'RcgkvUAAOpGckyWonLANuTAZEFtU7VkZ' 
    });
  
  constructor(private http:HttpClient) {
    console.log('Servicio Operativo Running...!');
   }

      // Obtener todos los operativos
  getListadoOperativos():Observable<any[]>{
    return this.http.get<Operativo[]>(this.API_REST);
  }
 // obtener operativo segun id
 getOperativo(id:number): Observable <any>{
   return this.http.get<Operativo>(this.API_REST + '/' + id);
 }
 // Crea un nuevo registro operativo
 crearOperativo(newoperativo:Operativo): Observable<any>{
   return this.http.post<Operativo>( this.API_REST, newoperativo , { headers: this.httpHeader});
 }
 // Actualiza un operativo
 actualizarOperativo(myoperativo:Operativo): Observable<any>{
   return this.http.put<Operativo>( this.API_REST+ '/' + myoperativo.id, myoperativo , { headers: this.httpHeader});
 }
 // Elimina un operativo segun id
 deleteOperativo(id:number): Observable<any>{
   return this.http.delete<Operativo>( this.API_REST + '/' +id, { headers: this.httpHeader});
 }
}
