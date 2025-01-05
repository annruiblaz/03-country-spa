import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit{
  @Input()
  placeholder: string = '';
  
  @Output()
  onValue = new EventEmitter<string>();

  @Output()
  onDebounce = new EventEmitter<string>();
  
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  ngOnInit(): void {
    this.debouncerSubscription = this.createDebouncerSubscription();
  }
  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  private createDebouncerSubscription(): Subscription{
    return this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe( value => {
        this.onDebounce.emit(value);
      });
  }

  emitValue(searchTerm: string): void {
    this.onValue.emit(searchTerm);
  }

  onKeyPress(searchTerm: string){
    this.debouncer.next(searchTerm);
  }

}
