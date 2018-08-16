import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('randomForestInputsForm') randomForestInputsForm: NgForm;
  title = 'Random Forest Classification'; 
  numClassesDefault: number = 6;
  numTreesDefault: number = 3;
  maxDepthDefault:  number = 3;
  maxBinsDefault: number = 4;
  trainingSliceDefault: number = 0.7;
  testSliceDefault: number = 0.3;
  featureSubsetStrategyDefault: string = 'auto';
  categoricalFeaturesInfoDefault: number;
  masterDefault: string = 'local';
  appNameDefault: string = 'Subject Segmentation using Random Forest Classification';
  options = [
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3']
  ];
  formSubmitted: boolean = false;

  constructor(){  
  }

  ngOnInit(){
  }

  onSubmit(){
    let tempVar = new Map();
    if(this.options[this.categoricalFeaturesInfoDefault]){
      tempVar.set(this.options[this.categoricalFeaturesInfoDefault][0], this.options[this.categoricalFeaturesInfoDefault][1]);
    }
    this.randomForestInputsForm.form.patchValue({
      categoricalFeaturesInfo: tempVar
    })
    console.log(JSON.stringify(this.randomForestInputsForm.value));
    this.formSubmitted = true;
  }

  onTrainingSliceChange(tempVar){
    if(tempVar.value && tempVar.valid){
      this.randomForestInputsForm.form.patchValue({
        testSlice : 1-tempVar.value
      })
    }
  }
}
