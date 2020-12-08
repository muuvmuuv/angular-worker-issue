import { DoWork, ObservableWorker } from 'observable-webworker'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@ObservableWorker()
export class OneWorker implements DoWork<number, string> {
  public work(input$: Observable<number>): Observable<string> {
    return input$.pipe(
      map((incoming) => {
        return String(incoming)
      })
    )
  }
}
