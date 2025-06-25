<template>
  <div class="countdown-timer">
    <h2>Visszaszámláló</h2>
    <div class="timer-display">{{ formattedTime }}</div>
    <div class="controls">
      <button @click="toggleTimer" class="control-button">
        {{ isRunning ? 'Leállítás' : 'Indítás' }}
      </button>
      <button @click="resetTimer" class="control-button">Visszaállítás</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeUnmount } from 'vue';

const props = defineProps({
  initialTime: {
    type: Number,
    default: 60,
    required: true
  }
});

const remainingTime = ref(props.initialTime);
const isRunning = ref(false);
let timerInterval = null;

const formattedTime = computed(() => {
  const minutes = Math.floor(remainingTime.value / 60);
  const seconds = remainingTime.value % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
});

const toggleTimer = () => {
  isRunning.value = !isRunning.value;
  
  if (isRunning.value) {
    startTimer();
  } else {
    stopTimer();
  }
};

const startTimer = () => {
  if (remainingTime.value <= 0) {
    remainingTime.value = props.initialTime;
  }
  
  timerInterval = setInterval(() => {
    if (remainingTime.value > 0) {
      remainingTime.value--;
    } else {
      stopTimer();
    }
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timerInterval);
  isRunning.value = false;
};

const resetTimer = () => {
  stopTimer();
  remainingTime.value = props.initialTime;
};

// Cleanup timer when component is destroyed
onBeforeUnmount(() => {
  stopTimer();
});
</script>

<style scoped>
.countdown-timer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 300px;
  margin: 0 auto;
}

.timer-display {
  font-size: 48px;
  font-weight: bold;
  margin: 20px 0;
  font-family: monospace;
}

.controls {
  display: flex;
  gap: 10px;
}

.control-button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.control-button:hover {
  background-color: #3e8e41;
}
</style>