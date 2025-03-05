import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

const PrivacyPolicy = () => {
    const [scrollingUp, setScrollingUp] = useState(false);
    let lastScrollY = window.scrollY;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < lastScrollY) {
                setScrollingUp(true);
            } else {
                setScrollingUp(false);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Sticky Navbar */}
            <div className={`fixed top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 ${scrollingUp ? "translate-y-0" : "-translate-y-full"}`}>
                <Navbar />
            </div>

            {/* Content with padding so it doesn't overlap Navbar */}
            <div className="max-w-4xl mx-auto p-6">
                <motion.h1
                    className="text-3xl font-semibold text-gray-900 text-center mb-6 mt-20"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    PRIVACY POLICY OF SPARKLEAURA
                </motion.h1>

                <motion.p
                    className="text-gray-700 mt-4 leading-relaxed text-justify"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    This Privacy Policy describes how House of Aura (the "Site", "we", "us", or "our")
                    collects, uses, and discloses your personal information when you visit, use our
                    services, or make a purchase from houseofauraworld.com (the "Site") or otherwise
                    communicate with us regarding the Site (collectively, the "Services"). For purposes
                    of this Privacy Policy, "you" and "your" means you as the user of the Services,
                    whether you are a customer, website visitor, or another individual whose information
                    we have collected pursuant to this Privacy Policy.
                </motion.p>

                <motion.p
                    className="text-gray-700 mt-4 leading-relaxed text-justify"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                >
                    Please read this Privacy Policy carefully. By using and accessing any of the
                    Services, you agree to the collection, use, and disclosure of your information as
                    described in this Privacy Policy. If you do not agree to this Privacy Policy, please
                    do not use or access any of the Services.
                </motion.p>

                <motion.p
                    className="text-gray-700 text-lg leading-relaxed mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <strong> Changes to This Privacy Policy</strong>
                </motion.p>
                <motion.p
                    className="text-gray-700 mt-4 leading-relaxed text-justify"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                >
                    We may update this Privacy Policy from time to time, including to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on the Site, update the "Last updated" date and take any other steps required by applicable law.
                </motion.p>

                <motion.p
                    className="text-gray-700 text-lg leading-relaxed mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <strong> How We Collect and Use Your Personal Information</strong>
                </motion.p>
                <motion.p
                    className="text-gray-700 mt-4 leading-relaxed text-justify"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                >
                    To provide the Services, we collect personal information about you from a variety of sources, as set out below. The information that we collect and use varies depending on how you interact with us.

In addition to the specific uses set out below, we may use information we collect about you to communicate with you, provide or improve or improve the Services, comply with any applicable legal obligations, enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.

What Personal Information We Collect
The types of personal information we obtain about you depends on how you interact with our Site and use our Services. When we use the term "personal information", we are referring to information that identifies, relates to, describes or can be associated with you. The following sections describe the categories and specific types of personal information we collect.

Information We Collect Directly from You
Information that you directly submit to us through our Services may include:

Contact details including your name, address, phone number, and email.
Order information including your name, billing address, shipping address, payment confirmation, email address, and phone number.
Account information including your username, password, security questions and other information used for account security purposes.
Shopping information including the items you view, put in your cart, saved into your account like loyalty points, reviews, referrals or gift cards, or purchases.
Loyalty points/product reviews/referrals/gift cards saved
Customer support information including the information you choose to include in communications with us, for example, when sending a message through the Services.
Some features of the Services may require you to directly provide us with certain information about yourself. You may elect not to provide this information, but doing so may prevent you from using or accessing these features.

Information We Collect about Your Usage
We may also automatically collect certain information about your interaction with the Services ("Usage Data"). To do this, we may use cookies, pixels and similar technologies ("Cookies"). Usage Data may include information about how you access and use our Site and your account, including device information, browser information, information about your network connection, your IP address and other information regarding your interaction with the Services.

Information We Obtain from Third Parties
Finally, we may obtain information about you from third parties, including from vendors and service providers who may collect information on our behalf, such as:

