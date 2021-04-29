import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { InventoryCreateComponent } from './inventory/inventory-create/inventory-create.component';
import { InventoryEditComponent } from './inventory/inventory-edit/inventory-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo : 'inventory-list',
    pathMatch: 'full'
  },
  {
    path : 'inventory-list',
    component: InventoryListComponent
  },
  {
    path : 'inventory-create',
    component: InventoryCreateComponent
  },
  {
    path : 'inventory-edit/:id',
    component: InventoryEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
