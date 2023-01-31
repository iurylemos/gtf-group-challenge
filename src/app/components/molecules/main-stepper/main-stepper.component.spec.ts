import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatError } from '@angular/material/form-field';
import { By } from '@angular/platform-browser';
import { AppModule } from 'src/app/app.module';
import { MainStepperComponent } from './main-stepper.component';

describe('MainStepperComponent', () => {
  let component: MainStepperComponent;
  let fixture: ComponentFixture<MainStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainStepperComponent],
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MainStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  async function sendInput(inputElement: any, text: string): Promise<any> {
    inputElement.value = text;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    return fixture.whenStable();
  }

  it('should show the value formatted when change the input', async () => {
    await fixture.whenStable();
    const input = fixture.debugElement.query(By.css('input'));
    await sendInput(input.nativeElement, '11111111111');

    fixture.detectChanges();
    expect(input.nativeElement.value).toBe('111.111.111-11');
  });
});
