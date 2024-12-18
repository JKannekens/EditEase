import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-upload',
  imports: [PdfViewerModule],
  templateUrl: './upload.component.html',
})
export class UploadComponent {
  selectedFile: File | null = null;
  selectedFileUrl: string | null = null;

  onFileUploadClick(): void {
    const inputElement = document.getElementById('fileInput');
    if (!inputElement) return;
    inputElement.click();
  }

  onFileRemoveClick(): void {
    this.selectedFile = null;
    this.selectedFileUrl = null;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.item(0);

    if (!file || !file.type.includes('pdf')) return;
    this.selectedFile = file;
    this.selectedFileUrl = URL.createObjectURL(file);
  }
}
