import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from '../inventory.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inventory-edit',
  templateUrl: './inventory-edit.component.html',
  styleUrls: ['./inventory-edit.component.css']
})
export class InventoryEditComponent implements OnInit {
  invent;
  id;
  constructor(private _Activatedroute: ActivatedRoute,
    private inventoryService: InventoryService,
    private router: Router,
    private toastr: ToastrService) { }

  @ViewChild("f") form: any;

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.params['id'];
    let invents = this.inventoryService.getInventory();
    this.invent = invents.find(p => p.id == this.id);
    console.log(this.invent);
  }

  onSubmit() {
    if (this.form.value) {
      console.log(this.form.value)
      this.inventoryService.updateInventory(this.invent, this.form.value);
      this.toastr.success('Item modified successfully!', '', {
        timeOut: 2000
      });
      this.router.navigate(['inventory-list']);
    }
  }
}
