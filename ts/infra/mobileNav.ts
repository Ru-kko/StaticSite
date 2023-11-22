import { $ } from "./common";

export default async function navLogic() { 
  const btn: HTMLButtonElement | null = $("#nav-toggle");
  const nav: HTMLElement | null = $("nav");
  let startvalue = false;

  if (!btn || !nav) return;

  btn.onclick = () => {
    if (startvalue) {
      nav.classList.remove("nav-open");
      startvalue = false;
      return;
    }
    nav.classList.add("nav-open");
    startvalue = true;
  }
}