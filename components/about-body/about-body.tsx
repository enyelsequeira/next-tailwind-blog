
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react';
import { options } from '../../styles/contentful-template';




const Body = (props) => {
  console.log(props.aboutHero, "cool props");
  console.log(props);
  return (
    <div className="md:p-6 font-body  md:col-start-3 md:col-end-5">
      {props && documentToReactComponents(props.aboutHero.aboutMe.json, options)} 
    </div>
  )
}

export default Body
