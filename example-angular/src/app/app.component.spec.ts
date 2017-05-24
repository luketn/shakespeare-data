import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have sonnets`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.sonnets.length).toBeGreaterThan(1);
  }));

  it('should render a table with the expected header', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('table').querySelector('thead').querySelector('th:nth-child(1)').textContent).toBe('Number');
    expect(compiled.querySelector('table').querySelector('thead').querySelector('th:nth-child(2)').textContent).toBe('Sonnet');
  }));

  it('should render a table with rows bound to sonnets', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('table').querySelector('tbody').querySelector('td:nth-child(1)').textContent).toBe('1');
    expect(compiled.querySelector('table').querySelector('tbody').querySelector('td:nth-child(2)').textContent).toContain('fairest');
  }));
});
