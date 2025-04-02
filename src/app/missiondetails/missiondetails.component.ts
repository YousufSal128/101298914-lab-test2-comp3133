import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpacexService } from '../spacex.service';
import { SpaceXMission } from '../models/spacex-mission.model';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
  standalone: false
})
export class MissiondetailsComponent implements OnInit {
  mission: SpaceXMission | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spacexService: SpacexService
  ) {}

  ngOnInit(): void {
    const flightNumber = this.route.snapshot.paramMap.get('id'); // Get the flight number from the route
    if (flightNumber) {
      this.fetchMissionDetails(flightNumber); // Fetch the mission details
    }
  }

  fetchMissionDetails(flightNumber: string): void {
    this.spacexService.getLaunchByFlightNumber(flightNumber).subscribe(
      (data: SpaceXMission) => {
        this.mission = data; // Assign the mission data to the 'mission' property
      },
      (error) => {
        console.error('Error fetching mission details:', error); // Handle errors
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/']); // Navigate back to the mission list
  }
}
