import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateBarbequeComponent } from './create-barbeque.component';

const routes: Routes = [
    {
        path: '',
        component: CreateBarbequeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateBarbequeRoutingModule {}
