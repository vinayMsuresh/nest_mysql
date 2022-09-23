import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  JoinTable,
  BaseEntity,
} from 'typeorm';

import { Student } from 'src/users/user.entity';
import Genre from 'src/genre/genre.entity';

@Entity()
export default class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @ManyToOne((type) => Student, (student) => student.books)
  student: Student;

  @ManyToMany((type) => Genre)
  @JoinTable()
  genres: Genre[];
}
