import Header from "../components/header";
 
export default function Docs() {
    return(
        <>
             <Header />
             <div id="preloader">
          <div className="wrapper">
            <div className="cssload-loader" />
          </div>
        </div>
        <div className="top-search-area">
          <div className="modal fade" id="searchModal" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <button type="button" className="btn close-btn" data-dismiss="modal"><i className="fa fa-times" /></button>
                  <form action="index.html" method="post">
                    <input type="search" name="top-search-bar" className="form-control" placeholder="Search and hit enter..." />
                    <button type="submit">Search</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* -------------------------
            * Header Section *
          ------------------------- */}
      <header className="header-area">
        <div className="main-header-area">
          <div className="classy-nav-container breakpoint-off">
            <nav className="classy-navbar justify-content-between" id="uzaNav">
              <a className="nav-brand" href="index.html"><img src="./img/bg-img/logo_remove_bg.png" alt="" style={{width: '46%'}} /></a>
              <div className="classy-navbar-toggler">
                <span className="navbarToggler"><span /><span /><span /></span>
              </div>
              <div className="classy-menu">
                <div className="classycloseIcon">
                  <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
                </div>
                <div className="classynav">
                  <ul id="nav"  style={{width: '23pc'}}>
                    <li><a href="/index">About</a></li>
                    <li><a href='/pricing'>Pricing</a></li>
                    <li><a href='/doc'>Doc</a></li>
                    <li><a href='#dk-footer'>Contact Us</a></li>
                  </ul>
                  <div className="get-a-quote ml-4 mr-3" style={{width: '10%'}}>
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                    <img src="./img/bg-img/GitHub-Mark-ea2971cee799" alt="" ></img>
                    {/* <a href="https://github.com/efeone/one_compliance" >&nbsp; </a> */}
                  </div>
                </div>
              </div>
              
            </nav>
          </div>
        </div>
      </header>


      <div className="lil-pt-12 lil-pb-24 hero-parent sm:lil-pb-8 sm:lil-pt-8 md:lil-pb-16" style={{color: '#388f80', marginTop: '6pc'}}>
        <section className="lil-container lil-text-center" style={{maxWidth: 'fit-content'}}>
          <h1 className="lil-pt-8 lil-mt-1 lil-pb-6 lil-text-s-56 sm:lil-text-s-36 sm:lil-text-left sm:lil-w-3/4 md:lil-text-s-40" style={{  fontWeight: 'bold'}}>
          <span style={{color: 'rgba(0, 0, 0, 0.76)'}}>Documentation and User Guide</span>
          </h1>
          <p className="lil-pb-12 sm:lil-pb-6 lil-mb-6 sm:lil-mb-3 sm:lil-pb-14 lil-text-base sm:lil-text-left">
            Tax and financial services software platform
          </p>
          <button style={{color: 'white', backgroundColor: '#388f80', borderRadius:'10px' }}>
                <a style={{textDecoration: 'none'}} target="_blank" href="./key_features" className="lil-btn lil-text-white lil-w-full lil-rounded-md" onclick="handleTrack({label: 'hero-button MaxITC', obj: this })">Get started</a>
              </button>
              <br/>
              <br/>
          <div className="lil-flex sm:lil-flex-col lil-pt-8 lil-justify-between hero-product-cards">
            <div className="lil-px-6 lil-py-6 lil-relative sm:lil-w-full lil-flex lil-flex-col lil-justify-between card3 lil-w-1/3 lil-rounded-xxl">
              <img src="https://assets.clear.in/cleartax/images/1695378348_icon2.png" alt="" width={60} className="lil-ml-auto lil-mr-auto lil-absolute" style={{left: 0, right: 0, margin: 'auto', top: '-30px'}} />
              <div className>
                <h3 className="lil-text-s-32 lil-font-bold lil-pt-6 non-hover">
                Open Source
                </h3>
                <p className="lil-pt-4 lil-text-base  lil-mx-auto non-hover">
                  Increase Accuracy, Efficiency, Productivity
                </p>
              </div>
              <p className="on-hover grey-text lil-text-base lil-mt-auto lil-absolute lil-w-full lil-px-6 md:lil-px-0 md:lil-pt-6">
                A new model of ITC management that helps businesses with high purchase complexity to increase efficiency of their working capital
              </p>
              {/* <button style={{color: 'white', backgroundColor: '#388f80', borderRadius:'10px' }}>
                <a target="_blank" className="lil-btn lil-text-white lil-w-full lil-rounded-md" onclick="handleTrack({label: 'hero-button MaxITC', obj: this })">See product</a>
              </button> */}
            </div>
            <div className="lil-px-6 lil-py-6 lil-relative sm:lil-w-full lil-flex lil-flex-col lil-justify-between card2 lil-w-1/3 lil-rounded-xxl">
              <img src="https://assets.clear.in/cleartax/images/1695378321_group1814218634.png" alt="" width={60} className="lil-ml-auto lil-mr-auto lil-absolute" style={{left: 0, right: 0, margin: 'auto', top: '-30px'}} />
              <div className>
                <h3 className="lil-text-s-32 lil-font-bold lil-pt-6 non-hover">
                  Enterprise
                </h3>
                <p className="lil-pt-4 lil-text-base lg:lil-w-9/12 xl:lil-w-9/12 lil-mx-auto non-hover">
                  GST, E-Invoicing, Secretarial compliance &amp; more
                </p>
              </div>
              <p className="on-hover grey-text lil-text-base lil-mt-auto lil-absolute lil-w-full lil-px-6 md:lil-px-0 md:lil-pt-6">
                Our connected finance ecosystem is enabling new paths to efficiency and profitability while ensuring 100% compliance.
              </p>
              {/* <button style={{color: 'white', backgroundColor: '#388f80', borderRadius:'10px' }}>
                <a target="_blank" className="lil-btn lil-text-white lil-w-full lil-rounded-md" onclick="handleTrack({label: 'hero-button MaxITC', obj: this })">See product</a>
              </button> */}
            </div>
            <div className="lil-px-6 lil-py-6 lil-relative sm:lil-w-full lil-flex lil-flex-col lil-justify-between card1 lil-w-1/3 lil-rounded-xxl">
              <img src="https://assets.clear.in/cleartax/images/1695366152_group1814217655.png" alt="" width={60} className="lil-ml-auto lil-mr-auto lil-absolute" style={{left: 0, right: 0, margin: 'auto', top: '-30px'}} />
              <div className>
                <h3 className="lil-text-s-32 lil-font-bold lil-pt-6 non-hover">
                  File ITR
                </h3>
                <p className="lil-pt-4 lil-text-base  lil-mx-auto non-hover">
                  Responding to tax notices and revised/belated filing made easy
                </p>
              </div>
              <p className="on-hover grey-text lil-text-base lil-mt-auto lil-absolute lil-w-full lil-px-6 md:lil-px-0 md:lil-pt-6">
                Act promptly on missed tax deadlines – Revise your filing, file belated returns and even respond to received notices with ease.
              </p>
              {/* <button style={{color: 'white', backgroundColor: '#388f80', borderRadius:'10px' }}>
                <a target="_blank" className="lil-btn lil-text-white lil-w-full lil-rounded-md" onclick="handleTrack({label: 'hero-button MaxITC', obj: this })">See product</a>
              </button> */}
            </div>
            
          </div>
        </section>
      </div>
    
        {/* <section className="section section-padding-top section-padding-bottom" data-section-idx={4} data-section-template="FH Section With Tab Buttons">
          <div className="container">
            <div className="mt-12" style={{marginTop: '80px', justifyContent: 'safe center', display: 'flex', flexDirection: 'column'}}>
              <ul aria-label="Key Benefits" className="nav" role="tablist" style={{textAlign: 'center !important', marginLeft: 'auto', marginRight: 'auto'}}>
                <li className="nav-item btn-grp" style={{textAlign: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
                  <a aria-controls="id-e441fdc87a20" aria-selected="true" className="nav-link fh-tab-button active" data-toggle="tab" href="#id-e441fdc87a20" id="id-e0fb4d3f900d" role="tab" style={{border: '1px solid #DCE0E3', margin: '0px', padding: '10px', borderRadius: '.5rem 0rem 0rem .5rem'}}>
                    Compliance Category
                  </a>
                </li>
                <li className="nav-item btn-grp" style={{textAlign: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
                  <a aria-controls="id-84adcc65ca63" aria-selected="false" className="nav-link fh-tab-button" data-toggle="tab" href="#id-84adcc65ca63" id="id-8db7747ab5c4" role="tab" style={{border: '1px solid #DCE0E3', margin: '0px', padding: '10px'}}>
                    Compliance Sub Category
                  </a>
                </li>
              </ul>
              <div className="col-sm-12 mt-6 tab-content text-center" style={{textAlign: 'center !important', marginLeft: 'auto', marginRight: 'auto' , marginTop: '40px'}}><div aria-labelledby="id-e0fb4d3f900d" className="tab-pane fade active show focus" id="id-e441fdc87a20" role="tabpanel" style={{paddingRight: '10px', paddingLeft: '40px'}}>
                  <div className="form-markdown text-center" style={{float: 'center'}}><div className="col-sm-6 fh-content-panel" style={{float: 'left', textAlign: 'left', overflowWrap: 'break-word', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', borderRadius: '10px', padding: '10px', margin: '0px'}}>
                      <p style={{fontWeight: 600, fontSize: '18px', lineHeight: '120%', color: '#388f80',}}>
                        Compliance Category
                      </p>
                      <p style={{fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#505A62'}}>
                        This field represents the name or title of the compliance category. It's where you specify the type of compliance or regulatory requirement that this category encompasses.</p>
                    </div><div className="col-sm-6 fh-content-panel" style={{float: 'left', textAlign: 'left', overflowWrap: 'break-word', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', borderRadius: '10px', padding: '10px', margin: '0px'}}>
                      <p style={{fontWeight: 600, fontSize: '18px', lineHeight: '120%', color: '#388f80'}}>
                        Department
                      </p>
                      <p style={{fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#505A62'}}>
                        This field is used to associate compliance categories with a specific department or business unit within your organisation. It helps in organising and assigning responsibilities based on departments.</p>
                    </div><div className="col-sm-6 fh-content-panel" style={{float: 'left', textAlign: 'left', overflowWrap: 'break-word', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', borderRadius: '10px', padding: '10px', margin: '0px'}}>
                      <p style={{fontWeight: 600, fontSize: '18px', lineHeight: '120%', color: '#388f80'}}>
                        Category Type
                      </p>
                      <p style={{fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#505A62'}}>
                        The category type is further classification or tag associated with the compliance category. It could indicate the nature or focus of the compliance category. </p>
                    </div><div className="col-sm-6 fh-content-panel" style={{float: 'left', textAlign: 'left', overflowWrap: 'break-word', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', borderRadius: '10px', padding: '10px', margin: '0px'}}>
                      <p style={{fontWeight: 600, fontSize: '18px', lineHeight: '120%', color: '#388f80'}}>
                        Head Of Department
                      </p>
                      <p style={{fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#505A62'}}>
                        This field is used to specify the individual who is responsible for overseeing the compliance efforts within this category. This person typically holds a leadership role within the associated department.</p>
                    </div><div className="col-sm-6 fh-content-panel" style={{float: 'left', textAlign: 'left', overflowWrap: 'break-word', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', borderRadius: '10px', padding: '10px', margin: '0px'}}>
                      <p style={{fontWeight: 600, fontSize: '18px', lineHeight: '120%', color: '#388f80'}}>
                        Compliance Executive
                      </p>
                      <p style={{fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#505A62'}}>
                        Similar to the "Head of Department," this field designates the persons responsible for executing and managing compliance tasks and activities within the compliance category.                              </p>
                    </div>
                  </div>
                </div><div aria-labelledby="id-8db7747ab5c4" className="tab-pane fade" id="id-84adcc65ca63" role="tabpanel" style={{paddingRight: '10px', paddingLeft: '40px'}}>
                  <div className="form-markdown text-center" style={{float: 'center'}}><div className="col-sm-6 fh-content-panel" style={{float: 'left', textAlign: 'left', overflowWrap: 'break-word', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', borderRadius: '10px', padding: '10px', margin: '0px'}}>
                      <p style={{fontWeight: 600, fontSize: '18px', lineHeight: '120%', color: '#388f80'}}>
                        Compliance Category
                      </p>
                      <p style={{fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#505A62'}}>
                        This field represents the parent compliance category to which this sub-category belongs. It helps in organising and categorising sub-categories under specific compliance areas. </p>
                    </div><div className="col-sm-6 fh-content-panel" style={{float: 'left', textAlign: 'left', overflowWrap: 'break-word', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', borderRadius: '10px', padding: '10px', margin: '0px'}}>
                      <p style={{fontWeight: 600, fontSize: '18px', lineHeight: '120%', color: '#388f80'}}>
                        Sub Category</p>
                      <p style={{fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#505A62'}}>
                        This field specifies the name or title of the compliance sub-category. It defines a more specific focus or aspect of compliance within the parent category.</p>
                    </div><div className="col-sm-6 fh-content-panel" style={{float: 'left', textAlign: 'left', overflowWrap: 'break-word', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', borderRadius: '10px', padding: '10px', margin: '0px'}}>
                      <p style={{fontWeight: 600, fontSize: '18px', lineHeight: '120%', color: '#388f80'}}>
                        Allow Repeat
                      </p>
                      <p style={{fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#505A62'}}>
                        This checkbox option indicates whether or not the compliance sub-category allows for repeated or recurring compliance activities. If checked, it means that compliance tasks within this sub-category can be repeated or scheduled at regular intervals.</p>
                    </div><div className="col-sm-6 fh-content-panel" style={{float: 'left', textAlign: 'left', overflowWrap: 'break-word', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', borderRadius: '10px', padding: '10px', margin: '0px'}}>
                      <p style={{fontWeight: 600, fontSize: '18px', lineHeight: '120%', color: '#388f80'}}>
                        Enabled
                      </p>
                      <p style={{fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#505A62'}}>
                        This checkbox determines whether the compliance sub-category is currently active and available for use. Checking this box typically means that the sub-category is enabled, while unchecking it may disable the sub-category temporarily.</p>
                    </div>
                    <div className="col-sm-6 fh-content-panel" style={{float: 'left', textAlign: 'left', overflowWrap: 'break-word', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', borderRadius: '10px', padding: '10px', margin: '0px'}}>
                      <p style={{fontWeight: 600, fontSize: '18px', lineHeight: '120%', color: '#388f80'}}>
                        Is Billable
                      </p>
                      <p style={{fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#505A62'}}>
                        This checkbox signifies whether compliance activities or services associated with this sub-category are billable. If checked, it implies that clients or internal departments may be charged for compliance work within this sub-category. </p>
                    </div>
                    <div className="col-sm-6 fh-content-panel" style={{float: 'left', textAlign: 'left', overflowWrap: 'break-word', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', borderRadius: '10px', padding: '10px', margin: '0px'}}>
                      <p style={{fontWeight: 600, fontSize: '18px', lineHeight: '120%', color: '#388f80'}}>
                        Rate
                      </p>
                      <p style={{fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#505A62'}}>
                        This field is relevant when the "Is Billable" checkbox is checked. It allows you to specify the billing rate or cost associated with compliance activities in this sub-category. The rate might be specified per hour, per task, or per project, depending on your billing structure.
                      </p>
                    </div>
                    <div className="col-sm-6 fh-content-panel" style={{float: 'left', textAlign: 'left', overflowWrap: 'break-word', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', borderRadius: '10px', padding: '10px', margin: '0px'}}>
                      <p style={{fontWeight: 600, fontSize: '18px', lineHeight: '120%', color: '#388f80'}}>
                        Category Type
                      </p>
                      <p style={{fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#505A62'}}>
                        The category type field provides an additional classification or tag associated with the compliance sub-category. It can further describe the nature or focus of the sub-category, offering more detailed information about the type of compliance it represents.                          </p>
                    </div>
                    <div className="col-sm-6 fh-content-panel" style={{float: 'left', textAlign: 'left', overflowWrap: 'break-word', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', borderRadius: '10px', padding: '10px', margin: '0px'}}>
                      <p style={{fontWeight: 600, fontSize: '18px', lineHeight: '120%', color: '#388f80'}}>
                        Department
                      </p>
                      <p style={{fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#505A62'}}>
                        This field allows you to associate the compliance sub-category with a specific department or business unit within your organisation. It helps in organising and assigning responsibilities for compliance activities related to this subcategory based on departments.
                      </p>
                    </div>
                    <div className="col-sm-6 fh-content-panel" style={{float: 'left', textAlign: 'left', overflowWrap: 'break-word', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', borderRadius: '10px', padding: '10px', margin: '0px'}}>
                      <p style={{fontWeight: 600, fontSize: '18px', lineHeight: '120%', color: '#388f80'}}>
                        Head Of Department
                      </p>
                      <p style={{fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#505A62'}}>
                        This field is likely used to specify the individual who holds a leadership role within the associated department and is responsible for overseeing compliance efforts within this sub-category.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </section> */}

          <hr></hr>
          <footer id="dk-footer" className="dk-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="dk-footer-box-info">
                  <img src="./img/bg-img/footer_logo" alt="" className="img-fluid" />
                
                <p className="footer-info-text">
                  Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                </p>
                <div className="footer-social-link">
                  <h3>Follow us</h3>
                  <ul>
                    <li>
                      <a href="https://www.instagram.com/efeone.social/">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/efeone.social/">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/efeone.social/">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/efeone/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/efeone.social/">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-awarad">
                <img src="images/icon/best.png" alt="" />
                <p>Best Design Company 2023</p>
              </div>
            </div>
            <div className="col-md-14 col-lg-8">
              <div className="row">
                <div className="col-md-9">
                  <div className="contact-us">
                    <div className="contact-icon">
                      <i className="fa fa-map-o" aria-hidden="true" />
                    </div>
                    <div className="contact-info">
                      <p>No. 3/403 C, Carino INC, Pooladikkunnu Eranhikkal, Kozhikode - 673303 Kerala, India </p>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <div className="footer-widget footer-left-widget">
                    <div className="section-heading">
                      <h3>Useful Links</h3>
                      <span className="animate-border border-black" />
                    </div>
                    <ul>
                      <li>
                        <a href="#features">About us</a>
                      </li>
                      <li>
                        <a href="#docs">Doc</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#blog">Blog</a>
                      </li>
                      <li>
                        <a href="#test">Testimonials</a>
                      </li>
                      
                    </ul>
                  </div>
                </div>
                {/* End col */}
                <div className="col-md-12 col-lg-6">
                  <div className="footer-widget">
                    
                    
                  <div className="contact-us contact-us-last">
                    <div className="contact-icon">
                      <i className="fa fa-volume-control-phone" aria-hidden="true" />
                    </div>
                    <div className="contact-info">
                      {/* <h3>95 711 9 5353</h3> */}
                      <p>9400091868<br/>8086833868</p>
                    </div>
                  </div>
             
                    <form action="#">
                      <div className="form-row">
                        <div className="col dk-footer-form">
                          <input type="email" className="form-control" placeholder="Email Address" />
                          <button type="submit">
                            <i className="fa fa-send" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <span>Copyright © 2023, All Right Reserved efeone</span>
                  </div>
                  {/* End Col */}
                  
                </div>
              </div>
            </div>
        {/* End Back to top */}
      </footer>


        </>
        
    )
}