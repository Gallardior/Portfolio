let projects = Array.from(document.querySelectorAll('.portfolioGrid__target'))

projects.forEach(project => {
  let targetContain = project.lastElementChild
  project.addEventListener('mouseenter', () => {
    targetContain.style.height = '89.8%';
  })
  project.addEventListener('mouseleave', () => targetContain.style.height = '0')
})