import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { NotfoundpageComponent } from 'src/app/pages/notfoundpage/notfoundpage.component';
import { OffersComponent} from "./pages/offers/offers.component";
import { DeliveryMapComponent } from 'src/delivery-map/delivery-map.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tracking',
    component: DeliveryMapComponent
  },
  {
    path: 'offers',
    component: OffersComponent
  },
  {
    path: '**',
    component: NotfoundpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
