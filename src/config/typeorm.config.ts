import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const getTypeOrmConfig = async (configServise:ConfigService):Promise<TypeOrmModuleOptions> => ({
  type: 'postgres',
  host: configServise.get('DATABASE_HOST'),
  port: configServise.get('DATABASE_PORT'),
  database: configServise.get('DATABASE_NAME'),
  username: configServise.get('DATABASE_USER'),
  password: configServise.get('DATABASE_PASSWORD'),
  entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: true
})