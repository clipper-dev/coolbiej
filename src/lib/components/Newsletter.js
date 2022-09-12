import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import NewsletterForm from './NewsletterForm';


function Newsletter() {

    const url = "https://erickulbiej.us8.list-manage.com/subscribe/post?u=4733157ed7a9a5342110d01b9&amp;id=ca7453360c"//process.env.NEXT_PUBLIC_MAILCHIMP_URL;


    // simplest form (only email)

    return (
        <div>
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                    <div>
                        <NewsletterForm onSubmitted={formData => subscribe(formData)} />
                        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />}
                        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
                    </div>
                )}
            /></div>
    )
}

export default Newsletter