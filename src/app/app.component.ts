import { Component, OnInit } from '@angular/core';
import { fromWorker } from 'observable-webworker';
import { of } from 'rxjs';

import data from './data.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test';

  varOne: string
  varTwo: number

  data = data

  ngOnInit(): void {
    console.log(this.data);

    fromWorker<number, string>(
      () => new Worker('./workers/one.worker.ts', { type: 'module' }),
      of(91528391)
    ).subscribe((outgoing) => {
      this.varOne = outgoing
    })

    fromWorker<string, number>(
      () => new Worker('./workers/two.worker.ts', { type: 'module' }),
      of("91528391")
    ).subscribe((outgoing) => {
      this.varTwo = outgoing
    })
  }
}
