import { DoWork, ObservableWorker } from 'observable-webworker'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@ObservableWorker()
export class TwoWorker implements DoWork<string, number> {
  public work(input$: Observable<string>): Observable<number> {
    return input$.pipe(
      map((incoming) => {
        return Number(incoming)
      })
    )
  }
}
