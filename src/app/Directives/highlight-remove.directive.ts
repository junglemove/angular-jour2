import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightRemove]'
})
export class HighlightRemoveDirective {

  constructor(el: ElementRef) { 
      el.nativeElement.style.backgroundColor = 'yellow';
  }

}
