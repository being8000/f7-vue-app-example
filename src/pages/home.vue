<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar :sliding="false">
      <f7-nav-left>
        <f7-link panel-open="left">
          <i class="i-mdi-menu w-7 h-7"></i>
        </f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>F7-Vue TypeScript</f7-nav-title>
      <f7-nav-right>
        <f7-link panel-open="right">
          <i class="i-mdi-menu w-7 h-7"></i>
        </f7-link>
      </f7-nav-right>
    </f7-navbar>

    <!-- Page content-->
    <f7-block strong class="bg-blue-500 text-white mt-0">
      <h2 class="text-xl font-bold mb-3">UnoCSS Classes & Icons</h2>
      <p>This is an example of tabs-layout application. The main point of such tabbed layout is that each tab contains
        independent view with its own routing and navigation.</p>

      <p>Each tab/view may have different layout, different navbar type (dynamic, fixed or static) or without navbar like
        this tab.</p>

      <div class="text-xs">
        <i class="i-mdi-alarm hover:text-teal-400 w-7 h-7" /> Material Icon
      </div>
      <div class="text-xs mt-2">
        <i class="i-tabler-bell hover:text-teal-400 w-7 h-7" /> Tabler Icon
      </div>
      <div class="text-xs mt-2">
        <button class="i-carbon-sun dark:i-carbon-moon w-7 h-7 text-white" /> Carbon Icon (Sun for Light & Moon for Dark
        mode)
      </div>
    </f7-block>

    <div class="i-custom-steering-wheel text-orange-400 text-3xl" />
    <!-- A basic anchor icon from Phosphor icons -->
    <div class="i-ph-anchor-simple-thin" />
    <!-- An orange alarm from Material Design Icons -->
    <div class="i-mdi-alarm text-orange-400" />
    <!-- A large Vue logo -->
    <div class="i-logos-vue text-2xl" />
    <!-- Sun in light mode, Moon in dark mode, from Carbon -->
    <button class="i-carbon-sun dark:i-carbon-moon" />
    <!-- <i-custom-vue style="color: rgb(32, 115, 129)" /> -->
    <f7-block strong>
      <h2 text="xl blue-500" font="bold inter">Vue i18n Translation</h2>
      <p class="m-4">Title</p>


    </f7-block>

    <f7-block-title>Navigation Buttons1</f7-block-title>

    <f7-block-title>Modals</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised popup-open="#my-popup">Popup Screen</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised login-screen-open="#my-login-screen">Login Screen</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>Panels</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised panel-open="left">Left Panel</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised panel-open="right">Right Panel</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
    <f7-button fill popup-open=".demo-popup-push">Popup Push</f7-button>
    <f7-list>
      <f7-list-item title="Page Pop" link="/test/12"></f7-list-item>
      <f7-list-item title="Page sheet" link="/sheet/12"></f7-list-item>
      <f7-list-item title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"></f7-list-item>
      <f7-list-item title="Default Route (404)" link="/load-something-that-doesnt-exist/"></f7-list-item>
      <f7-list-item title="Request Data & Load" link="/request-and-load/user/123456/"></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script setup lang="ts">
import {
  f7Page,
  f7Navbar,
  f7NavRight,
  f7NavLeft,
  f7Block,
  f7List,
  f7ListItem,
  f7Link,
  f7Button,
  f7NavTitle,
  f7BlockTitle,
} from 'framework7-vue'

</script>