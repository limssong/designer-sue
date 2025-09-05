<template>
  <div>
    <NuxtRouteAnnouncer />
    <div class="loading" v-if="!isLoaded">
      <div class="loading-spinner"></div>
    </div>
    <div v-else>
      <!-- Navbar -->
      <nav class="navbar" :class="{ scrolled: isScrolled }">
        <div class="container">
          <div class="d-flex justify-content-between align-items-center">
            <a href="#home" class="navbar-brand">{{ t.hero.name }}</a>
            <div class="d-flex align-items-center">
              <div class="d-none d-md-flex me-4">
                <a href="#home" class="nav-link me-4" @click="scrollToSection('home')">{{ t.nav.home }}</a>
                <a href="#portfolio" class="nav-link me-4" @click="scrollToSection('portfolio')">{{ t.nav.portfolio }}</a>
                <a href="#about" class="nav-link me-4" @click="scrollToSection('about')">{{ t.nav.about }}</a>
                <a href="#contact" class="nav-link" @click="scrollToSection('contact')">{{ t.nav.contact }}</a>
              </div>
              <div class="language-switcher">
                <button 
                  class="btn btn-sm" 
                  :class="currentLang === 'ko' ? 'btn-primary' : 'btn-outline-primary'"
                  @click="changeLanguage('ko')"
                >
                  KOR
                </button>
                <button 
                  class="btn btn-sm ms-2" 
                  :class="currentLang === 'en' ? 'btn-primary' : 'btn-outline-primary'"
                  @click="changeLanguage('en')"
                >
                  ENG
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <!-- Hero Section -->
        <section id="home" class="hero-section">
          <div class="container">
            <div class="hero-content" data-aos="fade-up" data-aos-duration="1000">
              <h1 class="hero-title" data-aos="fade-up" data-aos-delay="200">{{ t.hero.name }}</h1>
              <h2 class="hero-subtitle" data-aos="fade-up" data-aos-delay="400">{{ t.hero.title }}</h2>
              <p class="hero-description" data-aos="fade-up" data-aos-delay="600">{{ t.hero.description }}</p>
              <div class="hero-buttons" data-aos="fade-up" data-aos-delay="800">
                <button class="btn btn-primary btn-lg me-3" @click="scrollToSection('portfolio')">{{ t.hero.viewPortfolio }}</button>
                <button class="btn btn-outline-light btn-lg" @click="scrollToSection('contact')">{{ t.hero.getInTouch }}</button>
              </div>
            </div>
          </div>
        </section>

        <!-- Portfolio Section -->
        <section id="portfolio" class="portfolio-section">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center mb-5" data-aos="fade-up">
                <h2 class="section-title">{{ t.portfolio.title }}</h2>
                <p class="section-subtitle">{{ t.portfolio.subtitle }}</p>
              </div>
            </div>
            <div class="row">
              <div v-for="(item, index) in portfolioItems" :key="item.id" class="col-lg-4 col-md-6 mb-4" 
                   :data-aos="'fade-up'" 
                   :data-aos-delay="200 + (index * 200)">
                <div class="portfolio-item">
                  <div class="portfolio-image-container">
                    <img :src="item.image" :alt="item.title" class="portfolio-image" loading="lazy" />
                    <div class="portfolio-overlay">
                      <div class="portfolio-overlay-content">
                        <h4 class="portfolio-overlay-title">{{ item.title }}</h4>
                        <p class="portfolio-overlay-year">{{ item.year }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="portfolio-content">
                    <h3 class="portfolio-title">{{ item.title }}</h3>
                    <p class="portfolio-description">{{ item.description }}</p>
                    <div class="portfolio-tags">
                      <span v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about-section">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="about-content" data-aos="fade-up">
                  <h2 class="about-title" data-aos="fade-up" data-aos-delay="200">{{ t.about.title }}</h2>
                  <p class="about-description" data-aos="fade-up" data-aos-delay="400">{{ t.about.story }}</p>
                  <p class="about-philosophy" data-aos="fade-up" data-aos-delay="600">{{ t.about.philosophy }}</p>
                  
                  <div class="about-stats" data-aos="fade-up" data-aos-delay="800">
                    <div class="stat-item" data-aos="zoom-in" data-aos-delay="1000">
                      <span class="stat-number">50+</span>
                      <span class="stat-label">{{ t.about.stats.collections }}</span>
                    </div>
                    <div class="stat-item" data-aos="zoom-in" data-aos-delay="1200">
                      <span class="stat-number">200+</span>
                      <span class="stat-label">{{ t.about.stats.pieces }}</span>
                    </div>
                    <div class="stat-item" data-aos="zoom-in" data-aos-delay="1400">
                      <span class="stat-number">15+</span>
                      <span class="stat-label">{{ t.about.stats.shows }}</span>
                    </div>
                    <div class="stat-item" data-aos="zoom-in" data-aos-delay="1600">
                      <span class="stat-number">5+</span>
                      <span class="stat-label">{{ t.about.stats.experience }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="contact-section">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="contact-content" data-aos="fade-up">
                  <h2 class="contact-title" data-aos="fade-up" data-aos-delay="200">{{ t.contact.title }}</h2>
                  <p class="contact-description" data-aos="fade-up" data-aos-delay="400">{{ t.contact.description }}</p>
                  
                  <div class="contact-info" data-aos="fade-up" data-aos-delay="600">
                    <a href="mailto:sue@fashion.com" class="contact-item" data-aos="fade-right" data-aos-delay="800">
                      <i class="fas fa-envelope"></i>
                      <span>sue@fashion.com</span>
                    </a>
                    <a href="tel:+821012345678" class="contact-item" data-aos="fade-left" data-aos-delay="900">
                      <i class="fas fa-phone"></i>
                      <span>+82 10-1234-5678</span>
                    </a>
                    <a href="https://instagram.com/sue_designs" target="_blank" class="contact-item" data-aos="fade-right" data-aos-delay="1000">
                      <i class="fab fa-instagram"></i>
                      <span>@sue_designs</span>
                    </a>
                    <div class="contact-item" data-aos="fade-left" data-aos-delay="1100">
                      <i class="fas fa-map-marker-alt"></i>
                      <span>Seoul, South Korea</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <!-- Footer -->
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="footer-content" data-aos="fade-up" data-aos-delay="200">
                <h5 class="footer-title">{{ t.hero.name }}</h5>
                <p class="footer-description">{{ t.hero.title }}</p>
                <p class="footer-location">
                  <i class="fas fa-map-marker-alt me-2"></i>
                  Seoul, South Korea
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="footer-links" data-aos="fade-up" data-aos-delay="400">
                <h6 class="footer-links-title">{{ t.footer.quickLinks }}</h6>
                <div class="footer-nav">
                  <a href="#home" @click="scrollToSection('home')">{{ t.nav.home }}</a>
                  <a href="#portfolio" @click="scrollToSection('portfolio')">{{ t.nav.portfolio }}</a>
                  <a href="#about" @click="scrollToSection('about')">{{ t.nav.about }}</a>
                  <a href="#contact" @click="scrollToSection('contact')">{{ t.nav.contact }}</a>
                </div>
              </div>
            </div>
          </div>
          <hr class="footer-divider">
          <div class="row">
            <div class="col-12 text-center">
              <p class="footer-copyright" data-aos="fade-up" data-aos-delay="600">
                &copy; {{ currentYear }} {{ t.hero.name }}. {{ t.footer.copyright }}.
                <br>
                <small class="text-muted">{{ t.footer.designed }}</small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import languages from '../data/languages.js'

const isLoaded = ref(false)
const isScrolled = ref(false)
const currentYear = ref(2024)
const currentLang = ref('ko')
const t = computed(() => languages[currentLang.value])

const portfolioItems = computed(() => {
  const items = t.value.portfolio.items
  const images = [
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=600&fit=crop"
  ]
  
  return items.map((item, index) => ({
    ...item,
    image: images[index] || images[0]
  }))
})

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const changeLanguage = (lang) => {
  currentLang.value = lang
  localStorage.setItem('language', lang)
}

onMounted(async () => {
  // Load saved language preference
  const savedLang = localStorage.getItem('language')
  if (savedLang && languages[savedLang]) {
    currentLang.value = savedLang
  }
  
  // Simulate loading time
  setTimeout(() => {
    isLoaded.value = true
    
    // Initialize AOS after content is loaded
    nextTick(() => {
      import('aos').then((AOS) => {
        AOS.default.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
          offset: 100
        })
      })
    })
  }, 1000)
  
  // Update current year
  currentYear.value = new Date().getFullYear()
  
  // Handle scroll
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  
  window.addEventListener('scroll', handleScroll)
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})

// Global meta tags
useHead({
  title: 'Sue - Fashion Designer Portfolio',
  meta: [
    { name: 'description', content: 'Portfolio of Sue, a passionate fashion designer creating innovative and sustainable designs.' },
    { name: 'keywords', content: 'fashion designer, portfolio, sustainable fashion, contemporary design, Seoul' },
    { property: 'og:title', content: 'Sue - Fashion Designer Portfolio' },
    { property: 'og:description', content: 'Portfolio of Sue, a passionate fashion designer creating innovative and sustainable designs.' },
    { property: 'og:type', content: 'website' }
  ],
  link: [
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' },
    { rel: 'stylesheet', href: 'https://unpkg.com/aos@2.3.1/dist/aos.css' },
    { rel: 'stylesheet', href: '/css/main.css' }
  ]
})
</script>
