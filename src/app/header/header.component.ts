import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private title: String;
  private myName: String;
  constructor() { }

  ngOnInit() {
    this.myName = 'David J. Blau';
    this.title = `Welcome to ${this.myName}'s Online Resume`;
  }

}
