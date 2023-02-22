import axios from 'axios';

import React, { useState, useEffect} from 'react'



const Faq = () => {

  const url = "https://knowuvraj.com/solid-admin";
  useEffect(() => {
    window.scrollTo(0, 0);
    FAQ();

}, []);

const [viewfaq, setViewfaq] = useState();


const FAQ = async () => {
    try {
        axios.get(`${url}/faq.php`)
            .then(res => {
                
                setViewfaq(res.data);
            })
    } catch (error) { throw error; }


}
  return (
        <section id="faq" className="faq" style={{padding:"40px 0"}}>
      <div className="container-fluid" data-aos="fade-up">

        <div className="row gy-4">

          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

            <div className="content px-xl-5">
              <h3>Frequently Asked <strong>Questions</strong></h3>
              <p>
              Before reaching out to customer support, we encourage you to check our FAQ section to find the answer you're looking for. If you can't find the answer you need, our customer support team is always here to assist you.
              </p>
            </div>

            <div className="accordion accordion-flush px-xl-5" id="faqlist">

              {viewfaq&&viewfaq.map((data,key)=>{
                return( <div className="accordion-item" data-aos="fade-up" data-aos-delay={(key+1)*200} key={data&&data.id}>
                <h3 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#faq-content-${key+1}`}>
                    <i className="bi bi-question-circle question-icon"></i>
                    {data&&data.question}
                  </button>
                </h3>
                <div id={`faq-content-${key+1}`} className="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div className="accordion-body">
                  {data&&data.answer}
                  </div>
                </div>
              </div>
)
              })}

            

            </div>

          </div>

          <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{backgroundImage: "url('assets/img/faq.jpg')"}}>&nbsp;</div>
        </div>

      </div>
    </section>
  )
}

export default Faq