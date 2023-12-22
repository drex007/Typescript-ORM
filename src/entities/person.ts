import { Entity, BaseEntity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";

 
@Entity() // tableName in db: "banker", modelName:"Banker"
export class Person  extends BaseEntity{
  @PrimaryGeneratedColumn()
  id:number
  @Column()
  first_name:string;

  @Column()
  last_name:string;

  @Column({
    unique:true,
  }) 
  email:string;

  @Column({
    length:50,
  
  }) 
  card_number:string; 

  @CreateDateColumn()
  created_at:Date

   @UpdateDateColumn()
  updated_at:Date


}