/**
 * Portfolio Item Filter
======================= */

const filterContainer = document.querySelector('.portfolio-filter'),
      filterBtns = filterContainer.children,
      portfolioItems = document.querySelectorAll('.portfolio-item')

      for (let i = 0; i < filterBtns.length; i++) {
            filterBtns[i].addEventListener('click' , function() {
                filterContainer.querySelector('.active').classList.remove('active')
                this.classList.add('active')

                const PortfolioFilterValue = this.getAttribute('data-filter')
                for (let j = 0; j < portfolioItems.length; j++) {
                    if (PortfolioFilterValue === portfolioItems[j].getAttribute('data-category')) {
                        portfolioItems[j].classList.remove('hide')
                        portfolioItems[j].classList.add('show')
                    } else {
                        portfolioItems[j].classList.remove('show')
                        portfolioItems[j].classList.add('hide')
                    }

                    if (PortfolioFilterValue === 'all') {
                        portfolioItems[j].classList.remove('hide')
                        portfolioItems[j].classList.add('show')
                    }
                }
            })
      }

/**
 * Portfolio Item Filter
======================= */

const ligtbox = document.querySelector('.lightbox'),
      lighboxImg = ligtbox.querySelector('.lightbox-img'),
      lighboxClose = ligtbox.querySelector('.lightbox-close'),
      lighboxText = ligtbox.querySelector('.caption-text'),
      lighboxCounter = ligtbox.querySelector('.caption-counter')

let itemIndex = 0

for (let i = 0; i < portfolioItems.length; i++) {
    portfolioItems[i].addEventListener('click', function() {
        itemIndex = i
        changeItem(itemIndex)
        toggleLightbx()
    })
}

function changeItem(itemIndex) {
    let imgSrc = portfolioItems[itemIndex].querySelector('.portfolio-img img').getAttribute('src')
    lighboxImg.src = imgSrc
    lighboxText.innerHTML =  portfolioItems[itemIndex].querySelector('h4').innerHTML
    lighboxCounter.innerHTML =  `${itemIndex+1} of ${portfolioItems.length}`
}

// open/close Lightbox
function toggleLightbx() {
    ligtbox.classList.toggle('open')
}

ligtbox.addEventListener('click', function(event) {
    if (event.target === lighboxClose || event.target === ligtbox) {
        toggleLightbx()
    }
})
// open/close Lightbox end

function nextItem() {
    if(itemIndex === portfolioItems.length -1) {
        itemIndex = 0
    }
    else {
        itemIndex++
    }
    changeItem(itemIndex)
}

function prevItem() {
    if(itemIndex === 0) {
        itemIndex = portfolioItems.length -1
    }
    else {
        itemIndex--
    }
    changeItem(itemIndex)
}

