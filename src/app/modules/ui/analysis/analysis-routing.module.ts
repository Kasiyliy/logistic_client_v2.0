import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListAnalysisComponent} from 'src/app/modules/ui/analysis/list-analysis/list-analysis.component';

const routes: Routes = [

    {path: '', component: ListAnalysisComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysisRoutingModule { }
