<script setup lang="ts">
const selectedPlayers = ref([]);

const handlePlayersSelected = (players) => {
  selectedPlayers.value = players;
};
</script>

<template>
  <v-app>
    <section class="app-wrapper min-h-dvh bg-[#000000E5] text-[#ffffffe5]">
      <AppHeader />
      <AppMenu @playersSelected="handlePlayersSelected" />

      <section
        class="max-w-[1440px] items-start justify-between gap-7 p-5 pt-0 md:flex"
      >
        <AppTable :players="selectedPlayers" />
        <ProfileCard />
      </section>
    </section>
  </v-app>
</template>
