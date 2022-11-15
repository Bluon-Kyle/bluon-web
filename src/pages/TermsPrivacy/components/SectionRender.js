import React from 'react'

const SectionRender = ({page, 
    items:{title, content, list, content_bottom,bigtitle, loudtitle, numberedList,
    list1, list2, list3, inner1, inner2, inner3, bottom_content, content2}}) => {

  if(page=== "privacy"){
    return(
        <div className='section-content'>
         
            <div className='section-content-title'>
                {title ? <h2>{title}</h2>: <></>}
            </div>
            <div className='section-content-p'>
                {content ?
                     <p className='inner-content'>
                        {content}</p>:
                    <></>
                }
            </div>
            {list1 ?
                <ul>
                    {list1.map((menu, index) => {
                    return(
                        <li key={index}>
                            {menu}
                        </li>
                        )
                    })}
                </ul>:<></>
            }
            {inner1 ?
            <div className='section-content-p'>{inner1.map((p, index)=> {
                return(
                    <p className='inner-content' key={`inner-content${index}`}>
                        {p}
                    </p>
                )
            })}</div>:
            <></>}
            {list2 ?
                <ul>
                    {list2.map((menu, index) => {
                    return(
                        <li key={index}>
                            {menu}
                        </li>
                        )
                    })}
                </ul>:<></>
            }
            {inner2 ?
            <div className='section-content-p'>{inner2.map((p, index)=> {
                return(
                    <p className='inner-content' key={`inner-content${index}`}>
                        {p}
                    </p>
                )
            })}</div>:''}
            {list3 ?
                <ul>
                    {list3.map((menu, index) => {
                    return(
                        <li key={index}>
                            {menu}
                        </li>
                        )
                    })}
                </ul>:<br></br>
            }
            {inner3 ?
            <div className='section-content-p'>{inner3.map((p, index)=> {
                return(
                    <p className='inner-content' key={`inner-content${index}`}>
                        {p}
                    </p>
                )
            })}</div>:
            <></>}
            {bottom_content ?
            <div className='section-content-p'>{bottom_content.map((p, index)=> {
                return(
                    <p className='inner-content' key={`inner-content${index}`}>
                        {p}
                    </p>
                )
            })}</div>:
            <></>}
        </div>
    )
  }
  else if(page==="terms"){
    return (
        <div className='section-content'>
            
            <div className='section-content-title'>
            {title ? <h2>{title}</h2>: <></>}
            {bigtitle ? <h2 className='big-t'>{bigtitle}</h2>:<></>}
            {loudtitle ? <strong><h2>{loudtitle}</h2></strong>:<></>}
            </div>
            <div className='section-content-p'>
            {content && !content2 ?
                <>{content.map((p, index)=> {
                    return(
                        <p className='inner-content' key={`inner-content${index}`}>
                            {p}
                        </p>
                    )
                })}</>:
                <></>}
                <div>{content2} </div>
            </div>
            {list ?
                <ul>
                    {list.map((menu, index) => {
                    return(
                        <li key={index}>
                            {menu}
                        </li>
                        )
                    })}
                </ul>:<></>
            }
            {numberedList ?
                <ul className='numbered'>
                    {numberedList.map((menu, index) => {
                    return(
                        <li key={index}>
                            {menu}
                        </li>
                        )
                    })}
                </ul>:<></>
            }
            
                {content_bottom ?
                <div className='section-content-p'>{content_bottom.map((p, index)=> {
                    return(
                        <p className='inner-content' key={`inner-content${index}`}>
                            {p}
                        </p>
                    )
                })}</div>:
                <></>}
        </div>
    )}
}

export default SectionRender