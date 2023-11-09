import { Component, ViewChild ,OnInit, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit{
  @ViewChild('nameInput')name:ElementRef;
  @ViewChild('amountInput')amount:ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();




  constructor(private slService : ShoppingListService){}

  ngOnInit(): void {
  }

  onAddItem(){
    const inpName = this.name.nativeElement.value;
    const inpAmount = this.amount.nativeElement.value;
    const newIngredient = new Ingredient(inpName,inpAmount);
    // this.ingredientAdded.emit(newIngredient);
    this.slService.addIngredient(newIngredient);
  }
}
