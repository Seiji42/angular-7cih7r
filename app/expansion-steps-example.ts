import {Component} from '@angular/core';

/**
 * @title Expansion panel as accordion
 */
@Component({
  selector: 'expansion-steps-example',
  templateUrl: 'expansion-steps-example.html',
  styleUrls: ['expansion-steps-example.css'],
})
export class ExpansionStepsExample {
  panels = [
    {
    title: 'panel 1',
    content: ['content 1']
  },
  {
    title: 'panel 2',
    content: ['content 2', 'other content']
  },
  ]
  otherPanels = {
    "panel 1":['content 1'],
    "panel 2":['content 2', 'other content']
  }
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */