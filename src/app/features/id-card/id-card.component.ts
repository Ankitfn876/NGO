import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-id-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './id-card.component.html',
  styleUrl: './id-card.component.css'
})
export class IdCardComponent {
 @ViewChild('idCard') idCard!: ElementRef;

  // Example logged-in user data (replace with API data)
  member = {
    name: 'Manoj Kumar',
    id: 'NGO-2025-001',
    role: 'Volunteer',
    mobile: '9876543210',
    photo: 'assets/boy.png'
  };
  
  downloadPDF() {
  const element = this.idCard.nativeElement;

  html2canvas(element, {
    scale: 3,              // 🔥 Important for HD quality
    useCORS: true,
    backgroundColor: null  // Keeps background proper
  }).then(canvas => {

    const imgData = canvas.toDataURL('image/png');

    // Custom ID card size (Credit Card size ratio)
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [86, 54]   // Standard ID Card Size (Width x Height)
    });

    pdf.addImage(imgData, 'PNG', 0, 0, 86, 54);
    pdf.save('NGO_ID_Card.pdf');
  });
}
}
