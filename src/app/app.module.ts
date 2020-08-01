import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CustomOverlayContainer } from './theme/utils/custom-overlay-container';

import { AgmCoreModule, GoogleMapsAPIWrapper, AgmMarker } from '@agm/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { SharedModule } from './shared/shared.module';
import { PipesModule } from './theme/pipes/pipes.module';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppSettings } from './app.settings';
import { LoginComponent } from './login/login.component';

import { SidenavComponent } from './theme/components/sidenav/sidenav.component';
import { VerticalMenuComponent } from './theme/components/menu/vertical-menu/vertical-menu.component';
import { HorizontalMenuComponent } from './theme/components/menu/horizontal-menu/horizontal-menu.component';
import { BreadcrumbComponent } from './theme/components/breadcrumb/breadcrumb.component';
import { FlagsMenuComponent } from './theme/components/flags-menu/flags-menu.component';
import { FullScreenComponent } from './theme/components/fullscreen/fullscreen.component';
import { ApplicationsComponent } from './theme/components/applications/applications.component';
import { MessagesComponent } from './theme/components/messages/messages.component';
import { UserMenuComponent } from './theme/components/user-menu/user-menu.component';
import { ModalModule } from 'ngx-bootstrap';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { Data } from './fake backend/data.backend.data';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { PasswordDialogComponent } from './theme/components/user-menu/password-dialog/password-dialog.component';
import { ProfileDialogComponent } from './theme/components/user-menu/profile-dialog/profile-dialog.component';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component'
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ToasterModule } from 'angular2-toaster';
import { ToastrModule } from 'ngx-toastr';  
import {DragDropModule} from 'primeng/dragdrop';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AddNoteDialogComponent } from './shared/add-note-dialog/add-note-dialog.component';
import { DataTableModule } from 'angular2-datatable';
import { HelpVideoDialogComponent } from './shared/help-video-dialog/help-video-dialog.component';
import { ScheduledialogueComponent } from './scheduling/action-calendar/scheduledialogue/scheduledialogue.component';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  suppressScrollX: true 
};

@NgModule({
  imports: [
    BrowserModule, BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQDn2o5lkzBI4Sc09UUNiHPtNqlxQTYeA'
    }),
    PerfectScrollbarModule,
    ToasterModule.forRoot(),
    ToastrModule.forRoot()  ,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    SharedModule,
    PipesModule,
    TabViewModule,
    routing,
    ModalModule.forRoot(),
    HttpClientModule,
    MglTimelineModule,
    DragDropModule,
    HttpClientJsonpModule,
    TableModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
    DataTableModule,
    RichTextEditorModule,
    CKEditorModule
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    NotFoundComponent,
    SidenavComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    BreadcrumbComponent,
    FlagsMenuComponent,
    FullScreenComponent,
    ApplicationsComponent,
    MessagesComponent,
    UserMenuComponent,
    LoginComponent,
    PasswordDialogComponent,
    ConfirmDialogComponent,
    ProfileDialogComponent,
    AddNoteDialogComponent,HelpVideoDialogComponent,ScheduledialogueComponent, 
  ],
  entryComponents: [
    VerticalMenuComponent,
    PasswordDialogComponent,
    ConfirmDialogComponent,
    ProfileDialogComponent,
    AddNoteDialogComponent,
    HelpVideoDialogComponent,
    ScheduledialogueComponent
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },
    AppSettings,
    GoogleMapsAPIWrapper,
  { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
  { provide: OverlayContainer, useClass: CustomOverlayContainer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }   

//ng module InMemoryWebApiModule.forFeature(Data, { delay: 500 })