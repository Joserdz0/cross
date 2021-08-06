import { Router } from "../deps.ts";
import * as controller from "../controllers/index.controllers.ts";

const router = new Router();
router.get("/", ({ response }) => {
  response.body = "prueba";
});
router.get("/user",controller.getUsers);
export default router;
