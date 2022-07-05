import {Routes} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {BuyComponent} from "../buy/buy.component";
import {ContactComponent} from "../contact/contact.component";
import {AboutComponent} from "../about/about.component";
import {AppleDetailComponent} from "../apple-detail/apple-detail.component";
import {PlaceOrderComponent} from "../place-order/place-order.component";
import {IphonComponent} from "../iphon/iphon.component";
import {IpadComponent} from "../ipad/ipad.component";
import {AirpodsComponent} from "../airpods/airpods.component";
import {MacComponent} from "../mac/mac.component";
import {ApplewatchComponent} from "../applewatch/applewatch.component";
import {AcsesComponent} from "../acses/acses.component";
export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'buy',
    component: BuyComponent
  },
  {
    path: 'iphon',
    component: IphonComponent
  },
  {
    path: 'ipad',
    component: IpadComponent
  },
  {
    path: 'airpods',
    component: AirpodsComponent
  },
  {
    path: 'mac',
    component: MacComponent
  },
  {
    path: 'applewatch',
    component: ApplewatchComponent
  },
  {
    path: 'acses',
    component: AcsesComponent
  },
  {
    path: 'apple-detail/:name ',
    component: AppleDetailComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'order',
    component: PlaceOrderComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