Companies who support our Site and Services, such as Shopify.
Our payment processors, who collect payment information (e.g., bank account, credit or debit card information, billing address) to process your payment in order to fulfill your orders and provide you with products or services you have requested, in order to perform our contract with you.
When you visit our Site, open or click on emails we send you, or interact with our Services or advertisements, we, or third parties we work with, may automatically collect certain information using online tracking technologies such as pixels, web beacons, software developer kits, third-party libraries, and cookies.
Any information we obtain from third parties will be treated in accordance with this Privacy Policy. Also see the section below, Third Party Websites and Links.

How We Use Your Personal Information
Providing Products and Services. We use your personal information to provide you with the Services in order to perform our contract with you, including to process your payments, fulfill your orders, to send notifications to you related to your account, purchases, returns, exchanges or other transactions, to create, maintain and otherwise manage your account, to arrange for shipping, facilitate any returns and exchanges and other features and functionalities related to your account.
Marketing and Advertising. We may use your personal information for marketing and promotional purposes, such as to send marketing, advertising and promotional communications by email, text message or postal mail, and to show you advertisements for products or services. This may include using your personal information to better tailor the Services and advertising on our Site and other websites.
Security and Fraud Prevention. We use your personal information to detect, investigate or take action regarding possible fraudulent, illegal or malicious activity. If you choose to use the Services and register an account, you are responsible for keeping your account credentials safe. We highly recommend that you do not share your username, password, or other access details with anyone else. If you believe your account has been compromised, please contact us immediately..
Communicating with You and Service Improvement. We use your personal information to provide you with customer support and improve our Services. This is in our legitimate interests in order to be responsive to you, to provide effective services to you, and to maintain our business relationship with you
Cookies
                </motion.p>

                <motion.p
                    className="text-gray-700 text-lg leading-relaxed mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <strong> Cookies</strong>
                </motion.p>
                <motion.p
                    className="text-gray-700 mt-4 leading-relaxed text-justify"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                >
                   Like many websites, we use Cookies on our Site. For specific information about the Cookies that we use related to powering our store with Shopify, see https://www.shopify.com/legal/cookies. We use Cookies to power and improve our Site and our Services (including to remember your actions and preferences), to run analytics and better understand user interaction with the Services (in our legitimate interests to administer, improve and optimize the Services). We may also permit third parties and services providers to use Cookies on our Site to better tailor the services, products and advertising on our Site and other websites.

Most browsers automatically accept Cookies by default, but you can choose to set your browser to remove or reject Cookies through your browser controls. Please keep in mind that removing or blocking Cookies can negatively impact your user experience and may cause some of the Services, including certain features and general functionality, to work incorrectly or no longer be available. Additionally, blocking Cookies may not completely prevent how we share information with third parties such as our advertising partners.
                </motion.p>

                <motion.p
                    className="text-gray-700 text-lg leading-relaxed mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <strong> How We Disclose Personal Information</strong>
                </motion.p>
                <motion.p
                    className="text-gray-700 mt-4 leading-relaxed text-justify"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                >
                   In certain circumstances, we may disclose your personal information to third parties for contract fulfillment purposes, legitimate purposes and other reasons subject to this Privacy Policy. Such circumstances may include:

With vendors or other third parties who perform services on our behalf (e.g., IT management, payment processing, data analytics, customer support, cloud storage, fulfillment and shipping).
With business and marketing partners to provide services and advertise to you. Our business and marketing partners will use your information in accordance with their own privacy notices.
When you direct, request us or otherwise consent to our disclosure of certain information to third parties, such as to ship you products or through your use of social media widgets or login integrations, with your consent.
With our affiliates or otherwise within our corporate group, in our legitimate interests to run a successful business.
In connection with a business transaction such as a merger or bankruptcy, to comply with any applicable legal obligations (including to respond to subpoenas, search warrants and similar requests), to enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.
We disclose the following categories of personal information and sensitive personal information about users for the purposes set out above in "How we Collect and Use your Personal Information.
                </motion.p>

                <motion.p
                    className="text-gray-700 text-lg leading-relaxed mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <strong> Children's Data</strong>
                </motion.p>
                <motion.p
                    className="text-gray-700 mt-4 leading-relaxed text-justify"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                >
                   The Services are not intended to be used by children, and we do not knowingly collect any personal information about children. If you are the parent or guardian of a child who has provided us with their personal information, you may contact us using the contact details set out below to request that it be deleted.

