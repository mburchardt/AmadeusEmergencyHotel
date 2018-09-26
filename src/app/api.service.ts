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

    var today = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    let params = new HttpParams()
      .set('apikey', 'Iv07ADtpyFSu3htOI9k30tguwxeGj9ig')
      .set('latitude', lat)
      .set('longitude', long)
      .set('radius', '50')
      .set('check_in', today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate())
      .set('check_out', tomorrow.getFullYear()+'-'+(tomorrow.getMonth()+1)+'-'+tomorrow.getDate())
      .set('number_of_results', '12');

    return this.http.get(this.endpoint, {params}).pipe(
      map(this.extractData));
  }

}
