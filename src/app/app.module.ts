import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BuyComponent} from './buy/buy.component';
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {AppleDetailComponent} from './apple-detail/apple-detail.component';
import '@angular/common/locales/global/ru';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AppleService} from "./services/apple.service";
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {LoginComponent} from './login/login.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSliderModule} from "@angular/material/slider";
import {baseURL} from "./shared/baseurl";
import {HttpService} from "./services/http.service";
import {HttpClientModule} from "@angular/common/http";
import {PopupComponent} from './popup/popup.component';
import {OrderComponent} from './order/order.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {SignUpComponent} from './sign-up/sign-up.component';
import {PlaceOrderComponent} from './place-order/place-order.component';
import { HighlightDirective } from './directives/highlight.directive';
import { SpinnerComponent } from './spinner/spinner.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {IphonComponent} from "./iphon/iphon.component";
import {IpadComponent} from "./ipad/ipad.component";
import {AirpodsComponent} from "./airpods/airpods.component";
import {MacComponent} from "./mac/mac.component";
import {ApplewatchComponent} from "./applewatch/applewatch.component";
import {AcsesComponent} from "./acses/acses.component";

@NgModule({
  declarations: [
    AppComponent,
    BuyComponent,
    AppleDetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    PopupComponent,
    OrderComponent,
    SignUpComponent,
    PlaceOrderComponent,
    HighlightDirective,
    SpinnerComponent,
    ToolbarComponent,
    IphonComponent,
    IpadComponent,
    AirpodsComponent,
    MacComponent,
    ApplewatchComponent,
    AcsesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatBadgeModule
  ],
  providers: [
    AppleService,
    {
      provide: 'BaseURL',
      useValue: baseURL
    },
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}




