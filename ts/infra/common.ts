
const init = async () => {
  return new Promise<void>((res) => {
    document.addEventListener("DOMContentLoaded", () => res())
  })
};
const $ = document.querySelector.bind(document);

export { $, init }
