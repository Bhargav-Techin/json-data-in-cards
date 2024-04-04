import { Component, OnInit, HostListener } from '@angular/core';
import { SharedFileService } from '../services/shared-file.service';
import { Users } from '../model/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-page',
  templateUrl: './cards-page.component.html',
  styleUrls: ['./cards-page.component.css']
})
export class CardsPageComponent implements OnInit {

  
  constructor(private sharedFileService: SharedFileService, private router: Router) {}
  jsonData: Users[] = [];
  searchText: string = '';
  selectedDomain: string = '';
  selectedGender: string = '';
  isAvailable: boolean = false;
  ngOnInit(): void {
    this.getJsonData();
  }
  
  // @HostListener('window:beforeunload', ['$event'])
  // handleWindowReload(event: any): void {
  //   // Display a confirmation dialog to warn about potential data loss
  //   const confirmationMessage = 'Changes you made may not be saved. Are you sure you want to leave?';
  //   event.returnValue = confirmationMessage;
  // }

  navigateToHome(): void {
    this.router.navigate(['/home']); // Replace '/home' with your actual home route
  }
  

  async getJsonData(): Promise<void> {
    try {
      // Call the getSelectedFile method from the service
      const selectedData = await this.sharedFileService.getSelectedFile();

      if (selectedData) {
        // Store the data in your component's array
        this.jsonData = selectedData;
        console.log('Data retrieved successfully:', this.jsonData);
      } else {
        console.warn('No data found or error occurred while reading the file.');
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  }


}

