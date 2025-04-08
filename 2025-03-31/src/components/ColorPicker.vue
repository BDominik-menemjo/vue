<template>
  <div class="color-picker">
    <h2>Színválasztó</h2>
    <div class="color-options">
      <div
        v-for="(color, index) in colors"
        :key="index"
        class="color-option"
        :style="{ backgroundColor: color }"
        :class="{ selected: selectedColor === color }"
        @click="selectColor(color)"
      ></div>
    </div>
    <div class="selected-color-info">
      <p>Kiválasztott szín: <span :style="{ color: selectedColor }">{{ selectedColor }}</span></p>
      <div class="color-preview" :style="{ backgroundColor: selectedColor }"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'teal'];
const selectedColor = ref(colors[0]); // Alapértelmezetten az első szín van kiválasztva

const selectColor = (color) => {
  selectedColor.value = color;
};
</script>

<style scoped>
.color-picker {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 300px;
  margin: 0 auto;
}

.color-options {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.color-option {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.color-option:hover {
  transform: scale(1.1);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
}

.color-option.selected {
  border: 3px solid #000;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
}

.selected-color-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.color-preview {
  width: 100px;
  height: 50px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-top: 10px;
}
</style>