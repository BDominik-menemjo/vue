<template>
  <div class="toggle-switch">
    <div class="toggle-switch-container">
      <div 
        class="toggle-switch-button" 
        :class="{ active: isActive }"
        @click="toggle"
      >
        <div class="toggle-switch-slider"></div>
      </div>
      <span class="toggle-switch-label" v-if="label">{{ label }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  initialValue: {
    type: Boolean,
    default: false
  }
});

const isActive = ref(props.initialValue);

const toggle = () => {
  isActive.value = !isActive.value;
};

// Expose isActive value for parent components
defineExpose({
  isActive
});
</script>

<style scoped>
.toggle-switch {
  margin: 20px 0;
}

.toggle-switch-container {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.toggle-switch-button {
  position: relative;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  background-color: #ccc;
  transition: background-color 0.3s ease;
}

.toggle-switch-button.active {
  background-color: #4CAF50;
}

.toggle-switch-slider {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: white;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.toggle-switch-button.active .toggle-switch-slider {
  transform: translateX(30px);
}

.toggle-switch-label {
  margin-left: 10px;
  font-size: 16px;
}
</style>