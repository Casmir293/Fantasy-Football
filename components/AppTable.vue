<script setup lang="ts">
const props = defineProps<{
  players: Player[];
}>();

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
  <v-data-table :headers="headers" :items="players" theme="dark" hover>
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
