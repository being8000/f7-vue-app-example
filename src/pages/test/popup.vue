<template>
  <f7-popup class="demo-popup-swipe">
    <f7-page>
      <f7-navbar title="Swipe To Close">
        <f7-nav-right>
          <f7-link popup-close>Close</f7-link>
        </f7-nav-right>
      </f7-navbar>

      <div style="height: 100%" class="display-flex justify-content-center align-items-center">
        <p>Swipe me up or down</p>
      </div>
    </f7-page>
  </f7-popup>
</template>

<script setup lang="ts">
import {
  f7Navbar,
  f7Page,
  f7Popup,
  f7NavRight,
  f7Link,
  f7
} from 'framework7-vue'
import { onMounted, ref } from 'vue'
const isOpened = ref(true)
onMounted(() => {
  isOpened.value = true
  console.log(123123123, f7)
})
</script>