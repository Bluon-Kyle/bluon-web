import SectionRender from './SectionRender';
import { sectionList } from './sectionList';
import { privacyList } from './privacyList';
const Section = (props) => {
    let temp = null; 
    const type = props.type; 
    if(props.type === "Terms"){
        temp = sectionList; 
    }
    else if(props.type === "Privacy"){
        temp = privacyList;
    }
  return (
    <div className='terms-section'>
        {temp.map((menu, index) => {
            return(
            <SectionRender page={type} items={menu} key={index} />
            )
        })}
    </div>
  )
}

export default Section