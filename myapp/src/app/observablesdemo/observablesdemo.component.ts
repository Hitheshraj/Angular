import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval, observable } from 'rxjs';
import { filter,map } from 'rxjs/operators';
@Component({
  selector: 'app-observablesdemo',
  templateUrl: './observablesdemo.component.html',
  styleUrls: ['./observablesdemo.component.css']
})
export class ObservablesdemoComponent implements OnInit, OnDestroy {

  constructor() { }
  private intervalSubcription: Subscription;//Which helps in stoping the generating number when shifted to other page
  private customObservableSubcription: Subscription;

  ngOnInit(): void {
    // Use this.intervalSubcription  here also
    // this.intervalSubcription=interval(1000).subscribe((count)=>{
    //   console.log(count);//counts onr for evry one second
    // });


    const customObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
        if (count == 20) {
          observer.complete();//stops after 6
        }
        if (count > 20) {
          observer.error(new Error('count is greater than 10'));
        }
      }, 1000);
    });
    this.customObservableSubcription = customObservable
      .pipe(
        filter((data: number) => {
          return data % 2 == 0;
        }),
        map((data:number)=>{
          return 'B'+data;
        })
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          alert(error.message);
        },
        () => {
          console.log('Completed');
        }
      )
  }
  ngOnDestroy(): void {
    //this.intervalSubcription.unsubscribe();
    this.customObservableSubcription.unsubscribe();
  }

}
// (count)=>{
//   console.log(count);
// }
// Its a function