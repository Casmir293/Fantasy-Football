<template>
  <v-app>
    <section class="app-wrapper min-h-dvh bg-[#000000E5] text-[#ffffffe5]">
      <AppHeader />
      <AppMenu />

      <section
        class="max-w-[1440px] items-start justify-between gap-7 p-5 pt-0 md:flex"
      >
        <AppTable />
        <ProfileCard />
      </section>
    </section>
  </v-app>
</template>
