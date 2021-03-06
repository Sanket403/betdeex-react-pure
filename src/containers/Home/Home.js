import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Home extends Component {
  render = () => (
    <>
  <div>
        {/* ./Page header */}
    <header className="header online-payment-header section color-1 alpha-9" style={{backgroundImage: 'url(/img/banner-bg.jpg)',
    backgroundSize: 'cover', zIndex: '9', height: '500px', backgroundPositionY: 'center'}}>
          {/* <div id="stripes"></div> */}
          {/* <img src="/img/Bdx_web-02.jpg"></img> */}
          <div className="container overflow-hidden bring-to-front banner" style={{paddingBottom: 0, }}>
            <div className="row">
              <div className="col-lg-6 mx-auto text-center text-lg-left banner-text" style={{margin:'50px'}}>
                <h1 className="light display-4 color-1">Welcome to the  <span className="bold d-block" style={{fontSize:'48px', color:'#fff', lineHeight:'44px'}}>Future of Prediction</span></h1>
                <p className="color-1 lead alpha-8 my-5" style={{fontSize:'18px',}}>"Luck Becomes Limitless Opportunity with Confident Preparation <br></br>
                <b style={{fontWeight:'800', fontStyle:'italic'}}>Decentralized, Transparent & Trustless</b>

                  {/* <br> No Login, No Hassle, No Limits.*/}</p>
                  <button onClick={() => this.props.history.push('/explore')} class="btn btn-rounded btn-lg btn-accent text-center ml-0 my-3"> Explore Events now</button>
              </div>
              <div className="col-lg-6 col-md-9 mx-md-auto mx-lg-0 pr-lg-0 pc" data-aos="fade-left">
                <img src="img/betdeex-logo.png" alt="Dashcore" className="d-blocks img-responsive logo" />
                <b style={{fontWeight:'800', fontStyle:'italic', marginBottom:'50px'}}>Powered by Era Swap</b>
              </div>
             </div>
          </div>
    </header>
        {/*Cycle  */}

        <section>
          <div className="inn-title" style={{'margin-top':'50px'}}>
            <h2 style={{fontWeight:'800', textTransform:'uppercase'}}><i className="fa fa-check" aria-hidden="true" /> Hot Events <img src="/img/era-icon.png"/><span>events 2020</span></h2>
          </div>
          <div className="container-fluid" style={{'margin-top':'40px', padding: '0'}}>
              <Carousel infiniteLoop autoPlay emulateTouch={true} showArrows={false} >
                <div >
                  <img src="/img/Betdeex-Wall-Post-01.jpg"  />
                </div>
                <div >
                  <img src="/img/asian-wrestling.jpg"  />
                  <button className="legend" onClick={() => this.props.history.push('/bet/0x4002c58993f2af1f16768fa0525f2e510aead33b')}>Click here to go to the event</button>
                </div>
                <div>
                  <img src="/img/ruling-party.jpg" />
                  <button className="legend" onClick={() => this.props.history.push('/bet/0xcb07fcabbf589621e6b0d4e6d507aa3919e23c49')}>Click here to go to the event</button>
                </div>
                <div>
                  <img src="/img/bitcoin.jpg" />
                  <button className="legend" onClick={() => this.props.history.push('/bet/0x565a093f3230ade853c45c5cd7c84344e75b4393')}>Click here to go to the event</button>
                </div>

              </Carousel>
          </div>
        </section>

          <section>
          <div className="lp spe-bot-red-3" style={{zIndex:'9', paddingLeft: '65px'}}>
            <div className="inn-title">
              <h2 style={{fontWeight:'800', textTransform:'uppercase'}}><i className="fa fa-check" aria-hidden="true" /> All predictions <img src="/img/era-icon.png"/><span>events 2019</span></h2>
              <p>An 'event' is a prediction event. Now, you can choose an event from the list of multiple events</p>
            </div>
            <div className="hom-top-trends row">
              {/*TOP TRENDINGS*/}
              <div onClick={() => this.props.history.push('/explore/sports')}  className="col-md-3">
                <div className="hom-trend">
                  <div className="hom-trend-img">
                    <img className="img-responsive" src="/img/1.jpg" alt="" />
                  </div>
                  <div className="hom-trend-con inn-title">
                    {/* <span><i className="fa fa-futbol-o" aria-hidden="true" /> 2rd augest 2017</span> */}

                      <h2 style={{fontWeight: '800', textTransform: 'uppercase', fontSize: '16px'}}>SPORTS</h2>

                    {/* <p>The Sports Games also celebrated and showcased sport, thanks to the city’s stunning setting</p> */}
                  </div>
                </div>
              </div>
              {/*TOP TRENDINGS*/}
              <div  onClick={() => this.props.history.push('/explore/politics')}   className="col-md-3">
                <div className="hom-trend">
                  <div className="hom-trend-img">
                    <img className="img-responsive" src="/img/3.jpg" alt="" />
                  </div>
                  <div className="hom-trend-con">
                    {/* <span><i className="fa fa-futbol-o" aria-hidden="true" /> 2rd augest 2017</span> */}
                      <h2 style={{fontWeight: '800', textTransform: 'uppercase', fontSize: '16px'}}>POLITICS</h2>

                    {/* <p>The Sports Games also celebrated and showcased sport, thanks to the city’s stunning setting</p> */}
                  </div>
                </div>
              </div>
              {/*TOP TRENDINGS*/}
              <div  onClick={() => this.props.history.push('/explore/movies')}   className="col-md-3">
                <div className="hom-trend">
                  <div className="hom-trend-img">
                    <img className="img-responsive" src="/img/2.jpg" alt="" />
                  </div>
                  <div className="hom-trend-con">
                    {/* <span><i className="fa fa-futbol-o" aria-hidden="true" /> 2rd augest 2017</span> */}

                      <h2 style={{fontWeight: '800', textTransform: 'uppercase', fontSize: '16px'}}>MOVIES</h2>

                    {/* <p>The Sports Games also celebrated and showcased sport, thanks to the city’s stunning setting</p> */}
                  </div>
                </div>
              </div>
              {/*TOP TRENDINGS*/}
              <div  onClick={() => this.props.history.push('/explore/tech')}   className="col-md-3">
                <div className="hom-trend">
                  <div className="hom-trend-img">
                    <img className="img-responsive" src="/img/5.jpg" alt="" />
                  </div>
                  <div className="hom-trend-con">
                    {/* <span><i className="fa fa-futbol-o" aria-hidden="true" /> 2rd augest 2017</span> */}

                      <h2 style={{fontWeight: '800', textTransform: 'uppercase', fontSize: '16px'}}>TECH</h2>

                    {/* <p>The Sports Games also celebrated and showcased sport, thanks to the city’s stunning setting</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div  onClick={() => this.props.history.push('/explore/science')}   className="hom-top-trends row">
              {/*TOP TRENDINGS*/}
              <div className="col-md-3">
                <div className="hom-trend">
                  <div className="hom-trend-img">
                    <img className="img-responsive" src="/img/7.jpg" alt="" />
                  </div>
                  <div className="hom-trend-con">
                    {/* <span><i className="fa fa-futbol-o" aria-hidden="true" /> 2rd augest 2017</span> */}

                      <h2 style={{fontWeight: '800', textTransform: 'uppercase', fontSize: '16px'}}>SCIENCE</h2>

                    {/* <p>The Sports Games also celebrated and showcased sport, thanks to the city’s stunning setting</p> */}
                  </div>
                </div>
              </div>
              {/*TOP TRENDINGS*/}
              <div  onClick={() => this.props.history.push('/explore/entertainment')}   className="col-md-3">
                <div className="hom-trend">
                  <div className="hom-trend-img">
                    <img className="img-responsive" src="/img/6.jpg" alt="" />
                  </div>
                  <div className="hom-trend-con">
                    {/* <span><i className="fa fa-futbol-o" aria-hidden="true" /> 2rd augest 2017</span> */}

                      <h2 style={{fontWeight: '800', textTransform: 'uppercase', fontSize: '16px'}} >ENTERTAINMENT</h2>

                    {/* <p>The Sports Games also celebrated and showcased sport, thanks to the city’s stunning setting</p> */}
                  </div>
                </div>
              </div>
              {/*TOP TRENDINGS*/}
              <div  onClick={() => this.props.history.push('/explore/celebrities')}   className="col-md-3">
                <div className="hom-trend">
                  <div className="hom-trend-img">
                    <img className="img-responsive" src="/img/8.jpg" alt="" />
                  </div>
                  <div className="hom-trend-con">
                    {/* <span><i className="fa fa-futbol-o" aria-hidden="true" /> 2rd augest 2017</span> */}

                      <h2 style={{fontWeight: '800', textTransform: 'uppercase', fontSize: '16px'}}>CELEBRITIES</h2>

                    {/* <p>The Sports Games also celebrated and showcased sport, thanks to the city’s stunning setting</p> */}
                  </div>
                </div>
              </div>
              {/*TOP TRENDINGS*/}
              <div  onClick={() => this.props.history.push('/explore/current')}   className="col-md-3">
                <div className="hom-trend pad-red-bot-0">
                  <div className="hom-trend-img">
                    <img className="img-responsive" src="/img/4.jpg" alt="" />
                  </div>
                  <div className="hom-trend-con">
                    {/* <span><i className="fa fa-futbol-o" aria-hidden="true" /> 2rd augest 2017</span> */}
                      <h2 style={{fontWeight: '800', textTransform: 'uppercase', fontSize: '16px'}}>CURRENT</h2>

                    {/* <p>The Sports Games also celebrated and showcased sport, thanks to the city’s stunning setting</p> */}
                  </div>
                </div>
              </div>
            </div>
            </div>
        </section>
          {/* Use Cases for Betdeex */}
          <section className="section bg-6 bg-6-gradient edge bottom-right play-slider">
            <div className="container bring-to-front">
              <img src="/img/era-icon.png"/>
              <div id="demo" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ul className="carousel-indicators">
                  <li data-target="#demo" data-slide-to={0} className="active" />
                  <li data-target="#demo" data-slide-to={1} />
                  <li data-target="#demo" data-slide-to={2} />
                </ul>
                {/* The slideshow */}
                <div className="carousel-inner">
                  <div className="carousel-item active">
                  <section className="section singl-testimonial bg-1 edge top-left">
                      <div className="shape-wrapper"><img src="img/shps/abs-shp-1.svg" className="absolute top right h-100" alt="..." /></div>
                      <div className="container-wide bring-to-front" >
                        <div className="row gap-y align-items-center">
                          <div className="col-12 col-lg-6 mx-auto">
                            <h2 style={{textAlign:'justify'}}>Step 1: Explore</h2>
                            <p className="lead color-2">
                              There will be multiple events to predict from multiple domains like Sports, Politics, Movies, Tech, Science, Entertainment, Celebrities, Current Affairs and more.
                            </p>
                            <p>
                            </p>
                          </div>
                          <div className="col-10 col-lg-5 pr-0">
                            <div className="device browser" data-aos="fade-left">
                              <div className="screen"><img src="img/betdeex1.png" alt="" className="img-responsive shadow" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="carousel-item">
                  <section className="section singl-testimonial bg-1 edge top-left">
                    <div className="shape-wrapper"><img src="img/shps/abs-shp-1.svg" className="absolute top right h-100" alt="..." /></div>
                    <div className="container-wide bring-to-front">
                      <div className="row gap-y align-items-center">
                        <div className="col-12 col-lg-6 mx-auto">
                          <h2 style={{textAlign:'justify'}}>Step 2: Choose an Event</h2>
                          <p className="lead color-2">An 'event' is a prediction event which you can choose from the list of multiple events on BetDeEx platform. You can select your favorite event(s) and start prediction based on your skills.</p>
                        </div>
                        <div className="col-10 col-lg-5 pr-0">
                          <div className="device browser" data-aos="fade-left">
                            <div className="screen"><img src="img/betdeex2.png" alt="" className="img-responsive shadow" /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  </div>
                  <div className="carousel-item">
                  <section className="section singl-testimonial bg-1 edge top-left">
                    <div className="shape-wrapper"><img src="img/shps/abs-shp-1.svg" className="absolute top right h-100" alt="..." /></div>
                    <div className="container-wide bring-to-front">
                      <div className="row gap-y align-items-center">
                        <div className="col-12 col-lg-6 mx-auto">
                          <h2 style={{textAlign:'justify'}}>Step 3: Predict!</h2>
                          <p className="lead color-2">Predict using ES on the outcome of the event and wait for results. If you are lucky to win, you will get rewarded through the BetDeEx Smart Contract.</p>
                        </div>
                        <div className="col-10 col-lg-5 pr-0">
                          <div className="device browser" data-aos="fade-left">
                            <div className="screen"><img src="img/betdeex3.png" alt="" className="img-responsive shadow" /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  </div>
                </div>
                {/* Left and right controls */}
                <a className="carousel-control-prev" style={{color:'#000'}} href="#demo" data-slide="prev">
                  <span className="carousel-control-prev-icon" />
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                  <span className="carousel-control-next-icon" />
                </a>
              </div>
            </div>
          </section>
          {/*Currencies of Betdeex */}

          {/* Benefits of Betdeex*/}
         <hr></hr>
          {/*Join The Betdeex Ecosystem*/}

          {/* ./CTA - Create Account */}
          <section className="section bg-6 b-b edge" style={{zIndex:'100', marginTop: '-93px'}}>
            <div className="container">
              <div className="section-heading text-center">
                <h2>FAQ's</h2>
                {/* <p className="color-2 lead">Era Swap Ecosystem includes interlinked multiple platforms where Era Swap Tokens can
                  be utilized for exchange of services, availing discounts, getting rewards and other utilities. Era Swap Team will identify and help build more such platforms
                  in future which are built for the community and willing to incorporate ES reward system.</p> */}
              </div>
              <div className="">

                  <section className="section bg-6">
                    <div className="container" style={{marginTop:'-64px'}}>
                      <div className="row gap-y">
                        <div className="col-md-12">
                          <div className="accordion accordion-clean" id="faqs-accordion">

                          <div className="card mb-3">
                            <div className="card-header"><a href="#" className="card-title btn" data-toggle="collapse" data-target="#v1-q1">What is Era Swap Token?</a></div>
                            <div id="v1-q1" className="collapse" data-parent="#faqs-accordion">
                              <div className="card-body">Era Swap Token is a decentralized utility token that allows holders to Connect & Exchange in Peer-to-Peer Network using Smart Contracts. Era Swap is a native token of Era Swap Network (ESN) Blockchain Proof-of-stake Consensus Protocol, designed to optimize utilization in Era Swap Decentralized Ecosystem.</div>


                            </div>
                          </div>

                          <div className="card mb-3">
                            <div className="card-header"><a href="#" className="card-title btn" data-toggle="collapse" data-target="#v1-q2">What is BetDeEx?</a></div>
                            <div id="v1-q2" className="collapse" data-parent="#faqs-accordion">
                              <div className="card-body">BetDeEx is a Decentralized App (DApp) which is based on pre-defined set of rules enforced through Smart Contracts to govern the prediction activity and distribution of winnings.</div>
                              <div className="offset-md-4 col-md-4">
                                <div style={{position: 'relative', height: 0, overflow: 'hidden', maxWidth: '100%', paddingBottom: '56.25%', marginBottom:'20px'}}>
                                      <iframe src="https://www.youtube.com/embed/reKG7T8ciGs" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} frameBorder={0} allowFullScreen />
                                </div>
                              </div>

                            </div>
                          </div>


                          <div className="card mb-3">
                            <div className="card-header"><a href="#" className="card-title btn" data-toggle="collapse" data-target="#v1-q3">How to Predict On Events on BetDeEx?</a></div>
                            <div id="v1-q3" className="collapse" data-parent="#faqs-accordion">
                              <div className="card-body">Please watch this video to understand "Walkthrough On BetDeEx & How To Predict On Events"</div>
                              <div className="offset-md-4 col-md-4">
                                <div style={{position: 'relative', height: 0, overflow: 'hidden', maxWidth: '100%', paddingBottom: '56.25%', marginBottom:'20px'}}>
                                      <iframe src="https://www.youtube.com/embed/j2a8Una4lEw" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} frameBorder={0} allowFullScreen />
                                </div>
                              </div>

                            </div>
                          </div>

                            <div className="card mb-3">
                              <div className="card-header"><a href="#" className="card-title btn" data-toggle="collapse" data-target="#v1-q4">DO YOU STORE MY PRIVATE KEYS, KEY STORE OR MNEMONIC IN BETDEEX?</a></div>
                              <div id="v1-q4" className="collapse" data-parent="#faqs-accordion">
                                <div className="card-body">The private keys are stored only with users. BetDeEx connects with Decentralized Blockchain hence any centralized intermediate server is not at all required and hence any of your data is not sent to our servers. With Era Swap Wallet, Control & Privacy are in your hands as the private keys stay only with you.</div>
                              </div>
                            </div>
                            <div className="card mb-3">
                              <div className="card-header"><a href="#" className="card-title btn" data-toggle="collapse" data-target="#v1-q5">What is Gas Fee / Network Fee in BetDeEx?</a></div>
                              <div id="v1-q5" className="collapse" data-parent="#faqs-accordion">
                                <div className="card-body">Ethereum is a decentralized and immutable platform. Tens of thousands of miners dedicate their computers to maintain the Ethereum network. For compensation, the concept of the gas fee is there. All transactions on Ethereum Network cost gas and this fee is transferred to miners in ETH. Users can choose to pay less or more gas to miners. A miner can choose which transactions to mine, and generally, they give priority to those transactions which give them more fees. You can customize your gas fees in the advanced settings while making staking, withdrawal or any transaction.</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
              </div>
            </div>
          </section>

          {/* ./Footer - Simple */}
          <footer className="site-footer section bg-1 color-1 block bg-1">
            <div className="container py-4">
              <div className="row gap-y text-center text-md-left">
                <div className="col-md-4">
                  <img src="img/betdeex-logo.png" alt="" className="logo" />
                  <p>Please read the Disclaimer, Terms and Conditions, Legal Terms carefully before strating with BetDeEx.</p>
                </div>
                {/* <div className="col-md-3">
                  <nav className="nav flex-column">
                    <a className="nav-item py-2 color-1" href="index.html">Home</a>
                    <a className="nav-item py-2 color-1" href="faqs.html">FAQ</a>
                    <a className="nav-item py-2 color-1" href="disclaimer.html">Disclaimer</a>
                  </nav>
                </div> */}
                <div className="col-md-4">
                  <nav className="nav flex-column">
                    <a className="nav-item py-2 color-1" href="/pdf/betdeex-user-guide.pdf" target="_blank"><span style={{color:'#848080'}}>User Guide</span></a>
                    <a className="nav-item py-2 color-1" onClick={() => this.props.history.push('/results')} style={{cursor:'pointer'}} target="_blank"><span style={{color:'#848080'}}>Results</span></a>
                    <a className="nav-item py-2 color-1" href="https://eraswaptoken.io/pdf/eraswap-terms-conditions.pdf" target="_blank"><span style={{color:'#848080'}}>Era Swap Terms &amp; Conditions</span></a>
                    <a className="nav-item py-2 color-1" href="/pdf/betdeex-terms-conditions.pdf" target="_blank"><span style={{color:'#848080'}}>Terms &amp; Conditions</span></a>
                    <a className="nav-item py-2 color-1" href="/pdf/privacy.pdf" target="_blank"><span style={{color:'#848080'}}>Privacy Policy</span></a>
      
                  </nav>
                </div>
                <div className="col-md-4">
                  <nav className="nav flex-column">
                    <a className="nav-item py-2 color-1" href="http://eraswaptoken.io/pdf/eraswap_whitepaper.pdf" target="_blank"><span style={{color:'#848080'}}>Era Swap white paper</span></a>
                    <a className="nav-item py-2 color-1" href="http://eraswaptoken.io/pdf/era-swap-howey-test-letter-august7-2018.pdf" target="_blank"><span style={{color:'#848080'}}>Howey Test</span></a>
                    <a className="nav-item py-2 color-1" href="http://eraswaptoken.io/pdf/es-statuary-warning.pdf" target="_blank"><span style={{color:'#848080'}}>Statuary Warning</span></a>
                    <a className="nav-item py-2 color-1" href="https://etherscan.io/address/0x42225682113E6Ed3616B36B4A72BbaE376041D7c#code" target="_blank"><span style={{color:'#848080'}}>BetDeEx DApp Smart Contract</span></a>
                    <a className="nav-item py-2 color-1" href="https://coinmarketcap.com/currencies/era-swap/" target="_blank"><span style={{color:'#848080'}}>CoinMarketCap</span></a>
                    <a className="nav-item py-2 color-1" href="https://ethplorer.io/address/0xef1344bdf80bef3ff4428d8becec3eea4a2cf574" target="_blank"><span style={{color:'#848080'}}>Ethplorer</span></a>
                  </nav>
                </div>

              </div>
              <hr className="mt-5 bg-2 op-5" />
              <div className="row small">
                <div className="col-md-4 text-left">
                  <p className="mt-2 mb-0">© {new Date().getFullYear()} BetDeEx. All Rights Reserved</p>
                </div>
                <div className="col-md-8 text-right">
                   
                      <ul class="social-menu">
                      <li><a href="https://www.facebook.com/eraswap" target="_blank"><i class="fa fa-facebook"></i></a></li>
                      <li><a href="https://www.linkedin.com/company/eraswap/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                      <li><a href="https://www.instagram.com/eraswap/?hl=en" target="_blank"><i class="fa fa-instagram"></i></a> </li>
                      <li><a href="https://twitter.com/EraSwapTech" target="_blank"><i class="fa fa-twitter"></i></a></li>
                      <li><a href="https://medium.com/@eraswap" target="_blank"><i class="fa fa-medium"></i></a></li>
                      <li><a href="https://eraswap.tumblr.com/" target="_blank"><i class="fa fa-tumblr"></i></a></li>
                      <li><a href="https://t.me/eraswap" target="_blank"><i class="fa fa-telegram"></i></a></li>
                      <li> <a href="https://github.com/KMPARDS" target="_blank"><i class="fa fa-github"></i></a></li>
                      <li><a href="https://www.reddit.com/user/EraSwap" target="_blank"><i class="fa fa-reddit"></i></a> </li>
                      <li><a href="https://www.youtube.com/channel/UCGCP4f5DF1W6sbCjS6y3T1g?view_as=subscriber" target="_blank"><i class="fa fa-youtube"></i></a></li>
                      </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
    </>
  );
}

export default Home;
