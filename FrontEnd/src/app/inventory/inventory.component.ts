import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TableComponent} from "../shared/table/table.component";
import {isNumeric} from "rxjs/internal-compatibility";
import {RESTService} from "../services/rest.service";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  csv: string;
  fileName: String;
  csvRecordsArray = [];
  csvRecords = [];
  @ViewChild(TableComponent) list: TableComponent;
  @Input() addProductData = {id: 0, name: '', quantity: 0};

  constructor(public rest: RESTService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.fileName = "Click Browse to import CSV file"
  }

  public fileListener(files: FileList) {
    console.log(files);
    if (files && files.length > 0) {
      let file: File = files.item(0);
      //console.log(file.name);
      this.fileName = file.name;
      //console.log(file.size);
      //console.log(file.type);
      let reader: FileReader = new FileReader();

      if(this.isCSVFile(file)) {
        reader.readAsText(file);
      }else{
        alert("Please select a .CSV file");
        this.fileReset();
      }

      reader.onload = (e) => {
        let csv: string = reader.result;
        this.csv = csv;
        this.csvRecordsArray = csv.split(/\r\n|\n/);
        //console.log(csv);
        this.csvRecords = this.getDataFromCSVFile(this.csvRecordsArray);
      }
    }
  }

  isCSVFile(file) {
    return file.name.endsWith(".csv");
  }

  public getDataFromCSVFile(csvRecordsArray) {
    let dataArr = [];
    let tokenDelimiter = ",";
    let headerLength = 2;


    for (let i = 0; i < csvRecordsArray.length; i++) {
      let data = csvRecordsArray[i].split(tokenDelimiter);

      if(data.length != headerLength){
        if(data==""){
          alert("Extra blank line is present at line number "+i+", please remove it.");
          this.fileReset();
          return null;
        }else{
          alert("Record at line number "+i+" contain "+data.length+" items, " +
            "and is not matching with header length of "+headerLength +"items");
          this.fileReset();
          return null;
        }
      }

      let col = [];
      for (let j = 0; j < data.length; j++) {
        col.push(data[j]);
      }
      dataArr.push(col);
    }
    return dataArr;
  }

  fileReset(){
    this.fileName = "";
    this.csvRecords = [];
  }

  addProduct() {
    if (this.addProductData.name.length !== 0 && isNumeric(this.addProductData.quantity)) {
      this.rest.addExampleItem(this.addProductData).subscribe((result) => {
        location.reload();
      }, (err) => {
        console.log(err);
      });
    }
  }

  importProducts(){
    for (let i = 0; i < this.csvRecords.length; i++){
      let product = this.csvRecords[i];
      let id = 0;
      product.splice(0,0, id);
      product.splice(0,0, "id")
      product.splice(2, 0, "name")
      product.splice(4, 0, "quantity")
      let newProduct = {};
      for (let i = 0; i < product.length; i+=2){
        newProduct[product[i]] = (product[i+1]);
      }

      if(newProduct["name"].length !==0 && isNumeric(newProduct["quantity"])){
        this.rest.addExampleItem(newProduct).subscribe((result) => {
          location.reload();
        }, (err) => {
          console.log(err);
        });
      }
    }
  }

}
