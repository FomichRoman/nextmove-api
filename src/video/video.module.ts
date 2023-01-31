import { VideoEntity } from 'src/video/video.entity';
import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';

@Module({
  controllers: [VideoController],
  providers: [VideoService],
  imports: [TypeOrmModule.forFeature([VideoEntity])]
})
export class VideoModule {}
