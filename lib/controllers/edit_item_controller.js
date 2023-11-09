import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["input", "text", "form"];
  connect() {
    console.log(this.inputTarget);
  }

  edit(event) {
    event.preventDefault();
    this.textTarget.textContent = this.inputTarget.value;
    this.inputTarget.value = "";
    this.formTarget.classList.add("d-none");
  }

  showForm() {
    this.formTarget.classList.toggle("d-none");
  }

  deleteItem() {
    this.element.remove();
  }
}
