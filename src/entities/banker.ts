import { Entity, BaseEntity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { Person } from "./person";
import { Client } from "./client";

 
@Entity('banker') // tableName in db: "banker", modelName:"Banker"
export class Banker  extends Person{
 @Column({
    unique:true,
    length:10,
  
  }) 
  employee_number:string ;
  @ManyToMany(()=>Client)
  @JoinTable({
    name:"bankers_clients",
    joinColumn:{
      name:"banker",
      referencedColumnName:'id'
    },
    inverseJoinColumn:{
      name:'client',
      referencedColumnName:'id'
    }
  })

  clients: Client[]


}