import { Component, OnInit, ViewChild } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Router } from '@angular/router';
import { InventoryService } from '../inventory.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inventory-create',
  templateUrl: './inventory-create.component.html',
  styleUrls: ['./inventory-create.component.css']
})
export class InventoryCreateComponent implements OnInit {
  invents;
  invent = {
    name: "",
    description: "",
    price: "",
    author: "",
    type: "",
  }

  constructor(private inventoryService: InventoryService,
    private router: Router,
    private toastr: ToastrService) { }

  @ViewChild("f") form: any;

  ngOnInit(): void {
    this.invents = this.inventoryService.getInventory();
  }

  onSubmit() {
    if (this.form.value) {
      let newInvemtory = {
        id: uuid(),
        name: this.form.value.name,
        description: this.form.value.description,
        price: this.form.value.price,
        author: this.form.value.author,
        type: this.form.value.type,
      }
      this.invents.push(newInvemtory);
      console.log(newInvemtory)
      this.inventoryService.addInventory(newInvemtory);
      this.toastr.success('New Item added to Inventory!', '', {
        timeOut: 2000
      });
      this.router.navigate(['inventory-list']);
    }
  }
}
