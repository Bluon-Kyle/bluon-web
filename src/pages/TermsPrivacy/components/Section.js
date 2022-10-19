import SectionRender from './SectionRender';
import { sectionList } from './termsList';
import { privacyList } from './privacyList';
const Section = (props) => {
    let temp = null; 
    const type = props.type; 
    if(props.type === "terms"){
        temp = sectionList; 
    }
    else if(props.type === "privacy"){
        temp = privacyList;
    }
  return (
    <div className={`${props.type}-section`}>
        {temp.map((menu, index) => {
            return(
            <SectionRender page={type} items={menu} key={index} />
            )
        })}
    </div>
  )
}

export default Section