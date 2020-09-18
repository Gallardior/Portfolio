// Hover en logos
const centrarHover = (item,container) => {  
  let itemWidth = item.offsetWidth
  let containerWidth = container.offsetWidth
  
  if(itemWidth >= containerWidth)
  {
    let left = (itemWidth - containerWidth) / 2
    item.style.left = `-${left}px`
  }else if(itemWidth === containerWidth || itemWidth < containerWidth)
  {
    item.style.left = `0`
  }
}

let logos = document.getElementById('logos').querySelectorAll('li'),
    c = document.createElement('div')
    c.classList.add('toolTip')

for (let logo of logos) {
  logo.addEventListener('mouseenter', () => {
    c.innerHTML = `${logo.firstElementChild.alt}`
    logo.insertAdjacentElement('afterbegin', c)
    centrarHover(c, logo)
  })

  logo.addEventListener( 'mouseleave', () => c.remove() )
}