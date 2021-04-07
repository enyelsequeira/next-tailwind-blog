
import { GetStaticProps } from "next";
import Image from "next/image";
import Body from '../components/about-body/about-body';
import TechStack from '../components/tech-stack/tech-stack';
import TestimonialCards from '../components/testimonials/testimonials';
import { aboutMeInfo, graphQLClient, list, v2, variable } from "../helpers/contenful-query";
import { Testimonial, testimonials } from '../utils/testimonials';


const About = ({ data, listData }) => {

  return (
    <section className="flex flex-col md:grid md:grid-cols-4  my-4 p-2 md:p-4 gap-3">
      <div className="p-2 rounded-lg md:col-start-1 md:self-center md:col-end-3 ">
        <Image className="rounded-2xl shadow-lg shadow-inner" width="700" height="500 " src={data.aboutHero.aboutMe.links.assets.block[0].url} />
      </div>
      <Body {...data} />
      <TechStack techStack={listData.techStack} />
      <div className="flex flex-col lg:my-6 md:col-start-1 md:col-end-5 lg:grid md:grid-cols-3 md:grid-rows-testimonials md:gap-3">
        <p className="text-3xl text-center col-span-4 my-4 font-display">Testimonials</p>
      {testimonials.map((testimonial: Testimonial) => {
        return  <TestimonialCards key={testimonial.id} testimonial={testimonial} />
      })}
      </div>
    </section>
  )

}

export default About



type techStack ={
  stack: string[]
}
interface Content{
  
}

interface data {
  title: string,
  aboutMe:{
    json: {

    },
    links: {
      assets
    }
  }
}


export const getStaticProps: GetStaticProps = async () => {  
  const data = await graphQLClient.request(aboutMeInfo, variable)
  console.log(data)
  const listData: techStack = await graphQLClient.request(list, v2)
  return {
    props: {
      data,
      listData
    }
  }
}



