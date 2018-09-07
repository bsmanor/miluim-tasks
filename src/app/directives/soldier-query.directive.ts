import { Directive, Input, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { Soldier } from './../../assets/models/models';

@Directive({
  selector: '[appSoldierQuery]'
})
export class SoldierQueryDirective {

  constructor(
    private el: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input() soldier: Soldier;
  @Input() set appSoldierQuery(query: string) {
    if (this.soldier.firstName.includes(query)) {
      this.el.nativeElement.style.color = 'red';
    }
  }

}
