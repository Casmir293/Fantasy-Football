<script setup lang="ts"></script>

<template>
  <section class="px-5">
    <section
      class="mx-auto my-12 max-w-[1035px] rounded-lg bg-[#FFFFFF1A] px-8 pb-[12px] pt-8"
    >
      <v-row dense>
        <v-col cols="12" md="4" sm="6">
          <v-select
            theme="dark"
            label="Select Operator"
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
          />
        </v-col>
        <v-col cols="12" md="4" sm="6">
          <v-select
            theme="dark"
            label="Select Game Type"
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
          />
        </v-col>
        <v-col cols="12" md="4" sm="6">
          <v-select
            theme="dark"
            label="Select Slate Name"
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
          />
        </v-col>
      </v-row>
    </section>
  </section>
</template>
