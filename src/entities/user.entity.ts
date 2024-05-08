import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import bcrypt from 'bcryptjs';

@Entity({ name: 'users' })
export class User {

    @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
    userId: string;

    @Column('varchar')
    username: string;

    @Column('varchar')
    email: string;

    @Column('varchar')
    password: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', name: 'updated_at' })
    updatedAt: Date;

    @BeforeInsert()
    hashPassword(): string {
        const salt = bcrypt.genSaltSync(12);
        return bcrypt.hashSync(this.password, salt);
    }
}
