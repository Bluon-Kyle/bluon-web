
import { useRef } from "react";

const ScrollSection = (props) => {
    const element = useRef(props.location);
    
    const scroller = (e) => {
        window.scrollTo({
            top: e.current.offsetTop,
            //behavior: smooth, 

        });
    };

    return scroller(element);
}

export default ScrollSection