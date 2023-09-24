import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight : number = 180;
  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
   }
   @Input('pkmnBorderCard') borderColor : string;

   @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor);
   }

   @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
   }

  private setHeight(height: number){
    this.el.nativeElement.style.height = height + 'px';
  }
  private setBorder(color: string){
    let border ='solid 4px '+ color;
    this.el.nativeElement.style.border = border;
  }
}
// // Exercice 2 finis.
// defaultColor: string = '#015a69';
// defaultHeight: number = 180;
// constructor(private el: ElementRef){
//   this.setBorder(this.defaultColor);
//   this.setHeight(this.defaultHeight);
// }
// @Input('pkmnBorderCard') initialColor : string;
// @HostListener('mouseenter') onMouseEnter(){
//     this.setBorder(this.initialColor || this.defaultColor);
//     this.setHeight(this.defaultHeight);
// }
// @HostListener('mouseleave') onMouseLeave(){
//   this.setBorder(this.defaultColor);
//   this.setHeight(this.defaultHeight);
// }
// setHeight(height: number){
//   this.el.nativeElement.style.height = `${height}px`
// }
// setBorder(color : string){
//   this.el.nativeElement.style.border =`solid 4px ${color}`
// }
