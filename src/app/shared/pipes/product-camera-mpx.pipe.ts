import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productCameraMpx'
})
export class ProductCameraMpxPipe implements PipeTransform {

  transform(camera: string): string {
    return camera + " mpx";
  }
}
