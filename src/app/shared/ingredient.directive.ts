import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive ({
    selector: '[ingredientColor]'
})
    
export class IngredientColorDirective implements OnInit {
    constructor( private colorChange: ElementRef) {}
    
    ngOnInit() {
        this.colorChange.nativeElement.style.backgroundColor = 'green';
    }
}