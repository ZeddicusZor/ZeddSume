import { Component } from '@angular/core';

@Component({
  selector: 'app-job',
  template: `
  <h2>{{ title }}</h2>
  `

})
export class JobComponent {
  title: string;
  location: string;
  state: string;
  city: string;
  isContractor: boolean;
  startDate: string;
  endDate: string;
  bullets: string[];
}
