import { Component, OnInit, EventEmitter } from '@angular/core';
import { HttpGetService } from './http-get.service';
import { EmitterService } from './emitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    datos;
    familia: string;
    status: boolean = false;
    emmitStatus = new EventEmitter();

    familias = [
        {value: 'MEDICAMENTOS', viewValue: 'Medicamentos'},
        {value: 'VITAMINAS Y SUPLEMENTOS', viewValue: 'Vitaminas'},
        {value: 'HIGIENE Y PERFUMERIA', viewValue: 'Higiene'},
        {value: 'MATERIAL DE CURACION', viewValue: 'Material de curación'}
    ];

    constructor(private httpGet: HttpGetService) { }

    ngOnInit() {
        //this.datos = this.httpGet.getMeds();

        this.status = true;

        this.familia = 'MEDICAMENTOS';

        this.httpGet.getMeds(this.familia).subscribe(
            result => {
                this.getData( result );
            },
            error  => console.error( error ) );

        EmitterService.get('MEDICAMENTOS').subscribe((res) => {
            console.log(res);
            this.changeStatus();
        });

        EmitterService.get('VITAMINAS Y SUPLEMENTOS').subscribe((res) => {
            console.log(res);
            this.changeStatus();
        });

        EmitterService.get('HIGIENE Y PERFUMERIA').subscribe((res) => {
            console.log(res);
            this.changeStatus();
        });

        EmitterService.get('MATERIAL DE CURACION').subscribe((res) => {
            console.log(res);
            this.changeStatus();
        });

        this.emmitStatus.subscribe((res) => console.log(res));

    }

    getData(data) {
        this.datos = data;
    }

    setFamilia(familia: string) {
        this.changeStatus();
        this.familia = familia;
        this.getProducts();
    }

    private getProducts() {
        this.httpGet.getMeds(this.familia).subscribe(
            result => {
                this.getData( result );
            },
            error  => console.error( error ),
            () => { console.info("Hecho!")} );
    }

    private changeStatus() {
        this.status = !this.status;
        this.emmitStatus.emit(this.status);
    }

}
