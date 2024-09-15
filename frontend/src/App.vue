<template>
  <div>
    <h1>Here</h1>
    <h1>{{ message }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const message = ref('') // Using ref for reactive data

const fetchMessage = async () => {
  try {
    const response = await fetch('http://localhost:8000/')
    const data = await response.json()
    message.value = data.message // Extract the message from the API response
  } catch (error) {
    console.error('Error fetching the message:', error)
    message.value = 'opsi' // Set error message
  }
}

// Use onMounted instead of mounted
onMounted(() => {
  fetchMessage()
})
</script>
