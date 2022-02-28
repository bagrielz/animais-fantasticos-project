// Funcionamento da empresa
export default class Operation {
  constructor(operation) {
    this.operation = document.querySelector(operation);
    this.openClass = "open";
  }

  operatingData() {
    this.daysWeek = this.operation.dataset.week.split(", ").map(Number);
    this.timeWeek = this.operation.dataset.time.split(", ").map(Number);
  }

  dataNow() {
    this.dateNow = new Date();
    this.dayNow = this.dateNow.getDay();
    this.timeNow = this.dateNow.getUTCHours() - 3;
  }

  isOpen() {
    const weekOpen = this.daysWeek.indexOf(this.dayNow) !== -1;
    const timeOpen =
      this.timeNow >= this.timeWeek[0] && this.timeNow < this.timeWeek[1];

    return weekOpen && timeOpen;
  }

  activeOpen() {
    if (this.isOpen()) {
      this.operation.classList.add(this.openClass);
    }
  }

  init() {
    if (this.operation) {
      this.operatingData();
      this.dataNow();
      this.activeOpen();
    }
    return this;
  }
}
