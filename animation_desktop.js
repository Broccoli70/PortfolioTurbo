$(function(){

  const mobile = window.matchMedia("(min-width: 800px)");

  function handleTabletChange(e) {
    if (e.matches) {
      console.log('Apka na desktop!')
      animation();
    }
  }
  
  mobile.addListener(handleTabletChange)
  handleTabletChange(mobile)
  
  function animation() {
  lax.init()

  $(window).on('scroll', ()=> {

    lax.addDriver('scrollY', function () {
      return window.scrollY
    });

    lax.addElements('.logo', {
      scrollY: {
        opacity: [
          [0, 'elInY + (screenHeight*0.75)'],
          [0, 1]
        ],
        // translateY: [
        //   ['elInY', 'elOutY'],
        //   [0, 100]
        // ]
      }

    })

    // SCROLL DOWN
    lax.addElements('#start', {
      scrollY: {
        opacity: [
          [0, 80],
          [1, 0]
        ],
      }

    })



    // LUKASZ BIERNACKI
    lax.addElements('.name', {
      scrollY: {
        opacity: [
          [0, 'elInY + (screenHeight*0.75)'],
          [0, 1]
        ],
        // translateY: [
        //   ['elInY', 'elOutY'],
        //   [0, 100]
        // ]
      }

    })


    // PORTFOLIO 2021
    lax.addElements('#flow', {
      scrollY: {
        opacity: [
          [0, 'elInY + (screenHeight*0.75)'],
          [0, 1]
        ],
        translateX: [
          ['elInY', 'elOutY-500'],
          [100, 0]
        ],
        // translateY: [
        //   ['elInY', 'elOutY'],
        //   [0, 100]
        // ]
      }
    })

    //Glowa 3d
    lax.addElements('.header_picture', {
      scrollY: {
        opacity: [
          ['screenHeight/6', 'elOutY/3'],
          [0, 1]
        ],
        translateY: [
          ['elInY', 'elOutY'],
          [0, -200]
        ],
      }
    })

    //KIM JESTEM
    lax.addElements('#headline_1', {
      scrollY: {
        opacity: [
          ['elInY + (screenHeight/4)' , 'elInY + (screenHeight/2)'],
          [0, 1]
        ],
        // translateY: [
        //   ['elInY', 'elOutY'],
        //   [0, 100]
        // ]
      }
    })

    //TEXT 1
    lax.addElements('.text', {
      scrollY: {
        opacity: [
          ['elInY + (screenHeight/4)' , 'elInY + (screenHeight/2)'],
          [0, 1]
        ],
        // translateY: [
        //   ['elInY', 'elOutY'],
        //   [0, 100]
        // ]
      }
    })

    //BUTTON
    lax.addElements('#button1', {
      scrollY: {
        opacity: [
          ['elInY + (screenHeight/4)', 'elInY + (screenHeight/3)'],
          [0, 1]
        ],
        // translateY: [
        //   ['elInY', 'elOutY'],
        //   [0, 100]
        // ],
      }
    })

    //HEADLINE 2
    lax.addElements('#headline_2', {
      scrollY: {
        opacity: [
          ['elInY+50' , 'elInY + (screenHeight/4)'],
          [0, 1]
        ],
        // translateY: [
        //   ['elInY', 'elOutY'],
        //   [0, 100]
        // ]
      }
    })

    //TEXT 2
    lax.addElements('#text_2', {
      scrollY: {
        opacity: [
          ['elInY+50' , 'elInY + (screenHeight/2)'],
          [0, 1]
        ],
        // translateY: [
        //   ['elInY', 'elOutY'],
        //   [0, 100]
        // ]
      }
    })

    
    //BUTTON
    lax.addElements('#button2', {
      scrollY: {
        opacity: [
          ['elInY+50', 'elInY + (screenHeight/3)'],
          [0, 1]
        ],
        scale: [
          ['elInY', 'elInY + (screenHeight/2)'],
          [1.08, 1]
        ]
      }
    })


    
    //IMG 1
    lax.addElements('#pieing', {
      scrollY: {
        opacity: [
          ['elInY + (screenHeight*0.65)' , 'elInY + (screenHeight*0.9)'],
          [0, 1]
        ],
      }
    })



    //Grafika
    lax.addElements('#grafika', {
      scrollY: {
        opacity: [
          ['elInY + (screenHeight/5)', 'elInY + (screenHeight/2)'],
          [0, 1]
        ],
      }
    })

    //Grafika
    lax.addElements('#examples', {
      scrollY: {
        opacity: [
          ['elInY + (screenHeight/5)', 'elInY + (screenHeight/2)'],
          [0, 1]
        ],
        scale: [
          ['elInY', 'elInY + (screenHeight/2)'],
          [1.15, 1]
        ]
      }
    })

    //Grafika
    for (let i = 0; i <= 3; i++) {

      lax.addElements('#karty' + i , {
        scrollY: {
          opacity: [
            ['elInY + 100 +' + i*50 , 'elInY + 50' + i*0 ],
            [0, 1]
          ],
        }
      })

    }


  
  })



  }
})
