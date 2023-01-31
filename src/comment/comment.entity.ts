import { Base } from 'src/utils/base';
import { UserEntity } from './../user/user.entity';
import { Entity } from "typeorm/decorator/entity/Entity";
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';
import { JoinColumn } from 'typeorm/decorator/relations/JoinColumn';
import { Column } from 'typeorm/decorator/columns/Column';
import { VideoEntity } from 'src/video/video.entity';

@Entity('Comment')
export class CommentEntity extends Base {
  @Column({default:'', type: 'text'})
    message: string

  @ManyToOne(() => UserEntity, user => user.videos)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity

  @ManyToOne(() => VideoEntity, video => video.comments)
  @JoinColumn({ name: 'video_id' })
  video: VideoEntity
}