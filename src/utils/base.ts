import { CreateDateColumn } from "typeorm/decorator/columns/CreateDateColumn"
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn"
import { UpdateDateColumn } from "typeorm/decorator/columns/UpdateDateColumn"

export abstract class Base {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date
}

