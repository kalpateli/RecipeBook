import { Directive ,HostListener ,HostBinding} from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})

export class DropdownDirective{
    
    
   @HostBinding('class.open') isOpen=false;


    @HostListener('click') toggleOpen(){
        console.log("hello");
        console.log(this.isOpen);

        this.isOpen = !this.isOpen;
    }

    // constructor(){}


}