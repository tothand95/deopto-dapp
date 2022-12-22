import { Directive, ElementRef, inject, Input } from '@angular/core';
import { ElementType, ComponentProps, createElement } from 'react';
import { createRoot } from 'react-dom/client';

@Directive({
  selector: '[renderReact]'
})
export class RenderReactDirective<Comp extends ElementType> {
  @Input() reactComponent: Comp;
  @Input() props: ComponentProps<Comp>;

  private root = createRoot(inject(ElementRef).nativeElement)

  ngOnChanges() {
    this.root.render(createElement(this.reactComponent, this.props))
  }

  ngOnDestroy() {
    this.root.unmount();
  }

}
