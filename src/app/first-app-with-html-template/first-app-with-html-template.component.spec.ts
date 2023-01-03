import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAppWithHtmlTemplateComponent } from './first-app-with-html-template.component';

describe('FirstAppWithHtmlTemplateComponent', () => {
  let component: FirstAppWithHtmlTemplateComponent;
  let fixture: ComponentFixture<FirstAppWithHtmlTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstAppWithHtmlTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstAppWithHtmlTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
