function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app =  Vue.createApp({
 
  
  data() {
    return {
      playerHealth: 100,
      monesterHealth: 100,
      currentRound:0,
    };
  },

  methods: {
    attackMonester() {
      this.currentRound ++;
      const attckValue = getRandomValue(5, 12);
      this.monesterHealth -= attckValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attckValue = getRandomValue(8, 15);
      this.playerHealth -= attckValue;
    },
    specialAttackMonester()
    {
      this.currentRound ++;
      const attckValue = getRandomValue(10, 25);
      this.monesterHealth -= attckValue;
      this.attackPlayer();
    },
  },
  computed: {
    player_health_bar() {
      return { width: this.playerHealth + "%" };
    },
    monester_health_bar() {
      return { width: this.monesterHealth + "%" };
    },
    may_use_specialAttack() {
      return this.currentRound % 3 !=0;
    },
    
  },
});
app.mount("#game");

/* 
  
  v-bid: -> :
   v-on   -> @

*/