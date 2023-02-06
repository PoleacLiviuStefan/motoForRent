import React from 'react'
import {TiTickOutline} from 'react-icons/ti'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import moto2 from "../Motorcycles/Images/moto2.jpeg"
const About = () => {
  return (
    <div name="About" className='relative bg-[#FFFFFF] flex flex-col items-center w-full h-[50rem] lg:h-[70rem] mt-0 lg:mt-[10rem] '>
       
         <div className=' flex  w-full justify-center items-center '>
            <span className='sticky  w-[20%] h-[3px] bg-black mr-[2rem] ' />
            <span className=' sticky  text-[80px] lg:text-[150px] '> <AiOutlineQuestionCircle/> </span>
            <span className=' sticky  w-[20%] h-[3px] bg-black ml-[2rem] ' />
         </div>
        <h1 className='flex items-center text-[28px] lg:text-[56px] mt-[1rem] font-[800]'>DESPRE NOI</h1>
        <p className='text-[18px] w-[80%] lg:w-[60%] mt-[2rem] text-justify flex-col items-center '>
              <span className='relative mr-2 text-[28px] text-white flex justify-center items-center bg-green-300 w-[28px] h-[28px] rounded-[30px]' ><TiTickOutline /></span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quibusdam est. Veniam quae officia numquam incidunt, quidem enim doloremque, quo nulla explicabo voluptatem dolore, eveniet ut ipsum quaerat dolor ratione odio eos suscipit vel earum! Porro adipisci provident cupiditate est neque reiciendis doloremque.
              <br/>
              <br/>
             
                 Unde ex impedit quo placeat ad est corrupti blanditiis tenetur aliquam quaerat quia delectus omnis eius id sit corporis commodi eveniet, laborum inventore, at natus pariatur hic cupiditate dolorum? Deserunt assumenda totam rem libero, veritatis provident laborum dolor, consectetur atque iste magni impedit, similique illo. 
                 <br />
                 <br/>
                 Magnam, eaque quisquam deserunt provident suscipit voluptatum eveniet accusantium excepturi iusto saepe quaerat alias amet praesentium at corporis enim vero nobis cum natus libero sapiente expedita placeat ipsum sint! Adipisci at distinctio consequatur, blanditiis architecto itaque corporis sit suscipit porro magni fuga magnam accusantium doloremque expedita facilis aliquid delectus autem ea veniam vel voluptatibus natus neque provident repellat. Non eum sapiente officia et maxime error itaque sequi voluptatum distinctio maiores, voluptas esse!
        </p>
    </div>
  )
}

export default About