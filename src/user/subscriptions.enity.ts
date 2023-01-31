import { JoinColumn } from 'typeorm/decorator/relations/JoinColumn';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';
import { UserEntity } from './user.entity';
import { VideoEntity } from './../video/video.entity';
import { Column } from "typeorm/decorator/columns/Column";
import { Entity } from "typeorm/decorator/entity/Entity";
import { OneToMany } from 'typeorm/decorator/relations/OneToMany';
import { Base } from 'src/utils/base';

@Entity('Subscription')
export class SubscriptionEntity extends Base {

  @ManyToOne(() => UserEntity, user => user.subscriptions)
  @JoinColumn({name: 'from_user_id'})
  fromUser: UserEntity

  @ManyToOne(() => UserEntity, user => user.subscriptions)
  @JoinColumn({name: 'to_channel_id'})
  toChannel: UserEntity

  
}