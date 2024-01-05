import "./refund.css";

const RefundPolicy = () => {
    return (
        <div className="container">
            <div className="heading1">Refund Policy</div>
            <p>Date of Applicability: <strong>January 5, 2024</strong></p>

            <div className="heading1">1. Introduction</div>
            <p>Welcome to Ambuvians Healthcare Private Limited. We offer ambulance booking services with a commitment to provide
                timely and efficient services. This Refund Policy applies to our ambulance booking services only.</p>

            <div className="heading1">2. Refund Eligibility</div>
            <p>We offer refunds under the following circumstances:</p>
            <ul>
                <li>If an ambulance is not dispatched within the committed time frame.</li>
                <li>If there is a cancellation by Ambuvians Healthcare Private Limited due to unforeseen circumstances.</li>
                <li>If a customer has been wrongly charged due to a technical glitch.</li>
            </ul>

            <div className="heading1">3. Refund Process</div>
            <p>To request a refund, customers must:</p>
            <ol>
                <li>Contact our customer support team within 24 hours of the incident.</li>
                <li>Provide valid proof of the issue, such as booking details, transaction ID, and any other relevant
                    information.</li>
                <li>Wait for our team to review the request and approve the refund.</li>
                <li>Once approved, refunds will be processed within 7-10 business days through the original payment method.</li>
            </ol>

            <div className="heading1">4. Non-refundable Cases</div>
            <p>Refunds will not be provided in the following cases:</p>
            <ul>
                <li>If the customer fails to provide timely information or proof of the issue.</li>
                <li>If the customer cancels the ambulance booking after it has been dispatched.</li>
                <li>If the cancellation is due to incorrect or incomplete information provided by the customer.</li>
            </ul>

            <div className="heading1">5. Contact Us</div>
            <p>If you have any questions or concerns regarding our Refund Policy, please contact us at:</p>
            <div className="heading1">5. Contact Us</div>
<p>If you have any questions or concerns regarding our Refund Policy, please contact us at:</p>
<p>Email: <a href="mailto:support@ambuvianshealthcare.in">support@ambuvianshealthcare.in</a></p>
<p>Email: <a href="mailto:help@ambuvians.in">help@ambuvians.in</a></p>
<p>Phone: <a href="tel:+918630729931">+91 8630729931</a></p>
<p>Phone: <a href="tel:+917505853812">+91 7505853812</a></p>

            <p>We reserve the right to modify this Refund Policy at any time without prior notice. Please review this page
                periodically for any updates.</p>
        </div>
    );
};

export default RefundPolicy;
