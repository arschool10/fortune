/****************
 * おみくじアプリで使うJavaScript
 ***************/

// 画面を初期設定する
let shokiSettei = () => {

  // おみくじ結果パネルを隠す
  kakusuPanel(kekkaPanel);

  // 戻るボタンを隠す
  kakusuPanel(modoruButton);

  // タイトル画面のおみくじ画像を設定する
  setteiHomeImage('keikyuieburure.jpg');

}

// おみくじの中身
let omikujiNakami = [
  { // 吉の設定
    kekkaTitle: '吉', // おみくじの結果のタイトル文
    kekkaSetsumei: '吉っす。何かいいことがあるかも', // おみくじの結果につける説明文
    kekkaImage: 'buru600.jpg' //おみくじの結果に表示する画像
  },
  { // 吉の設定
    kekkaTitle: '吉', // おみくじの結果のタイトル文
    kekkaSetsumei: '吉っす。何かいいことがあるかも', // おみくじの結果につける説明文
    kekkaImage: 'buru600.jpg' //おみくじの結果に表示する画像
  },
  { // 吉の設定
    kekkaTitle: '吉', // おみくじの結果のタイトル文
    kekkaSetsumei: '吉っす。何かいいことがあるかも', // おみくじの結果につける説明文
    kekkaImage: 'buru600.jpg' //おみくじの結果に表示する画像
  },
  { // 吉の設定
    kekkaTitle: '吉', // おみくじの結果のタイトル文
    kekkaSetsumei: '吉っす。何かいいことがあるかも', // おみくじの結果につける説明文
    kekkaImage: 'buru600.jpg' //おみくじの結果に表示する画像
  },
  { // 吉の設定
    kekkaTitle: '吉', // おみくじの結果のタイトル文
    kekkaSetsumei: '吉っす。何かいいことがあるかも', // おみくじの結果につける説明文
    kekkaImage: 'buru600.jpg' //おみくじの結果に表示する画像
  },
  { // 凶の設定
    kekkaTitle: '凶', // おみくじの結果のタイトル文
    kekkaSetsumei: '凶ねー。何もかも気を付けて', // おみくじの結果につける説明文
    kekkaImage: 'brusin1000.jpg' //おみくじの結果に表示する画像
  },
    { // 凶の設定
    kekkaTitle: '凶', // おみくじの結果のタイトル文
    kekkaSetsumei: '凶ねー。何もかも気を付けて', // おみくじの結果につける説明文
    kekkaImage: 'brusin1000.jpg' //おみくじの結果に表示する画像
  },
  { // 凶の設定
    kekkaTitle: '凶', // おみくじの結果のタイトル文
    kekkaSetsumei: '凶ねー。何もかも気を付けて', // おみくじの結果につける説明文
    kekkaImage: 'brusin1000.jpg' //おみくじの結果に表示する画像
  },
   { // 凶の設定
    kekkaTitle: '凶', // おみくじの結果のタイトル文
    kekkaSetsumei: '凶ねー。何もかも気を付けて', // おみくじの結果につける説明文
    kekkaImage: 'brusin1000.jpg' //おみくじの結果に表示する画像
  },
    { //大凶の設定
    kekkaTitle: '大凶', // おみくじの結果のタイトル文
    kekkaSetsumei: '大凶かー。残念またがんば', // おみくじの結果につける説明文
    kekkaImage: 'red1500.jpg' //おみくじの結果に表示する画像
  },
    { //大凶の設定
    kekkaTitle: '大凶', // おみくじの結果のタイトル文
    kekkaSetsumei: '大凶かー。残念またがんば', // おみくじの結果につける説明文
    kekkaImage: 'red1500.jpg' //おみくじの結果に表示する画像
  },
   { //大凶の設定
    kekkaTitle: '大凶', // おみくじの結果のタイトル文
    kekkaSetsumei: '大凶かー。残念またがんば', // おみくじの結果につける説明文
    kekkaImage: 'red1500.jpg' //おみくじの結果に表示する画像
  },
   
  
  { //小吉の設定
    kekkaTitle: '小吉', // おみくじの結果のタイトル文
    kekkaSetsumei: '小吉。惜しいまた頑張って', // おみくじの結果につける説明文
    kekkaImage: '1000kyu12.jpg' //おみくじの結果に表示する画像
  },
    { //小吉の設定
    kekkaTitle: '小吉', // おみくじの結果のタイトル文
    kekkaSetsumei: '小吉。惜しいまた頑張って', // おみくじの結果につける説明文
    kekkaImage: '1000kyu12.jpg' //おみくじの結果に表示する画像
  },
    { //小吉の設定
    kekkaTitle: '小吉', // おみくじの結果のタイトル文
    kekkaSetsumei: '小吉。惜しいまた頑張って', // おみくじの結果につける説明文
    kekkaImage: '1000kyu12.jpg' //おみくじの結果に表示する画像
  },
    { //小吉の設定
    kekkaTitle: '小吉', // おみくじの結果のタイトル文
    kekkaSetsumei: '小吉。惜しいまた頑張って', // おみくじの結果につける説明文
    kekkaImage: '1000kyu12.jpg' //おみくじの結果に表示する画像
  },
    { // 大吉の設定
    kekkaTitle: '大吉', // おみくじの結果のタイトル文
    kekkaSetsumei: '大吉です。超ラッキーだねぇ', // おみくじの結果につける説明文
    kekkaImage: 'keiseiandiehapikeikyu.jpg' //おみくじの結果に表示する画像
  },
      { // 大吉の設定
    kekkaTitle: '大吉', // おみくじの結果のタイトル文
    kekkaSetsumei: '大吉です。超ラッキーだねぇ', // おみくじの結果につける説明文
    kekkaImage: 'keiseiandiehapikeikyu.jpg' //おみくじの結果に表示する画像
  }
];

