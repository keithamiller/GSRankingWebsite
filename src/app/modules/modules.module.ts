import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingTableComponent } from './ranking-table/ranking-table.component';
import {MatTableModule, MatSortModule, MatSelectModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule
  ],
  declarations: [RankingTableComponent]
})
export class ModulesModule { }
