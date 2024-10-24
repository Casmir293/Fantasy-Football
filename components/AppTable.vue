<script setup lang="ts">
const items = [
  {
    name: "African Elephant",
    team: "TB",
    position: "QB",
    salary: "$12,000",
    points: "23",
  },
  {
    name: "African Elephant",
    team: "TB",
    position: "QB",
    salary: "$12,000",
    points: "23",
  },
  {
    name: "African Elephant",
    team: "TB",
    position: "QB",
    salary: "$12,000",
    points: "23",
  },
];

const headers = [
  {
    key: "name",
    title: "Name",
  },
  {
    key: "team",
    title: "Team",
  },
  {
    key: "position",
    title: "Position",
  },
  {
    key: "salary",
    title: "Salary",
  },
  {
    key: "points",
    title: "Points",
  },
];
</script>

<template>
  <v-data-table :headers="headers" :items="items" theme="dark">
    <!-- Name -->
    <template v-slot:item.name="{ item }">
      <div>{{ item.name }}</div>
    </template>

    <!-- Team -->
    <template v-slot:item.team="{ item }">
      <div>{{ item.team }}</div>
    </template>

    <!-- Position -->
    <template v-slot:item.position="{ item }">
      <div>{{ item.position }}</div>
    </template>

    <!-- Salary -->
    <template v-slot:item.salary="{ item }">
      <div>{{ item.salary }}</div>
    </template>

    <!-- Points -->
    <template v-slot:item.points="{ item }">
      <div>{{ item.points }}</div>
    </template>
  </v-data-table>
</template>
