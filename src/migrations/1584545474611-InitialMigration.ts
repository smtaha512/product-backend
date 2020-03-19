import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1584545474611 implements MigrationInterface {
    name = 'InitialMigration1584545474611'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `products` (`_id` varchar(36) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `name` varchar(255) NOT NULL, `price` decimal NOT NULL, PRIMARY KEY (`_id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `products`", undefined);
    }

}
