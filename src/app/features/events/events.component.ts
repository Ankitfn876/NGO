import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-events',
  imports: [MatCardModule, MatButtonModule, MatIconModule,NgFor],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
 events = [
    {
      title: 'Tree Plantation Drive',
      date: '25 March 2026',
      location: 'Korba, Chhattisgarh',
      image: 'assets/event1.png',
      description: 'Join us in planting 500+ trees to promote green environment.'
    },
    {
      title: 'Health Awareness Camp',
      date: '10 April 2026',
      location: 'Bilaspur',
      image: 'assets/event2.jpg',
      description: 'Free health checkup and awareness session for rural citizens.'
    },
    {
      title: 'Education Support Program',
      date: '20 April 2026',
      location: 'Raipur',
      image: 'assets/event3.jpg',
      description: 'Providing school kits and scholarships for underprivileged children.'
    }
  ];

  registerEvent(event: any) {
    alert(`Registered for ${event.title}`);
  }
}
