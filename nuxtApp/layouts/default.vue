<template>
  <div class="layout">
    <AppNavbar />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.layout { min-height: 100vh; display: flex; flex-direction: column; }
main { flex: 1; }
</style>
