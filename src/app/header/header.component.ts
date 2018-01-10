import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private title: String;
  constructor() { }

  ngOnInit() {
    this.title = 'Welcome to David Blau\'s Online Resume';
  }

}
