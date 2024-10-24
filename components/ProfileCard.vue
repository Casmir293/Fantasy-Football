<script setup lang="ts">
const selectedPlayer = useState<Player[]>("selectedPlayer");
</script>

<template>
  <section class="rounded-lg bg-[#1D1D1D] pt-12" v-if="selectedPlayer.length">
    <img src="~/assets/images/tom_brady 1.png" alt="" />
    <div class="flex h-[316px] flex-col items-center rounded-lg bg-[#2F2F2F]">
      <p class="py-4 text-[32px]">
        {{ selectedPlayer[0]?.operatorPlayerName || "Nil" }}
      </p>
      <p class="text-[128px]">{{ selectedPlayer[0]?.fantasyPoints || "0" }}</p>
      <p>{{ selectedPlayer[0]?.fantasyPoints > 1 ? "Points" : "Point" }}</p>
    </div>
  </section>
</template>
