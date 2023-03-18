function getRandomValue(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
    };
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
        this.monsterHealth = 0;
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attachValue = getRandomValue(12, 5);
      this.monsterHealth -= attachValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attachValue = getRandomValue(15, 8);
      this.playerHealth -= attachValue;
    },
    specialAttackMonster() {
      this.currentRound++;
      const attachValue = getRandomValue(25, 10);
      this.monsterHealth -= attachValue;
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(20, 10);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      const that = this;
      setTimeout(function () {
        that.attackPlayer();
      }, 200);
    },
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return {
          width: "0%",
        };
      }
      return {
        width: this.monsterHealth + "%",
      };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return {
          width: "0%",
        };
      }
      return {
        width: this.playerHealth + "%",
      };
    },
    mayUseSpecalAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
});
app.mount("#game");
