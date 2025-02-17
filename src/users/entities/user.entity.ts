import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  address?: string;

  @Column()
  phone: string;

  @Column({ nullable: false })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}

// "migration:generate": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:generate --name",
// 		"migration:run": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:run",
// 		"migration:create": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:create --name",
// 		"migration:revert": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:revert"
