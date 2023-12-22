import { Entity, BaseEntity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany } from "typeorm";
import { Person } from "./person";
import { Transaction } from "./transaction";
import { Banker } from "./banker";

 
@Entity('client') // tableName in db: "client", modelName:"Client"
export class Client  extends Person{
  @Column({
    type:"decimal",
    default:0.0
  }) 
  balance:number;

  @Column({
    default:false
  }) 
  is_active:boolean;

  @Column({
    default:false
  }) 
  is_administrator:boolean;

  @Column({
    type:"simple-json",
    nullable:true,
    // name:"Users info"
  }) 
  additional_info:{
    age:number,
    hair_color:string,
  }

  @Column({
    type:"simple-array",
     default:[]
  }) 
  family_member:[]

  @OneToMany(()=>Transaction, transaction => transaction.client)
  transaction:Transaction[]

  @ManyToMany(()=>Banker)
  bankers: Banker[]




}