import {  Component, OnInit } from '@angular/core'
import { fromWorker } from 'observable-webworker'
import { of } from 'rxjs'

@Component({
  selector: 'app-page-one',
  templateUrl: './one.page.html',
  styleUrls: ['./one.page.css'],
})
export class OnePageComponent implements OnInit {
  public variable: string
  public variableType: string

  ngOnInit(): void {
    fromWorker<number, string>(
      () => new Worker('./one.worker.ts', { type: 'module' }),
      of(91528391)
    ).subscribe((outgoing) => {
      this.variable = outgoing
      this.variableType = typeof outgoing
    })
  }
}
