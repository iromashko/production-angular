import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { CoreDataModule } from '@production-angular/core-data';
import { CoreStateModule } from '@production-angular/core-state';
import { MaterialModule } from '@production-angular/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { WidgetsDetailsComponent } from './widgets/widgets-details/widgets-details.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetsListComponent } from './widgets/widgets/widgets-list/widgets-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WidgetsComponent,
    WidgetsDetailsComponent,
    WidgetsListComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreDataModule,
    CoreStateModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
