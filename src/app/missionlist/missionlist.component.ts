import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // ✅ Import Router
import { SpacexService } from '../spacex.service';
import { SpaceXMission } from '../models/spacex-mission.model';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
  standalone: false
})
export class MissionlistComponent implements OnInit {
  launches: SpaceXMission[] = []; // ✅ Explicitly using SpaceXMission
  filteredLaunches: SpaceXMission[] = []; // ✅ Explicitly using SpaceXMission

  constructor(private spacexService: SpacexService, private router: Router) {} // ✅ Inject Router

  ngOnInit(): void {
    this.fetchLaunches();
  }
  
  fetchLaunches(): void {
    this.spacexService.getLaunches().subscribe((data: SpaceXMission[]) => {
      this.launches = data;
      console.log(this.launches); // Check the data structure
      this.filteredLaunches = data; // Initially display all launches
    }, error => {
      console.error('Error fetching launch data:', error);
    });
  }
  
  filterByYear(year: string): void {
    console.log('Filtering for year:', year);
    if (!year) {
      this.filteredLaunches = this.launches;
    } else {
      // Convert 'year' to string and then trim any spaces
      const filteredYear = year.toString().trim();
      
      // Compare after trimming
      this.filteredLaunches = this.launches.filter(launch => launch.launch_year.toString().trim() === filteredYear);
  
      console.log('Filtered launches:', this.filteredLaunches);
    }
  }
  
  
  
  
  selectMission(mission: SpaceXMission): void {
    console.log('Navigating to mission details for flight number:', mission.flight_number); // Debugging line
    this.router.navigate(['/mission-details', mission.flight_number]); // Navigate to mission details
  }
  
  
}
