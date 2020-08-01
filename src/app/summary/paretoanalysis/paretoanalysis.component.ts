import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-paretoanalysis',
  templateUrl: './paretoanalysis.component.html',
  styleUrls: ['./paretoanalysis.component.scss']
})
export class ParetoanalysisComponent implements OnInit {
public Editor = ClassicEditor;
constructor(private alertService: AlertService) { }

  ngOnInit() {
  }
  alert() {
    this.alertService.createAlert('Report added successfully', 1);
  }
}
