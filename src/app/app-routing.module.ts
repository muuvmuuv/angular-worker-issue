import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: "/one"
  },
  {
    path: 'one',
    loadChildren: () => import('./one/one.module').then((m) => m.OneModule),
  },
  {
    path: 'two',
    loadChildren: () => import('./two/two.module').then((m) => m.TwoModule),
  },
  {
    path: '**',
    redirectTo: "/one"
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
