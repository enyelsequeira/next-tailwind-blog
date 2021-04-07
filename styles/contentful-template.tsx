import { Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

export const options:Options ={

  renderMark: {
    [MARKS.BOLD]: text => <b className="font-bold text-red-400 capitalize">{text}</b>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) =>{
      return(
        <div className="font-body text-base tracking-wide text-words-light dark:text-white my-4">
          <p>{children}</p>
        </div>
      )
    },
    [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-5xl font-display tracking-wide mb-2 text-black dark:text-red-200">{children}</h1>,
    [BLOCKS.HEADING_6]: (node, children) => <h1 className="text-2xl font-bold font-body tracking-normal mb-2 text-black dark:text-red-200">{children}</h1>,
  },
  // renderText: text => {
  //   console.log(text, "my text");
  //   return text.split('\n').reduce((children, textSegment, index) => {
  //     return [...children, index > 0 && <br key={index} />, textSegment];
  //   }, []);
  // },
}
