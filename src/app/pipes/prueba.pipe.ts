import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'prueba'
})
export class PruebaPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}
  
  transform(url: any): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
