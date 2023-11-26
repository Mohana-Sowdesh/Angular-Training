import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  /**
   * Function to add 'Mr/Ms' salutation to members name
   * @param memberName 
   * @param gender 
   * @returns - Member name with 'Mr./Ms.' added
   */
  transform(memberName: string, gender: string): string {
    if(gender === "Male")
      return  'Mr.'+memberName;
    else  
      return 'Ms.'+memberName;
  }

}
