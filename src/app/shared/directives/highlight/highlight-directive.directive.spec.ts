import { ElementRef, Renderer2 } from '@angular/core';
import { HighlightDirectiveDirective } from './highlight-directive.directive';

describe('HighlightDirectiveDirective', () => {
  it('should create an instance', () => {
    // 1. Mock the ElementRef dependency
    const mockElementRef = new ElementRef(document.createElement('div'));
    const mockRenderer = {} as Renderer2;
    
    // 2. Pass the mock into the constructor (add any other missing arguments here if required)
    const directive = new HighlightDirectiveDirective(mockElementRef, mockRenderer);
    
    expect(directive).toBeTruthy();
  });
});
