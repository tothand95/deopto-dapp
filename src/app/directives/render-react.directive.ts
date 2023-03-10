import { Directive, ElementRef, inject, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ElementType, createElement } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

@Directive({
  selector: '[renderReact]'
})
export class RenderReactDirective<Comp extends ElementType> implements OnInit, OnChanges, OnDestroy {
  @Input() reactComponent: Comp;

  private root = inject(ElementRef).nativeElement;

  ngOnInit() {
    this.renderReactComp();
  }

  ngOnChanges() {
    this.renderReactComp();
  }

  ngOnDestroy() {
    unmountComponentAtNode(this.root);
  }

  private renderReactComp() {
    render(createElement(this.reactComponent), this.root);
  }
}
