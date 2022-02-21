// Funcionamento da empresa
export default function initOperation() {
  const operation = document.querySelector("[data-week]");

  const daysWeek = operation.dataset.week.split(", ").map(Number);
  const timeWeek = operation.dataset.time.split(", ").map(Number);

  const dateNow = new Date();
  const dayNow = dateNow.getDay();
  const timeNow = dateNow.getHours();

  const weekOpen = daysWeek.indexOf(dayNow) !== -1;
  const timeOpen = timeNow >= timeWeek[0] && timeNow < timeWeek[1];

  if (weekOpen && timeOpen) {
    operation.classList.add("open");
  }
}
