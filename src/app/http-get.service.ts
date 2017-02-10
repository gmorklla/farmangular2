import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { EmitterService } from './emitter.service';

@Injectable()
export class HttpGetService {


  constructor( private http: Http) { }

/*  private medsUrl = 'https://jsonplaceholder.typicode.com/posts/';

  getUser(): Observable<any> {

	let params = new URLSearchParams();
	params.append('postId', '1');

	//Http request-
	return this.http.get(this.medsUrl, {
		search: params
	})
		.map((res:Response) => res.json())
		.catch((error:any) => Observable.throw(error || 'Server error'));
  }*/

	private medsUrl = "https://farmaciasdesimilares.com/WSAjaxHttps/MXFSWEBAJAXService.asmx/ObtenerProductos";

	getMeds(familia: string): Observable<Response> {

		let data = "{'familia':'" + familia + "'}"

		let headers = new Headers();
		headers.append('Content-Type', "application/json;charset=utf-8");

		return this.http.post(this.medsUrl, data, {
			headers: headers
		})
		.map(     response => JSON.parse(response.json().d) )
		.catch(   error => Observable.throw(error || 'Server error') )
		.finally( () => EmitterService.get( familia ).emit( 'Fin' ) );
	}

}
