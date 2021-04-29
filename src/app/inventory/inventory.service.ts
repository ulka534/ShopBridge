import { Injectable } from '@angular/core';
import { Init } from './inventory-init';

@Injectable({
  providedIn: 'root'
})
export class InventoryService extends Init {

  constructor() {
    super();
    console.log("InventoryService works");
    this.load();
  }

  getInventory() {
    let invent = JSON.parse(localStorage.getItem('inventory'));
    return invent;
  }

  addInventory(newInvent) {
    let invents = JSON.parse(localStorage.getItem('inventory'));
    invents.push(newInvent);
    localStorage.setItem('inventory', JSON.stringify(invents));
  }

  deleteInventory(id) {
    let invents = JSON.parse(localStorage.getItem('inventory'));
    for (let i = 0; i < invents.length; i++) {
      if (invents[i].id == id) {
        invents.splice(i, 1);
      }
    }
    localStorage.setItem('inventory', JSON.stringify(invents));
  }

  updateInventory(oldInvent, newInvent) {
    let invents = JSON.parse(localStorage.getItem('inventory'));

    for (let i = 0; i < invents.length; i++) {
      if (invents[i].id == oldInvent.id) {
        invents[i] = newInvent;
      }
    }
    localStorage.setItem('inventory', JSON.stringify(invents));
  }



}
