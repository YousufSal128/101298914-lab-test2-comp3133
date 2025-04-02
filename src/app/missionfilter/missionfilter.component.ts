import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css'],
  standalone: false
})
export class MissionfilterComponent {
  launchYear: string = '';

  @Output() filterYear = new EventEmitter<string>();

  onFilterChange(): void {
    if (this.launchYear && !isNaN(Number(this.launchYear))) {
      this.filterYear.emit(this.launchYear);
    } else {
      this.filterYear.emit('');
    }
  }
}
