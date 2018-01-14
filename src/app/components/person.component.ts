import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Skill, ISkillGroup } from '../models/ISkill';
import { JobComponent } from '../models/IJob';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: [
    './person.component.css'
  ]
})
export class PersonComponent implements OnInit {
  skills: ISkillGroup[];
  workHistory: JobComponent[];

  ngOnInit() {
    this.skills = [
      {
        name: 'java',
        skills: [
          {
            name: 'Standard Edition', version: ['5', '6', '7', '8'], shortHand: 'SE'
          },
          {
            name: 'Enterprise Edition', version: [ '7'], shortHand: 'EE'
          },
          { name: 'Contexts and Dependency Injection', shortHand: 'CDI' }
        ]
      },
      {
        name: 'javascript',
        skills: [
          {
            name: 'Angular'
          },
          {
            name: 'React'
          },
          {
            name: 'Express'
          },
          {
            name: 'hapi.js'
          },
          {
            name: 'mongoose.js'
          },
          {
            name: 'jQuery'
          }
        ]
      }
    ];
    this.workHistory = [
      {
        title: 'Software Developer III',
        location: 'Intel Jones Park Campus',
        city: 'Hillsboro',
        state: 'OR',
        isContractor: true,
        startDate: '',
        endDate: '',
        bullets: []
      },
      {
        title: 'Software Engineer',
        location: 'Nike WHQ',
        city: 'Beaverton',
        state: 'OR',
        isContractor: true,
        startDate: '',
        endDate: '',
        bullets: []
      },
      {
        title: 'Application Developer',
        location: 'Fusion Marketing',
        city: 'St. Louis',
        state: 'MO',
        isContractor: true,
        startDate: '',
        endDate: '',
        bullets: []
      },
      {
        title: 'Java Developer',
        location: 'USDA: Farm Service Agency (FSA)',
        city: 'St. Louis',
        state: 'MO',
        isContractor: true,
        startDate: '',
        endDate: '',
        bullets: []
      }
    ];
  }
}
