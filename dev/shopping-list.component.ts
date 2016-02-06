import {Component} from "angular2/core";

@Component({
  selector: 'shopping-list',
  template: `
    <ul>
      <li
        *ngFor="#shoppingListItem of shoppingListItems"
        (click)="onItemClicked(shoppingListItem)"
        >{{ shoppingListItem.name }}
        </li>
    </ul>
    <input type="text" [(ngModel)]="selectedItem.name">
    <button (click)="onDeleteItem()">Delete Item</button><br/>
    <input type="text" #shoopingListItem>
    <button (click)="onAddItem(shoopingListItem)">Add item</button>
  `
})
export class ShoppingListComponent {
  public shoppingListItems = [
      {name: "Brot"},
      {name: "Milch"},
      {name: "Schinken"},
  ];
  public selectedItem = {name: ""};

  onItemClicked(shoppingListItem) {
    this.selectedItem = shoppingListItem;
  }

  onAddItem(shoppingListItem) {
    this.shoppingListItems.push({name: shoppingListItem.value});
  }

  onDeleteItem() {
    this.shoppingListItems.splice(this.shoppingListItems.indexOf(this.selectedItem), 1);
  }

}
