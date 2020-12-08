import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { TwoPageComponent } from './two.page'

const routes: Routes = [
  {
    path: '', // one
    component: TwoPageComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TwoPageComponent],
})
export class TwoModule {}
