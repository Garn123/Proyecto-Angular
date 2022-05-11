import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { champion } from '../models/champion.module';

const url = 'http://localhost:8000/api/campeones/';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  championList: champion[] = [];
  constructor(private http: HttpClient) {}

  getSingleChampion(id: string) {
    console.log('klk papi');
    return this.http.get(url + id);
  }

  getChampions() {
    this.http.get(url).subscribe((response: any) => {
      this.championList = response;
      console.log(response);
    });
  }
}
