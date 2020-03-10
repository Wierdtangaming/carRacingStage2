class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

  getCount(){
    var player_countRef = database.ref('player_count');
    player_countRef.on("value",(data)=>{
      player_count = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      player_count: count
    });
  }

  getcarsatend(){
    database.ref('carsatend').on("value",(data)=>{
      this.rank = data.val();
    })
  }

  static updatecarsatend(rank){
    database.ref('/').update({
      carsatend : rank
    })
  }
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
