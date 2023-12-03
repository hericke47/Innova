import { Router } from "express";
import usersRouter from "./users.routes";
import sessionsRouter from "./sessions.routes";
import gymsRouter from "./gyms.routes";

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/gyms", gymsRouter);

export default routes;
