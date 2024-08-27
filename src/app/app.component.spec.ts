import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { SquareBoxesComponent } from './square-boxes/square-boxes.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterOutlet, SquareBoxesComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('theme-switcher-app');
  });

  it('should include SquareBoxesComponent in the template', () => {
    const squareBoxesComponent = fixture.debugElement.query(By.directive(SquareBoxesComponent));
    expect(squareBoxesComponent).toBeTruthy();
  });
});
