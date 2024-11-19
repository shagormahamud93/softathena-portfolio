import Link from 'next/link';
import React from 'react';

const SocialIcon = () => {
    return (
        <>
            <Link href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link href="https://twitter.com/"><i className="icon-twiter"></i>
            </Link>
            <Link href="https://bd.linkedin.com/"><i className="fa-brands fa-linkedin"></i>
            </Link>
            <Link href="https://www.behance.net/"><i className="fa-brands fa-behance"></i>
            </Link>
        </>
    );
};

export default SocialIcon;