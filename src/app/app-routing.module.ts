import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypographyComponent } from './typography/typography.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { IconsComponent } from './icons/icons.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
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
import { DataTableComponent } from './data-table/data-table.component';
import { ScrollingComponent } from './scrolling/scrolling.component';

const routes: Routes = [
  { path: '', component: ButtonsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'progress-spinner', component: ProgressSpinnerComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'list', component: ListComponent },
  { path: 'grids', component: GridsComponent },
  { path: 'expand', component: ExpandComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'steppers', component: SteppersComponent },
  { path: 'input', component: InputComponent },
  { path: 'date', component: DatePickerComponent },
  { path: 'tooltip', component: TooltipComponent },
  { path: 'snackbar', component: SnackbarComponent },
  { path: 'dialogs', component: DialogsComponent },
  { path: 'table', component: DataTableComponent },
  { path: 'scrolling', component: ScrollingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
