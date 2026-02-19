import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-apply-member',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './apply-member.component.html',
  styleUrl: './apply-member.component.css'
})
export class ApplyMemberComponent {
memberForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.memberForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      address: [''],
      message: ['']
    });
  }

  get f() {
    return this.memberForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    if (this.memberForm.invalid) {
      return;
    }

    console.log('Form Data:', this.memberForm.value);
    alert('Application Submitted Successfully!');
    this.memberForm.reset();
    this.submitted = false;
  }
}
