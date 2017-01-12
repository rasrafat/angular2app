import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
  constructor (private http: Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  get (url: string): Observable<any> {
    return this.http.get(url)
                    .map(this.parseResponse)
                    .catch(this.handleError);
  }

  post (url: string, params: any): Observable<any> {
    return this.http.post(url, params, this.options)
                    .map(this.parseResponse)
                    .catch(this.handleError);
  }

  private parseResponse(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
