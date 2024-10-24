<script setup lang="ts">
import useFetchData from "~/services/api";
const { operators, fetchOperators } = useFetchData();

const emit = defineEmits(["playersSelected"]);
const selectedTestOperator = ref<string | null>(null);
const selectedOperatorId = ref<string | null>(null);

const selectedOperatorPlayers = computed(() => {
  const selectedOperator = operators.value.find(
    (op) => op._id === selectedOperatorId.value,
  );
  return selectedOperator ? selectedOperator.dfsSlatePlayers : [];
});

watch(selectedOperatorPlayers, (newPlayers) => {
  emit("playersSelected", newPlayers);
});

watch(selectedTestOperator, (newValue) => {
  if (newValue === "Test Operator") {
    fetchOperators();
  }
});
</script>

<template>
  <section class="px-5">
    <section
      class="mx-auto my-12 max-w-[1035px] rounded-lg bg-[#FFFFFF1A] px-8 pb-[12px] pt-8"
    >
      <v-row dense>
        <v-col cols="12" md="4" sm="6">
          <v-select
            v-model="selectedTestOperator"
            theme="dark"
            label="Select Operator"
            :items="['Test Operator']"
          />
        </v-col>
        <v-col cols="12" md="4" sm="6">
          <v-select
            :disabled="!operators.length > 0"
            v-model="selectedOperatorId"
            theme="dark"
            label="Select Game Type"
            :items="operators"
            item-title="operatorGameType"
            item-value="_id"
          />
        </v-col>
        <v-col cols="12" md="4" sm="6">
          <v-select
            :disabled="!selectedOperatorPlayers.length > 0"
            theme="dark"
            label="Select Player"
            :items="selectedOperatorPlayers"
            item-title="operatorPlayerName"
            item-value="playerId"
          />
        </v-col>
      </v-row>
    </section>
  </section>
</template>
