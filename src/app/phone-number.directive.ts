import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appPhoneNumber]'
})
export class PhoneNumberDirective {
  constructor(private el: ElementRef) { }

  
  @HostListener('input',['$event'])
  
  onInput(event:any): void {
    if (event.target.value.length === 1){
      const inputValue = event.target.value;
      console.log(inputValue)
      event.target.value = '+1 ' + inputValue.substring(1);
      
    }

   
// const input = event.target as HTMLInputElement;

// let trimmed = input.value.replace(/\s+/g, '');

// if (trimmed.length > 14) {
//   trimmed = trimmed.substr(0, 14);
// }


// trimmed = trimmed.replace(/-/g,'');

//  let numbers = [];
 
//  numbers.push(trimmed.substr(0,3));
//  if(trimmed.substr(3,2)!=="")
//  numbers.push(trimmed.substr(3,3));
//  if(trimmed.substr(6,3)!="")
//  numbers.push(trimmed.substr(6,4));


// input.value = numbers.join('-');


}

 

}
