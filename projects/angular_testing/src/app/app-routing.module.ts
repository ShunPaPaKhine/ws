import { Ng15TreeComponent } from './ng15-tree/ng15-tree.component';
import { Ng15TableComponent } from './ng15-table/ng15-table.component';
import { Ng15NavigationComponent } from './ng15-navigation/ng15-navigation.component';
import { Ng15DragDropComponent } from './ng15-drag-drop/ng15-drag-drop.component';
import { Ng15DashboardComponent } from './ng15-dashboard/ng15-dashboard.component';
import { Ng15AddressFormComponent } from './ng15-address-form/ng15-address-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'addressform', component: Ng15AddressFormComponent },
  { path: 'dashboard', component: Ng15DashboardComponent },
  { path: 'dragdrop', component: Ng15DragDropComponent },
  { path: 'navigation', component: Ng15NavigationComponent },
  { path: 'table', component: Ng15TableComponent },
  { path: 'tree', component: Ng15TreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
