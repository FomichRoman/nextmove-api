import { ConfigService } from "@nestjs/config";
import { JwtModuleOptions } from "@nestjs/jwt";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const getJwtConfig = async (configServise:ConfigService):Promise<JwtModuleOptions> => ({
  secret: configServise.get('JWT_SECRET'),
})