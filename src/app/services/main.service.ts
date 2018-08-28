import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http } from '@angular/http';

const dataInfo = "assets/database/data.json";
@Injectable()

export class MainService {

  constructor(private _http: Http) { }

  getAllData() {
    return this._http.get(dataInfo)
      .map(res => res.json())
      .catch(this.handleError);
  }

  search(query) {
    return this._http.get(dataInfo)
      .map(response => {
        let data = []
        let req = response.json().filter(item => {
          if (item.name.indexOf(query) >= 0) {
            data.push(item);
          }
        })
        return data
      })
      .catch(this.handleError)

  }




  private handleError(error: any, caught: any): any {
    console.log(error, caught)
  }

}
