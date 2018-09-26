import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpoint = 'https://api.sandbox.amadeus.com/v1.2/hotels/search-circle/';

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res["results"];
    return body || {};
  }

  getHotels(lat, long): Observable<any> {

    let params = new HttpParams()
      .set('apikey', 'Iv07ADtpyFSu3htOI9k30tguwxeGj9ig')
      .set('latitude', lat)
      .set('longitude', long)
      .set('radius', '50')
      .set('check_in', '2018-12-15')
      .set('check_out', '2018-12-16')
      .set('number_of_results', '12');

    return this.http.get(this.endpoint, {params}).pipe(
      map(this.extractData));
  }

}
