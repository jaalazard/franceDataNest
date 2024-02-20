import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRegionDepartmentAndTownTable1708438871728
  implements MigrationInterface
{
  name = 'CreateRegionDepartmentAndTownTable1708438871728';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`town\` (\`ville_id\` int NOT NULL AUTO_INCREMENT, \`ville_departement\` varchar(255) NULL, \`ville_slug\` varchar(255) NULL, \`ville_nom\` varchar(255) NULL, \`ville_nom_simple\` varchar(255) NULL, \`ville_nom_reel\` varchar(255) NULL, \`ville_nom_soundex\` varchar(255) NULL, \`ville_nom_metaphone\` varchar(255) NULL, \`ville_code_postal\` varchar(255) NULL, \`ville_commune\` int NULL, \`ville_code_commune\` int NOT NULL, \`ville_arrondissement\` int NULL, \`ville_canton\` varchar(255) NULL, \`ville_amdi\` int NULL, \`ville_population_2010\` int NULL, \`ville_population_1999\` int NULL, \`ville_population_2012\` int NULL, \`ville_densite_2010\` int NULL, \`ville_surface\` int NULL, \`ville_longitude_deg\` int NULL, \`ville_latitude_deg\` int NULL, \`ville_longitude_grd\` varchar(255) NULL, \`ville_latitude_grd\` varchar(255) NULL, \`ville_longitude_dms\` varchar(255) NULL, \`ville_latitude_dms\` varchar(255) NULL, \`ville_zmin\` int NULL, \`ville_zmax\` int NULL, PRIMARY KEY (\`ville_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`department\` (\`departement_id\` int NOT NULL AUTO_INCREMENT, \`departement_code\` varchar(255) NOT NULL, \`departement_nom\` varchar(35) NOT NULL, \`departement_region\` varchar(3) NOT NULL, INDEX \`IDX_ff4d59836b53b400a0383d0852\` (\`departement_code\`), PRIMARY KEY (\`departement_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`region\` (\`region_id\` int NOT NULL AUTO_INCREMENT, \`region_nom\` varchar(30) NOT NULL, \`region_code\` varchar(3) NOT NULL, INDEX \`IDX_5ddd652436c5e31da65bd2ed14\` (\`region_code\`), PRIMARY KEY (\`region_id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`town\` ADD CONSTRAINT \`FK_e503f4e6b2db15e88bcf84c2a7a\` FOREIGN KEY (\`ville_departement\`) REFERENCES \`department\`(\`departement_code\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
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
      `ALTER TABLE \`town\` DROP FOREIGN KEY \`FK_e503f4e6b2db15e88bcf84c2a7a\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_5ddd652436c5e31da65bd2ed14\` ON \`region\``,
    );
    await queryRunner.query(`DROP TABLE \`region\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_ff4d59836b53b400a0383d0852\` ON \`department\``,
    );
    await queryRunner.query(`DROP TABLE \`department\``);
    await queryRunner.query(`DROP TABLE \`town\``);
  }
}
