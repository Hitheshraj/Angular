import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  
  //Allows to directly bind
  @HostBinding('style.backgroundColor')
  backgroundcolor:string='';

  @Input()//binding
  deafaultColor:string='';

  @Input()
  highlightColor:string='';

  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }
  ngOnInit(): void {//Loads with the page to the component first and then other mouse event work
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'lightblue'
    );
  }
  @HostListener('mouseenter')
  mouseover(eventData:Event){
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'lightblue'
    // );

    // this.backgroundcolor='orangered';

    this.backgroundcolor=this.deafaultColor;
  }
  @HostListener('mouseleave')
  mouseleave(eventData:Event){
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );

    // this.backgroundcolor='transparent';

    this.backgroundcolor=this.highlightColor;
  }
}
