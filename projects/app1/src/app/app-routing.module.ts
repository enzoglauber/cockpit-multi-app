import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes:  Routes = [
  {
    path: 'app1',
    children: [
      { path: 'view1', loadChildren: () => import('./view1/view1.module').then(m => m.View1Module) }
    ]
  },
  { path: '', redirectTo: 'app1', pathMatch: 'full' }
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
