import { Component } from '@angular/core';
import { IPerson } from './models/IPerson';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  personDetail: IPerson;

  ngOnInit() {
    this.personDetail = {
      'firstName': 'David',
      'lastName': 'Blau',
      'middleInit': 'J',
      'email': 'dblau@gmail.com',
      'phone': '123.333.1111',
      'displayTitle': 'Software Scientist',
      'skillGroups': [],
      'educationGroups': [],
      'workHistory': []
    };

  }
}
