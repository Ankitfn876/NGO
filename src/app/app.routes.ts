import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
    { path: 'apply-member', loadComponent: () => import('./features/apply-member/apply-member.component').then(m => m.ApplyMemberComponent) },
    { path: 'idcard', loadComponent: () => import('./features/id-card/id-card.component').then(m => m.IdCardComponent) },
    { path: 'events', loadComponent: () => import('./features/events/events.component').then(m => m.EventsComponent) },
    { path: 'donate', loadComponent: () => import('./features/donate/donate.component').then(m => m.DonateComponent) },
];