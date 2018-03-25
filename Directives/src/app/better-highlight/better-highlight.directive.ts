import { Directive, Renderer2, OnInit, ElementRef, HostListener,
  HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultBackgroundColor = 'transparent';
  // tslint:disable-next-line:no-input-rename
  @Input('appBetterHighlight') highlightBackgroundColor = 'blue';
  @Input() defaultColor = 'black';
  @Input() highlightColor = 'pink';
  @HostBinding('style.backgroundColor') backgroundColor;
  @HostBinding('style.color') color;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultBackgroundColor;
    this.color = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightBackgroundColor;
    this.color = this.highlightColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'pink');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultBackgroundColor;
    this.color = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'transparent');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
  }
}
