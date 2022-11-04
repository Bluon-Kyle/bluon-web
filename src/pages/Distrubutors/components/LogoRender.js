
const LogoRender = ({logos, index}) => {
  return (
    <div className="dist-logos-inner" key={index}>
      <img src={logos.url} alt={`logo-${index}`}/>
    </div>
  )
}

export default LogoRender