As of the Effective Date of this Privacy Policy, we do not have actual knowledge that we “share” or “sell” (as those terms are defined in applicable law) personal information of individuals under 16 years of age.
                </motion.p>

                <motion.p
                    className="text-gray-700 text-lg leading-relaxed mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <strong> Security and Retention of Your Information</strong>
                </motion.p>
                <motion.p
                    className="text-gray-700 mt-4 leading-relaxed text-justify"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                >
                   Please be aware that no security measures are perfect or impenetrable, and we cannot guarantee “perfect security.” In addition, any information you send to us may not be secure while in transit. We recommend that you do not use insecure channels to communicate sensitive or confidential information to us.

How long we retain your personal information depends on different factors, such as whether we need the information to maintain your account, to provide the Services, comply with legal obligations, resolve disputes or enforce other applicable contracts and policies.
                </motion.p>

                <motion.p
                    className="text-gray-700 text-lg leading-relaxed mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <strong> Your Rights</strong>
                </motion.p>
                <motion.p
                    className="text-gray-700 mt-4 leading-relaxed text-justify"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                >
                   Depending on where you live, you may have some or all of the rights listed below in relation to your personal information. However, these rights are not absolute, may apply only in certain circumstances and, in certain cases, we may decline your request as permitted by law.

Right to Access / Know: You may have a right to request access to personal information that we hold about you, including details relating to the ways in which we use and share your information.
Right to Delete: You may have a right to request that we delete personal information we maintain about you.
Right to Correct: You may have a right to request that we correct inaccurate personal information we maintain about you.
Right of Portability: You may have a right to receive a copy of the personal information we hold about you and to request that we transfer it to a third party, in certain circumstances and with certain exceptions.
Restriction of Processing: You may have the right to ask us to stop or restrict our processing of personal information.
Withdrawal of Consent: Where we rely on consent to process your personal information, you may have the right to withdraw this consent.
Appeal: You may have a right to appeal our decision if we decline to process your request. You can do so by replying directly to our denial.
Managing Communication Preferences: We may send you promotional emails, and you may opt out of receiving these at any time by using the unsubscribe option displayed in our emails to you. If you opt out, we may still send you non-promotional emails, such as those about your account or orders that you have made.
You may exercise any of these rights where indicated on our Site or by contacting us using the contact details provided below.

We will not discriminate against you for exercising any of these rights. We may need to collect information from you to verify your identity, such as your email address or account information, before providing a substantive response to the request. In accordance with applicable laws, you may designate an authorized agent to make requests on your behalf to exercise your rights. Before accepting such a request from an agent, we will require that the agent provide proof you have authorized them to act on your behalf, and we may need you to verify your identity directly with us. We will respond to your request in a timely manner as required under applicable law.
                </motion.p>

                <motion.p
                    className="text-gray-700 text-lg leading-relaxed mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <strong> Complaints</strong>
                </motion.p>
                <motion.p
                    className="text-gray-700 mt-4 leading-relaxed text-justify"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                >
                   If you have complaints about how we process your personal information, please contact us using the contact details provided below. If you are not satisfied with our response to your complaint, depending on where you live you may have the right to appeal our decision by contacting us using the contact details set out below, or lodge your complaint with your local data protection authority.
                </motion.p>

                <motion.p
                    className="text-gray-700 text-lg leading-relaxed mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <strong> International Users</strong>
                </motion.p>
                <motion.p
                    className="text-gray-700 mt-4 leading-relaxed text-justify"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                >
                  Please note that we may transfer, store and process your personal information outside the country you live in. Your personal information is also processed by staff and third party service providers and partners in these countries.

If we transfer your personal information out of Europe, we will rely on recognized transfer mechanisms like the European Commission's Standard Contractual Clauses, or any equivalent contracts issued by the relevant competent authority of the UK, as relevant, unless the data transfer is to a country that has been determined to provide an adequate level of protection.
                </motion.p>

                <motion.p
                    className="text-gray-700 text-lg leading-relaxed mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <strong>Contact</strong>
                </motion.p>
                <motion.p
                    className="text-gray-700 mt-4 leading-relaxed text-justify"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                >
                  Should you have any questions about our privacy practices or this Privacy Policy, or if you would like to exercise any of the rights available to you, please call or email us at sparkleaura@gmail.com or contact us at YOO Pune, Panchshil Towers, New Kalyani Nagar, Pune, Maharashtra 411006, India, IN.
                </motion.p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
