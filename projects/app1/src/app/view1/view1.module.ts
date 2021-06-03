import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { View1AddComponent } from './view1-add/view1-add.component';
import { View1EditComponent } from './view1-edit/view1-edit.component';
import { View1RemoveComponent } from './view1-remove/view1-remove.component';
import { View1RoutingModule } from './view1-routing.module';
import { View1Component } from './view1.component';

@NgModule({
  declarations: [
    View1Component,
    View1AddComponent,
    View1EditComponent,
    View1RemoveComponent
  ],
  imports: [
    CommonModule,
    View1RoutingModule
  ]
})
export class View1Module { }
