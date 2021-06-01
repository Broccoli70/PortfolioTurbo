$(function(){


  
    // RESPONSIVE
    const mobile = window.matchMedia("(max-width: 800px)");
  
    function handleTabletChange(e) {
      if (e.matches) {
        console.log('Apka na fony!')
        animation();
      }
    }
    mobile.addListener(handleTabletChange)
    handleTabletChange(mobile)

    // RESPONSIVE-END
    
    function animation() {

    lax.init()
  
    $(window).on('scroll', ()=> {
  
      lax.addDriver('scrollY', function () {
        return window.scrollY
      }, {
          frameStep: number = 0.5,
      }
      );
  
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
            [0, 'elOutY'],
            [1, 1.7]
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
            [100, 25]
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
            ['screenHeight/3', 'screenHeight/2'],
            [0, 1]
          ],
          translateY: [
            ['elInY', 'elOutY'],
            [150, -100]
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
      lax.addElements('.actual_work', {
        scrollY: {
          opacity: [
            ['elInY', 'elInY + (screenHeight/10)'],
            [0, 1]
          ],
          // translateY: [
          //   ['elInY', 'elOutY'],
          //   [0, 100]
          // ],
          scale: [
            ['elInY', 'elInY + (screenHeight/10)'],
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
  
      
      //IMG 1
      lax.addElements('#img', {
        scrollY: {
          opacity: [
            ['elInY' , 'elInY + (screenHeight*0.75)'],
            [0, 1]
          ],
          // translateY: [
          //   ['elInY', 'elOutY'],
          //   [0, 100]
          // ]
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
  
    
    })

    
    }



  })
  