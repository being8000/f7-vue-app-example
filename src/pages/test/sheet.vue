<template>
  <f7-sheet class="demo-sheet-swipe-to-step" style="height: auto" swipe-to-close swipe-to-step push backdrop>
    <div class="swipe-handler" @click="toggleSwipeStep"></div>
    <div class="sheet-modal-swipe-step">
      <div class="display-flex padding justify-content-space-between align-items-center">
        <div style="font-size: 18px"><b>Total:</b></div>
        <div style="font-size: 22px"><b>$500</b></div>
      </div>
      <div class="padding-horizontal padding-bottom">
        <f7-button large fill>Make Payment</f7-button>
        <div class="margin-top text-align-center">Swipe up for more details</div>
      </div>
    </div>
    <f7-block-title medium class="margin-top">Your order:</f7-block-title>
    <f7-list>
      <f7-list-item title="Item 1">
        <template #after>
          <b>$200</b>
        </template>
      </f7-list-item>
      <f7-list-item title="Item 2">
        <template #after>
          <b>$180</b>
        </template>
      </f7-list-item>
      <f7-list-item title="Delivery">
        <template #after>
          <b>$120</b>
        </template>
      </f7-list-item>
    </f7-list>
  </f7-sheet>
</template>
<script setup lang="ts">
import {
  f7, f7BlockTitle, f7Button, f7List,
  f7ListItem, f7Sheet
} from 'framework7-vue';

const toggleSwipeStep = () => {
  f7.sheet.stepToggle('.demo-sheet-swipe-to-step')
}
</script>