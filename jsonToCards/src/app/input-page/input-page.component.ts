import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedFileService } from '../services/shared-file.service';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.css'] // Corrected the property name to 'styleUrls'
})
export class InputPageComponent {

  constructor(private sharedFileService: SharedFileService, private route: Router) {}

  selectedFile: File | undefined;

  infoMessage: string = '';

  onSelect(event: any): void {
    try {
        const selectedFile: File = event.addedFiles[0];

        if (selectedFile.type === 'application/json') {
            this.selectedFile = selectedFile;
            this.displayError("File upload successfully");
            // console.log(this.selectedFile);
        } else {
            throw new Error('File type should be JSON.');
        }
    } catch (error: any) {
        this.displayError(error.message);
    }
}

displayError(message: string): void {
  this.infoMessage = message;
}


  onRemove(event: any) {
    console.log(event);
    this.selectedFile = undefined;
  }

  async handleFileInput() {
    const file = this.selectedFile;
    if (file) {
      try {
        this.sharedFileService.setSelectedFile(file)
        this.route.navigate(['cards']);
        // Now you have the content of the uploaded file
        // console.log(content);
      } catch (error) {
        console.error('Error reading file:', error);
      }
    }
  }
}
