document.addEventListener('alpine:init', () => {
  Alpine.data('data', () => ({

    cardClick(el) {
      el.style.transform = 'none'; el.style.boxShadow = 'none'
    },

  }))
})