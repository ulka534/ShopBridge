import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { } from 'bootstrap/'

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
  invents;
  constructor(private inventService: InventoryService) { }

  ngOnInit(): void {
    this.invents = this.inventService.getInventory();
  }

  delete(id) {
    for (let i = 0; i < this.invents.length; i++) {
      if (this.invents[i].id == id) {
        if (confirm("Are you sure to delete ")) {
          console.log("Implement delete functionality here");
          this.invents.splice(i, 1);
        }
      }
    }

    this.inventService.deleteInventory(id);
  }

}
