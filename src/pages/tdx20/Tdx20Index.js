import React from 'react'
import './_tdx20.scss'
import AppButton from '../../components/common/AppButton'
const Tdx20Index = () => {
  return (
    <div className='tdx20'>
      <div className='tdx20-header'>
        <h1>Find A Distributor</h1>
        <p>Bluon R-458A (TdX 20) is available from leading HVAC distributors across the United States</p>
      </div>
      <div className='tdx20-map'>
            {/* <section class="section-search">
            <div class="section__map loading">
                <div class="map" id="map" data-lat="40.712776" data-lng="-74.005974"></div>

                <div class="map-filter">
                    <div class="search">
                        <h4>Select a location</h4>

                        <form action="?" method="post" class="form form--search">
                            <div class="form__controls">
                                <input type="text" id="search" name="search" placeholder="Enter city, state or zip code"/>

                                <div class="form__field-placeholder">
                                    <img src="assets/old-site/images/temp/search-location-icon.png" alt=""/>
                                </div>
                            </div>
                        </form>

                    </div>

                    <div class="results" id="search-results"></div>
                </div>

            </div>

            <div class="section__disclaimer">
                <p>Please note that to purchase refrigerant, customers must possess a valid EPA 608 certification or work for a company that employs an EPA 608 certified technician.</p>
            </div>
        </section>

        <script type="text/html" id="store">
            <div class="store" id="{%=o.lat%}@{%=o.lng%}">
                <div class="store__inner">
                    <div class="store__head">
                        <h5>{o.name}</h5>

                        <p>
                            {o.address} <br />
                            {o.city} {o.state} {o.zip} <br />
                            {o.country} <br />
                        </p>

                        <p>
                            <span>Phone:</span> <a href="tel:{%=o.phone%}">{o.phone}</a>
                        </p>
                    </div>

                    <div class="store__image">
                        <img src="{%=o.image%}" alt=""/>
                    </div>
                </div>

                <div class="store__foot">
                    {/* { if(o.distance) { }
                        <p>
                            {o.distance}
                        </p>
                    { } else { }
                        <p></p>
                    {} } */}

                    {/* <a href="https://www.google.com/maps/dir/?api=1&destination={%=o.lat%},{%=o.lng%}" target="_blank">Get directions</a>
                </div>
            </div>
        </script>  */}
      </div>
      <div className='tdx20-join'>
        <div className='tdx20-join-text'>
          <h1>Join The Movement</h1>
          <p> Download Bluon to get started</p>
        </div>
        
        <div className='tdx20-join-links'>
          <AppButton type='ios'/><AppButton type='android'/>
        </div>
        
      </div>
    </div>
  )
}

export default Tdx20Index