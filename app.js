function getRandomValue(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      const attachValue = getRandomValue(12, 5);
      this.monsterHealth = this.monsterHealth - attachValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attachValue = getRandomValue(15, 8);
      this.playerHealth = this.playerHealth - attachValue;
      this.attackMonster();
    },
  },
});
app.mount("#game");
