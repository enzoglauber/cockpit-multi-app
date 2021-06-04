import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes:  Routes = [
  {
    path: '',
    children: [
      { path: 'view2', loadChildren: () => import('./view1/view1.module').then(m => m.View1Module) }
    ]
  },
  { path: 'app2', redirectTo: 'app2/view2', pathMatch: 'full' },
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
