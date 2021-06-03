import { Component, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';
@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  constructor() { }
  editor:any;
  ngOnInit(): void { this.editor = new Editor();  }

}
