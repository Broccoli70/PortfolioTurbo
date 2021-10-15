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
      }
      );
  
      // SCROLL DOWN
      lax.addElements('#start', {
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
            [45, 'elInY + (screenHeight*0.75)', 'elInY + (screenHeight*0.9)', 'elInY + (screenHeight*1.1)'],
            [0, 1, 1, 0]
          ]
        }
  
      })
  
  
      // PORTFOLIO 2021
      lax.addElements('#flow', {
        scrollY: {
          opacity: [
            [45, 'elInY + (screenHeight*0.65)', 'elInY + (screenHeight*0.8)', 'elInY + (screenHeight*0.9)'],
            [0, 1, 1, 0]
          ],
        }
      })
  
      //Glowa 3d
      lax.addElements('.header_picture', {
        scrollY: {
          opacity: [
            ['elInY + (screenHeight*0.65)', 'elInY + (screenHeight*0.95)', 'elInY + (screenHeight*1.1)', 'elInY + (screenHeight*1.2)'],
            [0, 1, 1, 0]
          ],
          translateY: [
            ['elInY', 'elOutY-200'],
            [150, -200]
          ],
        }
      })
  
      //KIM JESTEM
      lax.addElements('#headline_1', {
        scrollY: {
          opacity: [
            ['elInY + (screenHeight*0.7)' , 'elInY + (screenHeight*0.8)'],
            [0, 1]
          ]
        }
      })
  
      //TEXT 1
      lax.addElements('.text', {
        scrollY: {
          opacity: [
            ['elInY + (screenHeight*0.55)' , 'elInY + (screenHeight*0.65)'],
            [0, 1]
          ]
        }
      })
  
      //BUTTON
      lax.addElements('.actual_work', {
        scrollY: {
          opacity: [
            ['elInY + (screenHeight*0.45)' , 'elInY + (screenHeight*0.5)'],
            [0, 1]
          ],
        }
      })
  
      //HEADLINE 2
      lax.addElements('#headline_2', {
        scrollY: {
          opacity: [
            ['elInY + (screenHeight/4)' , 'elInY + (screenHeight/2)'],
            [0, 1]
          ],
        }
      })
  
      //TEXT 2
      lax.addElements('#text_2', {
        scrollY: {
          opacity: [
            ['elInY + (screenHeight/4)' , 'elInY + (screenHeight/2)'],
            [0, 1]
          ]
        }
      })
  
      
      //IMG 1
      lax.addElements('#img', {
        scrollY: {
          opacity: [
            ['elInY' , 'elInY + (screenHeight*0.75)'],
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
  
    
    })

    
    }



  })
  