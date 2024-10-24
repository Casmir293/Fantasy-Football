<script setup lang="ts">
import { watch } from "vue";

const props = defineProps<{
  players: Player[];
}>();

const selectedPlayer = useState<Player[]>("selectedPlayer", () => []);

watch(
  () => props.players,
  (newPlayers) => {
    if (newPlayers.length > 0 && selectedPlayer.value.length === 0) {
      selectedPlayer.value = [newPlayers[0]];
    }
  },
  { immediate: true },
);

// Table headers
const headers = [
  {
    key: "operatorPlayerName",
    title: "Name",
  },
  {
    key: "team",
    title: "Team",
  },
  {
    key: "operatorPosition",
    title: "Position",
  },
  {
    key: "operatorSalary",
    title: "Salary",
  },
  {
    key: "fantasyPoints",
    title: "Points",
  },
];
</script>

<template>
  <v-data-table
    :headers="headers"
    :items="players"
    theme="dark"
    select-strategy="single"
    show-select
    return-object
    v-model="selectedPlayer"
  >
    <!-- Name -->
    <template v-slot:item.operatorPlayerName="{ item }">
      <div>{{ item.operatorPlayerName }}</div>
    </template>

    <!-- Team -->
    <template v-slot:item.team="{ item }">
      <div>{{ item.team }}</div>
    </template>

    <!-- Position -->
    <template v-slot:item.operatorPosition="{ item }">
      <div>{{ item.operatorPosition }}</div>
    </template>

    <!-- Salary -->
    <template v-slot:item.operatorSalary="{ item }">
      <div>{{ item.operatorSalary }}</div>
    </template>

    <!-- Points -->
    <template v-slot:item.fantasyPoints="{ item }">
      <div>{{ item.fantasyPoints || "-" }}</div>
    </template>
  </v-data-table>
</template>
