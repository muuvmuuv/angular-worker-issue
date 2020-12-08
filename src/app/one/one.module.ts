import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { OnePageComponent } from './one.page'

const routes: Routes = [
  {
    path: '', // one
    component: OnePageComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [OnePageComponent],
})
export class OneModule {}
