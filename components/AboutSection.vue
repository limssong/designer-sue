<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="about-content">
            <h2 class="about-title">About Me</h2>
            <p class="about-description">{{ portfolioData.about.story }}</p>
            <p class="about-philosophy">{{ portfolioData.about.philosophy }}</p>
            
            <div class="about-achievements mt-5">
              <h3 class="mb-4">Achievements & Recognition</h3>
              <div class="row">
                <div 
                  v-for="(achievement, index) in portfolioData.about.achievements" 
                  :key="index"
                  class="col-md-6 mb-3"
                >
                  <div class="achievement-item">
                    <i class="fas fa-trophy text-accent me-2"></i>
                    <span>{{ achievement }}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="about-stats">
              <div 
                v-for="stat in portfolioData.stats" 
                :key="stat.label"
                class="stat-item"
              >
                <span class="stat-number">{{ stat.number }}</span>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const portfolioData = {
  about: {
    story: "With over 8 years of experience in the fashion industry, Sue has established herself as a visionary designer who seamlessly blends traditional craftsmanship with contemporary innovation. Her journey began at the prestigious Parsons School of Design in New York, where she developed her unique aesthetic and passion for sustainable fashion.",
    philosophy: "Fashion should not only be beautiful but also meaningful. Every design tells a story, and every piece should empower the wearer while respecting our planet.",
    achievements: [
      "Winner of Seoul Fashion Week Emerging Designer Award 2023",
      "Featured in Vogue Korea's 'Designers to Watch' 2022",
      "Sustainable Fashion Award from Korean Fashion Council 2021",
      "Graduate with Honors from Parsons School of Design 2019"
    ]
  },
  stats: [
    { number: "50+", label: "Collections Designed" },
    { number: "200+", label: "Individual Pieces" },
    { number: "15+", label: "Fashion Shows" },
    { number: "5+", label: "Years Experience" }
  ]
}

// 간단한 통계 표시 (애니메이션 제거)
</script>

<style scoped>
.about-philosophy {
  font-style: italic;
  font-size: 1.1rem;
  color: #ecf0f1;
  opacity: 0.9;
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  border-left: 4px solid #f39c12;
}

.achievement-item {
  display: flex;
  align-items: center;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.achievement-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateX(5px);
}

.achievement-item i {
  font-size: 1.2rem;
}

.stat-item {
  text-align: center;
  padding: 1rem;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: #f39c12;
  display: block;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .stat-number {
    font-size: 2.5rem;
  }
  
  .about-philosophy {
    font-size: 1rem;
    padding: 1rem;
  }
}
</style>
