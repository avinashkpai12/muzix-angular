import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SearchComponent } from './search/search.component';
import { TracklistComponent } from './tracklist/tracklist.component';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TracklistService } from './tracklist/tracklist.service';
import { DeletetrackComponent } from './deletetrack/deletetrack.component';
import { ChildcardComponent } from './childcard/childcard.component';
import { ChildcardwishlistComponent } from './childcardwishlist/childcardwishlist.component';
import { CrudmethodsComponent } from './crudmethods/crudmethods.component';



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'tracklist/:value', component: TracklistComponent},
  { path: 'wishlist', component: WishlistComponent},
  { path: 'deletetrack/:trackId', component: DeletetrackComponent},
  // { path: '', redirectTo: '/home', pathMatch: 'full'},
  // { path: '**', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WishlistComponent,
    SearchComponent,
    TracklistComponent,
    DeletetrackComponent,
    ChildcardComponent,
    ChildcardwishlistComponent,
    CrudmethodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [TracklistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
