import { SubscriptionEntity } from './subscriptions.enity';
import { VideoEntity } from './../video/video.entity';
import { Column } from "typeorm/decorator/columns/Column";
import { Entity } from "typeorm/decorator/entity/Entity";
import { OneToMany } from 'typeorm/decorator/relations/OneToMany';
import { Base } from 'src/utils/base';

@Entity('User')
export class UserEntity extends Base {
  @Column({unique: true})
  email: string

  @Column({select:false})
  password: string

  @Column({default:''})
  name: string

  @Column({default:false, name: 'is_verifiend'})
  isVerifiend: boolean

  @Column({default:0})
  subscribersCount?: number

  @Column({default:'', type: 'text'})
  description: string

  @Column({default:'', name: 'avatar_path'})
  avatarPath: string


  @OneToMany(() => VideoEntity, video => video.user)
  videos: VideoEntity[]

  @OneToMany(() => SubscriptionEntity, sub => sub.fromUser)
  subscriptions: SubscriptionEntity[]

  @OneToMany(() => SubscriptionEntity, sub => sub.toChannel)
  subscribers: SubscriptionEntity[]
}