import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [{ path: '', component: MainPageComponent },
{
    path: 'cliente-individual/:index', loadComponent: () =>
        import('./main-page/cliente-individual/cliente-individual.component')
            .then(m => m.ClienteIndividualComponent)
}];
