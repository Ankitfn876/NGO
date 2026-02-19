import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatIconModule, MatButtonModule, CommonModule, MatListModule, MatFormFieldModule, MatInputModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  images: string[] = [
    'https://kdssevasamiti.in/testinomial-img/IMG-20250811-WA0010_08142025131344.jpg',
    'https://kdssevasamiti.in/testinomial-img/IMG-20250812-WA0020_08142025131504.jpg',
    'https://kdssevasamiti.in/testinomial-img/IMG-20250811-WA0009_08142025131539.jpg'
  ];
  currentIndex = 0;
  intervalId: any;

  touchStartX = 0;
  touchEndX = 0;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  handleSwipe(): void {
    if (this.touchStartX - this.touchEndX > 50) {
      this.nextSlide(); // swipe left
    }

    if (this.touchEndX - this.touchStartX > 50) {
      this.prevSlide(); // swipe right
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
  newsList: string[] = [
    'कोरबा जिले के सभी कार्यकर्ता हुए सम्मानित',
    'कटघोरा ब्लॉक की मंडल स्तरीय बैठक सम्पन्न',
    'KDS वृक्षारोपण कार्यक्रम आयोजित किया गया',
    'कर्म धैर्य संचाल सेवा समिति बैठक सम्पन्न'
  ];
   members = [
    {
      name: 'Sunita Devi',
      role: 'Gramin Mahila Mitra',
      image: '/assets/boy.png'
    },
    {
      name: 'Ravi Kumar',
      role: 'Volunteer',
      image: '/assets/boy.png'
    }
  ];
  features = [
    { icon: 'qr_code', title: 'QR ID Card', desc: 'QR Code के साथ सदस्य ID कार्ड जारी करें' },
    { icon: 'receipt', title: 'Donation Receipt', desc: 'डोनेशन के बाद ऑटो रसीद जारी करें' },
    { icon: 'workspace_premium', title: 'Certificates', desc: 'अच्छा कार्य करने पर सर्टिफिकेट जारी करें' },
    { icon: 'account_circle', title: 'Member Control', desc: 'Block / Unblock / Deactivate सुविधा' }
  ];

  events = [
    { title: 'Health Camp 2026', date: '15 Feb 2026' },
    { title: 'Education Drive', date: '22 Mar 2026' }
  ];
  projects = [
  {
    title: 'Social Welfare',
    image: 'https://kdssevasamiti.in/motive-img/image%201_0592024091958.png'
  },
  {
    title: 'Health & Research',
    image: 'https://kdssevasamiti.in/motive-img/image%201%20(2)_0592024092033.png'
  },
  {
    title: 'Education & Training',
    image: 'https://kdssevasamiti.in/motive-img/image%201%20(3)_0592024092157.png'
  },
  {
    title: 'Human Rights',
    image: 'https://kdssevasamiti.in/motive-img/image%201%20(4)_0592024092326.png'
  }
];

}
