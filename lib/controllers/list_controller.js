import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["input", "list1"];
  connect() {}

  addItem(event) {
    event.preventDefault();

    const item = `<li data-controller="edit-item" class="d-flex">
       <p data-edit-item-target="text">${this.inputTarget.value}</p>
       <button class="btn" data-action="click->edit-item#showForm">
         edit
       </button>
       <button class="btn" data-action="click->edit-item#deleteItem">
          remove
        </button>
       <form
         data-action="submit->edit-item#edit"
         class="d-none"
         data-edit-item-target="form"
       >
         <input type="text" data-edit-item-target="input" />
         <button type="submit" class="btn btn-primary">
           Confirmer
         </button>
       </form>
     </li>`;
    this.list1Target.insertAdjacentHTML("beforeend", item);
    this.inputTarget.value = "";
  }
}
