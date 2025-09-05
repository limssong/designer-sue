<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="footer-content">
            <h5 class="footer-title">{{ portfolioData.designer.name }}</h5>
            <p class="footer-description">{{ portfolioData.designer.title }}</p>
            <p class="footer-location">
              <i class="fas fa-map-marker-alt me-2"></i>
              {{ portfolioData.designer.location }}
            </p>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="footer-links">
            <h6 class="footer-links-title">Quick Links</h6>
            <div class="footer-nav">
              <a href="#home" @click="scrollToSection('home')">Home</a>
              <a href="#portfolio" @click="scrollToSection('portfolio')">Portfolio</a>
              <a href="#about" @click="scrollToSection('about')">About</a>
              <a href="#contact" @click="scrollToSection('contact')">Contact</a>
            </div>
            
            <div class="footer-social mt-3">
              <a 
                :href="`https://instagram.com/${portfolioData.designer.instagram.replace('@', '')}`"
                target="_blank"
                class="social-link"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a 
                :href="`mailto:${portfolioData.designer.email}`"
                class="social-link"
              >
                <i class="fas fa-envelope"></i>
              </a>
              <a 
                href="https://github.com/sue"
                target="_blank"
                class="social-link"
              >
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <hr class="footer-divider">
      
      <div class="row">
        <div class="col-12 text-center">
          <p class="footer-copyright">
            &copy; {{ currentYear }} {{ portfolioData.designer.name }}. All rights reserved.
            <br>
            <small class="text-muted">Designed with ❤️ using Vue 3 & Nuxt 3</small>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const portfolioData = {
  designer: {
    name: "Sue",
    title: "Fashion Designer",
    location: "Seoul, South Korea",
    email: "sue@fashion.com",
    instagram: "@sue_designs"
  }
}

const currentYear = ref(2024) // 고정값으로 설정하여 hydration 문제 방지

onMounted(() => {
  // 클라이언트에서만 실행되도록 지연
  setTimeout(() => {
    currentYear.value = new Date().getFullYear()
  }, 100)
})

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.footer {
  background: #2c3e50;
  color: #ecf0f1;
  padding: 3rem 0 1rem;
  margin-top: 4rem;
}

.footer-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ecf0f1;
  margin-bottom: 0.5rem;
}

.footer-description {
  color: #bdc3c7;
  margin-bottom: 1rem;
}

.footer-location {
  color: #95a5a6;
  font-size: 0.9rem;
}

.footer-links-title {
  color: #ecf0f1;
  font-weight: 600;
  margin-bottom: 1rem;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-nav a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.9rem;
}

.footer-nav a:hover {
  color: #e74c3c;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  color: #bdc3c7;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.2rem;
}

.social-link:hover {
  background: #e74c3c;
  color: white;
  transform: translateY(-2px);
}

.footer-divider {
  border-color: #34495e;
  margin: 2rem 0 1rem;
}

.footer-copyright {
  color: #95a5a6;
  font-size: 0.9rem;
  margin: 0;
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem 0 1rem;
  }
  
  .footer-nav {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .footer-social {
    justify-content: center;
    margin-top: 1rem;
  }
}
</style>
