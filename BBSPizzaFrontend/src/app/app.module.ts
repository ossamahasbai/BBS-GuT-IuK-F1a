import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { NotfoundpageComponent } from 'src/app/pages/notfoundpage/notfoundpage.component';
import { DeliveryMapComponent } from '../delivery-map/delivery-map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CustomizerComponent } from './pages/customizer/customizer.component';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChecklistDatabase } from './pages/customizer/customizer.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { OffersComponent } from './pages/offers/offers.component';
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from "@angular/material/list";
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundpageComponent,
    DeliveryMapComponent,
    CustomizerComponent,
    OffersComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    LeafletModule,
    MatDialogModule,
    MatTreeModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatDividerModule,
    MatExpansionModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule,
    NgFor,
    NgIf
  ],
  providers: [
    MatDialog,
    ChecklistDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
