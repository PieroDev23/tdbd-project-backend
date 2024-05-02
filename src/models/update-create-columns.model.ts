import { UpdateDateColumn, CreateDateColumn } from "typeorm";


export class HasUpdateCreateDateColumns {

    @UpdateDateColumn({
        type: 'timestamp',
        name: 'updated_at',
        default: () => 'CURRENT_TIMESTAMP(6)'
    })
    updatedAt: Date;

    @CreateDateColumn({
        type: 'timestamp',
        name: 'created_at',
        default: () => 'CURRENT_TIMESTAMP(6)'

    })
    createdAt: Date;
}