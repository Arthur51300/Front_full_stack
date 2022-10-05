import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDirectivesColor]'
})
export class DirectivesColorDirective {


  constructor(private _el: ElementRef, private _renderer: Renderer2) { }

  @Input('appDirectivesColor')
  set moyenne(moyenne: number){
    if(moyenne >= 0) {
      this._renderer.setStyle(this._el.nativeElement, 'color', 'yellow')
    } else {
      this._renderer.setStyle(this._el.nativeElement, 'color', 'red')
    }
  }

}
