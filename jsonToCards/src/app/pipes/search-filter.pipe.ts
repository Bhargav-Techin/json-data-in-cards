import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(users: any[], searchText: string, selectedDomain?: string, selectedGender?: string, isAvailable?: boolean): any[] {
    if (!users) {
      return []; // Return an empty array if no users provided
    }
  
    // Convert search text to lowercase for case-insensitive search
    searchText = searchText ? searchText.toLowerCase() : '';
  
    return users.filter(user => {
      const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
      const domainMatch = !selectedDomain || user.domain.toLowerCase().includes(selectedDomain.toLowerCase());
      const genderMatch = !selectedGender || user.gender === selectedGender;
      const availabilityMatch = isAvailable === undefined || user.available === isAvailable;
  
      return fullName.includes(searchText) && domainMatch && genderMatch && availabilityMatch;
    });
  }
  

}
