import Header from "../components/header";

export default function Home() {
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
                    <li><a href="#features">About</a></li>
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
        <section className="welcome-area" style={{marginTop: '5%'}}>
        <div className="welcome-content h-100">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 col-md-6">
              <div className="welcome-text" >
                <h1 data-animation="fadeInUp" data-delay="100ms" style={{ fontWeight: '501', color: '#388f80', 
                  animationDelay: '100ms'}}>Open Source, Customisable <br />  <span style={{color: '#000' }}>Compliance Management System</span></h1>
                {/* <h5 data-animation="fadeInUp" data-delay="400ms">We love to create "cool" things on Digital Platforms</h5> */}
              <br></br>
                <a href="http://efeone.com/" className="btn uza-btn btn-2" data-animation="fadeInUp" data-delay="700ms" style={{animationDelay: '700ms'}}>Start Exploring</a>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="welcome-thumbnail">
              <img src="./img/bg-img/3992745-removebg-preview-removebg-preview.png"  alt="" data-animation="slideInRight" data-delay="400ms" style={{animationDelay: '400ms'}} />                
              </div>
            </div>
          </div>
        </div>
      </div>
        </section>
        <section className="uza-about-us-area" id="why_compliance">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <div className="about-us-thumbnail mb-80">
                  {/* <img src="./img/bg-img/unnamed__1_-removebg-preview.png" alt="" /> */}
                  <div className="uza-video-area hi-icon-effect-8">
                    {/* <a href="https://www.youtube.com/watch?v=sSakBz_eYzQ" className="hi-icon video-play-btn"><i className="fa fa-play" aria-hidden="true" /></a> */}
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="about-us-content mb-80">
                  <h2>Why <span style={{color: '#388f80'}}>One Compliance</span>?</h2>
                  <p>"OneCompliance" is a compliance management software solution designed to help organisations efficiently handle their regulatory and legal compliance requirements. This app provides tools for managing compliance documents and tracking tasks related to compliance. It streamlines the process of ensuring that an organisation complies with various regulations and standards, making compliance management more straightforward and effective.
                  </p>
                  <a href="http://efeone.com/" className="btn uza-btn btn-2 mt-4">Start Exploring</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-bg-pattern">
            <img src="./img/core-img/curve-2.png" alt="" />
          </div>

        </section>
        <section id="features" className="section section-padding-top section-padding-bottom" data-section-template="Section with Cards" style={{margin:'4%'}}>
        <h1 style={{ fontWeight: '501',textAlign: 'center', color: "#388f80"}}> Features</h1>
        <div className="feature-section">
            <div className="feature-box">
              <h2 style={{ fontSize: '22px', fontWeight: '501'}}>Effortless Compliance Automation</h2>
              <p>Simplify complex compliance tasks with an automated system for precise regulatory adherence.</p>
            </div>
            <div className="feature-box">
              <h2 style={{ fontSize: '22px', fontWeight: '501'}}>Enhanced Document Security</h2>
              <p>Safeguard document integrity with robust digital signature management, ensuring authenticity and privacy.</p>            </div>
            <div className="feature-box">
              <h2 style={{ fontSize: '22px', fontWeight: '501'}}>Streamlined Document Tracking</h2>
              <p>Maintain an organised record of both incoming and outgoing documents for clear transparency.</p>   
           </div>
          </div>
          
          <div className="feature-section">
            <div className="feature-box">
              <h2 style={{ fontSize: '22px', fontWeight: '501'}}>Seamless HR and Payroll Integration:</h2>
              <p>Integrate HR and payroll functions effortlessly for efficient employee management and compliance-related HR operations.</p>
            </div>
            <div className="feature-box">
              <h2 style={{ fontSize: '22px', fontWeight: '501'}}>Client-Centric CRM</h2>
              <p> Strengthen client relationships through a customer-centric CRM module, focusing on improved customer satisfaction and loyalty.</p>            </div>
            <div className="feature-box">
            <h2 style={{ fontSize: '22px', fontWeight: '501'}}> Integrated Accounting</h2>
              <p> Manage finances with a seamlessly integrated accounting module, providing real-time financial insights and robust reporting capabilities.</p>
            </div>
          </div>

          <div className="feature-section">
            <div className="feature-box">
              <h2 style={{ fontSize: '22px', fontWeight: '501'}}>Project and Timesheet Efficiency</h2>
              <p> Monitor project progress and resource allocation with precision, ensuring task completion within deadlines.</p>
            </div>
            <div className="feature-box">
              <h2 style={{ fontSize: '22px', fontWeight: '501'}}>Insightful Dashboards</h2>
              <p>Access intuitive dashboards for a comprehensive view of compliance status, financial health, and project advancement.</p>            </div>
            <div className="feature-box">
            <h2 style={{ fontSize: '22px', fontWeight: '501'}}> Tailored Notifications</h2>
              <p>Customise automated email notifications to keep stakeholders informed, sending reminders before and after compliance deadlines for proactive action.</p>
            </div>
          </div>

          <div className="feature-section">
            <div className="feature-box">
              <h2 style={{ fontSize: '22px', fontWeight: '501'}}>User-Based Role and Permissions</h2>
              <p> Define specific user roles and permissions, ensuring secure access and control over system functionalities based on designated roles within the organisation.</p>
            </div>
            <div className="feature-box">
              <h2 style={{ fontSize: '22px', fontWeight: '501'}}>Automatic Invoice Generation on Project Completion</h2>
              <p>Automate the process of generating invoices upon project completion, streamlining financial transactions and ensuring accuracy in billing procedures.</p>           
             </div>
              <div className="feature-box">
              <h2 style={{ fontSize: '22px', fontWeight: '501'}}></h2>
              {/* <p>Automate the process of generating invoices upon project completion, streamlining financial transacti
                ons and ensuring accuracy in billing procedures.</p>            */}
                 </div>
              
          </div>
        </section>


         <section className="welcome-area">
          <div className="welcome-slides owl-carousel">
            <div className="single-welcome-slide">
              <div className="background-curve">
                <img src="./img/core-img/curve-1.png" alt="" />
              </div>
              <div className="welcome-content h-100">
                <div className="container h-100">
                  <div className="row h-100 align-items-center">
                    <div className="col-12 col-md-6">
                      <div className="welcome-text">
                        <h2 data-animation="fadeInUp" data-delay="100ms">Open Source, Customisable <br />  <span>Health Information System</span></h2>
                        <a href="http://efeone.com/" className="btn uza-btn btn-2" data-animation="fadeInUp" data-delay="700ms">Start Exploring</a>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="welcome-thumbnail">
                        <img src="./img/bg-img/1.png" alt="" data-animation="slideInRight" data-delay="400ms" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
       
          </div>
        </section>
        
        {/* <section className="uza-blog-area">
          <div className="blog-bg-curve">
            <img src="./img/core-img/curve-4.png" alt="" />
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="single-blog-post bg-img mb-80">
                  <div className="post-content">
                    <img src="/img/bg-img/image (1).png" alt="" />                         
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="single-blog-post bg-img mb-80">
                  <div className="post-content">
                    <img src="/img/bg-img/image (2).png" alt="" />                         
                  </div>
                </div>
              </div>
            </div>  
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="single-blog-post bg-img mb-80">
                  <div className="post-content">
                    <img src="/img/bg-img/image (1).png" alt="" />                         
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="single-blog-post bg-img mb-80">
                  <div className="post-content">
                    <img src="/img/bg-img/image (2).png" alt="" />                         
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </section> */}
        {/* <section className="testimonial text-center" id="testimonial_list">
        <div className="container">
          <div id="testimonial4" className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval={5000} data-duration={2000}>
            <div className="carousel-inner" role="listbox">

              <div className="carousel-item active">
                <div className="testimonial4_slide">
                  <img src="https://i.ibb.co/8x9xK4H/team.jpg" className="img-circle img-responsive" />
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                  <h4>Client 1</h4>
                </div>
              </div>
              <div className="carousel-item">
                <div className="testimonial4_slide">
                  <img src="https://i.ibb.co/8x9xK4H/team.jpg" className="img-circle img-responsive" /><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                  <h4>Client 2</h4>
                </div>
              </div>
              <div className="carousel-item">
                <div className="testimonial4_slide">
                  <img src="https://i.ibb.co/8x9xK4H/team.jpg" className="img-circle img-responsive" />
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                  <h4>Client 3</h4>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#testimonial4" data-slide="prev">
              <span className="carousel-control-prev-icon" />
            </a>
            <a className="carousel-control-next" href="#testimonial4" data-slide="next">
              <span className="carousel-control-next-icon" />
            </a>
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