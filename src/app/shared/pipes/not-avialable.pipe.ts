import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notAvialable'
})
export class NotAvialablePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
   if(value != '' && value !== undefined && value !== null){
    return value;
   }
   else{
    return 'Not Available';
   }

  }

}
