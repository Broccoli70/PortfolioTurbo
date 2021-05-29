$(function(){

  lax.init()

  $(window).on('scroll', ()=> {

    lax.addDriver('scrollY', function () {
      return window.scrollY
    })

    lax.addElements('.logo', {
      scrollY: {
        opacity: [
          [0, 100],
          [0, 1]
        ],
        translateX: [
          ['elInY', 100],
          [-200, 0]
        ],
        translateY: [
          ['elInY', 'elOutY'],
          [0, 100]
        ]
      }

    })

    // SCROLL DOWN
    lax.addElements('.instruction', {
      scrollY: {
        opacity: [
          [0, 200],
          [1, 0]
        ],
        scale: [
          [0, 200],
          [1, 10]
        ]
      }

    })


    // LUKASZ BIERNACKI
    lax.addElements('.name', {
      scrollY: {
        opacity: [
          [0, 50],
          [0, 1]
        ],
        translateY: [
          ['elInY', 'elOutY'],
          [0, 100]
        ]
      }

    })


    // PORTFOLIO 2021
    lax.addElements('h2', {
      scrollY: {
        opacity: [
          [0, 150],
          [0, 1]
        ],
        translateX: [
          ['elInY', 'elOutY-200'],
          [100, 0]
        ],
        translateY: [
          ['elInY', 'elOutY'],
          [0, 100]
        ]
      }
    })

    lax.addElements('.text', {
      scrollY: {
        opacity: [
          [0, 250],
          [0, 1]
        ],
        translateY: [
          ['elInY', 'elOutY'],
          [0, 100]
        ]
      }
    })


    //Glowa 3d
    lax.addElements('.header_picture', {
      scrollY: {
        opacity: [
          [0, 100],
          [0, 1]
        ],
        translateY: [
          [0, 300],
          [0, -700]
        ],
      }
    })

  })

  // $(window).on('scroll' , ()=> {
  
  //   $("h1").animate({'opacity' : '1'}, 300)
  //   $(".box").animate({'opacity' : '1'}, 800)
  //   $(".text").animate({'opacity' : '1'}, { duration: 1500, specialEasing: {opacity: "linear"} })

  //   $(".header_picture").animate({ 'margin-top' : '-500px' }, { duration: 2000, specialEasing: {'margin-top': "easeInBounce"} })
    
  // })

})
