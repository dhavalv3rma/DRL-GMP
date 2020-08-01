import { Component, OnInit } from '@angular/core';
import { AddEmailDialogComponent } from '../../audit-closed/add-email-dialog/add-email-dialog.component';
import { AddActionDialogComponent } from '../add-action-dialog/add-action-dialog.component';
import { AddObservationDialogComponent } from '../add-observation-dialog/add-observation-dialog.component';
import { MatDialog } from '@angular/material';
import { AddDocDialogComponent } from '../add-doc-dialog/add-doc-dialog.component';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-low',
  templateUrl: './low.component.html',
  styleUrls: ['./low.component.scss']
})
export class LowComponent implements OnInit {

  actions: any[] = [];
  docsData: any[] = [];
  thirdLevelData: any[] = [];
  firstLevelData: any[] = [];
  secondLevelData: any[] = [];
  activeSecondLevelData: any[] = [];
  sowInfo = false;
  noData = false;
  observations: boolean = true;
  docs: boolean = false;
  currentFirstLevelPosition: any = 0;
  mainCategory: string = "1.0 Sample text";
  selectedObservation: string = "";
  selectedType: string[] = ['Serial'];
  types: SelectItem[];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.types = [
      { label: 'Serial View', value: 'Serial' },
      { label: 'Category View', value: 'Category' }
    ];
    this.currentFirstLevelPosition = 1;
    this.secondLevelData = [];
    this.secondLevelData[0] = [
      {
        id: 1.1,
        text: '1.1 Procedures and Practices followed at microbiology laboratory were found deficient, Specifically:'
      },
      {
        id: 1.2,
        text: '1.2 Force degradation study was not performed during method validation of Finasteride 5 mg tablet assay and related substances.'
      },
      {
        id: 1.3,
        text: '1.3 Ketorolac injection color test failure investigation was found inadequate in that'
      },
      {
        id: 1.4,
        text: '1.4 Significant amount of dust accumulation observed in return air ducts of the primary and secondary change room on 20/03/2018.'
      }
    ];

    this.secondLevelData[1] = [
      {
        id: 2.1,
        text: '2.1 Procedure was not available for hardness testing performed at RO water tankers upon receipt.'
      },
      {
        id: 2.2,
        text: '2.2 Ozone system was dismantled however respective schematic drawings were not revised.'
      },
      {
        id: 2.3,
        text: '2.3 Calibration was not performed for ClO2 sensor installed at pre-treatment water plant.'
      },
      {
        id: 2.4,
        text: '2.4 Epoxy flooring found cracked and rusting on the panels found in the sterilization area.'
      }
    ];


    this.secondLevelData[2] = [
      {
        id: 3.1,
        text: '3.1 Significant amount of dust accumulation was found upon the dynamic pass box, upon the doors in the sterilization room'
      },
      {
        id: 3.2,
        text: '3.2 Ketorolac injection color test failure investigation was found inadequate in that'
      },
      {
        id: 3.3,
        text: '3.3 Ozone system was dismantled however respective schematic drawings were not revised.'
      },
      {
        id: 3.4,
        text: '3.4 Procedures and Practices followed at microbiology laboratory were found deficient, Specifically'
      }
    ];

    this.secondLevelData[3] = [
      {
        id: 4.1,
        text: '4.1 Ketorolac injection color test failure investigation was found inadequate in that'
      },
      {
        id: 4.2,
        text: '4.2 Ozone system was dismantled however respective schematic drawings were not revised'
      },
      {
        id: 4.3,
        text: '4.3 Procedures and Practices followed at microbiology laboratory were found deficient, Specifically'
      },
      {
        id: 4.4,
        text: '4.4 Ketorolac injection color test failure investigation was found inadequate in that'
      }
    ];

    this.firstLevelData = [{
      id: 1,
      text: '1.0 The practices followed in utilities management system were found deficient, specifically; '
    },
    {
      id: 2,
      text: '2.0 Procedures and Practices followed at microbiology laboratory were found deficient, Specifically'
    },
    {
      id: 3,
      text: '3.0 Procedures and Practices followed in manufacturing, engineering and quality assurance  were  found deficient, specifically'
    },
    {
      id: 4,
      text: '4.0 In Cleaning validation review the  following deficiencies were observed; specifically,'
    }];

