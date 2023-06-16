import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AppConstants } from "../../../app-constants";
import { Router, ActivatedRoute } from '@angular/router';

import { ServiceListEmployeeService } from 'src/app/service/employee-apis/service-list--employee.service';
import { DepartmentListApiService } from 'src/app/service/department-apis/department-list--api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  listEmployee : any;
  listDepartment : any;
  searchValue: string = '';

  constructor(
    public http: HttpClient,
    private apiListEmployee: ServiceListEmployeeService,
    private apiListDepartment: DepartmentListApiService,
    private route: ActivatedRoute,
    private router : Router
  ) { }

  search(){
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: this.searchValue }
    });
  }

  ngOnInit(): void {

    // test call api auto inject token to header
    this.http.post(AppConstants.BASE_URL_API + "/test-auth", null)
    .subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      }
    });

    // call Apis list user
    this.apiListEmployee.getListEmployee()
    .subscribe({
      next :(data: any) => {
      this.listEmployee = data;
      console.log('data', data);
      },
      error: (err) => {
        console.log(err);
      }
    });

    //call apis list department
    this.apiListDepartment.getListDepartments()
    .subscribe({
      next :(data: any) => {
      this.listDepartment = data;
      console.log('data', data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  };
}
