import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity('users')
class Users {

    @PrimaryColumn()
    readonly id: string

    @Column()
    name: string

    @Column()
    username: string

    @Column()
    password: string

    @CreateDateColumn()
    create_at: Date

    constructor() {
        if(!this.id) this.id = uuidV4()
    }
}

export { Users }