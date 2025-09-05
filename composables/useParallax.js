// Parallax scroll composable
export const useParallax = () => {
  const currentSection = ref(0)
  const sections = ref([])
  const isScrolling = ref(false)

  const initParallax = () => {
    sections.value = document.querySelectorAll('.parallax-section')
    
    if (sections.value.length === 0) return

    // Set initial active section
    sections.value[0]?.classList.add('active')
  }

  const updateParallax = () => {
    if (isScrolling.value) return
    
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    
    // Calculate which section should be active based on scroll position
    const sectionHeight = windowHeight
    const newSection = Math.floor(scrollY / sectionHeight)
    
    if (newSection !== currentSection.value && newSection < sections.value.length) {
      currentSection.value = newSection
      
      // Update active classes
      sections.value.forEach((section, index) => {
        section.classList.remove('active', 'prev')
        
        if (index === newSection) {
          section.classList.add('active')
        } else if (index < newSection) {
          section.classList.add('prev')
        }
      })
    }
  }

  const scrollToSection = (sectionIndex) => {
    if (sectionIndex >= 0 && sectionIndex < sections.value.length) {
      isScrolling.value = true
      const targetY = sectionIndex * window.innerHeight
      
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      })
      
      // Reset scrolling flag after animation
      setTimeout(() => {
        isScrolling.value = false
      }, 1000)
    }
  }

  const nextSection = () => {
    if (currentSection.value < sections.value.length - 1) {
      scrollToSection(currentSection.value + 1)
    }
  }

  const prevSection = () => {
    if (currentSection.value > 0) {
      scrollToSection(currentSection.value - 1)
    }
  }

  onMounted(() => {
    initParallax()
    window.addEventListener('scroll', updateParallax, { passive: true })
    
    // Handle keyboard navigation
    const handleKeydown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault()
        nextSection()
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        prevSection()
      }
    }
    
    window.addEventListener('keydown', handleKeydown)
    
    onUnmounted(() => {
      window.removeEventListener('scroll', updateParallax)
      window.removeEventListener('keydown', handleKeydown)
    })
  })

  return {
    currentSection: readonly(currentSection),
    scrollToSection,
    nextSection,
    prevSection
  }
}
