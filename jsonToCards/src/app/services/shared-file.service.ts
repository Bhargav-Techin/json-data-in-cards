import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedFileService {

  constructor() { }

  selectedFile: File | undefined;

  setSelectedFile(file: File): void {
    this.selectedFile = file;
  }

  async getSelectedFile(): Promise<any[] | undefined> {
    if (this.selectedFile) {
      try {
        // Read the file content as text
        const fileContent = await this.readFile(this.selectedFile);
        // Parse the JSON content into an array
        const jsonArray: any[] = JSON.parse(fileContent);
        return jsonArray;
      } catch (error) {
        console.error('Error reading or parsing file:', error);
        return undefined;
      }
    }
    return undefined;
  }

  private readFile(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        resolve(event.target.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsText(file);
    });
  }
}
