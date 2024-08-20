import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

// in bytes, compress images larger than 1MB
//const fileSizeMax = 1 * 560 * 560
// in pixels, compress images have the width or height larger than 1024px
// const widthHeightMax = 350
// const defaultWidthHeightRatio = 1
// const defaultQualityRatio = 0.7


const widthHeightMax = 800; // Example maximum width/height
const fileSizeMax = 200000; // Example maximum file size (in bytes)
const defaultWidthHeightRatio = 1;
const defaultQualityRatio = 0.8;

@Injectable({
  providedIn: 'root'
})
export class CompressImageService {

  constructor() { }

  compress(file: File): Observable<File> {
    const imageType = file.type || 'image/jpeg';
    const reader = new FileReader();
    reader.readAsDataURL(file);
  
    return new Observable(observer => {
      reader.onload = (ev: any) => {
        const img = this.createImage(ev);
  
        img.onload = () => {
          const imgWH = Math.max(img.width, img.height);
  
          const withHeightRatio = (imgWH > widthHeightMax) ? widthHeightMax / imgWH : defaultWidthHeightRatio;
          const qualityRatio = (file.size > fileSizeMax) ? fileSizeMax / file.size : defaultQualityRatio;
  
          const elem = document.createElement('canvas');
          elem.width = img.width * withHeightRatio;
          elem.height = img.height * withHeightRatio;
  
          const ctx = <CanvasRenderingContext2D>elem.getContext('2d');
          ctx.drawImage(img, 0, 0, elem.width, elem.height);
          ctx.canvas.toBlob(
            (blob: Blob | null) => {
              if (blob) {
                observer.next(new File([blob], file.name, {
                  type: imageType,
                  lastModified: Date.now(),
                }));
                observer.complete();
              } else {
                observer.error(new Error('Compression failed'));
              }
            },
            imageType,
            qualityRatio,
          );
        };
  
        img.onerror = error => observer.error(error);
      };
  
      reader.onerror = error => observer.error(error);
  
      return () => {
        // Cleanup logic if needed
        reader.onload = null;
        reader.onerror = null;
      };
    });
  }
  
  private createImage(ev: any): HTMLImageElement {
    const imageContent = ev.target.result;
    const img = new Image();
    img.src = imageContent;
    return img;
  }
  
}
