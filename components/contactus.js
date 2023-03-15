class Contactus extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <section id="contact">
            <div class="container">
                <h1 class="section-header">Contact</h1>

                <div class="contact-wrapper-form">
                    <!-- Left contact page -->

                    <div class="col-sm-5">
                        <form id="contact-form" class="form-horizontal" role="form">
                            <div class="form-group">
                                <div class="col-sm-12">
                                    <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required />
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-sm-12">
                                    <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required />
                                </div>
                            </div>

                            <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>

                            <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                                <div class="alt-send-button"><i class="fa fa-paper-plane"></i><span class="send-text">Submit</span></div>
                            </button>
                        </form>
                    </div>

                    <!-- Left contact page -->
                    <div class="col-sm-7">
                        <div class="direct-contact-container">
                            <ul class="contact-list">
                                <li class="list-item">
                                    <i class="fa-sharp fa-solid fa-location-dot"></i><span class="contact-text place"> F-247, Ground Floor, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160055</span>
                                </li>

                                <li class="list-item">
                                    <i class="fa fa-phone fa-2x"></i>
                                        <span class="contact-text phone"><a href="tel:+91 6239278162" title="Give me a call">+91 6239278162</a></span>
                                    
                                </li>

                                <li class="list-item">
                                    <i class="fa fa-envelope fa-2x"></i>
                                        <span class="contact-text gmail"><a href="mailto:contact@zenidinfotech.com" title="Send me an email">contact@zenidinfotech.com</a></span>
                                </li>
                            </ul>

                            <hr />
                            <ul class="social-media-list">
                                <li>
                                    <a href="https://www.linkedin.com/company/zenidinfotech/mycompany/" target="_blank" class="contact-icon"> <i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/zenidinfotech" target="_blank" class="contact-icon"> <i class="fa-brands fa-facebook" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/zenid_infotech" target="_blank" class="contact-icon"> <i class="fa-brands fa-twitter" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/zenidinfotech/?hl=en" target="_blank" class="contact-icon"> <i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                            <hr />

                            <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
  }
}

customElements.define('conatctus-component', Contactus);