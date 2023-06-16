import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/app-constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentListApiService {

  constructor(private http: HttpClient) { }
  private apiUrl = AppConstants.API_LIST_DEPARTMENT;
  getListDepartments(): Observable<any>{
    return this.http.get(this.apiUrl);
  }
}
