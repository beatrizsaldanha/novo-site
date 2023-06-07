import {Component} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';

export interface PeriodicElement {
  name: string;
  imagePath: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Caneca ',imagePath: '/assets/img/caneca(2).jpg'},
  {name: 'Caneca ',imagePath: '/assets/img/caneca(3).jpg'},
  {name: 'Caneca ',imagePath: '/assets/img/caneca(4).jpg'},
  { name: 'Caneca ',imagePath: '/assets/img/caneca(5).jpg'},
  { name: 'Caneca ', imagePath: '/assets/img/caneca(6).jpg'},
  {name: 'Caneca ', imagePath: '/assets/img/caneca.jpg'},

];
@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent {
  displayedColumns: string[] = [ 'name', 'imagePath'];
  dataToDisplay = [...ELEMENT_DATA];

  dataSource = new ExampleDataSource(this.dataToDisplay);

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataToDisplay = [...this.dataToDisplay, ELEMENT_DATA[randomElementIndex]];
    this.dataSource.setData(this.dataToDisplay);
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }
}
class ExampleDataSource extends DataSource<PeriodicElement> {
  private _dataStream = new ReplaySubject<PeriodicElement[]>();

  constructor(initialData: PeriodicElement[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<PeriodicElement[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: PeriodicElement[]) {
    this._dataStream.next(data);
  }
}
