<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-white text-black">
        <q-toolbar-title> Paypay </q-toolbar-title>
        <q-btn flat round icon="menu" v-if="$q.screen.xs">
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item
                clickable
                v-for="item in menuList"
                :key="item.title"
                :to="item.to"
              >
                {{ item.title }}
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-tabs v-model="tab" inline-label active-color="#353085" v-else>
          <q-route-tab
            v-for="item in menuList"
            :key="item.title"
            :name="item.title"
            :label="item.title"
            :icon="item.icon"
            :to="item.to"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container style="background-color: #fafafa">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

const menuList = [
  {
    title: 'Dashboard',
    to: '/',
    icon: 'home',
  },
  {
    title: 'Invoices',
    to: '/invoices',
    icon: 'mail',
  },
  {
    title: 'Wallets',
    to: '/wallet',
    icon: 'wallet',
  },
  {
    title: 'Activity',
    to: '/activity',
    icon: 'chart',
  },
  {
    title: 'Help',
    to: '/help',
    icon: 'phone',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    return {
      tab: ref(''),
      menuList,
    };
  },
});
</script>
