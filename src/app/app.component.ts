import { Component, OnInit } from '@angular/core';

import data from './data.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  buildEnv = BUILD_ENV

  data = data

  ngOnInit(): void {
    console.log(this.data);
  }
}
