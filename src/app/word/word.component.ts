import { Component, OnDestroy, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { Editor, schema, toDoc, toHTML} from 'ngx-editor';
import jsonDoc from "../doc";
@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class WordComponent implements OnInit, OnDestroy {
  datacontent = new Map<string, any>();
  textdata:any;
  active: string = 'none';
  constructor() { }
  editor: any;
  ngOnInit(): void { this.editor = new Editor(); }

  save(data:string) {
    /**
     *const json= toHTML(jsonDoc,schema);// Json to html
     *const json = toDOC();
     */
   const json= toDoc(this.editor,schema);
   console.log('html data => ', json);
   this.datacontent.set(data,{json});
   console.log('Sucessfull=>',this.datacontent.keys());
  }
  insertdata(key:any){
/**     this.editor.commands
    .textColor('red')
    .insertText('Hello world!')
    .focus()
    .scrollIntoView()
    .exec();
  */
   //this.editor.commands.this.datacontent.get(key).exec();
   //console.log("Stored Data at => ",this.datacontent.get(key));
//   this.editor.commands.this.datacontent.get(key).exec();
   //this.editor=this.datacontent.get(key);
   //this.editor.commands.insertText('helo 12').exec();
   this.editor.destroy();
   this.editor=new Editor();
   this.editor.commands
    .textColor('')
    .insertText('Hello World')
    .focus()
    .scrollIntoView()
    .exec();
   console.log("data for show=>",this.datacontent.get(key));
  }

  dialog() {
    if(this.active=='none') this.active='block';
    else this.active='none';
  }
  adddata(name: string, data: any) {
    this.datacontent.set(name, data);
  }
  extractdata(name: string) {
    return this.datacontent.get(name);
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
