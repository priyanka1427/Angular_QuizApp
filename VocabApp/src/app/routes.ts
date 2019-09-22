import {Routes} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { VocabComponent } from './vocab/vocab.component';
import { ResultComponent } from './result/result.component';

export const appRoutes : Routes = [
    {path : 'register' , component: RegisterComponent} ,
    {path : 'vocab' , component : VocabComponent},
    {path : 'result' , component : ResultComponent} ,
    {path : '' , redirectTo: '/register' , pathMatch:'full'}

];