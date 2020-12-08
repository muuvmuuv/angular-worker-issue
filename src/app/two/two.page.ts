import {  Component, OnInit } from '@angular/core'
import { fromWorker } from 'observable-webworker'
import { of } from 'rxjs'

@Component({
  selector: 'app-page-two',
  templateUrl: './two.page.html',
  styleUrls: ['./two.page.css'],
})
export class TwoPageComponent implements OnInit {
  public variable: number

  ngOnInit(): void {
    fromWorker<string, number>(
      () => new Worker('./two.worker.ts', { type: 'module' }),
      of("91528391")
    ).subscribe((outgoing) => {
      this.variable = outgoing
    })
  }
}
