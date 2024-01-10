/*チームのデータ内容*/
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sql2 = [
  `insert into team ("name") values ("マンチェスター・シティ");`,
  `insert into team ("name") values ("アーセナル");`,
  `insert into team ("name") values ("マンチェスター・ユナイテッド");`,
  `insert into team ("name") values ("ニューカッスル");`,
  `insert into team ("name") values ("リヴァプール");`,
  `insert into team ("name") values ("ブライトン");`,
  `insert into team ("name") values ("アストン・ビラ");`,
  `insert into team ("name") values ("トッテナム");`,
  `insert into team ("name") values ("ブレントフォード");`,
  `insert into team ("name") values ("フルハム");`,
  `insert into team ("name") values ("クリスタル・パレス");`,
  `insert into team ("name") values ("チェルシー");`,
  `insert into team ("name") values ("ウォルバーハンプトン");`,
  `insert into team ("name") values ("ウエスト・ハム");`,
  `insert into team ("name") values ("ボーンマス");`,
  `insert into team ("name") values ("ノッティンガム・フォレスト");`,
  `insert into team ("name") values ("エバートン");`,
  `insert into team ("name") values ("バーンリー");`,
  `insert into team ("name") values ("シェフィールド・ユナイテッド");`,
  `insert into team ("name") values ("ルートン・タウン");`

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
