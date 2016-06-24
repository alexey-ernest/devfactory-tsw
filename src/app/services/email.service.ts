import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable()
export class EmailService {

  /**
   * Constructor
   */
  constructor(private http: Http) {
  }

  /**
   * Sends a demo request email.
   *
   * @param fromEmail    {string}
   * @param fromName     {string}
   * @return {Observable<R>}
   */
  sendDemoRequest(fromEmail: string, fromName: string) {
    let params = JSON.stringify({email: fromEmail, name: fromName});
    let headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('https://ts-landing-email.herokuapp.com/',
      params, {headers: headers});
  }
}
