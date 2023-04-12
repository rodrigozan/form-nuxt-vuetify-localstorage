<template>
  <v-app>
    <v-layout>
      <Header />
      <v-main class="w-100">
        <v-container
          class="d-flex justify-center align-center text-h5"
          style="min-height: 300px"
        >
          <slot />
        </v-container>
      </v-main>
    </v-layout>
    <Footer />
  </v-app>
</template>
