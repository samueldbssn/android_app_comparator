import{a5 as t,m as e,q as s,C as i,a8 as a,g as n,w as o,az as r,aA as h,ab as l,ag as c,aD as p,K as u,aE as d,bb as m,bc as v,bd as f,I as y,be as g,r as w,bf as b,bg as k,aR as M,ay as j,aB as N,aC as G,bh as P,s as O,aF as F,G as S,aG as E,aH as C}from"./main.js";import{l as _}from"./layout-c7d0a2f4.js";import{p as L,e as T}from"./fen-acee80a0.js";import"./CountdownTimer-265e230d.js";import"./tournamentXhr-b8f81bd7.js";import{a as x,b as A}from"./offlineGames-d3a3eaac.js";import{p as I,g as R}from"./game-2ffc1d0e.js";import"./perfs-2bc54d35.js";import"./countries-a19495bf.js";import{a as D,c as $,v as U}from"./crazyValid-11f86c1c.js";import{G as B}from"./GameTitle-0505073c.js";import{B as z}from"./Board-c82f4179.js";import{v as H,p as V}from"./promotion-a7ec34cc.js";import{S as q}from"./index-6048898c.js";import"./CrazyPocket-cee87a95.js";import"./chat-fb252130.js";import"./replay-4865f30a.js";import{i as K}from"./chess-3e18520f.js";import{r as Q,a as W,c as X,e as J,i as Y,b as Z,s as tt,R as et,g as st,d as it}from"./view-e9f38157.js";import{v as at}from"./vibrate-6077ecb6.js";function nt(){const t=n.ai.availableOpponents.map((t=>["aiNameLevelAiLevel",t[1],t[0],t[1]]));return e("div.select_input",a.renderSelect("opponent","opponent",t,n.ai.opponent))}var ot={controller:function(t){let e=!1;function s(t){"backbutton"!==t&&e&&o.backbutton.stack.pop(),e=!1}return{open:function(){o.backbutton.stack.push(s),e=!0},close:s,isOpen:()=>e,root:t}},view:a=>t("offline_actions",void 0,(()=>[Q(a.root)].concat(W(a.root),function(t){return I(t.data)?e("button[data-icon=b]",{oncreate:i((()=>{t.actions.close(),t.resign()}))},s("resign")):null}(a.root),function(t){return[e("button[data-icon=A]",{oncreate:i(t.goToAnalysis)},s("analysis")),e("div.action.opponentSelector",[nt()])]}(a.root))),a.isOpen(),a.close)};const rt=[["white","white"],["black","black"],["randomColor","random"]];var ht={controller(t){const e=c(!1);function s(t){"backbutton"!==t&&!0===e()&&o.backbutton.stack.pop(),e(!1)}return{open:function(){o.backbutton.stack.push(s),e(!0)},close:s,isOpen:e,root:t}},view:c=>c.isOpen()?t("new_offline_game",void 0,(function(){const t=n.ai.availableVariants,p=c.root.vm.setupFen?t.filter((t=>!r.has(t[1]))):t,u=n.ai.variant(),d=c.root.vm.setupFen&&r.has(u),m=n.ai.color(),v="random"!==m?m:"white";return e("div",null,e("div",{className:"action"},nt(),e("div",{className:"select_input"},a.renderSelect("side","color",rt,n.ai.color)),d?e("div",{className:"select_input disabled"},e("label",{for:"variant"},s("variant")),e("select",{disabled:!0,id:"variant"},e("option",{value:u,selected:!0},h(u).name))):e("div",{className:"select_input"},a.renderSelect("variant","variant",p,n.ai.variant)),c.root.vm.setupFen?e("div",{className:"from_position_wrapper"},e("p",null,s("fromPosition")),e("div",{className:"from_position"},e("div",{style:{width:"130px",height:"130px"},oncreate:i((()=>{c.root.vm.setupFen&&o.set(`/editor/${encodeURIComponent(c.root.vm.setupFen)}`)}))},e(l,{fen:c.root.vm.setupFen,orientation:v})))):null),e("div",{className:"popupActionWrapper"},e("button",{className:"defaultButton",oncreate:i((()=>{c.root.startNewGame(n.ai.variant(),c.root.vm.setupFen)}))},s("play"))))}),c.isOpen(),(()=>{c.root.vm.setupFen&&o.set("/ai"),c.close()})):null};class lt{constructor(t,e){this.ctrl=t,this.variant=e,this.level=1,this.isInit=!1,this.listener=t=>{const e=t.output.match(/^bestmove (\w{4,5})|^bestmove ([PNBRQ]@\w{2})/);e&&(e[1]?this.ctrl.onEngineMove(e[1]):e[2]&&this.ctrl.onEngineDrop(e[2]))},this.stockfish=new m(e)}async init(){try{if(!this.isInit){await this.stockfish.start(),this.isInit=!0,window.addEventListener("stockfish",this.listener,{passive:!0}),await this.stockfish.setVariant(),await this.stockfish.setOption("Threads",v());const t=await f();"web"!==y.getPlatform()&&await this.stockfish.setOption("Hash",t),await this.newGame()}}catch(t){}}async newGame(){await this.stockfish.send("ucinewgame"),await this.stockfish.isReady(),await this.stockfish.setOption("UCI_AnalyseMode",!1),await this.stockfish.setOption("UCI_LimitStrength",!0)}async search(t,e){var s;await this.stockfish.send(`position fen ${t} moves ${e}`),await this.stockfish.send(`go movetime ${s=this.level,5e3*s/8} depth ${function(t){return ct[t]}(this.level)}`)}async setLevel(t){return this.level=t,"ios"===y.platform||"android"===y.platform?this.stockfish.setOption("UCI_Elo",(e=this.level,String(pt[e]))):this.stockfish.setOption("Skill Level",String(function(t){return Math.round(20/7*(t-1))}(this.level)));var e}async exit(){return window.removeEventListener("stockfish",this.listener,!1),this.stockfish.exit()}}const ct={1:5,2:5,3:5,4:5,5:5,6:8,7:13,8:22},pt={1:1350,2:1500,3:1600,4:1700,5:2e3,6:2300,7:2700,8:2850};class ut{constructor(t,e,s,i){if(this.promoting=null,this.goToAnalysis=()=>{o.set(`/analyse/offline/ai/${this.data.player.color}?ply=${this.replay.ply}&curFen=${this.replay.situation().fen}`)},this.sharePGN=()=>{this.replay.pgn(this.white(),this.black()).then((t=>q.share({text:t.pgn})))},this.playerName=()=>this.data.player.username,this.onEngineMove=t=>{const e=t.slice(0,2),s=t.slice(2,4),i=g(t);this.vm.engineSearching=!1,this.chessground.apiMove(e,s),this.replay.addMove(e,s,i),w()},this.onEngineDrop=t=>{const e=b(t),s=k(t),i={role:s,color:this.data.opponent.color};this.vm.engineSearching=!1,this.chessground.apiNewPiece(i,e),this.replay.addDrop(s,e),w()},this.engineMove=()=>{this.vm.engineSearching=!0;const t=this.replay.situation();setTimeout((()=>{const e=this.getOpponent().level;this.data.opponent.name=M({ai:e}),this.engine.init().then((()=>this.engine.setLevel(e))).then((()=>this.engine.search(this.data.game.initialFen,t.uciMoves.join(" "))))}),500)},this.isEngineToMove=()=>{const t=this.replay.situation();return!t.end&&t.player!==this.data.player.color},this.onPromotion=(t,e,s)=>{this.replay.addMove(t,e,s)},this.userMove=(t,e)=>{V.start(this,t,e,this.onPromotion)||this.replay.addMove(t,e)},this.onMove=(t,e,s)=>{s?"atomic"===this.data.game.variant.key?(D.capture(this.chessground,e),j.explosion()):j.capture():j.move(),at.quick()},this.onUserNewPiece=(t,e)=>{const s=this.replay.situation();$.drop(this.data,t,e,s.drops)?this.replay.addDrop(t,e):this.apply(this.replay.situation())},this.onNewPiece=()=>{j.move()},this.onReplayAdded=t=>{this.data.game.fen=t.fen,this.apply(t),tt(this,t.status),R.finished(this.data)?this.onGameEnd():this.isEngineToMove()&&this.engineMove(),this.save(),w()},this.onThreefoldRepetition=t=>{tt(this,t),this.save(),this.onGameEnd()},this.onGameEnd=()=>{this.chessground.cancelMove(),this.chessground.stop(),setTimeout((()=>{this.actions.open(),w()}),500)},this.resign=()=>{tt(this,{id:31,name:"resign"},N(this.data.player.color)),this.save(),this.onGameEnd()},this.firstPly=()=>this.data.player.color===N(this.firstPlayerColor())?1:0,this.lastPly=()=>this.replay.situations.length-1,this.jump=t=>(this.chessground.cancelMove(),this.replay.ply===t||t<0||t>=this.replay.situations.length||(this.replay.ply=t,this.apply(this.replay.situation())),!1),this.jumpFirst=()=>this.jump(this.firstPly()),this.jumpPrev=()=>{const t=this.replay.ply;if(this.data.player.color===N(this.firstPlayerColor())){const e=t%2==0?1:2;return this.jump(t-e)}{const e=t%2==0?2:1;return this.jump(t-e)}},this.jumpNext=()=>{const t=this.replay.ply;return this.jump(t+(t+2>=this.replay.situations.length?1:2))},this.jumpLast=()=>this.jump(this.lastPly()),this.canDrop=()=>!0,this.actions=ot.controller(this),this.newGameMenu=ht.controller(this),this.moveList=!!n.game.moveList(),this.vm={engineSearching:!1,setupFen:e,savedFen:t?t.data.game.fen:void 0},e)this.newGameMenu.isOpen(!0),i&&n.ai.color(i),s&&n.ai.variant(s),w();else{const e=n.ai.variant();if(t)try{this.init(t.data,t.situations,t.ply)}catch(t){this.startNewGame(e)}else this.startNewGame(e)}}init(t,e,s){this.newGameMenu.close(),this.actions.close(),this.data=t;const i=this.data.game.variant.key,a=this.data.game.initialFen;this.replay?this.replay.init(i,a,e,s):this.replay=new et(i,a,e,s,this.onReplayAdded,this.onThreefoldRepetition),this.chessground?st.reload(this.chessground,this.data,this.replay.situation()):this.chessground=st.make(this.data,this.replay.situation(),this.userMove,this.onUserNewPiece,this.onMove,this.onNewPiece),this.engine&&this.engine.variant===i?this.engine.newGame().then((()=>{this.isEngineToMove()&&this.engineMove()})):(this.engine&&(this.engine.exit(),this.engine=void 0),this.engine=new lt(this,i),this.engine.init().then((()=>{this.isEngineToMove()&&this.engineMove()}))),this.save(),w()}startNewGame(t,e,s,i){const a={variant:t};e&&(a.fen=e),K(a).then((t=>{this.init(it({id:"offline_ai",variant:t.variant,initialFen:t.setup.fen,fen:t.setup.fen,color:i||dt(),player:t.setup.player}),[t.setup],0)})).then((()=>{e&&(this.vm.setupFen=void 0,o.History.replaceState(void 0,"/ai"))}))}save(){x({data:this.data,situations:this.replay.situations,ply:this.replay.ply})}white(){return"white"===this.data.player.color?this.data.player.username:this.getOpponent().name}black(){return"black"===this.data.player.color?this.data.player.username:this.getOpponent().name}getOpponent(){const t=n.ai.opponent(),e=n.ai.availableOpponents.find((e=>e[1]===t)),i=e&&e.length&&e[0]||"Stockfish";return{name:s("aiNameLevelAiLevel",i,t),level:parseInt(t)||1}}player(){return this.data.player.color}apply(t){if(t){const e=t.uciMoves.length?t.uciMoves[t.uciMoves.length-1]:null;this.chessground.set({fen:t.fen,turnColor:t.player,lastMove:e?G(e):null,dests:t.dests,movableColor:t.player===this.data.player.color?t.player:null,check:t.check})}}firstPlayerColor(){return L(this.data.game.initialFen)}}function dt(){let t=n.ai.color();return"random"===t&&(t=P(0,2)>1?"white":"black"),t}var mt={oninit({attrs:t}){O.createDefault(),A().then((e=>{const s=t.fen,i=t.variant,a=t.color;this.round=new ut(e,s,i,a)})),F()},oncreate:S,onremove(){var t;E(),this.round&&(null===(t=this.round.engine)||void 0===t||t.exit())},view({attrs:t}){let i,a;if(this.round&&this.round.data&&this.round.chessground&&this.round.engine)a=C(e(B,{data:this.round.data})),i=function(t){const s=t.chessground.getMaterialDiff(),i=p(),a=u(),n=e("h2",null,t.getOpponent().name,t.vm.engineSearching?e("span",{className:"engineSpinner fa fa-hourglass-half"}):null),o=e(z,{variant:t.data.game.variant.key,chessground:t.chessground});return i?[d(a,i)?X(t):null,J(t,n,s[t.data.opponent.color],"opponent"),o,J(t,t.playerName(),s[t.data.player.color],"player"),Y(t)]:[o,e("section",{className:"table offline"},J(t,n,s[t.data.opponent.color],"opponent"),Z(t),Y(t),J(t,t.playerName(),s[t.data.player.color],"player"))]}(this.round);else{const e=t.fen||T,n=L(e);a=C(s("computer")),i=U(e,n,void 0)}return _.board(a,i,void 0,this.round&&(n=this.round,[ot.view(n.actions),ht.view(n.newGameMenu),H(n)]));var n}};export default mt;
