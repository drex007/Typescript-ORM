import { Entity, BaseEntity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Client } from "./client";

export enum TransactionType {
  deposit ="deposit",
  withdraw = "withdraw"

}

 
@Entity('transactions') // tableName in db: "transactions", modelName:"Transactions"
export class Transaction  extends BaseEntity{

  @PrimaryGeneratedColumn()
  id:number

  @Column({
    type:"enum",
    enum: TransactionType
  })
  type:string


  @Column({
    type:"numeric",  
  }) 
  amount:number; 

  @ManyToOne(()=>Client,client => client.transaction)
  @JoinColumn({name:'client_id'})
  client: Client


  @CreateDateColumn()
  created_at:Date


}