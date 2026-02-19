import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AppModule {}
