<template>
  <section id="portfolio" class="portfolio-section">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-5">
          <h2 class="section-title">Portfolio</h2>
          <p class="section-subtitle">Explore my latest fashion collections and design projects</p>
        </div>
      </div>
      
      <div class="row">
        <div 
          v-for="(item, index) in portfolioData.portfolio" 
          :key="item.id"
          class="col-lg-4 col-md-6 mb-4"
          :class="{ 'parallax-item': true }"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="portfolio-item">
            <div class="portfolio-image-container">
              <img 
                :src="item.image" 
                :alt="item.title"
                class="portfolio-image"
                loading="lazy"
              />
              <div class="portfolio-overlay">
                <div class="portfolio-overlay-content">
                  <h4 class="portfolio-overlay-title">{{ item.title }}</h4>
                  <p class="portfolio-overlay-year">{{ item.year }}</p>
                  <div class="portfolio-overlay-buttons">
                    <a 
                      :href="item.githubUrl" 
                      target="_blank" 
                      class="btn btn-sm btn-outline-light me-2"
                    >
                      <i class="fab fa-github"></i> View Project
                    </a>
                    <button 
                      class="btn btn-sm btn-light"
                      @click="openModal(item)"
                    >
                      <i class="fas fa-eye"></i> Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="portfolio-content">
              <h3 class="portfolio-title">{{ item.title }}</h3>
              <p class="portfolio-description">{{ item.description }}</p>
              <div class="portfolio-tags">
                <span 
                  v-for="tag in item.tags" 
                  :key="tag"
                  class="tag"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Portfolio Modal -->
    <div 
      v-if="selectedItem" 
      class="modal fade show d-block" 
      tabindex="-1"
      @click.self="closeModal"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ selectedItem.title }}</h5>
            <button 
              type="button" 
              class="btn-close" 
              @click="closeModal"
            ></button>
          </div>
          <div class="modal-body">
            <img 
              :src="selectedItem.image" 
              :alt="selectedItem.title"
              class="img-fluid mb-3"
            />
            <p class="mb-3">{{ selectedItem.description }}</p>
            <div class="row">
              <div class="col-md-6">
                <h6>Category</h6>
                <p>{{ selectedItem.category }}</p>
              </div>
              <div class="col-md-6">
                <h6>Year</h6>
                <p>{{ selectedItem.year }}</p>
              </div>
            </div>
            <div class="mb-3">
              <h6>Tags</h6>
              <div class="portfolio-tags">
                <span 
                  v-for="tag in selectedItem.tags" 
                  :key="tag"
                  class="tag"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
            <div class="d-flex gap-2">
              <a 
                :href="selectedItem.githubUrl" 
                target="_blank" 
                class="btn btn-primary"
              >
                <i class="fab fa-github"></i> View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Modal backdrop -->
    <div 
      v-if="selectedItem" 
      class="modal-backdrop fade show"
      @click="closeModal"
    ></div>
  </section>
</template>

<script setup>
const portfolioData = {
  portfolio: [
    {
      id: 1,
      title: "Urban Elegance Collection",
      description: "A modern take on urban fashion, combining comfort with sophistication. This collection features clean lines, neutral tones, and versatile pieces perfect for the contemporary professional.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      tags: ["Urban", "Professional", "Minimalist"],
      year: "2024",
      category: "Ready-to-Wear",
      githubUrl: "https://github.com/sue/urban-elegance-collection"
    },
    {
      id: 2,
      title: "Floral Dreams",
      description: "Inspired by spring gardens, this collection brings nature's beauty to fashion. Delicate floral patterns and soft pastels create a romantic and feminine aesthetic.",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=600&fit=crop",
      tags: ["Floral", "Romantic", "Spring"],
      year: "2024",
      category: "Prêt-à-Porter",
      githubUrl: "https://github.com/sue/floral-dreams-collection"
    },
    {
      id: 3,
      title: "Sustainable Future",
      description: "An eco-conscious collection using recycled materials and sustainable practices. Each piece tells a story of environmental responsibility while maintaining high fashion standards.",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=600&fit=crop",
      tags: ["Sustainable", "Eco-friendly", "Innovative"],
      year: "2023",
      category: "Sustainable Fashion",
      githubUrl: "https://github.com/sue/sustainable-future-collection"
    }
  ]
}

const selectedItem = ref(null)

const openModal = (item) => {
  selectedItem.value = item
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedItem.value = null
  document.body.style.overflow = 'auto'
}

// 간단한 포트폴리오 표시 (패럴렉스 효과 제거)
</script>

<style scoped>
.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.parallax-item {
  opacity: 1;
  transform: translateY(0);
}

.portfolio-image-container {
  position: relative;
  overflow: hidden;
  border-radius: 15px 15px 0 0;
}

.portfolio-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(44, 62, 80, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-image-container:hover .portfolio-overlay {
  opacity: 1;
}

.portfolio-overlay-content {
  text-align: center;
  color: white;
}

.portfolio-overlay-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.portfolio-overlay-year {
  font-size: 1rem;
  opacity: 0.8;
  margin-bottom: 1.5rem;
}

.portfolio-overlay-buttons {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.modal {
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  border-radius: 15px;
  border: none;
}

.modal-header {
  background: #2c3e50;
  color: white;
  border-radius: 15px 15px 0 0;
}

.btn-close {
  filter: invert(1);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }
  
  .portfolio-overlay-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
