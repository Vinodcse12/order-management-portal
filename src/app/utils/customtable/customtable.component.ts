import { Component,Input, Injectable, ApplicationRef, ChangeDetectorRef, ChangeDetectionStrategy, OnInit } from '@angular/core';

import {Observable, Subject} from 'rxjs';
import {Pipe, PipeTransform} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

export class CustomTableConfig {
  public sortBy: string = '';
  public sortDirection: string = 'desc';
  public pageSize: number = 100;
  public pageNumber: number = 1;
  public totalCount: number = 0;
  public totalPages: number = 0;
  public maxSize: number = 10;
  public showSelectCheckbox: boolean = true;
  public showSelectAll: boolean = true;
  public showSort: boolean = true;
  public clientSort: boolean = false;
  public clientPaging: boolean = false;
  public stickyHeader: boolean = true;
  public stickyHeaderOffset: number = 0;
  public stickyContainer: string = '';
}

export class CustomTableColumnDefinition {
  public name: string = '';
  public value: string = '';
  public binding: string = '';
  public filter: string = '';
  public computedClass: any;
  public isComputed: boolean = false;
  public isAnchor: boolean = false;
  public srefBinding: string = '';
}

export class CustomTableOptions {
  public records : Observable<Array<any>>;
  public columns: Array<CustomTableColumnDefinition>;
  public rowDefns: Array<any>;
  public config: CustomTableConfig;
  public callbacks: any;
}

@Component({
  selector: 'app-customtable',
  templateUrl: './customtable.component.html',
  styleUrls: ['./customtable.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomtableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
