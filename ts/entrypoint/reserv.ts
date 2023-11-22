import { $, init } from "../infra/common";

init().then(() => {
  const urlParams = new URLSearchParams(window.location.search);

  const title: null | HTMLElement = $("#title");
  const locationInp: null | HTMLInputElement = $("#location");
  const activityInp: null | HTMLInputElement = $("#activity");

  const location = urlParams.get("location");
  const activity = urlParams.get("type");

  if (!location || !activity) {
    window.location.href = "..";
    return;
  }

  if (!title || !locationInp || !activityInp) return;

  title.innerText = "Reservar " + activity + " en " + location;
  locationInp.value = location;
  activityInp.value = activity;
});
