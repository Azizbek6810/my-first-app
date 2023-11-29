import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { HeroComponent } from './components/hero/hero.component';
import { TrustedByComponent } from './components/trusted-by/trusted-by.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { DesignerComponent } from './components/designer/designer.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    HeroComponent,
    TrustedByComponent,
    ServicesComponent,
    ProjectsComponent,
    BlogsComponent,
    DesignerComponent,
    TestimonialsComponent,
    FaqComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
