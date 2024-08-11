import { Component } from '@angular/core';
import { Item } from '../../../types/invoice.types';

@Component({
  selector: 'app-items-dilog',
  templateUrl: './items-dilog.component.html',
  styleUrl: './items-dilog.component.scss'
})
export class ItemsDilogComponent {
  displayedColumns: string[] = ['name', 'quantity', 'price', 'total'];
  dataSource: Item[] = [];
  grandTotal: number = 0;

  addItem() {
    const newItem: Item = { name: '', quantity: 0, price: 0, total: 0 };
    this.dataSource.push(newItem);
  }
}
