import { ContactUs } from "@/constant/constant";

const ContactUsComponent: React.FC = () => {
  return (
    <div className="col-xl-2 col-md-6 order-cls">
      <div className="footer-title mobile-title">
        <h5>{ContactUs}</h5>
      </div>
      <div className="footer-content">
        <div className="contact-detail">
          <div className="footer-logo">
            <a href="/">
              <img src="/assets/images/icon/footer-logo.png" alt="" className="img-fluid" />
            </a>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
          <ul className="contact-list">
            <li>
              <i className="fas fa-map-marker-alt"></i> A-32, Albany, Newyork.
            </li>
            <li>
              <i className="fas fa-phone-alt"></i> 518 - 457 - 5181
            </li>
            <li>
              <i className="fas fa-envelope"></i> contact@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUsComponent;
