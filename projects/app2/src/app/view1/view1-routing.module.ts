import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { View1AddComponent } from './view1-add/view1-add.component';
import { View1EditComponent } from './view1-edit/view1-edit.component';
import { View1RemoveComponent } from './view1-remove/view1-remove.component';
import { View1Component } from './view1.component';

const children: Routes = [
  { path: 'add', component: View1AddComponent },
  { path: 'edit', component: View1EditComponent },
  { path: 'remove', component: View1RemoveComponent },
  { path: '', redirectTo: 'add', pathMatch: 'full' },
];

export const routes: Routes = [
  { path: '', component: View1Component, children },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class View1RoutingModule { }
