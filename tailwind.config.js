/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero':"url('/public/Images/bg-hero.jpg')",
        'slogan':"url('/public/Images/slogan.png')",
        'fixedimg':"url('/src/components/Motorcycles/Images/moto2.jpeg')",
        'fixedimg':"url('/public/Images/banner_decoration.jpg')"
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
        rezervaHoverBtn:{
          '0%':{
            backgroundColor:"#F9844A",
            
          },
          '100%':{
            backgroundColor:"#242424",
            
          }
        },
        reverseRezervaHoverBtn:{
          '0%':{
            backgroundColor:"#242424"
            
          },
          '100%':{
            backgroundColor:"#F9844A"
          }
        },
        appear:{
          '0%':{
            opacity:"0"
            
          },
          '100%':{
            opacity:"100%"
          }
        },
        appearText:{
          '0%':{
            opacity:"0",
            height:"0px"
            
          },
          '100%':{
            opacity:"100%",
            height:"100%"
          }
        },
        disappear:{
          '0%':{
            opacity:"100%"
            
          },
          '100%':{
            opacity:"0"
          }
        },
        disappearText:{
          '0%':{
            opacity:"100%",
            height:"100%"
            
          },
          '100%':{
            opacity:"0",
            height:"0"
          }
        },
        animContact:{
          '0%':{
            background:"#FF712B",
            color:"white"
            
          },
          '100%':{
            background:"transparent",
            color:"#F9844A"
          }
        },
        reverseAnimContact:{
          '0%':{
            background:"transparent",
            color:"#F9844A"
            
          },
          '100%':{
            background:"#FF712B",
            color:"white"
          }
        },
        transformToOrange:{
          '0%':{
            color:"black"
          },
          '100%':{
            color:"#F9844A"
          }
        },
        reverseTransformToOrange:{
          '0%':{
            
            color:"#F9844A"
          },
          '100%':{
            color:"black"
          }
        },
        lineToRight:{
          '0%':{
            width:"0"
          },
          '100%':{
            width:"100%"
          }
        },
        reverseLineToRight:{
          '0%':{
            opacity:"100%",
            width:"100%"
          },
          '100%':{
            width:"0",
            opacity:"0"
          }
        },
        rotateArrow:{
          '0%':{
          rotate:"0"
          },
          '100%':{
           rotate:"90deg"
          }
        },
        reverseRotateArrow:{
          '0%':{
          rotate:"90deg"
          },
          '100%':{
           rotate:"0"
          }
        },
      }
    },
  },
  plugins: [],
}
