import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completedStatus'
})
export class CompletedStatusPipe implements PipeTransform {

  transform(completed: boolean) {
    
      return completed ? 'green' : 'red';
    
  }

}
