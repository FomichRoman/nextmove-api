import { getTypeOrmConfig } from './config/typeorm.config'
import { getJwtConfig } from './config/jwt.config'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config/dist'
import { TypeOrmModule } from '@nestjs/typeorm/dist'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { VideoModule } from './video/video.module'
import { CommentModule } from './comment/comment.module'
import { AuthModule } from './auth/auth.module'
import { MediaModule } from './media/media.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getTypeOrmConfig,
		}),
		UserModule,
		VideoModule,
		CommentModule,
		AuthModule,
		MediaModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
