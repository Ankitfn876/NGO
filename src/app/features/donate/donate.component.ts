import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-donate',
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule,NgFor],
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent {

  donateForm: FormGroup;
  selectedAmount: number | null = null;

  amounts = [500, 1000, 2000, 5000];

  constructor(private fb: FormBuilder) {
    this.donateForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      amount: ['', Validators.required],
      paymentMode: ['', Validators.required]
    });
  }

  selectAmount(value: number) {
    this.selectedAmount = value;
    this.donateForm.patchValue({ amount: value });
  }

  submitDonation() {
    if (this.donateForm.invalid) return;

    console.log(this.donateForm.value);
    alert("Thank you for your donation ❤️");
    this.donateForm.reset();
    this.selectedAmount = null;
  }
}
