import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JournalEntriesService {

  BASE_URL: string = 'http://localhost:3000/api';

  constructor(private http:Http) { }

  getListEntries() {
    return this.http.get(`${this.BASE_URL}/journal-entries`)
    .map((response)=> {
      return response.json() 
    })
  }

  getSingleEntry(id) {
    console.log(`${this.BASE_URL}/journal-entries/${id}`)
    return this.http.get(`${this.BASE_URL}/journal-entries/${id}`)
    .map((response)=>  {
      return  response.json()
    })
  }
}
