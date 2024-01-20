import Header from "../components/header";
 
export default function Pricing() {
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
        
      </div>
      <div className="container">
        <h4 className="badge">Pricing Plans</h4>
        <h1 className="heading-section">Choose Your Best Pricing Plan</h1>
        <div className="card_group">
          <div className="pricing-card">
            
            <span>Basic</span>
            <h4 className="price"> INR 1,99,999</h4>
            <ul className="package_list">
              <li>Multi Company- INR 60,000 per Company</li>
              <li>Customisation - INR 1000 - 1500 per hour </li>
              <li>Additional Modules - 30,000 per Modules</li>
              <li>24/7 Support</li>
            </ul>
            <ol>
            <h5 className="badge">Modules</h5>
              <li>* Accounts</li>
              <li>* CRM</li>
              <li>* Sales</li>
              <li>* Compliance Operation</li>
              <li>* Inward/Outward Register</li>
              <li>* Digital Signature</li>
              <li>* Inventory and Purchase </li>
              <li>* Assets</li>
              <li>* Project Management</li>
              <li>* HRMS and Payroll</li>
              <li>* Basic customisation ( Max 10 Hours)</li>
            </ol>

            <a href="#dk-footer" className="get_started_btn">Contact us</a>
          </div>
          <div className="pricing-card">
          
            <span>Basic +  Website</span>
            <h4 className="price"> INR  2,49,999</h4>
            <ul className="package_list">
            <li>Multi Company- INR 60,000 per Company</li>
              <li>Customisation - INR 1000 - 1500 per hour </li>
              <li>Additional Modules - 30,000 per Modules</li>
              <li>24/7 Support</li>
            </ul>
            <ol>
            <h5 className="badge">Modules</h5>
              <li>* Accounts</li>
              <li>* CRM</li>
              <li>* Sales</li>
              <li>* Compliance Operation</li>
              <li>* Inward/Outward Register</li>
              <li>* Digital Signature</li>
              <li>* Inventory and Purchase </li>
              <li>* Assets</li>
              <li>* Project Management</li>
              <li>* HRMS and Payroll</li>
              <li>* Basic customisation ( Max 10 Hours)</li>
            </ol>
            <a href="#dk-footer" className="get_started_btn">Contact us</a>
          </div>
          
        </div>
        <div className="pricing-card" style={{height:"300px"}}>
            
            <span>Enterprise</span>
            <h4 className="price"></h4>
            <ul className="package_list">
            <li>Multi Company- INR 60,000 per Company</li>
              <li>Customisation - INR 1000 - 1500 per hour </li>
              <li>Additional Modules - 30,000 per Modules</li>
              <li>24/7 Support</li>
            </ul>
  
            <a href="#dk-footer" className="get_started_btn">Contact us</a>
          </div>
      </div>

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