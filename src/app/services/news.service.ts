import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable()
export class NewsService {
  /**
   * Constructor
   */
  constructor(private http: Http) {
  }

  /**
   * Loads news feed.
   *
   * @return {Observable<R>}
   */
  get() {
    return this.http.get('http://ts-blog.devfactory.com/index.php/feed/');
  }
}
