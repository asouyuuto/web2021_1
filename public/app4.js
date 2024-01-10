const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  let sql = `
  select id, name from team;
`;
db.serialize( () => {
  db.all( sql, (error, row) => {
    if(error) {
      console.log('Error: ', error );
      return;
    }
    console.log(row);
    for(let data of row){
      console.log(data.id + " : " + data.name);
    }
    res.render("test",{ data: row});
  });
});
});
app.get("/ss", (req, res) => {
  let sql = `
  select team.id, player.name as player_name from team inner join player
  on team.id = player.team_id
  where player.team_id = ` 

  // + req.params.id +
  // ` ;
  + req.query.id +
  ` ;
`;
db.serialize( () => {
  console.log(sql);
  db.all( sql, (error, row) => {
    if(error) {
      console.log('Error: ', error );
      return;
    }
    console.log(row);
    for(let data of row){
      console.log(data.id + " : " + data.name);
    }
    res.render("test2",{ data: row});
  });;
});
});


app.use(function(req, res, next) {
  res.status(404).send('ページが見つかりません');
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
