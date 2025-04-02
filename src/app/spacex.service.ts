import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpaceXMission } from './models/spacex-mission.model';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getLaunches(): Observable<SpaceXMission[]> {
    return this.http.get<SpaceXMission[]>(this.apiUrl);
  }

  getLaunchByFlightNumber(flightNumber: string): Observable<SpaceXMission> {
    return this.http.get<SpaceXMission>(`${this.apiUrl}/${flightNumber}`);
  }
  
  
  
  getMissionById(flightNumber: string) {
    return this.http.get<SpaceXMission>(`https://api.spacexdata.com/v3/launches/${flightNumber}`);
  }
  
}
