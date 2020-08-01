import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-generatereport',
  templateUrl: './generatereport.component.html',
  styleUrls: ['./generatereport.component.scss']
})
export class GeneratereportComponent implements OnInit {
  public Editor = ClassicEditor;
  constructor() { }

  ngOnInit() {
  }

}
