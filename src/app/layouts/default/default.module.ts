import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { CollectionsComponent } from 'src/app/modules/collections/collections.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResolutionRateComponent } from 'src/app/modules/dashboard/resolution-rate/resolution-rate.component';
import { SettlementsOffersComponent } from 'src/app/modules/dashboard/settlements-offers/settlements-offers.component';
import { StateWiseComponent } from 'src/app/modules/dashboard/state-wise/state-wise.component';
import { PortfolioDistributionComponent } from 'src/app/modules/dashboard/portfolio-distribution/portfolio-distribution.component';
import { ResolutionTrendsComponent } from 'src/app/modules/dashboard/resolution-trends/resolution-trends.component';
import { ChartsModule } from 'ng2-charts';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { BlockComponent } from 'src/app/modules/dashboard/block/block.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    CollectionsComponent,
    ResolutionRateComponent,
    SettlementsOffersComponent,
    StateWiseComponent,
    PortfolioDistributionComponent,
    ResolutionTrendsComponent,

    HomeComponent,
    BlockComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    
    ChartsModule
  ],
  exports:[
    DefaultComponent
  ]
})
export class DefaultModule { }
