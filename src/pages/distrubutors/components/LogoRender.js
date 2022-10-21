
const LogoRender = ({logos, index}) => {
  return (
    <div className="dist-logos-inner">
      <img src={logos.url} alt={`logo-${index}`}/>
    </div>
  )
}

export default LogoRender