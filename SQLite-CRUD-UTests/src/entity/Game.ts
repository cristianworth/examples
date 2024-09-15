import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  description!: string;

  @Column()
  abbreviation!: string;

  @Column()
  img!: string;

  @Column("int")
  capStamina!: number;

  @Column("int")
  staminaPerMinute!: number;

  @Column("int")
  currentStamina!: number;

  @Column("int")
  maxStaminaAt!: number;

  @Column("datetime")
  dateMaxStamina!: Date;

  @Column("text")
  pendingTasks!: string;
}
