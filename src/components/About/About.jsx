import React from 'react'
import {TiTickOutline} from 'react-icons/ti'
const About = () => {
  return (
    <div className='relative bg-[#FFFFFF] flex flex-col items-center w-full h-full'>
        <h1 className='flex items-center text-[36px] lg:text-[64px] mt-[2rem] font-bold'><span className='bg-black h-[4px]  w-[3rem] lg:w-[4rem] mr-[1rem]' />DESPRE NOI<span className='bg-black h-[4px]  w-[3rem] lg:w-[4rem] ml-[1rem]' /></h1>
        <p className='text-[18px] w-[70%] mt-[2rem] text-justify flex-col items-center '>
              <span className='relative mr-2 text-[28px] text-white flex justify-center items-center bg-green-300 w-[28px] h-[28px] rounded-[30px]' ><TiTickOutline /></span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quibusdam est. Veniam quae officia numquam incidunt, quidem enim doloremque, quo nulla explicabo voluptatem dolore, eveniet ut ipsum quaerat dolor ratione odio eos suscipit vel earum! Porro adipisci provident cupiditate est neque reiciendis doloremque.
              <br/>
              <br/>
              <span className='absolute top-[29.2rem]  lg:top-[16rem] h-[1px] rounded-[10px] w-[60%] lg:w-full bg-black' />
                 Unde ex impedit quo placeat ad est corrupti blanditiis tenetur aliquam quaerat quia delectus omnis eius id sit corporis commodi eveniet, laborum inventore, at natus pariatur hic cupiditate dolorum? Deserunt assumenda totam rem libero, veritatis provident laborum dolor, consectetur atque iste magni impedit, similique illo. 
                 <br />
                 <br/>
                 Magnam, eaque quisquam deserunt provident suscipit voluptatum eveniet accusantium excepturi iusto saepe quaerat alias amet praesentium at corporis enim vero nobis cum natus libero sapiente expedita placeat ipsum sint! Adipisci at distinctio consequatur, blanditiis architecto itaque corporis sit suscipit porro magni fuga magnam accusantium doloremque expedita facilis aliquid delectus autem ea veniam vel voluptatibus natus neque provident repellat. Non eum sapiente officia et maxime error itaque sequi voluptatum distinctio maiores, voluptas esse!
        </p>
    </div>
  )
}

export default About