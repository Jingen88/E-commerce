import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

<div className='my-10 flex flex-row md:flex-row gap-16'>
  <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=' about image'/>
  <div className='flex flex-col gap-6 justify-center md:w-2/4'>
    <p>Welcome to Szaloki, your online destination for unique and expressive apparel. We believe that clothing is more than just fabric; it's a canvas for your personality and a way to connect with the world around you. Our collections are thoughtfully curated, drawing inspiration from art, culture, and the beauty of everyday life. We strive to offer pieces that spark joy, encourage individuality, and stand out from the ordinary.</p>
    <p>At Szaloki, we are passionate about quality and craftsmanship. We carefully select materials and work with skilled partners to bring our designs to life. Beyond the garments themselves, we are committed to providing a positive and seamless shopping experience for every customer. We hope you find something special that resonates with your personal style and helps you express your authentic self.</p>
  <b className='text-gray-800'>Our Mission</b>
  <p>At Szaloki, our mission is to empower individuality through thoughtfully designed and carefully curated apparel. We strive to create pieces that inspire self-expression, celebrate creativity, and bring a touch of artistry to everyday style. By focusing on quality craftsmanship and unique aesthetics, we aim to provide our customers with garments that not only look good but also resonate with their personal stories and aspirations.</p>
  </div>
</div>
<div className='text-4xl py-4'>
    <Title text1={'WHY'} text2={'CHOOSE US'}/>
</div>

<div className='flex flex-col md:flex-row gap-8 text-sm mb-20'>
<div className='border px-10 md:px-16  py-20 flex flex-col gap-5'>
  <b>Quality Assurance</b>
  <p className='text-gray-600'>We are committed to providing our customers with apparel that meets the highest standards of quality, from the selection of fabrics to the precision of the stitching.</p>
</div>
<div className='border px-10 md:px-16  py-20 flex flex-col gap-5'>
  <b>Convenience</b>
  <p className='text-gray-600'>We strive to make your shopping experience as seamless and convenient as possible, offering user-friendly navigation, secure payment options, and flexible delivery choices.</p>
</div>
<div className='border px-10 md:px-16  py-20 flex flex-col gap-5'>
  <b>Exceptional Costumer Service</b>
  <p className='text-gray-600'>At Szaloki, we are dedicated to providing exceptional customer service, ensuring that your experience is both enjoyable and satisfying from start to finish.</p>
</div>
</div>

<NewsLetterBox/>


    </div>
  )
}

export default About