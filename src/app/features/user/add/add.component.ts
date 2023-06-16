import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  usersForm!: FormGroup;
  message: string = '';

  constructor( private formBuilder: FormBuilder, private router: Router) {}

  // check matched passwords and repassword
  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const repassword = control.get('repassword')?.value;

    if (password !== repassword) {
      control.get('repassword')?.setErrors({ passwordMatch: true });
    } else {
      control.get('repassword')?.setErrors(null);
    }
  }

  // initial lifecircle CPN
  ngOnInit(): void {
    this.usersForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.maxLength(50), Validators.pattern('[^0-9][a-zA-Z0-9_]+')]],
      department: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.maxLength(125)]],
      namekatakana: ['', [Validators.required, Validators.maxLength(125)]],
      brithday: ['', [Validators.required]],
      mail: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.pattern('[^0-9]')]],
      password: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(8)]],
      japaneseLevel: ['', [Validators.required]],
    },  { validator: this.passwordMatchValidator });
  }

  // implement submit form
  onSubmit() {
    if (this.usersForm.valid) {
      // Perform form submission and handle success
      // Example: Call an API service to save the form data

      // Assuming the form submission is successful
      // Navigate to confirm screen 
      this.router.navigate(['/confirm']);
    } else {
      // Form is invalid, do error handling if needed
    }
  }
}
