import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TypographyComponent } from './typography/typography.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { IconsComponent } from './icons/icons.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { GridsComponent } from './grids/grids.component';
import { ExpandComponent } from './expand/expand.component';
import { CardsComponent } from './cards/cards.component';
import { SteppersComponent } from './steppers/steppers.component';
import { InputComponent } from './input/input.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { DialogsExampleComponent } from './dialogs-example/dialogs-example.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ScrollingComponent } from './scrolling/scrolling.component';


@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonsComponent,
    IconsComponent,
    ProgressSpinnerComponent,
    MenuComponent,
    ListComponent,
    GridsComponent,
    ExpandComponent,
    CardsComponent,
    SteppersComponent,
    InputComponent,
    DatePickerComponent,
    TooltipComponent,
    SnackbarComponent,
    DialogsComponent,
    DialogsExampleComponent,
    DataTableComponent,
    ScrollingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
