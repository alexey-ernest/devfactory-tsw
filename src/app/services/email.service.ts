import {Injectable, EventEmitter} from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable()
export class EmailService {
  public requestSent$: EventEmitter<boolean>;

  /**
   * Constructor
   */
  constructor(private http: Http) {
    this.requestSent$ = new EventEmitter<boolean>();
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
      params, {headers: headers})
        .map(res => this.requestSent$.emit(true));
  }
}
