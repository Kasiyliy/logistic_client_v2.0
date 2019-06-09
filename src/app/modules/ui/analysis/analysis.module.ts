import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnalysisRoutingModule} from 'src/app/modules/ui/analysis/analysis-routing.module';;
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ListAnalysisComponent} from 'src/app/modules/ui/analysis/list-analysis/list-analysis.component';
import {NgxSmartModalModule} from 'ngx-smart-modal';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    ListAnalysisComponent,
    
  ],
  imports: [
    CommonModule,
    AnalysisRoutingModule,
    NgxSmartModalModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
    
   
  ],
  providers: [
    FormBuilder,
    HttpClient,
  ]
})
export class AnalysisModule {
}
