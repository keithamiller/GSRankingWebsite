import { RankingTableComponent } from "./modules/ranking-table/ranking-table.component";
import { ModuleWithProviders} from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: 'ranking-table', component: RankingTableComponent},
    {path: '', redirectTo: '/ranking-table', pathMatch: 'full'}
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);