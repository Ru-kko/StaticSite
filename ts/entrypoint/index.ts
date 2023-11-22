import { init } from "../infra/common";
import navLogic from "../infra/mobileNav";

init().then(() => {
  navLogic();
})