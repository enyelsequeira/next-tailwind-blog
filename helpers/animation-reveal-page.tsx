import { motion } from 'framer-motion'
import React from 'react'
import useInView from "use-in-view"



function AnimationReval({disabled, children}){
  if(disabled){
    return <>{children}</>

  }

  if(!Array.isArray(children)) children = [children]

  const directions = ["left", "right"]


  const childrenWithAnimation = children.map((child, i)=> {
    return (
      <AnimatedSlideInComponent key={i} direction={directions[i%directions.length]}>
        {child}
      </AnimatedSlideInComponent>
    )
  })
  return <> {childrenWithAnimation}</>
}

function AnimatedSlideInComponent({direction ="left", offset=30, children}){
  const [ref, inView] = useInView(30);

  const x ={target: "0%"}

  if (direction === "left") x.initial = "-150%";
  else x.initial = "150%";
  
  return (
    <motion.section
      initial={{x: x.initial}}
      animate={{
        x: inView && x.target,
        transitionEnd:{
          x: inView && 0
        }
      }}
      transition={{type: "spring", damping: 100}}
      ref={ref}>
        {children}
      </motion.section>

  )
}

export default props => {
  <div className="min-h-screen text-secondary-500 p-8 overflow-hidden`">
    <AnimationReval {...props}/>
  </div>
}