//ルーレットの中身
let omikujiRoulette = [
  'IMG_0344.JPG',
  'IMG_0360.JPG',
  'IMG_0487.JPG',
];

//ルーレットを表示する関数
let miseruRoulette = () => {
  let saikoroKekka = furuSaikoro(omikujiRoulette.length);
  setteiHomeImage(omikujiRoulette[saikoroKekka]);
}

//おみくじの結果を見せる
let miseruOmikujiKekka = () => {
  //　ルーレットに使っていた画像を隠す
  kakusuPanel(omikujiImage);
  
  //タイトル画面のおみくじ画像を設定する
  setteiHomeImage('keikyuieburure.jpg');
  
  //おみくじの中身の数までが出るサイコロをふる
  let saikoroKekka = furuSaikoro(omikujiNakami.length);
  
  //出て来たサイコロの目からおみくじの結果を得る
  let omikujiKekka = omikujiNakami[saikoroKekka];
  
  //おみくじの結果からタイトルを画面に貼り付ける
  setteiKekkaTitle(omikujiKekka.kekkaTitle);
  
  //おみくじの結果から説明を画面に貼り付ける
  setteiKekkaTitle(omikujiKekka.kekkaSetsumei);
  
  //おみくじの結果から画像を画面に貼り付ける
  setteiKekkaImage(omikujiKekka.kekkaImage);
  
  //おみくじの結果画面を表示する
  miseruPanel(kekkaPanel);
  
  // 「戻る」ボタンを表示する
  miseruPanel(modoruButton);
  
}

//おみくじを引く
let hikuOmikuji = () => {
  
  // 「おみくじを引く」ボタンを隠す
  kakusuPanel(hikuButton);
  
  //0.1秒で画像を変えるルーレットのアニメーションを開始する
  let rouletteTimer = kurikaesuTimer(miseruRoulette,100);
  
  // 5秒待って結果を表示する
  matsuTimer(()=>{
    // ルーレットのタイマーを止める
    tomeruTimer(rouletteTimer);

    // おみくじの結果を見せる
    miseruOmikujiKekka();

  },5000); // 5000ミリ秒=5秒に設定
}

//読み込み終わったら初期設定を実行する
shokiSettei();

  
  
  