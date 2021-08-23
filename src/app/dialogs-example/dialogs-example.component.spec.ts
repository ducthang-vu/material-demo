import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsExampleComponent } from './dialogs-example.component';
import { MAT_DIALOG_DATA, MatDialogContent } from '@angular/material/dialog';

describe('DialogsExampleComponent', () => {
  let component: DialogsExampleComponent;
  let fixture: ComponentFixture<DialogsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogsExampleComponent, MatDialogContent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: { name: 'testName' }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('template text', () => {
    const content = fixture.debugElement.nativeElement.querySelector('mat-dialog-content')
    expect(content.innerText).toBe("You will be logged out: testName")
  })
});
