'use strict';

fetch("https://spla2.yuu26.com/schedule")
  .then((response) => {
    if(!response.ok){
      throw new Error('Not ok');
    }
    return response.json();
  })
  .then (data => {
    const data_nawabari = data.result.regular;
    const data_gachi = data.result.gachi;
    const data_league = data.result.league;
    console.log(data_nawabari);
    console.log(data_gachi);
    console.log(data_gachi[0].rule);
    func_nawabari(data_nawabari);
    func_gachi(data_gachi);
    func_league(data_league);
  })
  .catch(error =>{
    console.error(error);
  });

function func_nawabari(data_nawabari){
  // 時刻更新処理
  document.getElementById("time-nawabari-first-stage").textContent = make_time(data_nawabari[0].start, data_nawabari[0].end);
  document.getElementById("time-nawabari-second-stage").textContent = make_time(data_nawabari[1].start, data_nawabari[1].end);
  document.getElementById("time-nawabari-third-stage").textContent = make_time(data_nawabari[2].start, data_nawabari[2].end);
  document.getElementById("time-nawabari-forth-stage").textContent = make_time(data_nawabari[3].start, data_nawabari[3].end);
  console.log(data_nawabari[0].start)
  console.log(make_time(data_nawabari[0].start, data_nawabari[0].end))
  // ステージ名更新処理
  document.getElementById("nawabari-first-stage-one").textContent = data_nawabari[0].maps[0];
  document.getElementById("nawabari-first-stage-two").textContent = data_nawabari[0].maps[1];
  document.getElementById("nawabari-second-stage-one").textContent = data_nawabari[1].maps[0];
  document.getElementById("nawabari-second-stage-two").textContent = data_nawabari[1].maps[1];
  document.getElementById("nawabari-third-stage-one").textContent = data_nawabari[2].maps[0];
  document.getElementById("nawabari-third-stage-two").textContent = data_nawabari[2].maps[1];
  document.getElementById("nawabari-forth-stage-one").textContent = data_nawabari[3].maps[0];
  document.getElementById("nawabari-forth-stage-two").textContent = data_nawabari[3].maps[1];
  // ステージ画像更新処理
  document.getElementById("img-nawabari-first-stage-one").setAttribute("src", "./image/stage/" + data_nawabari[0].maps[0] + ".jpg");
  document.getElementById("img-nawabari-first-stage-two").setAttribute("src", "./image/stage/" + data_nawabari[0].maps[1] + ".jpg");
  document.getElementById("img-nawabari-second-stage-one").setAttribute("src", "./image/stage/" + data_nawabari[1].maps[0] + ".jpg");
  document.getElementById("img-nawabari-second-stage-two").setAttribute("src", "./image/stage/" + data_nawabari[1].maps[1] + ".jpg");
  document.getElementById("img-nawabari-third-stage-one").setAttribute("src", "./image/stage/" + data_nawabari[2].maps[0] + ".jpg");
  document.getElementById("img-nawabari-third-stage-two").setAttribute("src", "./image/stage/" + data_nawabari[2].maps[1] + ".jpg");
  document.getElementById("img-nawabari-forth-stage-one").setAttribute("src", "./image/stage/" + data_nawabari[3].maps[0] + ".jpg");
  document.getElementById("img-nawabari-forth-stage-two").setAttribute("src", "./image/stage/" + data_nawabari[3].maps[1] + ".jpg");
}

function func_gachi(data_gachi){
  // 時刻更新処理
  document.getElementById("time-gachi-first-stage").textContent = make_time(data_gachi[0].start, data_gachi[0].end);
  document.getElementById("time-gachi-second-stage").textContent = make_time(data_gachi[1].start, data_gachi[1].end);
  document.getElementById("time-gachi-third-stage").textContent = make_time(data_gachi[2].start, data_gachi[2].end);
  document.getElementById("time-gachi-forth-stage").textContent = make_time(data_gachi[3].start, data_gachi[3].end);
  // ステージ名更新処理
  document.getElementById("gachi-first-stage-one").textContent = data_gachi[0].maps[0];
  document.getElementById("gachi-first-stage-two").textContent = data_gachi[0].maps[1];
  document.getElementById("gachi-second-stage-one").textContent = data_gachi[1].maps[0];
  document.getElementById("gachi-second-stage-two").textContent = data_gachi[1].maps[1];
  document.getElementById("gachi-third-stage-one").textContent = data_gachi[2].maps[0];
  document.getElementById("gachi-third-stage-two").textContent = data_gachi[2].maps[1];
  document.getElementById("gachi-forth-stage-one").textContent = data_gachi[3].maps[0];
  document.getElementById("gachi-forth-stage-two").textContent = data_gachi[3].maps[1];
  // ステージ画像更新処理
  document.getElementById("img-gachi-first-stage-one").setAttribute("src", "./image/stage/" + data_gachi[0].maps[0] + ".jpg");
  document.getElementById("img-gachi-first-stage-two").setAttribute("src", "./image/stage/" + data_gachi[0].maps[1] + ".jpg");
  document.getElementById("img-gachi-second-stage-one").setAttribute("src", "./image/stage/" + data_gachi[1].maps[0] + ".jpg");
  document.getElementById("img-gachi-second-stage-two").setAttribute("src", "./image/stage/" + data_gachi[1].maps[1] + ".jpg");
  document.getElementById("img-gachi-third-stage-one").setAttribute("src", "./image/stage/" + data_gachi[2].maps[0] + ".jpg");
  document.getElementById("img-gachi-third-stage-two").setAttribute("src", "./image/stage/" + data_gachi[2].maps[1] + ".jpg");
  document.getElementById("img-gachi-forth-stage-one").setAttribute("src", "./image/stage/" + data_gachi[3].maps[0] + ".jpg");
  document.getElementById("img-gachi-forth-stage-two").setAttribute("src", "./image/stage/" + data_gachi[3].maps[1] + ".jpg");
  // ガチルール更新処理
  document.getElementById("gachi-rule-first").textContent = data_gachi[0].rule;
  document.getElementById("gachi-rule-second").textContent = data_gachi[1].rule;
  document.getElementById("gachi-rule-third").textContent = data_gachi[2].rule;
  document.getElementById("gachi-rule-forth").textContent = data_gachi[3].rule;
  // ガチルールアイコン処理
  document.getElementById("img-gachi-rule-first").setAttribute("src", "./image/rule/" + data_gachi[0].rule + ".jpg");
  document.getElementById("img-gachi-rule-second").setAttribute("src", "./image/rule/" + data_gachi[1].rule + ".jpg");
  document.getElementById("img-gachi-rule-third").setAttribute("src", "./image/rule/" + data_gachi[2].rule + ".jpg");
  document.getElementById("img-gachi-rule-forth").setAttribute("src", "./image/rule/" + data_gachi[3].rule + ".jpg");
}

