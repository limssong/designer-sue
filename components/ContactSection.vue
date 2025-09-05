<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="contact-content">
            <h2 class="contact-title">Get In Touch</h2>
            <p class="contact-description">
              Ready to collaborate or have questions about my work? I'd love to hear from you!
            </p>
            
            <div class="contact-info">
              <a 
                :href="`mailto:${portfolioData.designer.email}`"
                class="contact-item"
              >
                <i class="fas fa-envelope"></i>
                <span>{{ portfolioData.designer.email }}</span>
              </a>
              
              <a 
                :href="`tel:${portfolioData.designer.phone}`"
                class="contact-item"
              >
                <i class="fas fa-phone"></i>
                <span>{{ portfolioData.designer.phone }}</span>
              </a>
              
              <a 
                :href="`https://instagram.com/${portfolioData.designer.instagram.replace('@', '')}`"
                target="_blank"
                class="contact-item"
              >
                <i class="fab fa-instagram"></i>
                <span>{{ portfolioData.designer.instagram }}</span>
              </a>
              
              <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>{{ portfolioData.designer.location }}</span>
              </div>
            </div>
            
            <div class="contact-form mt-5">
              <h3 class="mb-4">Send a Message</h3>
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <input 
                      v-model="form.name"
                      type="text" 
                      class="form-control" 
                      placeholder="Your Name"
                      required
                    >
                  </div>
                  <div class="col-md-6 mb-3">
                    <input 
                      v-model="form.email"
                      type="email" 
                      class="form-control" 
                      placeholder="Your Email"
                      required
                    >
                  </div>
                </div>
                <div class="mb-3">
                  <input 
                    v-model="form.subject"
                    type="text" 
                    class="form-control" 
                    placeholder="Subject"
                    required
                  >
                </div>
                <div class="mb-3">
                  <textarea 
                    v-model="form.message"
                    class="form-control" 
                    rows="5" 
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <div class="text-center">
                  <button 
                    type="submit" 
                    class="btn btn-primary btn-lg"
                    :disabled="isSubmitting"
                  >
                    <span v-if="isSubmitting">
                      <i class="fas fa-spinner fa-spin me-2"></i>
                      Sending...
                    </span>
                    <span v-else>
                      <i class="fas fa-paper-plane me-2"></i>
                      Send Message
                    </span>
                  </button>
                </div>
              </form>
              
              <div v-if="formMessage" class="alert mt-3" :class="formMessageClass">
                {{ formMessage }}
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
  designer: {
    email: "sue@fashion.com",
    phone: "+82 10-1234-5678",
    instagram: "@sue_designs",
    location: "Seoul, South Korea"
  }
}

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const formMessage = ref('')
const formMessageClass = ref('')

const submitForm = async () => {
  isSubmitting.value = true
  formMessage.value = ''
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In a real application, you would send the form data to your backend
    console.log('Form submitted:', form.value)
    
    formMessage.value = 'Thank you for your message! I\'ll get back to you soon.'
    formMessageClass.value = 'alert-success'
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    formMessage.value = 'Sorry, there was an error sending your message. Please try again.'
    formMessageClass.value = 'alert-danger'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-control {
  border: 2px solid #e9ecef;
  border-radius: 8px;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-control:focus {
  border-color: #e74c3c;
  box-shadow: 0 0 0 0.2rem rgba(231, 76, 60, 0.25);
}

.btn-primary {
  background-color: #e74c3c;
  border-color: #e74c3c;
  padding: 0.8rem 2rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-primary:hover:not(:disabled) {
  background-color: #c0392b;
  border-color: #c0392b;
  transform: translateY(-2px);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  background: white;
  border-radius: 10px;
  text-decoration: none;
  color: #2c3e50;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.contact-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 20px rgba(0,0,0,0.15);
  color: #e74c3c;
}

.contact-item i {
  font-size: 1.2rem;
  color: #e74c3c;
  width: 20px;
  text-align: center;
}

.alert {
  border-radius: 8px;
  border: none;
}

@media (max-width: 768px) {
  .contact-info {
    flex-direction: column;
    gap: 1rem;
  }
  
  .contact-item {
    justify-content: center;
  }
}
</style>
