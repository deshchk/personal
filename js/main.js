document.addEventListener('alpine:init', () => {
  Alpine.data('data', () => ({

    limiter: true,
    top: true,

    cardClick(el) {
      el.style.transform = 'none'; el.style.boxShadow = 'none'
    },

  }))
})