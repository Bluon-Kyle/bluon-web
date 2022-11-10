import './_countup.scss'
import React from 'react'
import CountUp from 'react-countup'
import barrow from '../../../assets/icons/arrow-up-blue.svg'
function CountUpTest(props) {
  const startnum = props.startnum; 
  const endnum = props.endnum; 
  const duration = props.duration; 
  const decimal = props.decimal;
  const deci = props.sigfigs; 
  const comma = props.comma; 
  const prefix = props.prefix; 
  const suffix = props.suffix; 
  const text = props.label; 
  const cl = props.name; 
  const arrow = props.arrow;
  
  return (
    <CountUp
        start={startnum}
        end={endnum}
        duration={duration}
        separator={comma}
        decimals={deci}
        decimal={decimal}
        prefix={prefix}
        suffix={suffix}
        //onEnd={() => console.log('Ended! 👏')}
        //onStart={() => console.log('Started! 💨')}
        >

        {({ countUpRef, start }) => (
            <div className={`counter-${cl}`}>
              {arrow ? <img alt='arrow up' src={barrow}/> : ''}
              <span ref={countUpRef} onChange={start} />
              {/* <button onClick={start}>Start</button> */}
              <p>{text}</p>
            </div>
        )}
        
    </CountUp>
  )
}

export default CountUpTest