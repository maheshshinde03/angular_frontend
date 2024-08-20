import { Component, NgZone, OnInit } from '@angular/core';
import { CompressImageService } from 'src/app/core/services/imageUpload/compress-image.service';
import { take } from 'rxjs/operators';
import { UploadImageService } from 'src/app/core/services/imageUpload/upload-image.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  userId = 1;
  formData = new FormData;
  profileImage: string;


  constructor(private compressImageService : CompressImageService,
    private uploadImageService : UploadImageService,
    private toastr: ToastrService,
    private router: Router,
    private zone: NgZone
  ){
    this.loadData();
  }

  ngOnInit(): void {
    //debugger;
    // this.uploadImageService.getProfileImage(this.userId).subscribe((imageBlob: Blob) =>{
    //   const reader = new FileReader();
    //     reader.onloadend = () => {
    //       this.profileImage = reader.result as string;
    //     };
    //     reader.readAsDataURL(imageBlob);
    // }) 
  }

  uploadedFiles: Array<File>;

  uploadImage(element: any) {
    this.uploadedFiles = [];
    const image: File = element.target.files[0];
   
    
    // Initialize formData to ensure it's empty before adding new files
    this.formData = new FormData();
  
    // Compress the image
    this.compressImageService.compress(image)
      .pipe(take(1))
      .subscribe(
        (compressedImage: File) => {
          //debugger;
          this.formData.append("upload", compressedImage);

           // Check if the image is present in FormData
           if (this.formData.has('upload')) {
            console.log('Image is present in FormData');
          } else {
            console.error('Image is not present in FormData');
          }
  
          // Now you can upload the compressed image
          console.log(this.formData);
          this.uploadImageService.uploadProfileImage(this.userId, this.formData)
            .subscribe(
              (res: any) => {
                console.log('Image uploaded successfully', res);
                // Add any success handling logic here
                this.toastr.success('Image uploaded successfully.', 'Success', {closeButton:true, positionClass:'toast-top-right', timeOut:2000});
              //   this.zone.run(() => {
              //     this.router.navigate(['/about']);
              // });    
              //setTimeout(this.loadData, 2000);
                   this.loadData();  
              },
              (error: any) => {
                console.error('Error uploading image', error);
                alert('Error uploading image. Please try again later.');
              }
            );
        },
        (e) => {
          console.error('Error compressing image', e);
          alert('Error compressing image. Please try again later.');
        }
      );
  }

  loadData(){
    this.uploadImageService.getProfileImage(this.userId).subscribe((imageBlob: Blob) =>{
      const reader = new FileReader();
        reader.onloadend = () => {
          this.profileImage = reader.result as string;
        };
        reader.readAsDataURL(imageBlob);
    }) 
  }

}
