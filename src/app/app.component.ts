import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpGetService } from './http-get.service';
import { EmitterService } from './emitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {

    title = 'Http request';
    datos;
    familia: string = 'MEDICAMENTOS';

    constructor(private httpGet: HttpGetService) {
    }

    ngOnInit() {
    //this.datos = this.httpGet.getMeds();

        this.httpGet.getMeds(this.familia).subscribe(
            result => { 
                this.getData( result ); 
            },
            error  => console.error( error ) );
        
        EmitterService.get('MEDICAMENTOS').subscribe((res) => {
            console.log(res);
        });        

    }

    ngOnChanges() {
                
    }

    getData(data) {
        this.datos = data;
    }

}
