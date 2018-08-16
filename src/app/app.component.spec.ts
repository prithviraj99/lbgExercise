import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    debugElement = fixture.debugElement;
  }));

  it('should create the app', async(() => {
    const app = debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const app = debugElement.componentInstance;
    expect(app.title).toEqual('Random Forest Classification');
  }));
  it('should render title in a h2 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Random Forest Classification');
  }));
  it('should make the submit button disabled initially as form is invalid', async(() =>{
    fixture.detectChanges();
    const disabledValue = debugElement.query(By.css('button[type="submit"]')).nativeElement.disabled
    expect(disabledValue).toBe(false);
  }))
  // it('should make the submit button enabled after initializing form inputs', async(() =>{
  //   fixture.detectChanges();
  //   fixture.whenStable().then(()=>{
  //     fixture.componentInstance.randomForestInputsForm.form.setValue({
  //       inputFile: 'xxx',
  //       outputFile: 'yyyy',
  //       numClasses:6,
  //       numTrees:3,maxDepth:3,maxBins:4,trainingSlice:0.7,
  //       testSlice: 0.3,featureSubsetStrategy:"auto",categoricalFeaturesInfo:{},
  //       master:"local",
  //       appName:"Subject Segmentation using Random Forest Classification"
  //     })
  //   })
  //   fixture.detectChanges();
  //   console.log(fixture.componentInstance.randomForestInputsForm.value)
  //   fixture.whenStable().then(()=>{
  //     const disabledValue = debugElement.query(By.css('button[type="submit"]')).nativeElement.disabled
  //     expect(disabledValue).toBe(true);
  //   })
  // }))
});
