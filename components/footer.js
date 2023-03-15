class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<section class="footer">
		<div class="container">
			<div class="footer-m">
				<div class="col-sm-3">
					<div class="footer-m-1">
						<a href="index.html"><img src="image/logow.png"></a>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nibh vehicula.</p>
						<div class="header-info-social">
							<span><a target="_blank" href="https://www.facebook.com/zenidinfotech"><i class="fa-brands fa-facebook-f"></i></a><a href="https://www.linkedin.com/company/zenidinfotech/mycompany/"><i class="fa-brands fa-linkedin"></i></a><a href="https://www.instagram.com/zenidinfotech/?hl=en"><i class="fa-brands fa-instagram"></i></a> <a href="https://twitter.com/zenid_infotech" target="_blank"><i class="fa-brands fa-twitter"></i></a> </span>
						</div>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="footer-m-2">
						<h3>Get In Touch</h3>
						<ul>
							<li>
								<a href="https://goo.gl/maps/ktNkAjgXbJi51rNX9" class="header-info-address">
									<i class="fa-regular fa-location-dot"></i>F-247, Phase 8B, Industrial Area, Sector 74
								</a >
							</li>
							<li>
								<div class="header-info-mail">
									<a href="mailto: contact@zenidinfotech.com"><i class="fa-regular fa-envelope"></i>contact@zenidinfotech.com</a>
								</div>
							</li>
							<li>
								<span><i class="fa-regular fa-phone"></i><a href="tel:+91 6239278162">+91 6239278162</a></span>
							</li>
							<li>
								<span class="header-info-timing">
									<span><i class="fa-light fa-clock"></i>09:00 am - 06:30 pm</span>
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="footer-m-3">
						<h3>Quicklinks</h3>
						<ul>
							<li><a href="index.html">Home</a></li>
							<li><a href="aboutus.html">About</a></li>
							<li><a href="career.html">Career</a></li>
							<li><a href="faq.html">FAQs</a></li>
						</ul>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="footer-m-4">
						<h3>Location</h3>
						<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13721.030457031125!2d76.6907718!3d30.7111574!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8fda0222e11cef58!2sZenid%20Infotech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1669628303621!5m2!1sen!2sin" width="100%" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
					</div>
				</div>
			</div>
		</div>
	</section>`;
  }
}

customElements.define('footer-component', Footer);