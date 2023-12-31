import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { jwtSecret } from "../auth/utils/constants";
import { Request } from "express";
import { Roles } from "@prisma/client";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([JwtStrategy.extractJWT, ExtractJwt.fromAuthHeaderAsBearerToken()]),
      secretOrKey: jwtSecret || "defaultSecret",
    });
  }

  private static extractJWT(req: Request): string | null {
    if (req.cookies && "token" in req.cookies) {
      return req.cookies.token;
    }
    return null;
  }

  async validate(payload: { id: string; email: string; roles: Roles }) {
    return payload;
  }
}
