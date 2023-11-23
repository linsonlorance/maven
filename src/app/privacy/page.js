import mavenlogo from "../content/images/content-images/logo-maven.svg";
import followfb from "../content/images/style-images/icon-facebook.svg";
import followinsta from "../content/images/style-images/icon-instagram.svg";
import followtwitter from "../content/images/style-images/icon-twitter.svg";
// import { Paper } from "@nextui-org/react";
import Link from "next/link";
export default function PrivacyPolicy() {
  return (
    <div className="policy-page">
      {/* Header section starts */}
      <header>
        <nav
          className="navbar bg-transparent position-absolute w-100 z-index-1"
          data-bs-spy="scroll"
          data-bs-target="#navbarNav"
        >
          <div className="container">
            <div className="row w-100 position-relative mx-auto">
              <div className="col-12 col-md-3 p-0">
                <Link className="navbar-brand" href="/#home">
                  <img
                    src={mavenlogo.src}
                    alt="Maven Logo"
                    width={59}
                    height={59}
                  />
                </Link>
              </div>
              <div className="col-12 col-md-9 p-0 d-none d-lg-block">
                <ul className="nav align-items-center justify-content-end h-100">
                  <li className="nav-item">
                    <Link className="nav-link" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/#how">
                      How it works
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#features">
                      Maven approved matches
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#testimonials">
                      Team Insight
                    </a>
                  </li>
                  <li className="nav-item purple-border-grad border-rounded-4">
                    <Link className="nav-link" href="/#contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <button
                className="navbar-toggler d-block d-lg-none"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto h-100">
                  <li className="nav-item">
                    <Link className="nav-link" href="/#home">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/#how">
                      How it works
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#features">
                      Maven approved matches
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#testimonials">
                      Team Insight
                    </a>
                  </li>
                  <li className="nav-item btn-contact">
                    <Link className="nav-link" href="/#contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Header section ends */}
      <main>
        {/* Banner slider section */}
        <section className="policy-page-section" id="privacy-policy">
          <div className="container bg-white p-5 mb-5">
            <h1>Privacy policy</h1>
            <p>Our Commitment To You</p>
            <p>
              At Maven Match, your privacy is a top priority. Your privacy is at
              the core of the way we design and build the services and products
              you know and love, so that you can fully trust them and focus on
              building meaningful connections.
            </p>
            <p>
              We appreciate that you put your trust in us when you provide us
              with your information and we do not take this lightly.
            </p>
            <p>Our commitment to privacy.</p>
            <p>
              We design all of our products and services with your privacy in
              mind. We involve experts from various fields, including legal,
              security, engineering, product design and others to make sure that
              our decisions are taken with the utmost respect for your privacy.
            </p>
            <p>Our commitment to transparency.</p>
            <p>
              Because we use many of the same online services you do, we know
              that insufficient information and overly complicated language are
              common issues in privacy policies. We take the exact opposite
              approach: we’re doing our best to write our Privacy Policy and
              related documents in plain language. We actually want you to read
              our policies and understand our privacy practices!
            </p>
            <p>Our commitment to security.</p>
            <p>
              We have teams dedicated to keeping your data safe and secure. We
              constantly update our security practices and invest in our
              security efforts to enhance the safety of your information.
            </p>
            <p>Privacy Policy</p>
            <p>
              Welcome to our Privacy Policy. Thank you for taking the time to
              read it.
            </p>
            <p>
              If you are a California resident, please see our California
              Privacy Statement, which supplements this Privacy Policy.
            </p>
            <p>
              We appreciate that you trust us with your information and we
              intend to always keep that trust. This starts with making sure you
              understand the information we collect, why we collect it, how it
              is used and your choices regarding your information. This Policy
              describes our privacy practices in plain language, keeping legal
              and technical jargon to a minimum.
            </p>
            <p>This Privacy Policy applies from November 1st, 2023.</p>
            <p>For California Consumers</p>
            <p>
              Please see our California Privacy Statement to learn about
              California privacy rights.
            </p>
            <p>
              1. Who We Are <br />
              If you live in the European Economic Area (“EEA”), the United
              Kingdom or Switzerland, the company responsible for your
              information under this Privacy Policy (the “data controller”) is:
            </p>
            <p>Data Protection Officer</p>
            <p>Maven Match LLC</p>
            <p>
              Maven Match
              <br />
              33180 N Lake Shore Dr
              <br />
              Grayslake, IL 60030
              <br />
              United States
            </p>
            <p>
              2. Where This Privacy Policy Applies:
              <br />
              This Privacy Policy applies to websites, apps, events and other
              services we operate under the Maven Match brand. For simplicity,
              we refer to all of these as our “services” in this Privacy Policy.
              To make it extra clear, we've added links to this Privacy Policy
              on all applicable services.
            </p>
            <p>
              Some services may require their own unique privacy policy. If a
              service has its own privacy policy, then that policy -- not this
              Privacy Policy -- applies.
            </p>
            <p>
              3. Information We Collect:
              <br />
              It goes without saying, we can’t help you develop meaningful
              connections without some information about you, such as basic
              profile details and the types of people you’d like to meet. We
              also collect information about your use of our services such as
              access logs, as well as information from third parties, like when
              you access our services through your social media account or when
              you upload information from your social media account to complete
              your profile. If you want additional info, we go into more detail
              below.
            </p>
            <p>
              Information you give us:
              <br />
              You choose to give us certain information when using our services.
              This includes:
            </p>
            <p>
              When you create an account, you provide us with at least your
              phone number and email address, as well as some basic details
              necessary for the service to work, such as your gender, date of
              birth, and who you’d like to connect with.
            </p>
            <p>
              When you complete your profile, you have the option to share your
              sexual orientation with us. Where you provide such elements to us,
              you consent to us using it for the purposes identified and as laid
              out in this Privacy Policy. You can also share additional
              information with us, such as details on your bio and your
              interests, as well as content such as photos and videos. To add
              certain content, like pictures or videos, you may allow us to
              access your camera or photo album.
            </p>
            <p>
              When you subscribe to a paid service or make a purchase directly
              from us (rather than through a platform such as iOS or Android),
              you provide us with information related to the purchases you make
              and our payment processors with information such as your debit or
              credit card number or other financial information.
            </p>
            <p>
              When you participate in surveys, focus groups or market studies,
              you give us your insights into our products and services,
              responses to our questions and testimonials.
            </p>
            <p>
              When you choose to participate in our promotions, events or
              contests, we collect the information that you use to register or
              enter.
            </p>
            <p>
              If you contact our customer care team, we collect the information
              you give us during the interaction.
            </p>
            <p>
              If you share with us information about other people (for example,
              if you use contact details of a friend for a given feature), we
              process this information on your behalf in order to complete your
              request.
            </p>
            <p>
              Of course, we also process your chats with other members as well
              as the content you publish to operate and secure the services, and
              to keep our community safe.
            </p>
            <p>Information we receive from others:</p>
            <p>
              In addition to the information you may provide us directly, we
              receive information about you from others, including:
            </p>
            <p>
              Members: Members may provide information about you as they use our
              services, for instance as they interact with you or if they submit
              a report involving you.
            </p>
            <p>
              Social Media: You may decide to share information with us through
              your social media account, for instance if you decide to create
              and log into your account via your social media or other account
              (e.g., Facebook, Google or Apple) or to upload onto our services
              information such as photos from one of your social media accounts
              (e.g., Instagram or Spotify).
            </p>
            <p>
              Other Partners: We may receive information about you from our
              partners where our ads are published on a partner’s service (in
              which case they may pass along details on a campaign’s success).
              Where legally allowed, we can also receive information about
              suspected or convicted bad actors from third parties as part of
              our efforts to ensure our members’ safety and security.
            </p>
            <p>
              Information generated or automatically collected when you use our
              services:
            </p>
            <p>
              When you use our services, this generates technical data about
              which features you’ve used, how you’ve used them and the devices
              you use to access our services. See below for more details.
            </p>
            <p>
              Usage Information: Using the services generates data about your
              activity on our services, for instance how you use them (e.g.,
              when you logged in, features you’ve been using, actions taken,
              information shown to you, referring webpages address and ads that
              you interacted with) and your interactions with other members
              (e.g., members you connect and interact with, and when you matched
              and exchanged messages with them).
            </p>
            <p>
              Device information: We collect information from and about the
              device(s) you use to access our services, including hardware and
              software information such as IP address, device ID and type, apps
              settings and characteristics, app crashes, advertising IDs (which
              are randomly generated numbers that you can reset by going into
              your device’ settings and, in some cases, disable entirely), and
              identifiers associated with cookies or other technologies that may
              uniquely identify a device or browser.
            </p>
            <p>
              Information collected by cookies and similar technologies: We use
              and may allow others to use cookies and similar technologies
              (e.g., web beacons, pixels, SDKs) to recognize you and/or your
              device(s). You may read our Cookie Policy for more information on
              why we use them and how you can better control their use.
            </p>
            <p>
              Some web browsers (including Safari, Internet Explorer, Firefox
              and Chrome) have a “Do Not Track” (“DNT”) feature that tells a
              website that a user does not want to have his or her online
              activity tracked. If a website that responds to a DNT signal
              receives a DNT signal, the browser can block that website from
              collecting certain information about the browser’s user. Not all
              browsers offer a DNT option and DNT signals are not yet uniform.
              For this reason, many businesses, including ours, do not currently
              respond to DNT signals.
            </p>
            <p>Other information with your consent:</p>
            <p>
              Precise geolocation data: If you give us your consent, we can
              collect your precise geolocation (latitude and longitude) from
              your device. The collection of your geolocation may occur in the
              background even when you aren’t using the services if the
              permission you gave us expressly permits such collection. If you
              decline permission for us to collect your precise geolocation, we
              will not collect it, and our services that rely on precise
              geolocation may not be available to you.
            </p>
            <p>
              Photo Verification data: If you choose to participate in our Photo
              Verification feature, we collect your face geometry data, which
              may be considered biometric data in some jurisdictions, to verify
              that you’re the real you. You can learn more about Photo
              Verification and how we process your face geometry data.
            </p>
            <p>
              ID + Photo Verification data: If you choose to participate in our
              combined ID + Photo Verification feature, we collect your face
              geometry data, which may be considered biometric data in some
              jurisdictions, as well as a copy of your ID, to verify that you’re
              the real you. You can learn more about ID + Photo Verification and
              how we process your data.
            </p>
            <p>
              Other information: We may collect other information with your
              permission, such as photos and videos (for instance, if you want
              to publish a photo or video or participate in streaming features
              on our services).
            </p>
            <p>
              4. How We Use Information:
              <br />
              The main reason we use your information is to deliver and improve
              our services. Additionally, we use your info to help keep you and
              our community safe, and to provide you with advertising that may
              be of interest to you. Read on for a more detailed explanation of
              the various reasons for which we use your information, together
              with practical examples.
            </p>
            <p>
              A. To administer your account and provide our services to you
              Create and manage your account
            </p>
            <p>
              Provide you with customer support and respond to your requests
              Communicate with you about our services
            </p>
            <p>
              Personalize pricing, offer discounts and other promotions, and
              complete your transactions Administer sweepstakes and contests
            </p>
            <p>B. To help you connect with other users</p>
            <p>
              Recommend you to other members and recommend other members to you
              Show members’ profiles to one another
            </p>
            <p>Enable members to search for and connect with members</p>
            <p>C. To provide new Maven Match services to you</p>
            <p>
              Register you and display your profile on new Maven Match features
              and apps Administer your account on these new features and apps
            </p>
            <p>
              D. To provide offers and operate advertising and marketing
              campaigns
            </p>
            <p>
              Perform and measure the effectiveness of advertising campaigns on
              our services and marketing our services off our platform
            </p>
            <p>
              Communicate with you about products or services that we believe
              may interest you
            </p>
            <p>E. To improve our services and develop new ones</p>
            <p>Administer focus groups, market studies and surveys</p>
            <p>
              Review interactions with customer care teams to improve our
              quality of service
            </p>
            <p>
              Understand how members typically use the services to improve them
              (for instance, we may decide to change the look and feel or even
              substantially modify a given feature based on how members react to
              it)
            </p>
            <p>
              Develop new features and services (for example, we may decide to
              build a new interests-based feature further to requests received
              from members)
            </p>
            <p>
              F. To prevent, detect and fight fraud and other illegal or
              unauthorized activities
            </p>
            <p>
              Find and address ongoing, suspected or alleged violations of our
              Terms of Use, notably through the review of reports and
              interactions between members
            </p>
            <p>
              Better understand and design countermeasures against violations of
              our Terms of Use
            </p>
            <p>
              Retain data related to violations of our Terms of Use to address
              the violation and prevent against recurrences
            </p>
            <p>
              Enforce or exercise our rights, for example our rights set out in
              our Terms of Use
            </p>
            <p>
              Communicate to individuals who submit a report, including what
              we’ve done as a result of their submission
            </p>
            <p>
              G. To ensure legal compliance Comply with legal requirements
              Assist law enforcement
            </p>
            <p>
              For information on how we process personal information through
              profiling and automated decision-making, please see our FAQ.
            </p>
            <p>
              To process your information as described in this Privacy Policy,
              we rely on the following legal bases:
            </p>
            <p>
              Provide our service to you: The reason we process your information
              for purposes A, B and C above is to perform the contract that you
              have with us. For instance, as you go about using our service to
              build meaningful connections, we use your information to maintain
              your account and your profile, make it viewable to other members
              and recommend other members to you and to otherwise provide our
              free and paid features to you and other members.
            </p>
            <p>
              Legitimate interests: We process your information for purposes D,
              E and F above, based on our legitimate interest. For instance, we
              analyze users’ behavior on our services to continuously improve
              our offerings, we suggest offers we think might interest you and
              promote our own services, we process information to help keep our
              members safe and we process data where necessary to enforce our
              rights, assist law enforcement and enable us to defend ourselves
              in the event of a legal action.
            </p>
            <p>
              Comply with applicable laws and regulations: We process your
              information for purpose G above where it is necessary for us to
              comply with applicable laws and regulations and evidence our
              compliance with applicable laws and regulations. For example, we
              retain traffic data and data about transactions in line with our
              accounting, tax and other statutory data retention obligations and
              to be able to respond to valid access requests from law
              enforcement. We also keep data evidencing consents members give us
              and decisions they may have taken to opt-out of a given feature or
              processing.
            </p>
            <p>
              Consent: If you choose to provide us with information that may be
              considered “special” or “sensitive” in certain jurisdictions, such
              as your sexual orientation, you’re consenting to our processing of
              that information in accordance with this Privacy Policy. From time
              to time, we may ask for your consent to collect specific
              information such as your precise geolocation or use your
              information for certain specific reasons. In some cases, you may
              withdraw your consent by adapting your settings (for instance in
              relation to the collection of our precise geolocation) or by
              deleting your content (for instance where you entered information
              in your profile that may be considered “special” or “sensitive”).
              In any case, you may withdraw your consent at any time by
              contacting us at the address provided at the end of this Privacy
              Policy.
            </p>
            <p>
              5. How We Share Information:
              <br />
              Since our goal is to help you make meaningful connections, the
              main sharing of members’ information is, of course, with other
              members. We also share some types of members’ information with
              service providers and partners who assist us in operating the
              services, with other Match Group companies for specified reasons
              as laid out below and, in some cases, legal authorities. Read on
              for more details about how your information is shared with others.
            </p>
            <p>
              With other members:
              <br />
              You share information with other members when you voluntarily
              disclose information on the service (including your public
              profile). Please be careful with your information and make sure
              that the content you share is stuff that you’re comfortable being
              visible.
            </p>
            <p>
              If you choose to limit the audience for all or part of your
              profile or for certain content or information about you, then it
              will be visible according to your settings.
            </p>
            <p>
              If someone submits a report involving you (such as a claim you
              violated our Terms of Use), we may communicate to the reporter
              actions, if any, we took as a result of their report.
            </p>
            <p>
              With our service providers and partners:
              <br />
              We use vendors to help us operate, distribute, market and improve
              our services, such as data hosting and maintenance, analytics,
              customer care, marketing, advertising, payment processing and
              security operations. We also share information with vendors who
              distribute and assist us in advertising our services. For
              instance, we may share limited information on you in hashed,
            </p>
            <p>non-human readable form to advertising vendors.</p>
            <p>
              We follow a strict vetting process prior to engaging any vendor or
              working with any partner. Our vendors and partners must agree to
              strict confidentiality obligations.
            </p>
            <p>
              Sharing functionality:
              <br />
              You may choose to share other members’ profiles and they may share
              yours with people outside of our services, using the sharing
              functionality.
            </p>
            <p>
              For corporate transactions:
              <br />
              We may transfer your information if we are involved, whether in
              whole or in part, in a merger, sale, acquisition, divestiture,
              restructuring, reorganization, dissolution, bankruptcy or other
              change of ownership or control.
            </p>
            <p>
              With law enforcement / when required by law:
              <br />
              We may disclose your information if reasonably necessary: (i) to
              comply with a legal process, such as a court order, subpoena or
              search warrant, government / law enforcement investigation or
              other legal requirements; (ii) to assist in the prevention or
              detection of crime (subject in each case to applicable law); or
              (iii) to protect the safety of any person.
            </p>
            <p>
              To enforce legal rights:
              <br />
              We may also share information: (i) if disclosure would mitigate
              our liability in an actual or threatened lawsuit; (ii) as
              necessary to protect our legal rights and legal rights of our
              members, business partners or other interested parties; (iii) to
              enforce our agreements with you; and (iv) to investigate, prevent,
              or take other action regarding illegal activity, suspected fraud
              or other wrongdoing.
            </p>
            <p>
              With your consent or at your request:
              <br />
              We may ask for your consent to share your information with third
              parties. In any such case, we will make it clear why we want to
              share the information.
            </p>
            <p>
              We may use and share non-personal information (meaning information
              that, by itself, does not identify who you are such as device
              information, general demographics, general behavioral data,
              location in de-identified form), as well as personal information
              in hashed, non-human readable form, under any of the above
              circumstances. We may also share this information with other Match
              Group companies and third parties (notably advertisers) to develop
              and deliver targeted advertising on our services and on websites
              or applications of third parties, and to analyze and report on
              advertising you see. We may combine this information with
              additional
            </p>
            <p>
              non-personal information or personal information in hashed,
              non-human readable form collected
            </p>
            <p>
              from other sources. More information on our use of cookies and
              similar technologies can be found in our Cookie Policy
            </p>
            <p>
              6. Cross-Border Data Transfers:
              <br />
              Sharing of information laid out in Section 5 involves cross-border
              data transfers to the United States of America and other
              jurisdictions that may have different laws about data processing.
              When we transfer personal information outside of the EEA, the
              United Kingdom, Switzerland or other countries which data
              protection laws have been deemed adequate by the European
              Commission or other competent governmental body, we use standard
              contract clauses (standard contractual clauses are commitments
              between companies transferring personal data, binding them to
              protect the privacy and security of your data) or other
              appropriate transfer mechanism. We are currently in the process of
              reviewing transfers to our vendors and associated legal basis
              further to the recent Court of Justice for the European Union’s
              ruling on transfers of personal data to the USA.
            </p>
            <p>
              7. Your Rights and Choices:
              <br />
              We want you to be in control of your information, so we want to
              remind you of the following options and tools available to you:
            </p>
            <p>
              Access / Update tools in the service: Tools and account settings
              can help you access, rectify or remove information that you
              provided to us and that’s associated with your account directly
              within the service. If you have any questions on those tools and
              settings, please contact our customer care team for help.
            </p>
            <p>
              Device permissions: Mobile platforms can have permission systems
              for specific types of device data and notifications, such as phone
              contacts, pictures, location services, push notifications and
              advertising identifiers. You can change your settings on your
              device to either consent or oppose the collection or processing of
              the corresponding information or the display of the corresponding
              notifications. Of course, if you do that, certain services may
              lose functionality.
            </p>
            <p>
              Uninstall: You can stop all information collection by an app by
              uninstalling it using the standard uninstall process for your
              device. Remember that uninstalling an app does NOT close your
              account. To close your account, please use the corresponding
              functionality on the service.
            </p>
            <p>
              Account closure: You can close your account by using the
              corresponding functionality directly on the service.
            </p>
            <p>
              We also want you to be aware of your privacy rights. Depending on
              where you live, you may have the right to:
            </p>
            <p>
              Access/know: You may have the right to request a copy of the
              information we keep about you, and in certain circumstances to
              receive this in a portable format. You can exercise your right to
              access directly within the service by putting in a request.
            </p>
            <p>
              Delete/erase: You may request that we delete the personal
              information we keep about you. You can exercise your right to
              delete by submitting a request.
            </p>
            <p>
              Correct/rectify/update: You can correct most information you
              provided to us by editing your profile directly in the service. If
              you believe the information we hold about you is inaccurate, you
              may contact us to rectify it.
            </p>
            <p>
              Object/restrict: You may also have the right to object to or
              request that we restrict certain processing. To do so, please
              contact us.
            </p>
            <p>
              For your protection and the protection of all of our members, we
              may ask you to provide proof of identity before we can answer the
              above requests. Keep in mind, we may reject requests, including if
              we are unable to authenticate you, if the request is unlawful or
              invalid, or if it may infringe on trade secrets or intellectual
              property or the privacy or other rights of someone else. If you
              wish to receive information relating to another member, such as a
              copy of any messages you received from them through our service,
              the other member will have to contact us to provide their written
              consent before the information is released. We may also ask them
              to provide proof of identity before we can answer the request.
              Also, we may not be able to accommodate certain requests to object
              to or restrict the processing of personal information, notably
              where such requests would not allow us to provide our service to
              you anymore. For instance, we cannot provide our service if we do
              not have your date of birth and thus cannot ensure that you are 18
              years of age or older.
            </p>
            <p>
              If you are a resident of Virginia, Colorado, or Connecticut, USA,
              if we deny your privacy request, you may be able to appeal by
              contacting us, and explicitly referencing “Privacy Request
              Appeal.” If you have concerns about the result of your appeal you
              may contact the attorney general for your state. Additionally,
              please note that we do not “sell” your personal data, or use it
              for “targeted advertising” or “profiling” in furtherance of
              decisions that produce legal or similarly significant effects, as
              those terms are defined by applicable law in your state, so no
              opt-out choice is necessary.
            </p>
            <p>
              In certain countries, including in the European Economic Area and
              the United Kingdom, you have a right to lodge a complaint with the
              appropriate data protection authority if you have concerns about
              how we process your personal information. You can find information
              about your data protection regulator in the European Economic Area
              here, and in the United Kingdom here. The data protection
              authority you can lodge a complaint with may be that of your
              habitual residence, where you work or where an alleged
              infringement took place.
            </p>
            <p>
              8. How Long We Retain Your Information:
              <br />
              We keep your personal information only as long as we need it for
              legitimate business purposes (as laid out in Section 4) and as
              permitted by applicable law. If you decide to stop using our
              services, you can close your account and your profile will stop
              being visible to other members. Note that we will close your
              account automatically if you are inactive for a period of two
              years. After your account is closed, we will delete your personal
              information, as laid out below:
            </p>
            <p>
              To protect the safety and security of our members, we implement a
              safety retention window of three months following account closure,
              or one year following an account ban. During this period, we keep
              your information in the event that it might be necessary to
              investigate unlawful or harmful conducts. The retention of
              information during this safety retention window is based on our
              legitimate interest as well as that of potential third-party
              victims.
            </p>
            <p>
              Once the safety retention window elapses, we delete your data and
              only keep limited information for specified purposes, as laid out
              below:
            </p>
            <p>
              a) We maintain limited data to comply with legal data retention
              obligations: in particular, we keep transaction data for 10 years
              to comply with tax and accounting legal requirements, credit card
              information for the duration the user may challenge the
              transaction and “traffic data” / logs for one year to comply with
              legal data retention obligations. We also keep records of consents
              members give us for five years to evidence our compliance with
              applicable law.
            </p>
            <p>
              b) We maintain limited information on the basis of our legitimate
              interest: we keep customer care records and supporting data as
              well as imprecise location of download/purchase for five years to
              support our customer care decisions, enforce our rights and enable
              us to defend ourselves in the event of a claim, information on the
              existence of past accounts and subscriptions, which we delete
              three years after the closure of your last account to ensure
              proper and accurate financial forecasting and reporting, profile
              data for one year in anticipation of potential litigation, for the
              establishment, exercise or defense of legal claims, and data
              necessary to prevent members who were banned from opening a new
              account, for as long as necessary to ensure the safety and vital
              interests of our members.
            </p>
            <p>
              c) Finally, we maintain information on the basis of our legitimate
              interest where there is an outstanding or potential issue, claim
              or dispute requiring us to keep information (in particular if we
              receive a valid legal subpoena or request asking us to preserve
              data (in which case we would need to keep the data to comply with
              our legal obligations) or if data would otherwise be necessary as
              part of legal proceedings).
            </p>
            <p>
              9. No Children Allowed:
              <br />
              Our services are restricted to individuals who are 18 years of age
              or older. We do not permit individuals under the age of 18 on our
              platform. If you suspect that a member is under the age of 18,
              please use the reporting mechanism available on the service.
            </p>
            <p>
              10. Job Candidates, Contractors and Vendor Representatives:
              <br />
              We process the personal information of our job candidates,
              contractors and vendor representatives, as part of our recruitment
              and talent management operations and our management of the
              services that contractors and vendors provide to us. If you are a
              job candidate, contractor or vendor representative of ours,
              certain relevant terms of this Privacy Policy apply to our
              processing of your personal information, including the sections of
              this Privacy Policy that discuss the entity that is responsible
              for the processing of your personal
            </p>
            <p>
              information, transfers of personal information, rights you may
              have under applicable law, how to contact us and
              California-specific information.
            </p>
            <p>
              If you are a job applicant, the personal information we process
              about you may vary depending on the job you seek but typically
              includes what you provide to us as part of your job application as
              well as professional qualifications, background and reference
              information that recruiters or other third parties share with us.
              We use this information to support the recruitment process, which
              may lead to an employment contract. For contractors and vendor
              representatives, we may process identification information and
              work-related information, as necessary to manage our relationship
              with you and your employer, which is necessary for the performance
              of the services agreement, and to establish, exercise or defend
              potential legal claims. We may share personal information with
              service providers that assist us with recruitment and technical
              data processing operations. We keep your personal information only
              as long as necessary for those purposes.
            </p>
            <p>
              11. Privacy Policy Changes
              <br />
              Because we’re always looking for new and innovative ways to help
              you build meaningful connections and strive to make sure
              explanations about our data practices remain up-to-date, this
              policy may change over time. We will notify you before any
              material changes take effect so that you have time to review the
              changes.
            </p>
            <p>
              12. How to Contact Us:
              <br />
              If you have questions about this Privacy Policy, you may contact
              us here: Online: here
            </p>
            <p>By post:</p>
            <p>
              Data Protection Officer <br />
              Maven Match LLC
            </p>
            <p>
              Maven Match
              <br />
              33180 N Lake Shore Dr <br />
              Grayslake, IL 60030 <br />
              United States
            </p>
            <p>
              For more information on how to contact the data protection
              officer, please click{" "}
              <Link href="https://mavenmatchmaker.com/">
                <u>here</u>
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Footer section */}
        <footer className="bg-purple-dark2 py-5">
          <div className="container">
            <div className="accordion d-md-none" id="footerAccordion">
              <div className="card">
                <div className="card-header" id="servicesHeading">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#servicesCollapse"
                      aria-expanded="true"
                      aria-controls="servicesCollapse"
                    >
                      Services
                    </button>
                  </h5>
                </div>
                <div
                  id="servicesCollapse"
                  className="collapse show"
                  aria-labelledby="servicesHeading"
                  data-parent="#footerAccordion"
                >
                  <div className="card-body">
                    <ul>
                      <li>
                        <Link href="/#home">Home</Link>
                      </li>
                      <li>
                        <Link href="/#how">How it works</Link>
                      </li>
                      <li>
                        <Link href="/#matches">Maven approved matches</Link>
                      </li>
                      <li>
                        <Link href="/#more">Note from team</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="quickLinksHeading">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#quickLinksCollapse"
                      aria-expanded="false"
                      aria-controls="quickLinksCollapse"
                    >
                      Quick Links
                    </button>
                  </h5>
                </div>
                <div
                  id="quickLinksCollapse"
                  className="collapse"
                  aria-labelledby="quickLinksHeading"
                  data-parent="#footerAccordion"
                >
                  <div className="card-body">
                    <ul>
                      <li>
                        <Link href="/#">FAQ</Link>
                      </li>
                      <li>
                        <Link href="/#">Terms and conditions</Link>
                      </li>
                      <li>
                        <Link href="/#">Privacy policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="contactUsHeading">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#contactUsCollapse"
                      aria-expanded="false"
                      aria-controls="contactUsCollapse"
                    >
                      Contact Us
                    </button>
                  </h5>
                </div>
                <div
                  id="contactUsCollapse"
                  className="collapse"
                  aria-labelledby="contactUsHeading"
                  data-parent="#footerAccordion"
                >
                  <div className="card-body">
                    <ul>
                      <li>
                        <Link href="tel:(555) 555-1234">(555) 555-1234</Link>
                      </li>
                      <li>
                        <Link href="mailto:mavenmatch@gmail.com">
                          mavenmatch@gmail.com
                        </Link>
                      </li>
                      <li>4016 Doane Street, Fremont CA 94538</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <Link className="logo-image" href="/#home">
                  <img
                    src={mavenlogo.src}
                    alt="Maven Logo"
                    width={56}
                    height={56}
                  />
                </Link>
                <p className="text-white">
                  Experience meaningful connections with a touch of trusted
                  matchmaking.
                </p>
              </div>
              <div className="col-md-3 d-none d-md-block">
                <h4>Services</h4>
                <ul>
                  <li>
                    <Link href="/#home">Home</Link>
                  </li>
                  <li>
                    <Link href="/#how">How it works</Link>
                  </li>
                  <li>
                    <Link href="/#matches">Maven approved matches</Link>
                  </li>
                  <li>
                    <Link href="/#more">Note from team</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 d-none d-md-block">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <Link href="/#">FAQ</Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href="/terms"
                      rel="noopener noreferrer"
                    >
                      Terms and conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href="/privacy"
                      rel="noopener noreferrer"
                    >
                      Privacy policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 d-none d-md-block">
                <h4>Contact Us</h4>
                <ul>
                  <li>
                    <Link href="tel:(555) 555-1234">(555) 555-1234</Link>
                  </li>
                  <li>
                    <Link href="mailto:mavenmatch@gmail.com">
                      mavenmatch@gmail.com
                    </Link>
                  </li>
                  <li>4016 Doane Street, Fremont CA 94538</li>
                </ul>
              </div>
            </div>
            <div className="footer-social-links">
              <p className="text-white">Follow us</p>
              <ul class="d-flex gap-16">
                <li>
                  <a href="#" class="social-icon">
                    <img
                      src={followfb.src}
                      alt="Facebook"
                      width="23"
                      height="23"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" class="social-icon">
                    <img
                      src={followinsta.src}
                      alt="Instagram"
                      width="23"
                      height="23"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" class="social-icon">
                    <img
                      src={followtwitter.src}
                      alt="Twitter"
                      width="23"
                      height="23"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <hr className="bg-purple mt-3" />
            <div className="footer-copyright text-center text-md-right mt-2">
              <p>© 2023 MAVEN MATCH | ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
