import "./Privacy.css";

const Privacy = () => {
  return (
    <div>
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <h4>Effective Date: 05/12/2023</h4>
        <ol className="privacy-ol">
          <li>
            <span className="list-heading">Data Protection:</span>
            <ul className="first-list list">
              <li>
                - Ambuvians Healthcare Pvt Ltd adheres to the highest standards of
                data protection.
              </li>
              <li>
                - Personal information is collected and processed in compliance
                with applicable data protection laws.
              </li>
            </ul>
          </li>
          <li>
            <span className="list-heading">Consent:</span>
            <ul className="second-list list">
              <li>
                - User consent is of utmost importance, and Ambuvians commits to
                seeking explicit permission before collecting or using personal
                information.
              </li>
              <li>- Users retain the right to withdraw consent at any time.</li>
            </ul>
          </li>
          <li>
            <span className="list-heading">Data Access and Ownership:</span>
            <ul className="third-list list">
              <li>
                - Users have the right to access and control their personal data
              </li>
              <li>
                - Ambuvians ensures that user data remains the property of the
                individual, emphasizing the importance of user control over
                their information.
              </li>
            </ul>
          </li>
          <li>
            <span className="list-heading">Effective Date:</span>
            <ul className="fourth-list list">
              <li>- This privacy policy is effective as of 05/12/2023</li>
            </ul>
          </li>
          <li>
            <span className="list-heading">Contact Information:</span>
            <ul className="fifth-list list">
              <li>
                - For inquiries or concerns regarding privacy, users are
                encouraged to contact Ambuvians Healthcare Pvt Ltd through the
                dedicated email address:
                <ul className="enquiry-lists">
                  <li>
                    Privacy Inquiries: <br />
                    <a href="mailto:contact@ambuvians.in">
                      privacy@ambuvians.in
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ol>

        <div className="privacy-note">
          <h3>
            By using Ambuvians Healthcare Pvt Ltd&apos;s website, you agree to
            the privacy outlined in this Privacy Policy. Ambuvians reserves the
            right to update or modify this policy as needed. Thank you for
            choosing Ambuvians Healthcare Pvt Ltd.
          </h3>
        </div>

        <div className="privacy-additional">
          <h2>Addditional Information:</h2>
          <ul>
            <li>
              <strong>Data Protection Commitment</strong>:The company emphasizes
              its commitment to the highest standards of data protection,
              indicating a proactive approach to safeguarding user information.
            </li>
            <li>
              <strong>Explicit Consent</strong>: The policy underscores the
              importance of obtaining explicit user consent before collecting or
              using personal information, and it acknowledges the user&apos;s
              right to withdraw consent at any time.
            </li>
            <li>
              <strong>User Rights</strong>: Users are granted the right to
              access and control their personal data, reinforcing a user-centric
              approach to data management.
            </li>
            <li>
              <strong>Policy Modification</strong>: Ambuvians reserves the right
              to update or modify the privacy policy, highlighting the dynamic
              nature of data protection and the company&apos;s commitment to
              staying current with privacy standards.
            </li>
          </ul>
        </div>
      </div>
      <div className="important-note">
        - This Privacy Policy provides users with transparency about how their
        data is handled, emphasizing user consent, control, and the
        company&apos;s commitment to maintaining privacy standards. Users are
        encouraged to review the policy and contact Ambuvians with any
        privacy-related inquiries or concerns.
      </div>
    </div>
  );
};

export default Privacy;
