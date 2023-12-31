import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("gyms")
class Gym {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "text" })
  phone: string;

  @Column({ type: "decimal" })
  latitude: number;

  @Column({ type: "decimal" })
  longitude: number;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @Column({ type: "boolean" })
  active: boolean;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Gym };
