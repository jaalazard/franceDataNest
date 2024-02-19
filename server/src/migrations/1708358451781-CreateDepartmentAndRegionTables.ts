import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDepartmentAndRegionTables1708358451781
  implements MigrationInterface
{
  name = 'CreateDepartmentAndRegionTables1708358451781';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`department\` (\`departement_id\` int NOT NULL AUTO_INCREMENT, \`departement_code\` int NOT NULL, \`departement_nom\` varchar(35) NOT NULL, \`departement_region\` varchar(3) NOT NULL, PRIMARY KEY (\`departement_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`region\` (\`region_id\` int NOT NULL AUTO_INCREMENT, \`region_nom\` varchar(30) NOT NULL, \`region_code\` varchar(3) NOT NULL, INDEX \`IDX_5ddd652436c5e31da65bd2ed14\` (\`region_code\`), PRIMARY KEY (\`region_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`department\` ADD CONSTRAINT \`FK_cb56b2273d010b69db1bc894904\` FOREIGN KEY (\`departement_region\`) REFERENCES \`region\`(\`region_code\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`department\` DROP FOREIGN KEY \`FK_cb56b2273d010b69db1bc894904\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_5ddd652436c5e31da65bd2ed14\` ON \`region\``,
    );
    await queryRunner.query(`DROP TABLE \`region\``);
    await queryRunner.query(`DROP TABLE \`department\``);
  }
}
