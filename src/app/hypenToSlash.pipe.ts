import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
  name: 'hyphenToSlash',
  pure: false
})
export class HyphenSlashPipe implements PipeTransform {
  transform(inputString: string): string {
    inputString = inputString.replace('-','/');
    return inputString
  }
}