    this.mainCategory = this.firstLevelData[0].text;
    this.activeSecondLevelData = this.secondLevelData[0];

    this.thirdLevelData = [{
      id: '2.1.1',
      text: 'The following discrepancies were noticed during the walk through in the media preparation and sterilization area of the microbiology laboratory on 19/03/2018.'
    },
    {
      id: '2.1.1.1',
      text: 'Differential pressure of media sterilization room #DRL/F1/QC.MICRO/DP/106-00 and change room to the cool zone #DRL/F1/QC.MICRO/DP/114-00 were found with 5.12 pa and 4.70 pa respectively against the limit of NLT 10 pa.'
    }, {
      id: '2.1.1.2',
      text: 'Compressed air leakage observed in the sterilization area which was used for the pneumatic operations of the autoclave #31ACL-05.'
    }, {
      id: '2.1.1.3',
      text: 'Significant amount of dust accumulation was found upon the dynamic pass box, upon the doors in the sterilization room.'
    }, {
      id: '2.1.1.4',
      text: 'A bucket of half-filled water with dust and visual contamination was found in the technical area of autoclave located in media preparation room.'
    }, {
      id: '2.1.1.5',
      text: 'Epoxy flooring found cracked and rusting on the panels found in the sterilization area.'
    }
    ];


