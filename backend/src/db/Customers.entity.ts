//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Customers')
export class CustomersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  customerName: string;

  @Column('text', { nullable: true })
  email: string;

  @Column('text', { nullable: true })
  password: string;

  @Column('text', { nullable: true })
  billingAddress: string;

  @Column('text', { nullable: true })
  shippingAddress: string;

  @Column('text', { nullable: true })
  country: string;

  @Column('text', { nullable: true })
  phone: string;
}