function func_league(data_league){
  // 時刻更新処理
  document.getElementById("time-league-first-stage").textContent = make_time(data_league[0].start, data_league[0].end);
  document.getElementById("time-league-second-stage").textContent = make_time(data_league[1].start, data_league[1].end);
  document.getElementById("time-league-third-stage").textContent = make_time(data_league[2].start, data_league[2].end);
  document.getElementById("time-league-forth-stage").textContent = make_time(data_league[3].start, data_league[3].end);
  // ステージ名更新処理
  document.getElementById("league-first-stage-one").textContent = data_league[0].maps[0];
  document.getElementById("league-first-stage-two").textContent = data_league[0].maps[1];
  document.getElementById("league-second-stage-one").textContent = data_league[1].maps[0];
  document.getElementById("league-second-stage-two").textContent = data_league[1].maps[1];
  document.getElementById("league-third-stage-one").textContent = data_league[2].maps[0];
  document.getElementById("league-third-stage-two").textContent = data_league[2].maps[1];
  document.getElementById("league-forth-stage-one").textContent = data_league[3].maps[0];
  document.getElementById("league-forth-stage-two").textContent = data_league[3].maps[1];
  // ステージ画像更新処理
  document.getElementById("img-league-first-stage-one").setAttribute("src", "./image/stage/" + data_league[0].maps[0] + ".jpg");
  document.getElementById("img-league-first-stage-two").setAttribute("src", "./image/stage/" + data_league[0].maps[1] + ".jpg");
  document.getElementById("img-league-second-stage-one").setAttribute("src", "./image/stage/" + data_league[1].maps[0] + ".jpg");
  document.getElementById("img-league-second-stage-two").setAttribute("src", "./image/stage/" + data_league[1].maps[1] + ".jpg");
  document.getElementById("img-league-third-stage-one").setAttribute("src", "./image/stage/" + data_league[2].maps[0] + ".jpg");
  document.getElementById("img-league-third-stage-two").setAttribute("src", "./image/stage/" + data_league[2].maps[1] + ".jpg");
  document.getElementById("img-league-forth-stage-one").setAttribute("src", "./image/stage/" + data_league[3].maps[0] + ".jpg");
  document.getElementById("img-league-forth-stage-two").setAttribute("src", "./image/stage/" + data_league[3].maps[1] + ".jpg");
  // リーグルール更新処理
  document.getElementById("league-rule-first").textContent = data_league[0].rule;
  document.getElementById("league-rule-second").textContent = data_league[1].rule;
  document.getElementById("league-rule-third").textContent = data_league[2].rule;
  document.getElementById("league-rule-forth").textContent = data_league[3].rule;
    // リーグルールアイコン処理
  document.getElementById("img-league-rule-first").setAttribute("src", "./image/rule/" + data_league[0].rule + ".jpg");
  document.getElementById("img-league-rule-second").setAttribute("src", "./image/rule/" + data_league[1].rule + ".jpg");
  document.getElementById("img-league-rule-third").setAttribute("src", "./image/rule/" + data_league[2].rule + ".jpg");
  document.getElementById("img-league-rule-forth").setAttribute("src", "./image/rule/" + data_league[3].rule + ".jpg");
}

function make_time(start, fin){
  const start_time = start.slice(11, 16);
  const fin_time = fin.slice(11, 16);
  return start_time + " ~ " + fin_time;
}

  // Success
  // fetch("https://spla2.yuu26.com/schedule")
  // .then((response) => {
  //   if(!response.ok){
  //     throw new Error('Not ok');
  //   }
  //   return response.json();
  // })
  // .then (data => {
  //   console.log(data);
  //   const rule = data["result"];
  //   console.log(rule);
  //   console.log(rule["gachi"]);
  //   const now_gachi = rule["gachi"];
  //   now_gachi.forEach(element => {
  //     console.log(element)
  //   });
  // })
  // .catch(error =>{
  //   console.error(error);
  // });