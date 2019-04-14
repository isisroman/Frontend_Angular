import {Routes} from '@angular/router';
import { ListCargoComponent } from './cargo/list-cargo/list-cargo.component';
import { EditCargoComponent } from './cargo/edit-cargo/edit-cargo.component';
import { AddCargoComponent } from './cargo/add-cargo/add-cargo.component';

import { ListOperativoComponent} from './operativo/list-operativo/list-operativo.component';
import { AddOperativoComponent} from './operativo/add-operativo/add-operativo.component';
import { EditOperativoComponent} from './operativo/edit-operativo/edit-operativo.component';

export const ROUTES: Routes = [
    { path: 'add-cargo', component: AddCargoComponent},
    { path: 'list-cargo', component: ListCargoComponent},
    { path: 'edit-cargo', component: EditCargoComponent},

    { path: 'list-operativo', component: ListOperativoComponent},
    { path: 'add-operativo', component: AddOperativoComponent},
    { path: 'edit-operativo', component: EditOperativoComponent},
    { path: '', pathMatch:'full', redirectTo:'list-operativo'},
    { path: '**', pathMatch: 'full', redirectTo: 'list-operativo'},
];