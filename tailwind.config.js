/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero':"url('/public/Images/bg-hero.jpg')",
        'slogan':"url('/public/Images/slogan.png')"
      },
      keyframes:{
        hoverbtn:{
          "0%":{
            backgroundColor: "white",
          },
          "100%":{
            backgroundColor: "#F9844A",
            color:"white",
            boxShadow:"0px 0px 35px 5px #F9844A"
          }
          
        
        },
        unhoverbtn:{
          "0%":{
         
            backgroundColor: "#F9844A",
            color:"white",
            boxShadow:"0px 0px 35px 5px #F9844A"
          },
          "100%":{
            backgroundColor: "white",
          }
          
        
        },
        revertrotatearrow:{
          '0%':{
            rotate:"45deg",
            backgroundColor:"#FFFFFF"
          },
          '100%':{
            rotate:"0deg",
            backgroundColor:"black"
          }
        },
        rotatearrow:{
          '0%':{
            rotate:"0deg",
            backgroundColor:"black"
           
          },
          '100%':{
            rotate:"45deg",
            backgroundColor:"#FFFFFF"
          }
        },
        revertrotatearrowtop:{
          '0%':{
            rotate:"135deg",
            top:"8px",
            backgroundColor:"#FFFFFF"
          },
          '100%':{
            rotate:"0deg",
            top:"0",
            backgroundColor:"black"
          }
        },
        rotatearrowtop:{
          '0%':{
            rotate:"0deg",
            top:"0px",
            backgroundColor:"black"
           
          },
          '100%':{
            rotate:"135deg",
            top:"8px",
            backgroundColor:"#FFFFFF"
          }
        },
        animarrowbottom:
        {
          '0%':{
            
            left:"0",
            backgroundColor:"black"
          },
          '100%':{
            left:"-10rem",
            backgroundColor:"#FFFFFF"
          }
        },
        revertanimarrowbottom:
        {
          '0%':{
            
            left:"-10rem",
            backgroundColor:"#FFFFFF"

          },
          '100%':{
            left:"0",
            backgroundColor:"black"
          }
        },
        menuHover:{
          '0%':{
            backgroundColor:"transparent"
           
          },
          '100%':{
            backgroundColor:"#FFFFFF"
          }
        },
        revertmenuHover:{
          '0%':{
           backgroundColor:"#FFFFFF"
           
          },
          '100%':{
            
            backgroundColor:"transparent"
          }
        },
        appearMenu:{
          '0%':{
           top:"-20rem",
           opacity:"0"
           
          },
          '50%':{
            opacity:"0"
          },
          '100%':{
            top:"7rem",
            opacity:"100%"
          }
        },
        reverseAppearMenu:{
          '0%':{
          
           top:"7rem",
           opacity:"100%"
          },
          '50%':{
            opacity:"0"
          },
          '100%':{
            top:"-20rem",
           opacity:"0"
          }
        },
      }
    },
  },
  plugins: [],
}
