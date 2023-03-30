import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "custom-input",
  templateUrl: "./custom-input.component.html",
  styleUrls: ["./custom-input.component.scss"],
})
export class CustomInputComponent {
  @Input() type = "";
  @Input() label = "";
  @Input() id = "";
  @Input() value = "";
  @Output() valueChange: EventEmitter<string> = new EventEmitter();

  updateValue() {
    this.valueChange.emit(this.value);
  }
}
