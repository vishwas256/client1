import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education';
import { Experience } from '../model/experience';
import { Profile } from '../model/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  api = 'api/profile';

  constructor(private httpClient: HttpClient) {}
  getProfile(): Observable<any> {
    return this.httpClient.get(this.api);
  }
  getProfiles(): Observable<any> {
    return this.httpClient.get(this.api + '/all');
  }

  createProfile(profileData: Profile): Observable<any> {
    return this.httpClient.post(this.api, profileData);
  }
  addExperience(experienceData: Experience): Observable<any> {
    return this.httpClient.post(this.api + '/experience', experienceData);
  }
  addEducation(educationData: Education): Observable<any> {
    return this.httpClient.post(this.api + '/education', educationData);
  }
  getProfileDetailsByUserId(userId: string) {
    return this.httpClient.get('/api/profile/user/' + userId);
  }
  deleteProfile(): Observable<any> {
    return this.httpClient.delete('/api/profile');
  }

  createExperience(experience: Experience): Observable<any> {
    return this.httpClient.post('/api/profile/experience', experience);
  }
  createEducation(education: Education): Observable<any> {
    return this.httpClient.post('/api/profile/education', education);
  }

  deleteExperience(id: string): Observable<any> {
    return this.httpClient.delete('/api/profile/experience/' + id);
  }

  deleteEducation(id: string): Observable<any> {
    return this.httpClient.delete('/api/profile/education/' + id);
  }
}
