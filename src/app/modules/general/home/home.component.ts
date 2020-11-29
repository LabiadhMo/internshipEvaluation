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

  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  constructor( private router: Router) { }

  ngOnInit() :void {
  }
  state = '';
  position = '';
   startpoint=0;
   endpoint=0;
 
  dragStarted(event: CdkDragStart) {
    this.state = 'dragStarted';
    this.startpoint=event.source.getFreeDragPosition().y;
  }
  popup=false;
  dragEnded(event: CdkDragEnd) {
    this.state = 'dragEnded';
    this.endpoint=event.source.getFreeDragPosition().y;
    console.log(event.distance.y);
    if (event.distance.y>30)
    this.popup=true;
    if (this.state== 'dragEnded'){
      this.state='';
    event.source.element.nativeElement.style.transform = 'none' // visually reset element to its origin
    const source: any = event.source
    source._passiveTransform = { x: 0, y: 0 } }
  }
 
  dragMoved(event: CdkDragMove) {
    
    this.position = `> Position X: ${event.pointerPosition.x} - Y: ${event.pointerPosition.y}`;
  }
  nextScreen(){
    this.popup=false;
    this.router.navigate(['/data']);
  }
}
