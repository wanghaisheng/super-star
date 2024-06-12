import { FC } from "react";
import { BlogLayout } from "@github20k/components/blog/blog.layout";
import {NextSeo} from "next-seo";

export const PrivacyPolicyComponent: FC<{
  stargazers_count: number;
}> = (props) => {
  const { stargazers_count } = props;

  return (
    <>
      <NextSeo
          title={process.env.COURSE_NAME! + ' Privacy Policy'}
          description="Learn the best tips and trick to grow your GitHub library - Privacy Policy"
          canonical={process.env.COURSE_URL + '/privacy-policy'}
          additionalLinkTags={[{
            rel: 'alternate',
            type: 'application/rss+xml',
            href: 'https://gitroom.com/feed.xml',
          }]}
          openGraph={{
            url: process.env.COURSE_URL,
            title: process.env.COURSE_NAME,
            description: 'Learn the best tips and trick to grow your GitHub library',
            images: [{
              url: process.env.COURSE_URL + "/github-blog.png", width: 1200, height: 630, alt: process.env.COURSE_NAME, type: "image/png",
            }],
            siteName: process.env.COURSE_NAME,
          }}
          twitter={{
            handle: "@nevodavid", site: "@nevodavid", cardType: "summary_large_image",
          }}
      />
      <BlogLayout stargazers_count={stargazers_count} image="">
        <div className="blog-container">
          <h1>Privacy Policy for Gitroom</h1>

          <p>
            At Gitroom LLC. ({'"'}Company{'"'}, {'"'}we{'"'}, {'"'}us{'"'}, or {'"'}our{'"'}), we are committed
            to protecting the privacy and security of the personal information
            of our users. This Privacy Policy outlines how we collect, use, and
            safeguard the personal information collected on our website.
            By accessing or using our website, registering for the
            Website, and providing your personal information, you agree to the
            terms and conditions of this Privacy Policy.
          </p>

          <h2>1. Information We Collect</h2>

          <p>
            We may collect personal information from you when you register for
            the Gitroom platform, subscribe to our newsletter, make a payment, or interact
            with our website. The types of personal information we may collect
            include:
          </p>

          <ul>
            <li>Name, email address, and other contact information</li>
            <li>Payment information, including credit card details</li>
            <li>
              Information provided during the registration process, such as
              GitHub username
            </li>
            <li>
              Information provided in communication with us, such as emails or
              messages
            </li>
            <li>
              Automatically collected information, such as IP address, browser
              type, operating system, and cookies
            </li>
          </ul>

          <h2>2. Use of Information</h2>

          <p>
            We may use the personal information we collect for the following
            purposes:
          </p>

          <ul>
            <li>Sending newsletters and marketing communications</li>
            <li>Processing payments for via Stripe</li>
            <li>
              Responding to inquiries, providing customer support, and
              communicating.
            </li>
            <li>
              Monitoring and analyzing website usage, trends, and effectiveness
            </li>
            <li>
              Complying with applicable laws, regulations, and legal
              requirements
            </li>
          </ul>

          <h2>3. Sharing of Information</h2>

          <p>
            We do not sell, rent, or trade your personal information with third
            parties for their marketing purposes. However, we may share your
            personal information with the following entities or under the
            following circumstances:
          </p>

          <ul>
            <li>
              Service Providers: We may engage third-party service providers,
              such as payment processors or email marketing platforms, to assist
              us in providing and improving our services. These
              service providers may have access to your personal information
              only for the purpose of performing their services on our behalf
              and are obligated not to disclose or use it for any other purpose.
            </li>
            <li>
              Legal Requirements: We may disclose your personal information as
              required by law, regulation, legal process, or government request,
              or to protect our rights, property, or safety, as well as the
              rights, property, or safety of our users or others.
            </li>
            <li>
              Business Transfers: In the event of a merger, acquisition, sale,
              or transfer of assets, your personal information may be
              transferred to the acquiring entity or third party as part of the
              transaction.
            </li>
            <li>
              Third Party: Our primary purpose for using information is to publish your content on social networks you{"'"}ve authenticated with.<br />
              We may allow you to link your account on Gitroom LLC with an account on a third party social network platform, such as Facebook, Google and Pinterest and to transfer your information to and from the applicable third party platform.<br />
              Once you share your content to a social media platform, its use will be governed by that platform’s privacy policy.<br />
              For example, if you choose to connect your Youtube account to the Services, this connection uses Google’s API services, and the Google Privacy Policy located at <a href="https://policies.google.com/privacy" className="underline hover:font-bold">https://policies.google.com/privacy</a> will apply to you.
            </li>
          </ul>

          <h2>4. Cookies and Tracking Technologies</h2>

          <p>
            We may use cookies and other tracking technologies, such as web
            beacons, to collect information about your use of our website and to
            improve your experience. Cookies are small text files that are
            stored on your device when you visit a website. You can control the
            use of cookies at the individual browser level, but if you disable
            cookies, you may not be able to use certain features of our website.
          </p>

          <h2>5. Marketing Communications</h2>

          <p>
            If you have subscribed to our newsletter or provided us with your
            contact information, we may send you marketing communications about
            our services, promotions, and other relevant information.
            You can opt-out of receiving marketing communications from us by
            following the instructions provided in the communications or by
            contacting us directly.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We use third party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run Gitroom LLC. Although we own the code, databases, and all rights to the Gitroom LLC application, you retain all rights to your data. You can contact us at any time if you would like your data to be completely deleted from our servers.<br/>
            We are very concerned about safeguarding the confidentiality of your Personal Information. We employ administrative and electronic measures designed to appropriately protect your Personal Information against accidental or unlawful destruction, accidental loss, unauthorized alteration, unauthorized disclosure or access, misuse, and any other unlawful form of processing of the Personal Information in our possession.<br/>
            Please be aware that no security measures are perfect or impenetrable. We cannot guarantee that information about you will not be accessed, viewed, disclosed, altered, or destroyed by breach of any of our administrative, physical, and electronic safeguards, subject to requirements under applicable law to ensure or warrant information security.<br/>
            We will make any legally-required disclosures of any breach of the security, confidentiality, or integrity of your unencrypted electronically stored Personal Information to you via email or conspicuous posting on our Site in the most expedient time possible and without unreasonable delay, consistent with (i) the legitimate needs of law enforcement or (ii) any measures necessary to determine the scope of the breach and restore the reasonable integrity of the data system , and any other disclosures that may be required under applicable law.<br/>
            We also take measures to delete your Personal Information or keep it in a form that does not permit identifying you when this information is no longer necessary for the purposes for which we process it, unless we are required by law to keep this information for a longer period. When determining the retention period, we take into account various criteria, such as the type of products and services requested by or provided to you, the nature and length of our relationship with you, possible re-enrollment with our products or services, the impact on the services we provide to you if we delete some information from or about you, mandatory retention periods provided by law and the statute of limitations.<br/>
            If you have authorized us to access your Social Network account, you may revoke this access at any time. For example, if you have authorized us to access your information via the <strong>YouTube API services</strong>, in addition to our normal procedure for deleting stored data, you may revoke our access to your data via the Google security settings page, located at <a href="https://security.google.com/settings/security/permissions">https://security.google.com/settings/security/permissions</a>
          </p>

          <h2>7. Your Rights and Choices</h2>

          <p>
            You have certain rights and choices regarding your personal
            information. You may update, correct, or delete your personal
            information by contacting us. You may also opt-out
          </p>
        </div>
      </BlogLayout>
    </>);
};
