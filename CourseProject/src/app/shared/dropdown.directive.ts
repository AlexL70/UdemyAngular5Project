import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') mouseclick() {
    const openCls = 'open';
    if (this.elRef.nativeElement.classList.contains(openCls)) {
      this.renderer.removeClass(this.elRef.nativeElement, openCls);
    } else {
      this.renderer.addClass(this.elRef.nativeElement, openCls);
    }
  }
}
