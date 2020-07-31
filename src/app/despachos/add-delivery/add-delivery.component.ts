import { Component, OnInit, AfterViewInit } from '@angular/core';
import {EstudiantesService} from '../../provider/estudiantes/estudiantes.service';
import { EstudiantesModel} from '../../models/estudiantes/estudiantes.model';
// import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-delivery',
  templateUrl: './add-delivery.component.html',
  styleUrls: ['./add-delivery.component.scss']
})
export class AddDeliveryComponent implements OnInit, AfterViewInit {


public data: Array<EstudiantesModel>;

  constructor(private estudiantesService: EstudiantesService, // private toastr: ToastrService
              ) { }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.indexStudents();
  }

  indexStudents() {
    this.estudiantesService.getStudents()
    .subscribe(result =>  {
      console.log(result);
      this.data = result.estudiantes;
      // this.toastr.success('Hello world!', 'Toastr fun!');
    }, errors => {
      console.log('error');
      /*this.toastr.error('everything is broken', 'Major Error', {
        timeOut: 3000,
      });*/
    });
  }

}
