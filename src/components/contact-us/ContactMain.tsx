import React from 'react';
import BreadcrumbOne from '../common/Breadcrumb/BreadcrumbOne';
import BreadcrumbImg from '../../../public/assets/imgs/breadcrumb/breadcrumb-bg-06.png';
import ContactFormArea from './ContactFormArea';
import ContactArea from './ContactArea';

const ContactMain = () => {
    return (
        <>
            <BreadcrumbOne rowWrapperClass='col-xxl-7 col-xl-7 col-lg-8' title='Connect With Us For More Information' subTitle='Contact' breadcrumbImg={BreadcrumbImg} />
            <ContactArea />
            <ContactFormArea />
            {/* map area start */}
            <div className="bd__map p-relative section-spacing-top fix">
                <div className="bd__google-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12797.802464900029!2d-83.13319788146339!3d36.68770817009452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885b172234e50f17%3A0x89b2bd832c241ea9!2sJonesville%2C%20VA%2024263%2C%20USA!5e0!3m2!1sen!2sbd!4v1692792416975!5m2!1sen!2sbd"
                        width="1920" height="580" style={{ border: 0 }} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    );
};

export default ContactMain;