import "./Terms.css";

const Terms = () => {
  return (
    <div>
      <div className="terms-container">
        <h1>Terms and Conditions</h1>
        <h4>Effective Date: 04/12/2023</h4>
        <ol className="terms-ol">
          <li>
            <span className="list-heading">Security and Data Assurance:</span>
            <ul className="first-list list">
              <li>
                - Ambuvians Healthcare Pvt Ltd is committed to the security and
                confidentiality of user data.
              </li>
              <li>
                - Our Software Requirements Specification (SRS) includes robust
                security measures to safeguard user accounts and personal
                information.
              </li>
            </ul>
          </li>
          <li>
            <span className="list-heading">Data Ownership:</span>
            <ul className="second-list list">
              <li>
                - User data belongs solely to the individual, and Ambuvians will
                not share, sell, or disclose personal information without
                explicit consent.
              </li>
              <li>
                - Healthcare data is treated with the highest standards of
                confidentiality.
              </li>
            </ul>
          </li>
          <li>
            <span className="list-heading">Effective Date:</span>
            <ul className="third-list list">
              <li>
                - This security and data assurance declaration is effective as of
                05/12/2023.
              </li>
            </ul>
          </li>
          <li>
            <span className="list-heading">Contact Information:</span>
            <ul className="fourth-list list">
              <li>
                - For inquiries, assistance, or security-related concerns, please
                contact us:
                <ul className="enquiry-lists">
                  <li>
                    <span className="list-heading">General Inquiries:</span> <br />
                    <a href="mailto:contact@ambuvians.in">
                      contact@ambuvians.in
                    </a>
                  </li>
                  <li>
                    <span className="list-heading">Support:</span> <br />
                    <a href="mailto:help@ambuvians.in">help@ambuvians.in</a>
                  </li>
                  <li>
                    <span className="list-heading">Complaints:</span> <br />
                    <a href="mailto:complain@ambuvians.in">
                      complain@ambuvians.in
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ol>

        <div className="terms-additional">
          <h2>Addditional Information:</h2>
          <ul>
            <li>
              <strong>User Agreement</strong>: By accessing and using Ambuvians
              Healthcare Pvt Ltd website, users agree to abide by the stated
              terms and conditions.
            </li>
            <li>
              <strong>Modification Rights</strong>: Ambuvians reserves the right
              to update or modify these terms at any time. Users are encouraged
              to periodically review the terms and conditions for any changes.
            </li>
          </ul>

          <h2>Implications:</h2>
          <ul>
            <li>
              The company prioritizes user data security and assures users that
              robust measures are in place to safeguard their personal
              information.
            </li>
            <li>
              Users have control over their data, and the company is committed
              to not sharing or selling user information without explicit
              consent.
            </li>
            <li>
              The terms are effective as of a specified date, indicating a
              commitment to these principles from that point onward.
            </li>
            <li>
              Clear contact information is provided, allowing users to reach out
              for inquiries, support, or to address any complaints.
            </li>
            <li>
              Users are reminded of their responsibility to stay informed about
              any updates or modifications to the terms and conditions.
            </li>
          </ul>

          <h2>User Responsibility:</h2>
          <ul>
            <li>
              Users are responsible for understanding and complying with the
              terms and conditions.
            </li>
            <li>
              Periodic review of the terms is recommended, as the company may
              make changes over time.
            </li>
          </ul>
        </div>
      </div>
      <div className="important-note">
        - By accessing and using Ambuvians Healthcare Pvt Ltd website, you agree
        to abide by these terms and conditions. Ambuvians reserves the right to
        update or modify these terms at any time. Users are encouraged to review
        this page periodically for any changes.
      </div>
    </div>
  );
};

export default Terms;