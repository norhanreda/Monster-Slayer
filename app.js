function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app =  new Vue({
  el:"#game",
  data: {
    playerHealth: 100,
    monesterHealth: 100,
  },

  methods: {
    attackMonester() {
      const attckValue = getRandomValue(5, 12);
      monesterHealth -= attckValue;
      attackPlayer();
    },
    attackPlayer() {
      const attckValue = getRandomValue(8, 15);
      playerHealth -= attckValue;
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

