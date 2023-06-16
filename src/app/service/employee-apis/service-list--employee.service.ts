import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class ServiceListEmployeeService {

  private apiUrl = AppConstants.API_LIST_EMPLOYEES;
  constructor(private http: HttpClient) { }
  getListEmployee(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
}
