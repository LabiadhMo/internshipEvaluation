import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Subject ,Observable} from 'rxjs';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

// cam streaming + take pic !! 
// you need to press take a snapshot
export class SettingsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  public webcamImage!: WebcamImage ;
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  triggerSnapshot(): void {
   this.trigger.next();
  }
  handleImage(webcamImage: WebcamImage): void {
   console.info('received webcam image', webcamImage);
   this.webcamImage = webcamImage;
  }
 
  public get triggerObservable(): Observable<void> {
   return this.trigger.asObservable();


}
}
