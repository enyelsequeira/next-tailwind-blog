import { ReactElement } from "react"
import { AiFillHtml5 } from "react-icons/ai"
import { DiCss3, DiJavascript1, DiNodejsSmall, DiReact } from "react-icons/di"
import { SiGatsby, SiNextDotJs, SiServerless } from "react-icons/si"

interface ListContent {
  name: string,
  icon: ReactElement
  id: number
}

export const techList: ListContent[] = [
  {
    name: "HTML",
    icon: <AiFillHtml5 />,
    id: 0

  },
  {
    name: "CSS",
    icon: <DiCss3 />,
    id: 1
  },
  {
    name: "javascript",
    icon: <DiJavascript1/>,
    id: 2
  },
  {
    name: "react",
    icon: <DiReact/>,
    id: 3
  },
  {
    name: "node",
    icon: <DiNodejsSmall />,
    id: 4
  },
  {
    name: "Serverless",
    icon: <SiServerless/>,
    id: 5
  },
  {
    name: "NextJs",
    icon: <SiNextDotJs />,
    id: 6
  },
  {
    name: "Gatsby",
    icon: <SiGatsby />,
    id: 7
  },
]
