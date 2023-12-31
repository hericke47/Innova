/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import auth from "@config/auth";

interface IPayload {
  sub: string;
}

async function ensureUserAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({
      error: true,
      code: "token.invalid",
      message: "Token not present.",
    });
  }

  const [, token] = authorization.split(" ");

  if (!token) {
    return response.status(401).json({
      error: true,
      code: "token.invalid",
      message: "Token not present.",
    });
  }

  try {
    const { sub: userId } = verify(token, auth.secretToken) as IPayload;

    request.user = {
      id: userId,
    };

    next();
  } catch (err) {
    return response.status(401).json({
      error: true,
      code: "token.expired",
      message: "Token invalid.",
    });
  }
}

export { ensureUserAuthenticated };
