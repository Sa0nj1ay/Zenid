class Header extends HTMLElement { constructor() { super(); } connectedCallback() { this.innerHTML = `
<section class="header-infoo">
    <div class="container">
        <div class="header-info">
            <div class="col-sm-4">
                <div class="header-info-address"><i class="fa-regular fa-location-dot"></i>F-247, Phase 8B, Industrial Area, Sector 74</div>
            </div>
            <div class="col-sm-4 info-mail-col">
                <div class="header-info-mail">
                    <a href="mailto:contact@zenidinfotech.com"><i class="fa-regular fa-envelope"></i> contact@zenidinfotech.com</a>
                </div>
            </div>
            <div class="col-sm-2 info-timing-col">
                <div class="header-info-timing">
                    <span><i class="fa-light fa-clock"></i>09:00 am - 06:30 pm</span>
                </div>
            </div>
            <div class="col-sm-2">
                <div class="header-info-social">
                    <span>
                        <a href="https://www.facebook.com/zenidinfotech"><i class="fa-brands fa-facebook-f"></i></a><a href="https://www.linkedin.com/company/zenidinfotech/mycompany/"><i class="fa-brands fa-linkedin"></i></a><a href="https://www.instagram.com/zenidinfotech/?hl=en"><i class="fa-brands fa-instagram"></i></a><a href="https://twitter.com/zenid_infotech" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                    </span>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="header">
    <div class="container">
        <div class="header-m">
            <div class="col-sm-2">
                <div class="header-m-lft">
                    <a href="index.html"> <img src="image/logow.png" /> </a>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="header-m-cntr">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="aboutus.html">About</a></li>
                        <li>
                            <div class="dropdown">
                                <a class="dropbtn">Services <i class="fa-sharp fa-solid fa-angle-down"></i></a>
                                <div class="dropdown-content">
                                    <div class="dropdown-content-m">
                                        <div class="col-sm-6">
                                            <div class="dropdown-content-m-lft">
                                                <h5><a href="frontend.html">Front-end Development Services</a></h5>
                                                <ul>
                                                    <li>
                                                        <a href="frontend.html#react-js"><i class="fa-sharp fa-solid fa-check"></i>React JS</a>
                                                    </li>
                                                    <li>
                                                        <a href="frontend.html#angular-js"><i class="fa-sharp fa-solid fa-check"></i>Angular JS</a>
                                                    </li>
                                                    <li>
                                                        <a href="frontend.html#next-js"><i class="fa-sharp fa-solid fa-check"></i>Next JS</a>
                                                    </li>
                                                    <li>
                                                        <a href="frontend.html#nest-js"><i class="fa-sharp fa-solid fa-check"></i>Nest JS</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="dropdown-content-m-lft">
                                                <h5><a href="backend.html">Back-end Development Services</a></h5>
                                                <ul>
                                                    <li>
                                                        <a href="backend.html#dot-net"><i class="fa-sharp fa-solid fa-check"></i>.Net Development</a>
                                                    </li>
                                                    <li>
                                                        <a href="backend.html#Java-devlopment"><i class="fa-sharp fa-solid fa-check"></i>Java Development</a>
                                                    </li>
                                                    <li>
                                                        <a href="backend.html#JavaScript-devlopment"><i class="fa-sharp fa-solid fa-check"></i>Java script Development</a>
                                                    </li>
                                                    <li>
                                                        <a href="backend.html#PHP-Development"><i class="fa-sharp fa-solid fa-check"></i>PHP Development</a>
                                                    </li>
                                                    <li>
                                                        <a href="backend.html#Node-js"><i class="fa-sharp fa-solid fa-check"></i>Node Js Development</a>
                                                    </li>
                                                    <li>
                                                        <a href="backend.html#Python-devlopment"><i class="fa-sharp fa-solid fa-check"></i>Python Development</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dropdown-content-m">
                                        <div class="col-sm-6">
                                            <div class="dropdown-content-m-lft">
                                                <h5><a href="fullstack.html">Full Stack Development </a></h5>
                                                <ul>
                                                    
                                                    <li>
                                                        <a href="fullstack.html#mean-mern"><i class="fa-sharp fa-solid fa-check"></i>MERN / MEAN</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="dropdown-content-m-lft">
                                                <h5><a href="mobileapp.html">Mobile App Development Services</a></h5>
                                                <ul>
                                                    <li>
                                                        <a href="mobileapp.html#iOS-Development"><i class="fa-sharp fa-solid fa-check"></i>iOS Development</a>
                                                    </li>
                                                    <li>
                                                        <a href="mobileapp.html#Android-devlopment"><i class="fa-sharp fa-solid fa-check"></i>Android Development</a>
                                                    </li>
                                                    <li>
                                                        <a href="mobileapp.html#flutter-development"><i class="fa-sharp fa-solid fa-check"></i>Flutter Development</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dropdown-content-m">
                                        <div class="col-sm-6">
                                            <div class="dropdown-content-m-lft">
                                                <h5><a href="uidesign.html">UI Designing Services</a></h5>
                                                <ul>
                                                    <li>
                                                        <a href="uidesign.html#user-research"><i class="fa-sharp fa-solid fa-check"></i>User Research</a>
                                                    </li>
                                                    <li>
                                                        <a href="uidesign.html#user-design"><i class="fa-sharp fa-solid fa-check"></i>User Design</a>
                                                    </li>
                                                    <li>
                                                        <a href="uidesign.html#information-architecture"><i class="fa-sharp fa-solid fa-check"></i>Information Architecture</a>
                                                    </li>
                                                     <li>
                                                        <a href="uidesign.html#wireframing"><i class="fa-sharp fa-solid fa-check"></i>Wireframing</a>
                                                    </li>
                                                     <li>
                                                        <a href="uidesign.html#prototyping"><i class="fa-sharp fa-solid fa-check"></i>Prototyping</a>
                                                    </li>
                                                     <li>
                                                        <a href="uidesign.html#user-testing"><i class="fa-sharp fa-solid fa-check"></i>User Testing</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                          <div class="dropdown-content-m-lft">
                                            <h5><a href='webportal.html'>Web Portal Services</a></h5>
                                            <ul>
                                              <li><a href="webportal.html#CRM-Software"><i class="fa-sharp fa-solid fa-check"></i>CRM Software Development</a></li>
                                              <li><a href="webportal.html#cms-based"><i class="fa-sharp fa-solid fa-check"></i>CMS Based Development</a></li>
                                              <li class="customSoftware" ><a href="webportal.html#Customised-Software"><i class="fa-sharp fa-solid fa-check"></i>Customised Software Development</a>
                                                <ul class="customSoftwaremenu">
                                                  <li><a href="webportal.html#SAAS"><i class="fa-sharp fa-solid fa-check"></i>SAAS</a></li>
                                                  <li><a href="webportal.html#Customised-Software"><i class="fa-sharp fa-solid fa-check"></i>Customised Software</a></li>
                                                </ul>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                    </div>
                                    <div class="dropdown-content-m">
                                        <div class="col-sm-6">
                                            <div class="dropdown-content-m-lft">
                                                <h5><a href="additional.html">Additional Services</a></h5>
                                                <ul>
                                                    <li>
                                                        <a href="additional.html#application-migration"><i class="fa-sharp fa-solid fa-check"></i>Application Migration</a>
                                                    </li>
                                                    <li>
                                                        <a href="additional.html#Version-Upgrades"><i class="fa-sharp fa-solid fa-check"></i>Technology Version Upgrade</a>
                                                    </li>
                                                    <li>
                                                        <a href="additional.html#Automation-Services"><i class="fa-sharp fa-solid fa-check"></i>Automation Services</a>
                                                    </li>
                                                    <li>
                                                        <a href="additional.html#Offshore-Development"><i class="fa-sharp fa-solid fa-check"></i>Offshore Development</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="dropdown-content-m-lft">
                                                <h5><a href="digital.html">Digital Marketing/SEO</a></h5>
                                                <ul>
                                                    <li>
                                                        <a href="digital.html#Digital-markrting"><i class="fa-sharp fa-solid fa-check"></i> Software Testing and Quality Analysis</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="menu-wrap">
                    <nav class="menu">
                        <div class="icon-list">
                            <ul class="responsive_menu">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="aboutus.html">About Us</a></li>
                                <li>
                                    <div class="accordion accordion-flush" id="accordionExample">
                                      <div class="accordion-item p0">
                                        <h2 class="accordion-header" id="headingOne">
                                          <button class="accordion-button collapsed  p0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                           Services
                                          </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                          <div class="accordion-body p0">
                                            <div class="accordion accordion-flush" id="submenu">
                                              <div class="accordion-item">
                                                <h2 class="accordion-header" id="heading1">
                                                  <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                                   Front-end Development Services
                                                  </button>
                                                </h2>
                                                <div id="collapse1" class="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#submenu">
                                                  <div class="accordion-body">
                                                    <ul>
                                                        <li>
                                                            <a href="frontend.html#react-js"><i class="fa-sharp fa-solid fa-check"></i>React JS</a>
                                                        </li>
                                                        <li>
                                                            <a href="frontend.html#angular-js"><i class="fa-sharp fa-solid fa-check"></i>Angular JS</a>
                                                        </li>
                                                        <li>
                                                            <a href="frontend.html#next-js"><i class="fa-sharp fa-solid fa-check"></i>Next JS</a>
                                                        </li>
                                                        <li>
                                                            <a href="frontend.html#nest-js"><i class="fa-sharp fa-solid fa-check"></i>Nest JS</a>
                                                        </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="accordion-item">
                                                <h2 class="accordion-header" id="heading2">
                                                  <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                   Back-end Development Services
                                                  </button>
                                                </h2>
                                                <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#submenu">
                                                  <div class="accordion-body">
                                                    <ul>
                                                        <li>
                                                            <a href="backend.html#dot-net"><i class="fa-sharp fa-solid fa-check"></i>.Net Development</a>
                                                        </li>
                                                        <li>
                                                            <a href="backend.html#Java-devlopment"><i class="fa-sharp fa-solid fa-check"></i>Java Development</a>
                                                        </li>
                                                        <li>
                                                            <a href="backend.html#JavaScript-devlopment"><i class="fa-sharp fa-solid fa-check"></i>Java script Development</a>
                                                        </li>
                                                        <li>
                                                            <a href="backend.html#PHP-Development"><i class="fa-sharp fa-solid fa-check"></i>PHP Development</a>
                                                        </li>
                                                        <li>
                                                            <a href="backend.html#Node-js"><i class="fa-sharp fa-solid fa-check"></i>Node Js Development</a>
                                                        </li>
                                                        <li>
                                                            <a href="backend.html#Python-devlopment"><i class="fa-sharp fa-solid fa-check"></i>Python Development</a>
                                                        </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="accordion-item">
                                                <h2 class="accordion-header" id="heading3">
                                                  <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                   Full Stack Development
                                                  </button>
                                                </h2>
                                                <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#submenu">
                                                  <div class="accordion-body">
                                                    <ul>
                                                        <a href="fullstack.html#mean-mern"><i class="fa-sharp fa-solid fa-check"></i>MERN / MEAN</a>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="accordion-item">
                                                <h2 class="accordion-header" id="heading4">
                                                  <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                                   Mobile App Development Services
                                                  </button>
                                                </h2>
                                                <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#submenu">
                                                  <div class="accordion-body">
                                                    <ul>
                                                        <li>
                                                            <a href="mobileapp.html#iOS-Development"><i class="fa-sharp fa-solid fa-check"></i>iOS Development</a>
                                                        </li>
                                                        <li>
                                                            <a href="mobileapp.html#Android-devlopment"><i class="fa-sharp fa-solid fa-check"></i>Android Development</a>
                                                        </li>
                                                        <li>
                                                            <a href="mobileapp.html#flutter-development"><i class="fa-sharp fa-solid fa-check"></i>Flutter Development</a>
                                                        </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="accordion-item">
                                                <h2 class="accordion-header" id="heading5">
                                                  <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                                   UI Designing Services
                                                  </button>
                                                </h2>
                                                <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#submenu">
                                                  <div class="accordion-body">
                                                    <ul>
                                                        <li>
                                                            <a href="uidesign.html#user-research"><i class="fa-sharp fa-solid fa-check"></i>User Research</a>
                                                        </li>
                                                        <li>
                                                            <a href="uidesign.html#user-design"><i class="fa-sharp fa-solid fa-check"></i>User Design</a>
                                                        </li>
                                                        <li>
                                                            <a href="uidesign.html#information-architecture"><i class="fa-sharp fa-solid fa-check"></i>Information Architecture</a>
                                                        </li>
                                                        <li>
                                                            <a href="uidesign.html#wireframing"><i class="fa-sharp fa-solid fa-check"></i>Wireframing</a>
                                                        </li>
                                                        <li>
                                                            <a href="uidesign.html#prototyping"><i class="fa-sharp fa-solid fa-check"></i>Prototyping</a>
                                                        </li>
                                                        <li>
                                                            <a href="uidesign.html#user-testing"><i class="fa-sharp fa-solid fa-check"></i>User Testing</a>
                                                        </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="accordion-item">
                                                <h2 class="accordion-header" id="heading6">
                                                  <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                                   Web Portal Services
                                                  </button>
                                                </h2>
                                                <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#submenu">
                                                  <div class="accordion-body">
                                                    <ul>
                                                        <li>
                                                            <a href="webportal.html#CRM-Software"><i class="fa-sharp fa-solid fa-check"></i>CRM Software Development</a>
                                                        </li>
                                                        <li>
                                                            <a href="webportal.html#cms-based"><i class="fa-sharp fa-solid fa-check"></i>CMS Based Development</a>
                                                        </li>
                                                        <li>
                                                            <a href="webportal.html#SAAS"><i class="fa-sharp fa-solid fa-check"></i>SAAS</a>
                                                        </li>
                                                        <li>
                                                            <a href="webportal.html#Customised-Software"><i class="fa-sharp fa-solid fa-check"></i>Customised Software</a>
                                                        </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="accordion-item">
                                                <h2 class="accordion-header" id="heading7">
                                                  <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                                   Additional Services
                                                  </button>
                                                </h2>
                                                <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#submenu">
                                                  <div class="accordion-body">
                                                    <ul>
                                                        <li>
                                                            <a href="additional.html#application-migration"><i class="fa-sharp fa-solid fa-check"></i>Application Migration</a>
                                                        </li>
                                                        <li>
                                                            <a href="additional.html#Version-Upgrades"><i class="fa-sharp fa-solid fa-check"></i>Technology Version Upgrade</a>
                                                        </li>
                                                        <li>
                                                            <a href="additional.html#Automation-Services"><i class="fa-sharp fa-solid fa-check"></i>Automation Services</a>
                                                        </li>
                                                        <li>
                                                            <a href="additional.html#Offshore-Development"><i class="fa-sharp fa-solid fa-check"></i>Offshore Development</a>
                                                        </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="accordion-item">
                                                <h2 class="accordion-header" id="heading8">
                                                  <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                                   Digital Marketing/SEO
                                                  </button>
                                                </h2>
                                                <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#submenu">
                                                  <div class="accordion-body">
                                                    <ul>
                                                        <li>
                                                            <a href="digital.html#Digital-markrting"><i class="fa-sharp fa-solid fa-check"></i> Software Testing and Quality Analysis</a>
                                                        </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                </li>

                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>
                        <button class="close-button menu_close" id="close-button">X</button>
                    </nav>
                </div>
                <button class="menu-button fa fa-bars" id="open-button"></button>
            </div>
            <div class="col-sm-2">
                <div class="header-m-rght">
                    <button onclick="window.location.href='contact.html'">Hire Now !</button>
                </div>
            </div>
        </div>
    </div>
</section>
`; } } customElements.define('header-component', Header);
