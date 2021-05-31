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


  // $(window).ready( () => {
  //   $(window).scrollTop(0);
  // })
  
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
    lax.addElements('#start', {
      scrollY: {
        opacity: [
          [0, 150],
          [1, 0]
        ],
        scale: [
          [0, 400],
          [1, 5]
        ],
      }

    })

      // SCROLL DOWN
      lax.addElements('#arrow', {
        scrollY: {
          opacity: [
            [0, 50],
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
        translateY: [
          ['elInY', 'elOutY'],
          [0, 100]
        ]
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
          ['elInY', 'elOutY-200'],
          [100, 0]
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
          ['screenHeight/6', 'elOutY/3'],
          [0, 1]
        ],
        translateY: [
          ['elInY', 'elOutY'],
          [100, -600]
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
        translateY: [
          ['elInY', 'elOutY'],
          [0, 100]
        ]
      }
    })

    //TEXT 1
    lax.addElements('.text', {
      scrollY: {
        opacity: [
          ['elInY + (screenHeight/4)' , 'elInY + (screenHeight/2)'],
          [0, 1]
        ],
        translateY: [
          ['elInY', 'elOutY'],
          [0, 100]
        ]
      }
    })

    //BUTTON
    lax.addElements('#button1', {
      scrollY: {
        opacity: [
          ['elInY + (screenHeight/4)', 'elInY + (screenHeight/3)'],
          [0, 1]
        ],
        translateY: [
          ['elInY', 'elOutY'],
          [0, 100]
        ],
        scale: [
          ['elInY', 'elInY + (screenHeight/2)'],
          [1.15, 1]
        ]
      }
    })

    //HEADLINE 2
    lax.addElements('#headline_2', {
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

    //TEXT 2
    lax.addElements('#text_2', {
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
    lax.addElements('#button2', {
      scrollY: {
        opacity: [
          ['elInY + (screenHeight/4)', 'elInY + (screenHeight/3)'],
          [0, 1]
        ],
        scale: [
          ['elInY', 'elInY + (screenHeight/2)'],
          [1.15, 1]
        ]
      }
    })


    
    //IMG 1
    lax.addElements('#img', {
      scrollY: {
        opacity: [
          ['elInY + (screenHeight/8)' , 'elInY + (screenHeight*0.7)'],
          [0, 1]
        ],
        scale: [
          ['elInY', 'elInY + (screenHeight/2)'],
          [1.15, 1]
        ]
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

  
  })



  }
})
