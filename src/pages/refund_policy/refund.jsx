import "./Privacy.css";

import React from 'react';

const RefundPolicy = () => {
    return (
        <div className="container">
            <h1>Refund Policy</h1>
            <p>Date of Applicability: <strong>January 5, 2024</strong></p>

            <h2>1. Introduction</h2>
            <p>Welcome to Ambuvians Healthcare Private Limited. We offer ambulance booking services with a commitment to provide
                timely and efficient services. This Refund Policy applies to our ambulance booking services only.</p>

            <h2>2. Refund Eligibility</h2>
            <p>We offer refunds under the following circumstances:</p>
            <ul>
                <li>If an ambulance is not dispatched within the committed time frame.</li>
                <li>If there is a cancellation by Ambuvians Healthcare Private Limited due to unforeseen circumstances.</li>
                <li>If a customer has been wrongly charged due to a technical glitch.</li>
            </ul>

            <h2>3. Refund Process</h2>
            <p>To request a refund, customers must:</p>
            <ol>
                <li>Contact our customer support team within 24 hours of the incident.</li>
                <li>Provide valid proof of the issue, such as booking details, transaction ID, and any other relevant
                    information.</li>
                <li>Wait for our team to review the request and approve the refund.</li>
                <li>Once approved, refunds will be processed within 7-10 business days through the original payment method.</li>
            </ol>

            <h2>4. Non-refundable Cases</h2>
            <p>Refunds will not be provided in the following cases:</p>
            <ul>
                <li>If the customer fails to provide timely information or proof of the issue.</li>
                <li>If the customer cancels the ambulance booking after it has been dispatched.</li>
                <li>If the cancellation is due to incorrect or incomplete information provided by the customer.</li>
            </ul>

            <h2>5. Contact Us</h2>
            <p>If you have any questions or concerns regarding our Refund Policy, please contact us at:</p>
            <p>Email: support@ambuvianshealthcare.com</p>
            <p>Phone: +1 123-456-7890</p>

            <p>We reserve the right to modify this Refund Policy at any time without prior notice. Please review this page
                periodically for any updates.</p>
        </div>
    );
};

export default RefundPolicy;
