import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  constructor(private addClass: ElementRef) { }
  @HostListener('click') toggleClass(event: Event) {
      this.isOpen = !this.isOpen;
  }
}
