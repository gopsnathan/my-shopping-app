import { Directive, ElementRef, OnInit,  HostListener, HostBinding } from '@angular/core';

@Directive ({
    selector: '[ingredientColor]'
})
    
export class IngredientColorDirective implements OnInit {
    @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
    constructor( private colorChange: ElementRef) {}
    
    ngOnInit() {
        
    }
    
    @HostListener('mouseenter') mouseover(eventData: Event) {
        this.backgroundColor = "green";
    }
    
    @HostListener('mouseleave') mouseleave(eventData: Event) {
        //this.colorChange.nativeElement.style.backgroundColor = 'red';
        this.backgroundColor = "transparent";
    }
}