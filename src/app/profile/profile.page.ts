import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  imageUrl: string | ArrayBuffer | null = null;

  constructor() { }

  ngOnInit() {
  }
  
  triggerFileInput(fileInput: HTMLInputElement) {
    fileInput.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrl = reader.result; // Store the base64 image URL
      };
      reader.readAsDataURL(file); // Convert the image to base64 format
    }
  }

}
