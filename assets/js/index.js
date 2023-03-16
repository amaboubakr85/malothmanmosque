var countDownDate = new Date('May 25, 2023 17:37:25').getTime()

var x = setInterval(function () {
  var now = new Date().getTime()

  var distance = countDownDate - now

  var days = Math.floor(distance / (1000 * 60 * 60 * 24))
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((distance % (1000 * 60)) / 1000)

  document.getElementById('days').innerHTML = days
  document.getElementById('hours').innerHTML = hours
  document.getElementById('minutes').innerHTML = minutes
  document.getElementById('seconds').innerHTML = seconds

  if (distance < 0) {
    clearInterval(x)
    document.getElementById('days').innerHTML = '00'
    document.getElementById('hours').innerHTML = '00'
    document.getElementById('minutes').innerHTML = '00'
    document.getElementById('seconds').innerHTML = '00'
  }
}, 1000)

$('.owl-carousel.owl-theme').owlCarousel({
  autoplay: true,
  autoplayTimeout: 3000,
  loop: true,
  margin: 10,
  nav: true,
  dots: true,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  items: 1,

  smartSpeed: 450,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
})
