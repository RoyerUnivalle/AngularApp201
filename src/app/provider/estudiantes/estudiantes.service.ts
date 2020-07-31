import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EstudiantesModel, GetAllStudents} from '../../models/estudiantes/estudiantes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  public data: Array<EstudiantesModel>;
  public url = 'https://run.mocky.io/v3/641a517e-e90d-4a1b-b01a-68c789a0bfd2';
  public http: HttpClient;

  constructor(http: HttpClient) {
      this.http = http;
  }

  public getStudents(): Observable<GetAllStudents> {
    return this.http.get<GetAllStudents>(this.url);
  }

}
