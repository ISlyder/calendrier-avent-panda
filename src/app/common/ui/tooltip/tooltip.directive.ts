import {
  ComponentRef,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  HostListener,
  Input,
  OnDestroy,
  ViewContainerRef
} from '@angular/core';
import {TooltipComponent} from "./tooltip.component";

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective implements OnDestroy {
  @Input() tooltip = '';

  private componentRef!: ComponentRef<TooltipComponent>;

  constructor(private elementRef: ElementRef,
              private viewContainerRef: ViewContainerRef) {
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.componentRef) {
      return;
    }
    this.componentRef = this.viewContainerRef.createComponent(TooltipComponent);
    const domElem =
      (this.componentRef.hostView as EmbeddedViewRef<any>)
        .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    this.setTooltipComponentProperties();
  }

  private setTooltipComponentProperties() {
    if (!this.componentRef) {
      return;
    }
    this.componentRef.instance.tooltip = this.tooltip;
    const {left, right, bottom} =
      this.elementRef.nativeElement.getBoundingClientRect();
    this.componentRef.instance.left = (right - left) / 2 + left;
    this.componentRef.instance.top = bottom;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.destroy();
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  private destroy() {
    if (!this.componentRef) {
      return;
    }
    this.componentRef.destroy();
    this.componentRef = null!;
    this.viewContainerRef.clear();
  }
}
