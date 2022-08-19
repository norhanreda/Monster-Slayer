function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app =  Vue.createApp({
 
  
  data() {
    return {
      playerHealth: 100,
      monesterHealth: 100,
    
    };
  },

  methods: {
    attackMonester() {
      const attckValue = getRandomValue(5, 12);
      this.monesterHealth -= attckValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attckValue = getRandomValue(8, 15);
      this.playerHealth -= attckValue;
    },
  },
  computed: {
    player_health_bar() {
      return { width: this.playerHealth + "%" };
    },
    monester_health_bar() {
      return { width: this.monesterHealth + "%" };
    },
  },
});
app.mount("#game");

