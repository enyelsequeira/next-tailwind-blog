import { ReactElement } from "react"
import { BsFillPersonCheckFill } from "react-icons/bs"

export interface Testimonial {
name: string,
icon?: ReactElement,
testimonial: string,
id: number
}

export const testimonials: Testimonial[]= [
  {
    name: "Maksim Kulichenko",
    testimonial: "We’ve worked with Enyel on a front-end project for Iterative.ai. Enyel worked in a team with 2 other developers on a big landing page. He wrote code in React and did a review of other team members work. The code he wrote could be easily reused and understood by others. He also showed that he is able to complete big tasks independently without help of others in the process. Enyel’s contribution helped us to complete project in time and with zero bugs. I think his coding skills, persistence and ability to focus were major driving factors for project success. I’d recommend Enyel as a junior front-end developer!",
    icon: <BsFillPersonCheckFill/>,
    id: 1,
  },
  {
    name: "Adrian Hajdin",
    testimonial:"Enyel is a great developer and a friend. He tackles all of the web development obstacles with ease. Enyel's business and teaching background translate incredibly well into the field of web development. He can teach complex concepts as well as find and fix pain points while developing software for companies.",
    icon: <BsFillPersonCheckFill/>,
    id: 2,
  },
  {
    name: "John Creaner",
    testimonial: "I have been working with Enyel for a month now he is an excellent mentor with great personal skills. Together with a very humble yet informative approach to teaching I would highly recommend him to anyone learning to become a web developer",
    icon: <BsFillPersonCheckFill/>,
    id: 3,
  },
]