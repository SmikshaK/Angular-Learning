import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
  <h1>Creating second component.</h1>
  <p> Here I have created a second component manually and defining it inline using 'template'. 
  <br>Also, Styling it inline using styles array.</p>
  `
  ,
  styles: [
      `
      p{
          padding: 20px;
          background-color: mistyrose;
          border: 1px solid red;
      }
    `
  ]
})
export class SecondComponent { }
