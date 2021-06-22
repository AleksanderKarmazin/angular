import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic';
  text = ' Lorem ipsum dolor sit amet consectetur adipisicing elit.';

  inputValue = ''

  // img = 'https://cdn-media-1.freecodecamp.org/images/xn6oqsiP9ZUwYN98Yidh-Obr7UhkAHHqcFvh'

  constructor(){
    // setTimeout(() => {
    //   this.img = 'https://proweb63.ru/assets/chema/images/blog/angular.png'
    // }, 5000)
    
  }

  // onClick(event: any){
  //   const res = this.inputValue += event.target.value + ' | ';
  //   console.log("E", res )
  // }
  onClick(event: KeyboardEvent){
    const res = this.inputValue += (<HTMLInputElement> event.target).value + ' | ';
    console.log("E", res )
  }
  onClick2(){
    console.log("Click 222")
  }

}