    this.docsData = [{
      observation: "2.1.1	The following discrepancies were noticed during the walk through in the media preparation and sterilization area of the microbiology laboratory on 19/03/2018.",
      title: "Observations",
      uploaded_at: "2019-07-02",
      uploaded_by: "Dipen"
    },
    {
      observation: "2.1.1.2	Compressed air leakage observed in the sterilization area which was used for the pneumatic operations of the autoclave #31ACL-05.",
      title: "Observations",
      uploaded_at: "2019-07-02",
      uploaded_by: "Dipen"
    },
    {
      observation: "2.1.1.3	Significant amount of dust accumulation was found upon the dynamic pass box, upon the doors in the sterilization room.",
      title: "Observations",
      uploaded_at: "2019-07-02",
      uploaded_by: "Dipen"
    },
    {
      observation: "2.1.1.4	A bucket of half-filled water with dust and visual contamination was found in the technical area of autoclave located in media preparation room.",
      title: "Observations",
      uploaded_at: "2019-07-02",
      uploaded_by: "Dipen"
    }];
    this.actions = [{
      item_no: 'Make Visual inspection table with white and black background for observing the sterility testing tubes on daily basis.',
      assigned_to: 'Shiva Kumar.M',
      due_date: '2019-07-22',
      status: 'In Process'
    }, {
      item_no: 'Make a written  justification for the alert and actions limits followed for purified water.',
      assigned_to: 'Naresh Yadav.K',
      due_date: '2019-07-29',
      status: 'Done'
    }, {
      item_no: 'Conduct Quality Assurance on repeated breakdown of equipment by halfyearly',
      assigned_to: 'Suresh Varma.J',
      due_date: '2019-08-22',
      status: 'Validated'
    }, {
      item_no: 'Action to be taken on terminal sterilization area temperature was observed 26.6°C at 16.11 hrs on 20/03/2018, against limit of 19 to 25°Cas per the SOP #FT1PR299.',
      assigned_to: 'Anil Kumat.L',
      due_date: '2019-08-01',
      status: 'Logged'
    }];
  }

  public openObservationDialog(id) {
    let dialogRef = this.dialog.open(AddObservationDialogComponent, {
      data: id,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public openActionDialog() {
    let dialogRef = this.dialog.open(AddActionDialogComponent, {
      data: null,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  showActionsBlock(index = null) {
    this.sowInfo = false;
    this.noData = true;
    setTimeout(() => {
      this.sowInfo = true;
    }, 100);
    if (index || index == 0) {
      this.selectedObservation = this.thirdLevelData[index].id + ' ' + this.thirdLevelData[index].text;
    }

  }

  observation() {
    this.observations = true;
    this.docs = false;
  }

  docsview() {
    this.observations = false;
    this.docs = true;
  }

  public openEmailDialog(id) {
    let dialogRef = this.dialog.open(AddEmailDialogComponent, {
      data: id,
      height: 'auto',
      width: '500px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public openDocDialog() {
    let dialogRef = this.dialog.open(AddDocDialogComponent, {
      data: null,
      height: 'auto',
      width: '500px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public navigateLeft() {
    if (this.currentFirstLevelPosition == 0) {
      return false;
    }
    this.currentFirstLevelPosition--;
    this.mainCategory = this.firstLevelData[this.currentFirstLevelPosition].text;
    this.activeSecondLevelData = this.secondLevelData[this.currentFirstLevelPosition];
    this.selectedObservation = this.mainCategory;
    this.showActionsBlock();
  }

  public navigateRight() {
    if (this.currentFirstLevelPosition == 3) {
      return false;
    }
    this.currentFirstLevelPosition++;
    this.mainCategory = this.firstLevelData[this.currentFirstLevelPosition].text;
    this.activeSecondLevelData = this.secondLevelData[this.currentFirstLevelPosition];
    this.selectedObservation = this.mainCategory;
    this.showActionsBlock();
  }

  public onTabOpen(e) {
    this.selectedObservation = this.activeSecondLevelData[e.index].text;
    this.showActionsBlock();
  }

  public onToggleChange(e) {
    console.log(e.value);
    this.currentFirstLevelPosition = 1;
    if (e.value == "Category") {
      this.secondLevelData = [];
      this.secondLevelData[0] = [
        {
          id: 1,
          text: 'Approved procedures not followed'
        },
        {
          id: 2,
          text: 'Inadequate / No procedures'
        },
        {
          id: 3,
          text: 'Quality Unit responsibilities'
        },
        {
          id: 4,
          text: 'QMS-CCF/CAPA/BMR'
        }
      ];

      this.secondLevelData[1] = [
        {
          id: 1,
          text: 'Inadequate/ procedures not followed'
        },
        {
          id: 2,
          text: 'Analytical Test Discrepancies'
        },
        {
          id: 3,
          text: 'Inadequate/  No Stability Testing'
        },
        {
          id: 4,
          text: 'Unaccounted Data'
        }
      ];


      this.secondLevelData[2] = [
        {
          id: 1,
          text: 'Area & Equipment Cleaning'
        },
        {
          id: 2,
          text: 'Facility design & Contamination'
        },
        {
          id: 3,
          text: 'Qualification'
        },
        {
          id: 4,
          text: 'Breakdowns/ Malfunctions'
        }
      ];

      this.secondLevelData[3] = [
        {
          id: 1,
          text: 'Contemporaneous documentation'
        },
        {
          id: 2,
          text: 'Good documentation practices'
        },
        {
          id: 3,
          text: 'Issuance, Receipt, Retrieval & Archival of documents'
        },
        {
          id: 4,
          text: 'Non-availability of Document'
        }
      ];

      this.firstLevelData = [
        {
          id: 1,
          text: 'Quality Systems'
        },
        {
          id: 2,
          text: 'Production Systems'
        },
        {
          id: 3,
          text: 'Laboratory Systems'
        },
        {
          id: 4,
          text: 'Facility & Equipment Systems '
        }
      ];

      this.selectedObservation = this.firstLevelData[0].text;

      this.thirdLevelData = [{
        id: '1.3.4',
        text: 'The following discrepancies were noticed during the walk through in the media preparation and sterilization area of the microbiology laboratory on 19/03/2018.'
      },
      {
        id: '1.4.1',
        text: 'Differential pressure of media sterilization room #DRL/F1/QC.MICRO/DP/106-00 and change room to the cool zone #DRL/F1/QC.MICRO/DP/114-00 were found with 5.12 pa and 4.70 pa respectively against the limit of NLT 10 pa.'
      }, {
        id: '2.1',
        text: 'Compressed air leakage observed in the sterilization area which was used for the pneumatic operations of the autoclave #31ACL-05.'
      }, {
        id: '2.1.1',
        text: 'Significant amount of dust accumulation was found upon the dynamic pass box, upon the doors in the sterilization room.'
      }, {
        id: '3.1.1.4',
        text: 'A bucket of half-filled water with dust and visual contamination was found in the technical area of autoclave located in media preparation room.'
      }
      ];
      
      this.mainCategory = this.firstLevelData[0].text;
      this.activeSecondLevelData = this.secondLevelData[0];

    } else if (e.value == "Serial") {

      this.secondLevelData = [];
      this.secondLevelData[0] = [
        {
          id: 1.1,
          text: '1.1 Procedures and Practices followed at microbiology laboratory were found deficient, Specifically:'
        },
        {
          id: 1.2,
          text: '1.2 Force degradation study was not performed during method validation of Finasteride 5 mg tablet assay and related substances.'
        },
        {
          id: 1.3,
          text: '1.3 Ketorolac injection color test failure investigation was found inadequate in that'
        },
        {
          id: 1.4,
          text: '1.4 Significant amount of dust accumulation observed in return air ducts of the primary and secondary change room on 20/03/2018.'
        }
      ];

      this.secondLevelData[1] = [
        {
          id: 2.1,
          text: '2.1 Procedure was not available for hardness testing performed at RO water tankers upon receipt.'
        },
        {
          id: 2.2,
          text: '2.2 Ozone system was dismantled however respective schematic drawings were not revised.'
        },
        {
          id: 2.3,
          text: '2.3 Calibration was not performed for ClO2 sensor installed at pre-treatment water plant.'
        },
        {
          id: 2.4,
          text: '2.4 Epoxy flooring found cracked and rusting on the panels found in the sterilization area.'
        }
      ];


      this.secondLevelData[2] = [
        {
          id: 3.1,
          text: '3.1 Significant amount of dust accumulation was found upon the dynamic pass box, upon the doors in the sterilization room'
        },
        {
          id: 3.2,
          text: '3.2 Ketorolac injection color test failure investigation was found inadequate in that'
        },
        {
          id: 3.3,
          text: '3.3 Ozone system was dismantled however respective schematic drawings were not revised.'
        },
        {
          id: 3.4,
          text: '3.4 Procedures and Practices followed at microbiology laboratory were found deficient, Specifically'
        }
      ];

      this.secondLevelData[3] = [
        {
          id: 4.1,
          text: '4.1 Ketorolac injection color test failure investigation was found inadequate in that'
        },
        {
          id: 4.2,
          text: '4.2 Ozone system was dismantled however respective schematic drawings were not revised'
        },
        {
          id: 4.3,
          text: '4.3 Procedures and Practices followed at microbiology laboratory were found deficient, Specifically'
        },
        {
          id: 4.4,
          text: '4.4 Ketorolac injection color test failure investigation was found inadequate in that'
        }
      ];

      this.firstLevelData = [{
        id: 1,
        text: '1.0 The practices followed in utilities management system were found deficient, specifically; '
      },
      {
        id: 2,
        text: '2.0 Procedures and Practices followed at microbiology laboratory were found deficient, Specifically'
      },
      {
        id: 3,
        text: '3.0 Procedures and Practices followed in manufacturing, engineering and quality assurance  were  found deficient, specifically'
      },
      {
        id: 4,
        text: '4.0 In Cleaning validation review the  following deficiencies were observed; specifically,'
      }];

      this.selectedObservation = this.firstLevelData[0].text;

      this.thirdLevelData = [{
        id: '2.1.1',
        text: 'The following discrepancies were noticed during the walk through in the media preparation and sterilization area of the microbiology laboratory on 19/03/2018.'
      },
      {
        id: '2.1.1.1',
        text: 'Differential pressure of media sterilization room #DRL/F1/QC.MICRO/DP/106-00 and change room to the cool zone #DRL/F1/QC.MICRO/DP/114-00 were found with 5.12 pa and 4.70 pa respectively against the limit of NLT 10 pa.'
      }, {
        id: '2.1.1.2',
        text: 'Compressed air leakage observed in the sterilization area which was used for the pneumatic operations of the autoclave #31ACL-05.'
      }, {
        id: '2.1.1.3',
        text: 'Significant amount of dust accumulation was found upon the dynamic pass box, upon the doors in the sterilization room.'
      }, {
        id: '2.1.1.4',
        text: 'A bucket of half-filled water with dust and visual contamination was found in the technical area of autoclave located in media preparation room.'
      }, {
        id: '2.1.1.5',
        text: 'Epoxy flooring found cracked and rusting on the panels found in the sterilization area.'
      }
      ];
    }
    this.mainCategory = this.firstLevelData[0].text;
    this.activeSecondLevelData = this.secondLevelData[0];
  }

}
