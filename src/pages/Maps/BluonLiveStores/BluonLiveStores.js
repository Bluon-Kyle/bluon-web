import './_bluonlivestores.scss'
const BluonLiveStores = () => {
  return (
    <div className='distributorsMap'>
      <div> 
        <h3> Search any city or zip code! </h3></div>
      <div class='distributorsMap-inner'>
      <iframe
          src="https://tv-view-uphvr.ondigitalocean.app/mobile_dist_map.html"
          width="100%"
          height="100rem"
          title="Bluon Distributors map"
          style={{height:'calc(100vh - 46px)'}}
          >
      </iframe>

      </div>
    </div>
  )
}

export default BluonLiveStores