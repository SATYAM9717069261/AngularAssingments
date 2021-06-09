import { Component, OnDestroy, OnInit,ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import {  Validators, Editor, Toolbar,toDoc,toHTML } from 'ngx-editor';
import jsonDoc from  '../doc';
import {saveAs} from 'file-saver';
@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class WordComponent implements OnInit, OnDestroy {
  editordoc = jsonDoc;
  htmldata:any;
  jsonDoc:any;
  editor: any;
  filename:any;
  toolbar: Toolbar = [
    ["bold", "italic"],
    ["underline", "strike"],
    ["code", "blockquote"],
    ["ordered_list", "bullet_list"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["link", "image"],
    ["text_color", "background_color"],
    ["align_left", "align_center", "align_right", "align_justify"]
  ];

  form = new FormGroup({
    editorContent: new FormControl(
      { value: jsonDoc, disabled: false },
      Validators.required()
    ),
    filename:new FormControl()
  });

  //get doc(): AbstractControl {
   // return this.form.get("editorContent");
 // }

  
  constructor() { }
  ngOnInit(): void { this.editor = new Editor(); this.filename=[] }

  save() {
   /** this.htmldata = toHTML(this.form.value.editorContent);
    this.jsonDoc = toDoc(this.htmldata);// save this variable in file with file name
    console.log("File Name => ", this.form.value ,"Form Data +> ", this.jsonDoc);
*/
   /** 
    * Use if you want to store data in file
    * const blob = new Blob([JSON.stringify(jsonDoc)], {type : 'application/json'});
    * saveAs(blob, this.form.value.filename+'.json');
    */
    
   //this.htmldata = toHTML(this.form.value.editorContent);
   //this.jsonDoc = toDoc(this.htmldata);// save this variable in file with file name
   localStorage.setItem(this.form.value.filename,JSON.stringify(this.form.value.editorContent));
   this.filename.push(this.form.value.filename);
   this.form.setValue({
    editorContent:'',
    filename:''
  });
   console.log("File 2Name => ", this.jsonDoc ); 
  }
  insertdata(data:string){
   //this.editor=new Editor();
   this.form.reset();
   var datavalue=JSON.parse( localStorage.getItem(data)+'');
   console.log('Dat avalue => ',toHTML(datavalue));
   this.form.setValue({
    editorContent:toHTML(datavalue),
    filename:data
  });
   console.log("data for show=>",this.form.value.editorContent);
  }

  
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
