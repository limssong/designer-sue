<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <NuxtLink to="/" class="navbar-brand">
          Sue
        </NuxtLink>
        
        <div class="d-none d-md-flex">
          <a href="#home" class="nav-link me-4" @click="scrollToSection('home')">Home</a>
          <a href="#portfolio" class="nav-link me-4" @click="scrollToSection('portfolio')">Portfolio</a>
          <a href="#about" class="nav-link me-4" @click="scrollToSection('about')">About</a>
          <a href="#contact" class="nav-link" @click="scrollToSection('contact')">Contact</a>
        </div>
        
        <!-- Mobile menu button -->
        <button 
          class="btn d-md-none" 
          @click="toggleMobileMenu"
          aria-label="Toggle menu"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
      
      <!-- Mobile menu -->
      <div v-show="showMobileMenu" class="d-md-none mt-3">
        <div class="d-flex flex-column">
          <a href="#home" class="nav-link mb-2" @click="scrollToSection('home')">Home</a>
          <a href="#portfolio" class="nav-link mb-2" @click="scrollToSection('portfolio')">Portfolio</a>
          <a href="#about" class="nav-link mb-2" @click="scrollToSection('about')">About</a>
          <a href="#contact" class="nav-link" @click="scrollToSection('contact')">Contact</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const isScrolled = ref(false)
const showMobileMenu = ref(false)

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  showMobileMenu.value = false
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  
  window.addEventListener('scroll', handleScroll)
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>
