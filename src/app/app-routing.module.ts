import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from "./components/contact/contact.component";
import {GalleryComponent} from "./components/gallery/gallery.component";
import {AboutComponent} from "./components/about/about.component";

const routes: Routes = [
  {path: 'contact/:id', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'gallery', component: GalleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
