import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneCameraMpx'
})
export class PhoneCameraMpxPipe implements PipeTransform {

  transform(camera: string): string {
    return camera + " mpx";
  }
}
