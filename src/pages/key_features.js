import React, { useState } from "react";
import Header from "../components/header";

const KeyFeatures = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({
    introduction: false,
    key_features: false,
    // Add more dropdowns as needed
  });

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdownName) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  return (
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
              <a className="nav-brand" href="/index"><img src="./img/bg-img/logo_remove_bg.png" alt="" style={{width: '46%'}} /></a>
              <div className="classy-navbar-toggler">
                <span className="navbarToggler"><span /><span /><span /></span>
              </div>
              <div className="classy-menu">
                <div className="classycloseIcon">
                  <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
                </div>
                <div className="classynav">
                  <ul id="nav"  style={{width: '23pc'}}>
                    <li><a href='/index'>About</a></li>
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
      <br />
      <br />
      <br />

      <>
      
      <div className="row">
        <div>
          <div className={`sidebar ${isMenuOpen ? "close" : ""}`}>
            <div className="logo-details">
            
              <span className="logo_name"></span>
            </div>
            <ul className="nav-links">
              <li>
                <a href="#">
                  <i className="bx bx-grid-alt" />
                  <span className="link_name">Getting Started</span>
                </a>
                <ul className="sub-menu blank">
                  <li>
                    <a className="link_name" href='#'>
                      Introduction
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <div className="iocn-link">
                  <a href="#introduction">
                    <i className="bx bx-collection" />
                    <span className="link_name">Introduction</span>
                  </a>
                </div>
                <ul className="sub-menu">
                  <li>
                    <a className="link_name" href='#introduction'>
                    Introduction
                    </a>
                  </li>
                </ul>
              </li>
              <li className={`${dropdownStates.key_features ? "showMenu" : ""}`}>
                <div className="iocn-link" onClick={() => toggleDropdown("key_features")}>
                  
                  <a href='#key_features'>
                    <i className="bx bx-book-alt" />
                    <span className="link_name">Key Features</span>
                  </a>
                  <i className="bx bxs-chevron-down arrow" />
                </div>
                <ul className="sub-menu">
                  <li>
                    <a className="link_name" href="#key_features">
                    Key Features
                    </a>
                  </li>
                  <li>
                    <a href="#compliance_category">Compliance Category</a>
                  </li>
                  <li>
                    <a href="#compliance_sub_category">Compliance Sub Category</a>
                  </li>
                  <li>
                    <a href="#project_template">Project Template</a>
                  </li>
                  <li>
                    <a href="#compliance_agreement">Compliance Agreement</a>
                  </li>
                  <li>
                    <a href="#inward_register">Inward Register</a>
                  </li>
                  <li>
                    <a href="#outward_register">Outward Register</a>
                  </li>
                  <li>
                    <a href="#project">Project</a>
                  </li>
                  <li>
                    <a href="#digital_signature">Digital Signature</a>
                  </li>
                  <li>
                    <a href="#task_assigning_tool">Task Assigning Tool</a>
                  </li>
                </ul>
              </li>
              
              
            </ul>
          </div>
        </div>
        <div>
          <section className="home-section">
            
            {/* <div className="home-content">
              <i className="bx bx-menu" onClick={toggleMenu} />
            </div> */}
           <section id="one_compliance">
            <div className="contents" style={{fontSize:'1.2rem', lineHeight:'1.5'}}>
              <h1 className="one_compliance" style={{fontWeight:'501'}}> One Compliance </h1>
              <h6 style={{fontSize:'1.2rem', lineHeight:'1.5'}}>"OneCompliance" as the name suggests, is a compliance management software solution designed to assist organisations in effectively managing their legal and regulatory compliance requirements. This app provides tools for managing compliance documents and tracking associated tasks. The design simplifies the procedure for guaranteeing an organisation's adherence to multiple regulations and standards, rendering compliance management more uncomplicated and efficient.
              </h6>
            </div>
          </section>
          <br/>
          <section id="introduction" >
            <div className="contents" style={{fontSize:'1.2rem', lineHeight:'1.5'}}>
              <h1 className="introduction"  id="introduction" style={{fontWeight:'501'}}> Introduction</h1>
              <h6 style={{fontSize:'1.2rem', lineHeight:'1.5'}}>Navigating the intricate maze of compliance requirements has never been easier. Welcome to One Compliance, your ultimate solution for seamless compliance management. In an era of constantly evolving regulations and stringent standards, One Compliance empowers businesses of all sizes to stay on the right side of the law while simplifying the compliance journey.<br/><br/>
                Our comprehensive software is not just an app; it's your dedicated compliance partner. With robust features for document management, task tracking, and real-time communication, OneCompliance is your one-stop destination for achieving and maintaining compliance effortlessly. We understand that compliance can be complex, but our platform equips your team with the tools and resources needed to reduce risk, ensure transparency, and allow you to concentrate on what truly matters: achieving your business goals. <br/>
                <br/> Discover how One Compliance can revolutionise your approach to compliance and be your trusted ally in the pursuit of regulatory excellence.
              </h6>
           </div>
          </section> 
          <section id="key_features">
            <div className="key_features" style={{  fontSize: '1.2rem', lineHeight: '1.5' }}>
              <h1 style={{fontWeight:'501'}}> Key Features</h1>
              <ul style={{ fontSize: '1.2rem', lineHeight: '1.8', margin: '26px' }}>
                <li style={{listStyle: 'disclosure-closed'}}> <b>User Roles:</b> Supports various user roles, including Director, Compliance Manager, Head of Department, Senior Manager,      Manager, and Executive, each with specific access and responsibilities.</li>
                <li style={{listStyle: 'disclosure-closed'}}> <b>Master Documents:</b> Document categories for managing critical information, such as Customers, Compliance Categories, Compliance Subcategories, Project Templates, and Tasks.</li>
                <li style={{listStyle: 'disclosure-closed'}}> <b>Compliance Documents:</b> This section is dedicated to managing compliance-related documents, including Compliance Agreements, Inward and Outward Registers, Digital Signatures, Customer Credentials, Customer Documents, and Compliance Settings.</li>
                <li style={{listStyle: 'disclosure-closed'}}> <b>Module Profiles:</b> Users can be set to have module profiles, which dictate their access and privileges within the system.</li>
                <li style={{listStyle: 'disclosure-closed'}}> <b>Role & Role Profiles:</b> Various roles and role profiles, such as Super Admin, Director, Head of Department, Senior Manager, Manager, and Executive, each with specific responsibilities, access and permissions.</li>
                <li style={{listStyle: 'disclosure-closed'}}> <b>Workflow Management (Super Admin):</b> The Super Admin can create and manage master data in different documents, including employees, departments, compliance categories, and subcategories. It allows for streamlined data creation and organization.</li>
                <li style={{listStyle: 'disclosure-closed'}}> <b>Compliance Category and Subcategory:</b> A structured approach to categorizing compliance, allowing you to define different types of taxes, such as GST, Income Tax, and TDS to the respective projects. You can create subcategories for monthly, quarterly, and half-yearly compliance tasks.</li>
                <li style={{listStyle: 'disclosure-closed'}}> <b>Project Templates:</b> Project templates can be created based on compliance subcategories. Tasks can then be generated from these templates, including the assignment of employees and employee groups.</li>
                <li style={{listStyle: 'disclosure-closed'}}> <b>Task Management:</b> While creating tasks, users can define task durations and set templates, enabling the automatic generation and assignment of tasks based on specified durations.</li>
                <li style={{listStyle: 'disclosure-closed'}}> <b>Compliance Agreement (Director/Compliance Manager): </b>This feature enables the creation of compliance agreements, including customer selection, invoice generation based on project completion, consolidation of invoices for multiple projects, and setting valid timeframes.</li>
                <li style={{listStyle: 'disclosure-closed'}}> <b>Departmental Management (Head of Department and Senior Manager):</b> Users with these roles can create new projects and tasks, assign them to Managers and Executives, and access detailed project information.</li>
                <li style={{listStyle: 'disclosure-closed'}}> <b>Manager and Executive Tools:</b> Managers and Executives can view task durations, monitor task statuses, access required credentials and documents, and manage open and pending tasks within their workspace.</li>
              </ul>
            </div>
          </section>
          <section id="compliance_category">
            <div className="compliance_category"  style={{  fontSize: '1.2rem', lineHeight: '1.5' }}>
            <h3 style={{fontWeight:'501'}}> Compliance Category</h3>
            <ul style={{ fontSize: '1.2rem', lineHeight: '1.8', margin: '26px' }}>
                <li style={{listStyle: 'unset'}}> <b>Compliance Category:</b> Represents the name (ID) or title of the compliance category. It's where you specify the type of compliance or regulatory requirement that this category encompasses.</li>
                <li style={{listStyle: 'unset'}}> <b>Department:</b> Associate compliance categories with a specific department or business unit within your organisation. It helps in organising and assigning responsibilities based on departments.</li>
                <li style={{listStyle: 'unset'}}> <b>Category Type:</b> The category type is further classification or tag associated with the compliance category. It could indicate the nature or focus of the compliance category.</li>
                <li style={{listStyle: 'unset'}}> <b>Head Of Department:</b> Specify the individual who is responsible for overseeing the compliance efforts within this category. This person typically holds a leadership role within the associated department.</li>
                <li style={{listStyle: 'unset'}}> <b>Compliance Executive:</b> Similar to the "Head of Department," designates the persons responsible for executing and managing compliance tasks and activities within the compliance category.</li>
              </ul>
              <img src="./img/bg-img/compliance category -img.png" alt="" style={{width: '86%',margin: '40px', border: '1px solid #d5dddd', borderRadius: '10px'}}></img>
            </div>
          </section>
           
          <section id="compliance_sub_category">
            <div className="compliance_sub_category"  style={{  fontSize: '1.2rem', lineHeight: '1.5' }}>
            <h3 style={{fontWeight:'501'}}>Compliance Sub Category</h3>
            <ul style={{ fontSize: '1.2rem', lineHeight: '1.8', margin: '26px' }}>
                <li style={{listStyle: 'unset'}}> <b>Compliance Category:</b> The parent compliance category to which this sub-category belongs. It helps in organising and categorising sub-categories under specific compliance areas.</li>
                <li style={{listStyle: 'unset'}}> <b>Sub Category:</b> Name or title of the compliance sub-category. It defines a more specific focus or aspect of compliance within the parent category.</li>
                <li style={{listStyle: 'unset'}}> <b>Allow Repeat:</b>  This checkbox indicates whether or not the compliance sub-category allows for repeated or recurring compliance activities. If checked, it means that compliance tasks within this sub-category can be repeated or scheduled at regular intervals.</li>
                <li style={{listStyle: 'unset'}}> <b>Enabled:</b> This checkbox determines whether the compliance sub-category is currently active and available for use. Checking this box typically means that the sub-category is enabled, while unchecking it may disable the sub-category temporarily.</li>
                <li style={{listStyle: 'unset'}}> <b>Is Billable:</b> This checkbox signifies whether compliance activities or services associated with this sub-category are billable. If checked, it implies that clients or internal departments may be charged for compliance work within this sub-category.</li>
                <li style={{listStyle: 'unset'}}> <b>Rate:</b> This field is relevant when the "Is Billable" checkbox is checked. It allows you to specify the billing rate or cost associated with compliance activities in this sub-category. The rate might be specified per hour, per task, or per project, depending on your billing structure.</li>
                <li style={{listStyle: 'unset'}}> <b>Category Type: </b> The category type field provides an additional classification or tag associated with the compliance sub-category. It can further describe the nature or focus of the sub-category, offering more detailed information about the type of compliance it represents.</li>
                <li style={{listStyle: 'unset'}}> <b>Department:</b> This field allows you to associate the compliance sub-category with a specific department or business unit within your organisation. It helps in organising and assigning responsibilities for compliance activities related to this subcategory based on departments.</li>
                <li style={{listStyle: 'unset'}}> <b>Head Of Department:</b>  This field is likely used to specify the individual who holds a leadership role within the associated department and is responsible for overseeing compliance efforts within this sub-category.</li>
                <li style={{listStyle: 'unset'}}> <b>Compliance Executive:</b>Similar to the "Head of Department" field, this field designates the person responsible for executing and managing compliance tasks and activities specifically within the compliance sub-category. The compliance executive typically plays a key role in ensuring compliance within this narrower focus area.</li>
                <li style={{listStyle: 'unset'}}> <b>Task Before Due Date Notification:</b>This field allows you to configure notifications that are sent to relevant parties (e.g., employees, managers, or executives) before the due date of a task within this compliance sub-category. These notifications serve as reminders to ensure timely task completion.</li>
                <li style={{listStyle: 'unset'}}> <b>Task Complete Notification for Director:</b>   This field enables you to set up notifications specifically for the Director when a task within this compliance sub-category is marked as complete. The Director is informed once the task is successfully finished.</li>
                <li style={{listStyle: 'unset'}}> <b>Task Overdue Notification for Employee:</b>  This field pertains to notifications sent to employees when tasks become overdue within this sub-category. It serves as a reminder to employees that they have tasks requiring attention.</li>
                <li style={{listStyle: 'unset'}}> <b>Task Overdue Notification for Director: </b> Similar to the previous field, this one is tailored for notifying the Director when tasks become overdue within this sub-category. It ensures that the Director is aware of any delays in task completion.</li>
                <li style={{listStyle: 'unset'}}> <b>No Action Taken Notification for Director: </b>  This notification is designed to alert the Director when no action has been taken within this compliance sub-category. It serves as a means of highlighting areas where compliance activities may be stagnant or neglected.</li>
                <li style={{listStyle: 'unset'}}> <b>Project Complete Notification For Customer:  </b> This field allows you to set up notifications to be sent to customers when a project within this sub-category is successfully completed. Customers are informed about project milestones and completion.</li>
                <li style={{listStyle: 'unset'}}> <b>Project Before Due Date Notification:</b>  This notification type is focused on sending alerts to relevant parties, such as employees, before the due date of a project within this compliance sub-category. It ensures that project tasks are on track and will be completed on time.</li>
              </ul>
              <img src="./img/bg-img/compliance_sub_cat_img.png" alt="" style={{width: '86%',margin: '40px', border: '1px solid #d5dddd',  borderRadius: '10px'}}></img>
            </div>
          </section>
          <section id="project_template">
            <div className="project_template"  style={{  fontSize: '1.2rem', lineHeight: '1.5' }}>
            <h3 style={{fontWeight:'501'}}>Project Template</h3>
            <ul style={{ fontSize: '1.2rem', lineHeight: '1.8', margin: '26px' }}>
                <li style={{listStyle: 'unset'}}> <b>Name:</b> This field represents the name or title of the project template, providing a distinctive identifier for the template.</li>
                <li style={{listStyle: 'unset'}}> <b>Project Type:</b> Specifies the type or category of the project template, allowing for categorization or classification based on project characteristics.</li>
                <li style={{listStyle: 'unset'}}> <b>Project Duration (Days):</b>  Indicates the estimated or predefined duration for the project template, providing a timeline or timeframe within which the project should be completed.</li>
                <li style={{listStyle: 'unset'}}> <b>Compliance Category:</b>  Links or associates the project template with a specific compliance category, indicating the regulatory or compliance area to which the project pertains.</li>
                <li style={{listStyle: 'unset'}}> <b>Compliance Sub Category: </b> Further refines the compliance details by associating the project template with a more specific compliance sub-category within the broader compliance category.</li>
                <li style={{listStyle: 'unset'}}> <b>Tasks:</b> This section likely contains details about the tasks or activities to be performed within the project template. It could include a list of individual tasks, their descriptions, durations, types, and the employees or groups responsible for their execution.</li>
                  <ul style={{ fontSize: '1.2rem', lineHeight: '1.8', margin: '26px' }}>
                    <li style={{listStyle: 'decimal'}}> <b>Task:</b>  The task's name or title, describing the specific activity to be performed.</li>
                    <li style={{listStyle: 'decimal'}}> <b>Subject:</b> Possibly additional information related to the task or its purpose within the project.</li>
                    <li style={{listStyle: 'decimal'}}> <b>Task Duration:</b> Indicates the estimated duration required to complete the task.</li>
                    <li style={{listStyle: 'decimal'}}> <b>Type:</b>  Specifies the type or nature of the task, delineating different task categories if applicable.</li>
                    <li style={{listStyle: 'decimal'}}> <b>Employee or Group: </b>  Identifies the individual employee or group responsible for executing the task within the project.</li>
                  </ul>
                 <li style={{listStyle: 'unset'}}> <b>Description:</b> : Likely a section or option allowing for editing or providing a description of the task.</li>
                </ul>
                <h5 style={{lineHeight: '1.8'}}>These fields and their associated table structure offer a structured approach to defining and organising project templates, tasks, and their relevant details, facilitating better planning, execution, and management of compliance-related projects.</h5>
                <img src="./img/bg-img/prj-temp.png" alt="" style={{width: '86%',margin: '40px',  border: '1px solid #d5dddd',  borderRadius: '10px'}}></img>
            </div>
          </section>

            <section id="compliance_agreement" >
            <div className="compliance_agreement" style={{  fontSize: '1.2rem', lineHeight: '1.5' }}>
              <h3 style={{fontWeight:'501'}}>Compliance Agreement</h3><br/>
              <h5 style={{lineHeight: '1.8'}}>The "Compliance Agreement" doctype is a structured framework capturing vital details of compliance agreements. It records customer information, compliance categories, dates, rates, and signatures. This organised system enables efficient management and tracking of compliance obligations and agreements within an organisation.</h5>
              <ul style={{ fontSize: '1.2rem', lineHeight: '1.8', margin: '26px' }}>
                  <li style={{listStyle: 'unset'}}> <b>Customer:</b>  Refers to the client or customer associated with the compliance agreement. It could be a company, organisation, or individual.</li>
                  <li style={{listStyle: 'unset'}}> <b>Customer Name:</b> The specific name of the customer or client involved in the compliance agreement.</li>
                  <li style={{listStyle: 'unset'}}> <b>Customer Type:</b>  Indicates the type or category of the customer (e.g., corporate, individual, partner).</li>
                  <li style={{listStyle: 'unset'}}> <b>Status:</b>  Represents the current status of the compliance agreement (e.g., active, pending, completed).</li>
                  <li style={{listStyle: 'unset'}}> <b>Invoice Based On: </b>  Provides options for how invoices will be generated, either based on individual projects or consolidated for multiple projects.</li>
                  <li style={{listStyle: 'unset'}}> <b>From Lead:</b> Links the compliance agreement to a lead within a CRM system, tracking its origin.</li>
                  <li style={{listStyle: 'unset'}}> <b>From Opportunity: </b>   Links the compliance agreement to an opportunity within a CRM system, tracking its origin.</li>
                  <li style={{listStyle: 'unset'}}> <b>Has Long Term Validity :</b>This checkbox indicates if the compliance agreement has long-term validity, enabling a long-term contract or arrangement.If yes Valid Up to field field be hidden.</li>
                  <li style={{listStyle: 'unset'}}> <b>Posting Date:</b>  The date when the compliance agreement is posted or recorded.</li>
                  <li style={{listStyle: 'unset'}}> <b>Valid From/Valid Up to:</b>  Specifies the start and end dates of the validity period for the compliance agreement.</li>
                  <li style={{listStyle: 'unset'}}> <b>Compliance Category: </b> Indicates the broad category or type of compliance associated with this agreement.</li>
                  <li style={{listStyle: 'unset'}}> <b>Compliance Category Details </b> Contains a table structure capturing detailed information related to compliance categories.</li>
                  
                    <ul style={{ fontSize: '1.2rem', lineHeight: '1.8', margin: '26px' }}>
                      <li style={{listStyle: 'decimal'}}> <b>Compliance Category:</b> Indicates the broad category or type of compliance associated with this agreement.</li>
                      <li style={{listStyle: 'decimal'}}> <b>Compliance Date: </b> Date for compliance activities.</li>
                      <li style={{listStyle: 'decimal'}}> <b>Sub Category Name: </b> Name of the specific compliance sub-category.</li>
                      <li style={{listStyle: 'decimal'}}> <b>Next Compliance Date:</b>  Date for the next compliance activity.</li>
                      <li style={{listStyle: 'decimal'}}> <b>Rate: </b>  Rate or cost associated with each compliance activity.</li>
                    </ul>
                  <li style={{listStyle: 'unset'}}> <b>Total Rate:</b> The cumulative total of rates associated with compliance activities within the agreement.</li>
                  <li style={{listStyle: 'unset'}}> <b>Default Payment Terms Template:</b> Preset payment terms linked to the agreement.</li>
                  <li style={{listStyle: 'unset'}}> <b>Terms and Conditions: </b>  Specifies the terms and conditions agreed upon within the compliance agreement.</li>
                  <li style={{listStyle: 'unset'}}> <b>Authority: </b>  Area designated for authorised signatures to validate the compliance agreement.</li>
                  <li style={{listStyle: 'unset'}}> <b>Customer:</b> Area designated for customer signatures to validate the compliance agreement.</li>

                  </ul>
                  <h5 style={{lineHeight: '1.8'}}>Upon initial saving and signed by the authority, an action button becomes available, triggering a transition to the "Pending" status. This action unlocks subsequent options based on status changes:</h5>
                    <ul style={{ fontSize: '1.2rem', lineHeight: '1.8', margin: '26px' }}>
                        <li style={{listStyle: 'decimal'}}> <b>Pending Status:</b>  After the "Request for Review" action, the status turns to "Pending." This action transforms the available button into either "Approve" or "Reject," allowing higher-ups to choose.</li>
                        <ul style={{ fontSize: '1.2rem', lineHeight: '1.8', margin: '26px' }}>
                          <li style={{listStyle: 'circle'}}><b>Reject:</b> Choosing this option alters the status to "Rejected."</li>
                          <li style={{listStyle: 'circle'}}><b>Approve: </b> Opting for approval shifts the status to "Approved."</li>
                        </ul>
                        <li style={{listStyle: 'decimal'}}> <b>Approval Process:  </b> Once approved, the button changes to "Sent to Customer," leading to the "Customer Approval Waiting" status. At this stage, a new field for "Customer Signature" becomes visible, awaiting the customer's sign-off.</li>
                        <li style={{listStyle: 'decimal'}}> <b>Customer Response:</b> After the customer signs, the action button changes to "Customer Approval" or "Customer Reject."</li>
                        <ul style={{ fontSize: '1.2rem', lineHeight: '1.8', margin: '26px' }}>
                          <li style={{listStyle: 'circle'}}><b>Customer Reject:</b> Customer Reject: This selection changes the status to "Customer Rejected."</li>
                          <li style={{listStyle: 'circle'}}><b>Customer Approval: </b>  Opting for approval updates the status to "Customer Approved," bringing the agreement to life and initiating the project on subcategory basis.</li>
                        </ul>
                    </ul>
                  <img src="./img/bg-img/comp-agree.png" alt="" style={{width: '86%',margin: '40px',  border: '1px solid #d5dddd',  borderRadius: '10px'}}></img>
             </div>
             </section>

            <section  id="inward_register">
             <div className="inward_register" style={{  fontSize: '1.2rem', lineHeight: '1.5' }}>
              <h3 style={{fontWeight:'501'}}>Inward Register</h3>
              <ul style={{ fontSize: '1.2rem', lineHeight: '1.8', margin: '26px' }}>
                  <li style={{listStyle: 'unset'}}> <b>Register Type:</b>  This field categorises or specifies the type of register being used for recording inward documents or communications. When clicked, it presents three options: General, Document, and Digital Signature.</li>
                  <li style={{listStyle: 'unset'}}> <b>General Register Type:</b> Describes the specific classification of the general register within the inward register.</li>
                  <li style={{listStyle: 'unset'}}> <b>Document Register Type:</b> Describes the specific classification of the document within the inward register.</li>
                  <li style={{listStyle: 'unset'}}> <b>Purpose:</b> Indicates the reason or purpose behind the incoming document or communication.</li>
                  <li style={{listStyle: 'unset'}}> <b>Person Name:</b> Refers to the name of the individual associated with the incoming document or communication.</li>
                  <li style={{listStyle: 'unset'}}> <b>Person Contact Number:</b>  The contact number of the person linked to the incoming document or communication.</li>
                  <li style={{listStyle: 'unset'}}> <b>Received By: </b> Indicates the person or entity who received the document.</li>
                  <li style={{listStyle: 'unset'}}> <b>Customer:</b> Represents the customer or client associated with the received document, if applicable.</li>
                  <li style={{listStyle: 'unset'}}> <b>Received Through:</b> Specifies the mode or method through which the document was received (e.g., mail, whatsapp, physical handover, courier).</li>
              </ul>
              <h5 style={{lineHeight: '1.8'}}>These fields collectively serve to systematically capture and organise details about incoming documents within the "Inward Register" DocType, ensuring an organised and traceable record of all incoming information.</h5>
              <img src="./img/bg-img/inward-reg.png" alt="" style={{width: '86%',margin: '40px',  border: '1px solid #d5dddd', borderRadius: '10px'}}></img>
            </div>
            </section>

            <section id="outward_register">
            <div className="outward_register"  style={{  fontSize: '1.2rem', lineHeight: '1.5' }}>
              <h3 style={{fontWeight:'501'}}>Outward Register</h3>
              <h5 style={{lineHeight: '1.8'}}>Outward Register DocType shares similar fields with the "Inward Register," with an additional checkbox labelled "If Outward Only." This checkbox serves as an indicator or flag, suggesting that the entry is specifically related 
              to outward communication or documents. When this checkbox is selected or marked, it could imply that the recorded entry pertains exclusively to outward communications or documents, distinguishing it from inward entries.</h5>
              <img src="./img/bg-img/outward-reg.png" alt="" style={{width: '86%',margin: '40px',  border: '1px solid #d5dddd', borderRadius: '10px'}}></img>
            </div>
          </section>
          
          <section id="project">
            <div className="project"  style={{  fontSize: '1.2rem', lineHeight: '1.5' }}>
              <h3 style={{fontWeight:'501'}}>Project</h3>
              <h5 style={{lineHeight: '1.8'}}>The "Project" DocType is an organisational tool for streamlined planning, execution, and monitoring of initiatives. Captures essential project details, including names, statuses, timelines, and key associations. Facilitates efficient collaboration, resource allocation, and milestone tracking for successful project delivery.</h5>
              <ul style={{ fontSize: '1.2rem', lineHeight: '1.8', margin: '26px' }}>
                  <li style={{listStyle: 'unset'}}> <b> Series:</b>  Represents the project numbering series or format.</li>
                  <li style={{listStyle: 'unset'}}> <b>Project Name:</b> Refers to the name/title of the project.</li>
                  <li style={{listStyle: 'unset'}}> <b>Status:</b>  Indicates the current status of the project</li>
                  <li style={{listStyle: 'unset'}}> <b>Project Type:</b> Classifies the project into specific types or categories.</li>
                  <li style={{listStyle: 'unset'}}> <b>Is Active:</b> A checkbox field that indicates if the project is currently active.</li>
                  <li style={{listStyle: 'unset'}}> <b>% Complete Method:</b> Specifies the method used to calculate project completion percentage, such as 'Task Completion.'</li>
                  <li style={{listStyle: 'unset'}}> <b>Site Location: </b> Provides the location or site associated with the project.</li>
                  <li style={{listStyle: 'unset'}}> <b>From Template:</b> Option to create the project from a predefined template.</li>
                  <li style={{listStyle: 'unset'}}> <b>Compliance Category/Compliance Sub Category/Sub Category Name:</b> Fields related to compliance categorization for the project.</li>
                  <li style={{listStyle: 'unset'}}> <b>Expected Start Date/Expected End Date:</b>  Indicates the projected commencement and conclusion dates of the project.</li>
                  <li style={{listStyle: 'unset'}}> <b>Priority:</b>  Classifies the project's priority level, e.g., 'High,' 'Medium,' or 'Low.'</li>
                  <li style={{listStyle: 'unset'}}> <b>Department: </b>  Associates the project with a specific department within the organisation.</li>
                  <li style={{listStyle: 'unset'}}> <b>Supervisor:</b>  Designates the supervisor or overseeing individual responsible for the project.</li>
                  <li style={{listStyle: 'unset'}}> <b>Customer/Customer Name/Sales Order:</b> Pertains to customer-related details associated with the project, such as the customer's name and sales order.</li>
                  <li style={{listStyle: 'unset'}}> <b>Users:</b> Specifies the users who have access or permission to view the project on the website.</li>
                  <li style={{listStyle: 'unset'}}> <b>Estimated Cost:</b> Represents the anticipated expenses or financial resources projected for the completion of a project. It serves as a forecasted estimation of various costs, including labour, materials, and services required during the project's execution.</li>
                  <li style={{listStyle: 'unset'}}> <b>Default Cost Center: </b> Designates the primary division, department, or unit within the organisation to which project-related costs are automatically allocated by default. It aids in accounting practices by specifying the default allocation of expenses incurred during the project.</li>
                  <li style={{listStyle: 'unset'}}> <b>Collect Progress: </b> Indicates a functionality or action for collecting progress-related information within the project.</li>
              </ul>
              <h5 style={{lineHeight: '1.8'}}> These fields collectively provide a structured framework to capture and manage various aspects of a project, including its details, status, compliance-related aspects, scheduling, priorities, associated users, and customer information.</h5>
              <img src="./img/bg-img/prj.png" alt="" style={{width: '86%',margin: '40px', border: '1px solid #d5dddd', borderRadius: '10px'}}></img>
            </div>
          </section>

          <section id="digital_signature" >
            <div className="digital_signature" style={{  fontSize: '1.2rem', lineHeight: '1.5' }}>
              <h3 style={{fontWeight:'501'}}>Digital Signature</h3>
              <h5 style={{lineHeight: '1.8'}}>The "Digital Signature" doctype fulfils the crucial need of authenticating electronic documents or transactions within an organisation. It ensures the integrity, authenticity, and validity of digital information by employing cryptographic techniques. This doctype is essential for verifying the identity of signers, ensuring documents remain unchanged, and meeting compliance and legal requirements in a secure digital environment.</h5>
              <ul style={{ fontSize: '1.2rem', lineHeight: '1.8', margin: '26px' }}>
                  <li style={{listStyle: 'unset'}}> <b> Customer:</b>   Represents the client or customer associated with the digital signature.</li>
                  <li style={{listStyle: 'unset'}}> <b>Company Name::</b> Refers to the name of the company related to the digital signature.</li>
                  <li style={{listStyle: 'unset'}}> <b>Director:</b>  An indicator field referring to a designation or title within the company.</li>
                  <li style={{listStyle: 'unset'}}> <b>Director Name:</b> Specifies the name of the director or the person associated with the digital signature.</li>
                  <li style={{listStyle: 'unset'}}> <b>Director Email:</b> The email address of the director or designated individual.</li>
                  <li style={{listStyle: 'unset'}}> <b>Digital Signature Key:</b> This field  holds the cryptographic key used for generating the digital signature.</li>
                  <li style={{listStyle: 'unset'}}> <b>Expiry Date: </b> Indicates the date when the digital signature is set to expire.</li>
                  <li style={{listStyle: 'unset'}}> <b>PAN Number:</b> Permanent Account Number (PAN) associated with the director or entity linked to the digital signature.</li>
                  <li style={{listStyle: 'unset'}}> <b>DIN Number: </b>Refers to the Director Identification Number, a unique identification number for directors.</li>
                  <li style={{listStyle: 'unset'}}> <b>Notify on Expiration:</b> An indicator checkbox that, when selected, triggers notifications or alerts upon nearing the expiry date of the digital signature.</li>
               </ul>
              <h5 style={{lineHeight: '1.8'}}> These fields collectively capture and manage pertinent information related to digital signatures, providing details about customers, company associations, key individuals, expiration dates, and necessary identification numbers.</h5>
              <img src="./img/bg-img/dig-sig.png" alt="" style={{width: '86%',margin: '40px',  border: '1px solid #d5dddd', borderRadius: '10px'}}></img>
            </div>
          </section>
          
          <section id="task_assigning_tool">
            <div className="task_assigning_tool"  style={{  fontSize: '1.2rem', lineHeight: '1.5' }}>
              <h3 style={{fontWeight:'501'}}>Task Assigning Tool</h3>
              <h5 style={{lineHeight: '1.8'}}>The "Digital Signature" doctype fulfils the crucial need of authenticating electronic documents or transactions within an organisation. It ensures the integrity, authenticity, and validity of digital information by employing cryptographic techniques. This doctype is essential for verifying the identity of signers, ensuring documents remain unchanged, and meeting compliance and legal requirements in a secure digital environment.</h5>
              <ul style={{ fontSize: '1.2rem', lineHeight: '1.8', margin: '26px' }}>
                  <li style={{listStyle: 'unset'}}> <b>  Compliance and Filing Task Automation:</b>  Streamline compliance activities with an automated system that ensures timely and accurate fulfilment of regulatory requirements, reducing the risk of non-compliance.</li>
                  <li style={{listStyle: 'unset'}}> <b>Digital Signature Management:</b> Enhance the security and authenticity of documents by efficiently managing digital signatures, making them an integral part of your compliance processes.</li>
                  <li style={{listStyle: 'unset'}}> <b>Inward and Outward Register:</b> Maintain a comprehensive record of all incoming and outgoing documents, ensuring transparency, accountability, and easy retrieval of information.</li>
                  <li style={{listStyle: 'unset'}}> <b>HRMS and Payroll Integration:</b> Seamlessly integrate Human Resource Management System (HRMS) and Payroll functionalities, simplifying employee management, payroll processing, and compliance-related HR tasks.</li>
                  <li style={{listStyle: 'unset'}}> <b>Director Email:</b> Strengthen client relationships and manage customer interactions with a dedicated Customer Relationship Management (CRM) module designed to enhance customer satisfaction and loyalty.</li>
                  <li style={{listStyle: 'unset'}}> <b>Digital Signature Key:</b> This field  holds the cryptographic key used for generating the digital signature.</li>
                  <li style={{listStyle: 'unset'}}> <b>Expiry Date: </b> Indicates the date when the digital signature is set to expire.</li>
                  <li style={{listStyle: 'unset'}}> <b>PAN Number:</b> Permanent Account Number (PAN) associated with the director or entity linked to the digital signature.</li>
                  <li style={{listStyle: 'unset'}}> <b>DIN Number: </b>Refers to the Director Identification Number, a unique identification number for directors.</li>
                  <li style={{listStyle: 'unset'}}> <b>Notify on Expiration:</b> An indicator checkbox that, when selected, triggers notifications or alerts upon nearing the expiry date of the digital signature.</li>
               </ul>
              <h5 style={{lineHeight: '1.8'}}> These fields collectively capture and manage pertinent information related to digital signatures, providing details about customers, company associations, key individuals, expiration dates, and necessary identification numbers.</h5>
              <img src="./img/bg-img/task-assign.png" alt="" style={{width: '86%',margin: '40px',  border: '1px solid #d5dddd', borderRadius: '10px'}}></img>
            </div>
          </section>
          </section>
        </div>
      </div>
      
      </>

      {/* ---------footer--------- */}
      
      <footer id="dk-footer" className="dk-footer">
      <hr style={{}}></hr>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="dk-footer-box-info">
                <img
                  src="./img/bg-img/footer_logo"
                  alt=""
                  className="img-fluid"
                />

                <p className="footer-info-text">
                  Reference site about Lorem Ipsum, giving information on its
                  origins, as well as a random Lipsum generator.
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
                      <p>
                        No. 3/403 C, Carino INC, Pooladikkunnu Eranhikkal,
                        Kozhikode - 673303 Kerala, India{" "}
                      </p>
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
                        <i
                          className="fa fa-volume-control-phone"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="contact-info">
                        {/* <h3>95 711 9 5353</h3> */}
                        <p>
                          9400091868
                          <br />
                          8086833868
                        </p>
                      </div>
                    </div>

                    <form action="#">
                      <div className="form-row">
                        <div className="col dk-footer-form">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                          />
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
  );
};

export default KeyFeatures;