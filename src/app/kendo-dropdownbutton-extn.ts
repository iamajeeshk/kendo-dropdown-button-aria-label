import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'kendo-dropdownbutton',
})
export class KendoDropdownbuttonExtnDirective {
  constructor(public renderer: Renderer2, public hostElement: ElementRef) {}

  ngOnInit() {
    const ariaLabel = this.hostElement.nativeElement.getAttribute('aria-label');
    const buttonElement = this.hostElement.nativeElement.childNodes[0];
    this.renderer.setAttribute(buttonElement, 'aria-label', ariaLabel);
  }
}
