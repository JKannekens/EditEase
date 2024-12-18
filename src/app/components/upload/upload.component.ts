import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  imports: [],
  templateUrl: './upload.component.html',
})
export class UploadComponent {
  selectedFile: File | null = null;

  onButtonClick(): void {
    const inputElement = document.getElementById('fileInput');
    if (!inputElement) return;
    inputElement.click();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (!file) return;
    this.selectedFile = file;
  }
}
