import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard-event-directive',
  templateUrl: './keyboard-event-directive.component.html',
  styleUrls: ['./keyboard-event-directive.component.scss']
})
export class KeyboardEventDirectiveComponent implements OnInit {
  clickMessage: any;
  inputKeyUp: any;

  constructor() { }

  ngOnInit(): void {
    document.addEventListener(
      "keydown",
      (event) => {
        const keyName = event.key;

        if (keyName === "Control") {
          // do not alert when only Control key is pressed.
          return;
        }

        if (event.ctrlKey) {
          // Even though event.key is not 'Control' (e.g., 'a' is pressed),
          // event.ctrlKey may be true if Ctrl key is pressed at the same time.
          alert(`Combination of ctrlKey + ${keyName}`);
        } else {
          alert(`Key pressed ${keyName}`);
        }
      },
      false
    );
  }

  onF2KeyPress($event: any) {

  }
}
