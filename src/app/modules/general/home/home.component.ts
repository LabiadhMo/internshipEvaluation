import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { CdkDragEnd, CdkDragStart, CdkDragMove } from '@angular/cdk/drag-drop';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  state = '';     // current state of draggable 
  position = '';   // position of draggable

   popup=false;

  constructor( private router: Router) { }

  ngOnInit() :void {
  }
  


   // when the drag event started
  dragStarted(event: CdkDragStart) {
    this.state = 'dragStarted';
  }

  // when drag event finished
  dragEnded(event: CdkDragEnd) {
    this.state = 'dragEnded';
    if (event.distance.y>30) // if drag is enough 
    this.popup=true; //pop up
    if (this.state== 'dragEnded'){
      this.state='';  // reset state
    event.source.element.nativeElement.style.transform = 'none' // visually reset element to its origin
    const source: any = event.source
    source._passiveTransform = { x: 0, y: 0 } }
  }

  // while drag event
  dragMoved(event: CdkDragMove) {
    
    this.position = `> Position X: ${event.pointerPosition.x} - Y: ${event.pointerPosition.y}`;
  }

  // redirecte to /data after closing pop up
  nextScreen(){
    this.popup=false;
    this.router.navigate(['/data']);
  }
}
