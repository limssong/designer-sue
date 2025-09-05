<template>
  <section id="home" class="parallax-container">
    <div class="parallax-section hero-section active">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">{{ portfolioData.designer.name }}</h1>
          <h2 class="hero-subtitle">{{ portfolioData.designer.title }}</h2>
          <p class="hero-description">{{ portfolioData.designer.description }}</p>
          <div class="hero-buttons">
            <button class="btn btn-primary btn-lg me-3" @click="scrollToPortfolio">
              View Portfolio
            </button>
            <button class="btn btn-outline-light btn-lg" @click="scrollToContact">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator">
        <span>Scroll to explore</span>
        <div class="scroll-arrow">↓</div>
      </div>
    </div>
  </section>
</template>

<script setup>
const portfolioData = {
  designer: {
    name: "Sue",
    title: "Fashion Designer",
    description: "Passionate fashion designer creating innovative and sustainable designs that blend contemporary trends with timeless elegance."
  }
}

const scrollToPortfolio = () => {
  const element = document.getElementById('portfolio')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToContact = () => {
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.hero-buttons {
  margin-top: 2rem;
}

.btn-primary {
  background-color: #e74c3c;
  border-color: #e74c3c;
  padding: 0.8rem 2rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #c0392b;
  border-color: #c0392b;
  transform: translateY(-2px);
}

.btn-outline-light {
  padding: 0.8rem 2rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-outline-light:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
  
  .hero-buttons .btn {
    width: 200px;
  }
}
</style>
