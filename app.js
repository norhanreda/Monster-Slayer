function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monesterHealth: 100,
      currentRound: 0,
      winner: null,
      LogMessages:[],
    };
  },

  watch: {
    playerHealth(value) {
      if (this.monesterHealth <= 0 && value <= 0) {
        // it  is a draw
        this.winner = "draw";
      } else if (value <= 0) {
        // player lost
        this.winner = "monester";
      }
    },

    monesterHealth(value) {
      if (value.monesterHealth <= 0 && this.playerHealth <= 0) {
        // it  is a draw
        this.winner = "draw";
      } else if (value <= 0) {
        // player win
        this.winner = "player";
      }
    },
  },
  methods: {
    startGame() {
      this.playerHealth = 100;
      this.monesterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.LogMessages= [];
    },
    attackMonester() {
      this.currentRound++;
      const attckValue = getRandomValue(5, 12);
      this.monesterHealth -= attckValue;
      /*this.addLogMessage('player','attack',att);*/
      this.attackPlayer();
    },
    attackPlayer() {
      const attckValue = getRandomValue(8, 15);
      this.playerHealth -= attckValue;
    },
    specialAttackMonester() {
      this.currentRound++;
      const attckValue = getRandomValue(10, 25);
      this.monesterHealth -= attckValue;
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.attackPlayer();
    },

    surrender() {
      this.winner = "monester";
    },
    /*addLogMessage(who, what, value) {
     this.LogMessage.unshift({
      actionBy:who,
      actionType:what,
      actionValue:value,

     });




    },*/
  },
  computed: {
    player_health_bar() {
      if (this.player_health_bar == 0) return { width: "0%" };
      else return { width: this.playerHealth + "%" };
    },
    monester_health_bar() {
      if (this.monester_health_bar == 0) return { width: "0%" };
      else return { width: this.monesterHealth + "%" };
    },
    may_use_specialAttack() {
      return this.currentRound % 3 != 0;
    },
  },
});
app.mount("#game");

/* 
  
  v-bid: -> :
   v-on   -> @

*/
