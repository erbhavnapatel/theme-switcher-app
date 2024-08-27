import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SquareBoxesComponent } from './square-boxes.component';
import { By } from '@angular/platform-browser';

describe('SquareBoxesComponent', () => {
  let component: SquareBoxesComponent;
  let fixture: ComponentFixture<SquareBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquareBoxesComponent, BrowserAnimationsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have light theme initially', () => {
    expect(component.currentTheme).toBe('light-theme');
    const container = fixture.debugElement.query(By.css('.container'));
    expect(container.nativeElement.classList).toContain('light-theme');
  });

  it('should toggle to dark theme', () => {
    component.toggleTheme();
    fixture.detectChanges();
    expect(component.currentTheme).toBe('dark-theme');
    const container = fixture.debugElement.query(By.css('.container'));
    expect(container.nativeElement.classList).toContain('dark-theme');
  });

  it('should toggle to light theme', () => {
    component.toggleTheme(); // Toggle to dark theme first
    fixture.detectChanges();
    component.toggleTheme(); // Toggle back to light theme
    fixture.detectChanges();
    expect(component.currentTheme).toBe('light-theme');
    const container = fixture.debugElement.query(By.css('.container'));
    expect(container.nativeElement.classList).toContain('light-theme');
  });

  it('should animate boxes on theme change', () => {
    const spy = spyOn(component, 'toggleTheme').and.callThrough();

    component.toggleTheme();
    fixture.detectChanges();

    const boxElements = fixture.debugElement.queryAll(By.css('.box'));
    boxElements.forEach((box) => {
      expect(box.nativeElement.style.transition).toContain('transform 0.5s');
    });

    expect(spy).toHaveBeenCalled();
  });
});
