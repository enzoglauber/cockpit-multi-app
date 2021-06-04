import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Sub Applications
import { App1SharedModule } from '../../projects/app1/src/app/app.module';
import { App2SharedModule } from '../../projects/app2/src/app/app.module';

const routes: Routes = [
  {
    path: 'app1',
    loadChildren: () => import('../../projects/app1/src/app/app.module').then(m => m.App1SharedModule)
  },
  {
    path: 'app2',
    loadChildren: () => import('../../projects/app2/src/app/app.module').then(m => m.App2SharedModule)
  },
  { path: 'app1', redirectTo: 'app1/view1', pathMatch: 'full' },
  { path: 'app2', redirectTo: 'app2/view2', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,  { enableTracing: true }),
    App1SharedModule.forRoot(),
    App2SharedModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
