<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-white text-black">
        <q-toolbar-title> Paypay </q-toolbar-title>

        <q-tabs v-model="tab" inline-label active-color="#353085">
          <q-route-tab name="Dashboard" label="Dashboard" icon="home" to="/" />
          <q-route-tab
            name="Invoices"
            label="Invoices"
            icon="mail"
            to="/invoices"
          />
          <q-route-tab
            name="Wallet"
            label="Wallet"
            icon="wallet"
            to="/wallet"
          />
          <q-route-tab
            name="Activity"
            label="Activity"
            icon="chart"
            to="/activity"
          />
          <q-route-tab name="Help" label="Help" icon="phone" to="help" />
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
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    // EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      tab: ref(''),
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
