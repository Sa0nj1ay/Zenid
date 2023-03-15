class WhyUs extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="why-choose-services">
      <div class="container">
	    	<div class="why-choose-services-m">
	          <div class="col-sm-5">
	            <div class="why-choose-services-m-txt">
	              <h3>Why <span>Choose</span> Us</h3>
	              <p>
	                We specialize in creating new, innovative websites and mobile apps using trusted & tested technologies. We are a group of enthusiastic people who strive to make ideas come to life. Our committed and persistent team of skilled professionals works tirelessly to help our clients get the outcomes they want by offering quick, simple, and affordable solutions.
	              </p>
	            </div>
	          </div>
	          <div class="col-sm-7">
	            <div class="why-choose-services-m-img">
	              <img src="image/whychoose.svg" />
	            </div>
	          </div>
	        </div>
        </div>
    </section>
    `;
  }
}

customElements.define('whyus-component', WhyUs);