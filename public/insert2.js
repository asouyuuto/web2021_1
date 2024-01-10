/*注目選手のデータ内容*/
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sql2 = [
  `insert into player (name, team_id) values ("アーリング・ハーランド" ,1);`,
  `insert into player (name, team_id) values ("富安健洋" ,2);`,
  `insert into player (name, team_id) values ("アンドレ・オナナ" ,3);`,
  `insert into player (name, team_id) values ("サンドロ・トナーリ" ,4);`,
  `insert into player (name, team_id) values ("トレント・アレクサンダー・アーノルド" ,5);`,
  `insert into player (name, team_id) values ("三苫薫" ,6);`,
  `insert into player (name, team_id) values ("ムサ・ディアビ" ,7);`,
  `insert into player (name, team_id) values ("ソン・フンミン" ,8);`,
  `insert into player (name, team_id) values ("マティアス・イェンセン" ,9);`,
  `insert into player (name, team_id) values ("ジョアン・パリーニャ" ,10);`,
  `insert into player (name, team_id) values ("マーク・グエイ" ,11);`,
  `insert into player (name, team_id) values ("ミハイロ・ムドリク" ,12);`,
  `insert into player (name, team_id) values ("ジョアン・ゴメス" ,13);`,
  `insert into player (name, team_id) values ("モハメド・クドゥス" ,14);`,
  `insert into player (name, team_id) values ("ジャスティン・クライファート" ,15);`,
  `insert into player (name, team_id) values ("ダニーロ" ,16);`,
  `insert into player (name, team_id) values ("ジョーダン・ピックフォード" ,17);`,
  `insert into player (name, team_id) values ("ジョシュ・ブラウンヒル" ,18);`,
  `insert into player (name, team_id) values ("ジョン・イーガン" ,19);`,
  `insert into player (name, team_id) values ("トム・ロッキャー" ,20);`

  ]

for( let sql of sql2 ) {
db.serialize( () => {
  db.run( sql, (error, row) => {
    if(error) {
      console.log('Error: ', error );
      return;
    }
    console.log( "データを追加しました" );
  });
});
};
