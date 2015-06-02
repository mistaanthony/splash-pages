import React from 'react';
import Translation from '../../../components/translation/translation';
import Link from '../../../components/link/link';
import Href from '../../../components/href/href';

export default class LegalMerchantsEn extends React.Component {
  displayName = 'LegalMerchantsEn'

  render() {
    return (
      <Translation locales='en'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Merchant agreement</h2>
        <p className='para'>
          GoCardless enables suppliers to let their customers pay securely by direct
          debit over the internet. We also allow suppliers to monitor the payments
          that they receive through GoCardless. This document sets out the terms of
          the contract ('<em>Contract</em>') between you, the supplier, and GoCardless for
          the payment services provided by GoCardless. These terms and conditions
          are available on our website and you may ask for a copy of them at any
          time while you have an account with us.
        </p>
        <p className='para'>
          Any contract for the supply of goods and services between you and your
          customer is not affected by this Contract. GoCardless is not involved in
          the actual supply of any goods and services to the customer and any
          disputes should be resolved directly between you and the customer.
          If there is any difficulty with the goods or services you provide, you
          remain liable to the customer directly.
        </p>
        <p className='para u-text-heavy'>
          GoCardless cannot initiate refunds in respect of any goods and services
          you supply. We can, however, process them when you ask us to do so.
          If your customer lawfully cancels a payment in accordance with the
          GoCardless customer terms and conditions you must seek payment direct
          from your customer for any goods or services that you have provided to them.
        </p>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Your GoCardless Account
        </h3>
        <p className='para'>
          When you sign up to GoCardless, you will need to provide us with certain
          information to create a GoCardless account. We will have to perform some
          identity checks on you.
        </p>
        <p className='para'>
          By setting up your GoCardless account, you consent to us processing
          payments as detailed in this document (see <a href='#processing-payments'
            className='u-link-color-p u-text-underline'>Processing payments through
            GoCardless</a> and <a href='#receiving-payouts'
            className='u-link-color-p u-text-underline'>Receiving payouts from
            GoCardless</a>). We may apply limits for any payment transactions that
          take place through your GoCardless account.  We will notify you of any
          limits and any changes that we make to them.
        </p>
        <p className='para'>
          You are prohibited from doing any of the following:
        </p>
        <ul className='list'>
          <li>
            selling, transferring or otherwise allowing third parties to access
            your GoCardless Account except as set out under 'Permitted third party
            uses of your account'; and
          </li>
          <li>
            collecting any customer's personal data that is accessed through
            your use of GoCardless without that customer's express permission
          </li>
        </ul>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Permitted third party uses of your account
        </h3>
        <p className='para'>
          You may permit third parties you have contracted to use your account
          details in relation to that third party's provision of services to you,
          but you are responsible for all their actions and any misuse of the
          details as if it was your own.
        </p>
        <p className='para u-text-heavy'>
          In the event that you fail to comply with the terms of the Contract, or
          any instructions for use provided by GoCardless, we shall have no
          responsibility or liability to you for the performance of payment services.
        </p>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          <span id='security'></span>
          Security of your GoCardless Account
        </h3>
        <p className='para'>
          You are responsible for the use of your account details by any other person
          to whom you have provided them or enabled their access to them. You must
          take reasonable steps to keep your account details safe and prevent fraudulent
          use of your account (and must ensure that any person to whom you disclose
            your account details takes the same reasonable steps).
        </p>
        <p className='para'>
          Such precautions should include keeping your passwords, other access codes
          and any account related paperwork relating to the GoCardless payment services
          (<em>“User Details”</em>) in a safe place, confidential and secure from all
          unauthorised persons, not writing down your email address with password and
          taking reasonable care to ensure that other people do not oversee or hear you
          using your personal account details. You must inform us without undue delay on
          becoming aware of the loss, theft, misappropriation or unauthorised use of your
          account details. You will immediately terminate the access rights of any user
          who ceases to act in an authorised capacity on your behalf for any reason, including,
          for example, because of a change in employment status. Where someone uses your
            account details to access your account, we will assume that they have authority
          to do so from you unless shown otherwise.
        </p>
        <p className='para'>
          You shall be solely responsible for (i) updating your passwords for access to the
          GoCardless payment services periodically, and (ii) creating passwords that are
          reasonably 'strong' under the circumstances.
        </p>
        <p className='para'>
          The User Details are the property of GoCardless and may be immediately revoked
          or terminated by GoCardless if you share the same with any third party, or
          otherwise breach the Contract.
        </p>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          The GoCardless API
        </h3>
        <p className='para'>
          GoCardless may make available to you its application programming interface
          (<em>'API'</em>), integration and user guides and software development kit
          (<em>'GoCardless Documentation'</em>). Where it does, you shall comply with
          the GoCardless Documentation in connection with the integration and use of APIs.
        </p>
        <p className='para'>
          You are prohibited from interfacing with the GoCardless API in a way which
          GoCardless has stated is not permitted in the current version of the GoCardless
          Documentation or the publicly available documentation relating to the system.
        </p>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          <span id='processing-payments'></span>
          Processing payments through GoCardless
        </h3>
        <p className='para'>
          Upon receipt of a payment order from your customer we will process the
          payment, by direct debit, for the amount that your customer has agreed
          to pay for the relevant goods and services in accordance with the GoCardless
          customer terms and conditions.
        </p>
        <p className='para'>
          We transmit each payment order made through a GoCardless account to the
          customer's bank to enable the settlement of each direct debit to occur on
          the agreed due date as calculated in accordance with these terms. Once a
          customer has a GoCardless account and direct debit mandate set up, it usually
          takes a maximum of 3 business days for us to receive money from the customer's
          bank account. If they are setting up an account as part of the payment, it
          can take an extra 2-4 business days to set up their direct debit mandate.
        </p>
        <p className='para'>
          Funds collected from your customer's bank will be received into an account
          separate from our main operating accounts and allocated to your name within
          the GoCardless payment system.
        </p>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          <span id='receiving-payouts'></span>
          Receiving payouts from GoCardless
        </h3>
        <p className='para'>
          Any funds that we receive from your customers will be allocated to your GoCardless
          account immediately before being paid out as detailed in this Contract.  By entering
          into this Contract you are providing us with a payment instruction requesting us to
          execute a payment order seven business days after every transaction. The amount
          of funds held within your GoCardless account attributable to that transaction will
          be transferred to the bank account that you have nominated for these purposes,
          after we have made any authorised deductions (see <a href='#deductions'
            className='u-link-color-p u-text-underline'>Deductions, payments and invoicing</a>).
        </p>
        <p className='para'>
          You are not entitled to, and will not receive, any interest in relation to funds
          that are associated with your account within the GoCardless payment system.
        </p>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Cancelling payment transactions
        </h3>
        <p className='para'>
          If for any reason you would like to cancel a payment from GoCardless account to
          you, you can do so at any time until the end of the business day before the day
          agreed to make the payment.  You can cancel by notifying us by email
          to <Href to='email'
          className='u-link-color-p u-text-underline'
          itemProp='email' /> or by phone using the contact
          details provided on the GoCardless website.
        </p>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          <span id='deductions'></span>
          Deductions, payments and invoicing
        </h3>
        <p className='para'>
          You agree to pay GoCardless the applicable fees relating to each payment processed
          by GoCardless as notified to you from time to time. Our fees consist of any funds
          which accrue on the funds relating to any particular payment together with the fees
          set out on the GoCardless website our <Link to='pricing'
          className='u-link-color-p u-text-underline'>pricing section</Link>. All fees are due
          immediately and are non-refundable, except as otherwise expressly noted herein. You
          authorise GoCardless to deduct the applicable fees in respect of each payment when the
          relevant payment is made and funds are transferred from your GoCardless payment account
          to your bank account.
        </p>
        <p className='para'>
          In addition to the fees mentioned in the above paragraph, GoCardless may also deduct
          amounts that take into account the following when a payment is made from your GoCardless
          payment account to your bank account.
        </p>
        <ul className='list'>
          <li>
            Any applicable Affiliate Fees (explained in further detail below).
          </li>
          <li>
            Any refunds that we have processed at your request.
          </li>
          <li>
            Any chargebacks being made by your customers under the Direct Debit Guarantee or otherwise.
          </li>
          <li>
            Any fees we have had to refund or costs we have had to incur as a result of payment
            transactions being cancelled.
          </li>
          <li>
            Any unauthorised or incorrectly executed payment transactions notified to us by the
            customer plus any related interest and charges.
          </li>
        </ul>
        <p className='para'>
          If you are using a service or product provided by another party (an <em>'Affiliate'</em>),
          such as a software provider or referral website which facilitates your use of GoCardless,
          they may be due an additional fee (an <em>'Affiliate Fee'</em>) from you over and above our fee.
          If there is an Affiliate Fee, before you sign up to use the Affiliate's product or services,
          the Affiliate will notify you of any applicable Affiliate Fees. We will deduct Affiliate Fees
          from any sums payable to you and pay them to the relevant Affiliates.
        </p>
        <p className='para'>
          Each time we make a payment to you, an entry for 'GoCardless' will appear on your bank statement
          along with a reference number that is specific to that individual payment transaction. You can
          log in to your account at any time on the GoCardless website to view a summary of the payments
          we have made to you.
        </p>
        <p className='para'>
          If the amounts which we are entitled to deduct (as set out above) exceed the amounts you are
          due to be paid by GoCardless, we may invoice you the difference. The amounts set out in any such
          invoice are due immediately and payable no later than 14 days after the date of the invoice. Where
          the amounts which GoCardless is entitled to deduct only arise after the Contract has been terminated,
          such as a chargeback under the Direct Debit Guarantee which is only made after termination, GoCardless
          is still entitled to invoice such sums to you notwithstanding termination of the Contract.
        </p>


        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Unauthorised payment transactions
        </h3>
        <p className='para'>
          Upon becoming aware of any unauthorised or incorrectly executed payment transaction involving funds
          connected with your use of GoCardless (including any fraudulent payments/attempted payments out of
          those funds to you or others), you must notify us by email to <Href to='email'
          className='u-link-color-p u-text-underline' itemProp='email' /> or by phone
          using the contact details provided on the GoCardless website.
        </p>
        <p className='para'>
          In relation to unauthorised payment transactions, you must contact us as set out above without
          undue delay and in any event no later than 13 months after the date of the relevant payment transaction
          from your account. Following any investigations that we may undertake, where you have notified us in the
          above circumstances we will immediately arrange for the refund of the amount of the unauthorised payment
          transaction to you and any related interest and charges. We will not be liable to make or arrange any further
          payments to you.
        </p>
        <p className='para'>
          Where an unauthorised payment transaction is made using your GoCardless account you may be liable (up to a
          maximum of £50.00 unless you have acted fraudulently, have not used your GoCardless account in accordance
          with these terms and conditions either intentionally or otherwise through your fault, where you may be liable
          for greater sums) for any losses incurred as a result of:
        </p>
        <ul className='list'>
          <li>
            unauthorised payment transactions arising from the use of your GoCardless account details when these have
            been lost or stolen; or
          </li>
          <li>
            where you have failed to keep your GoCardless account details safe (outlined under <Link to='security'
            className='u-link-color-p u-text-underline'>Security of your GoCardless account</Link>).
          </li>
        </ul>
        <p className='para'>
          However, except where you have acted fraudulently, you will not be liable for any losses incurred in respect
          of unauthorised payment transactions:
        </p>
        <ul className='list'>
          <li>
            arising after you have notified us of the loss, theft, misuse, misappropriation or unauthorised use of
            your GoCardless account details;
          </li>
          <li>
            where we have failed to provide you with the appropriate means to notify us (unless this is due to
              abnormal and unforeseen circumstances beyond our control or as a result of our compliance with European
              or national law); or
          </li>
          <li>
            where your account details have been used in connection with certain types of distance contract.
          </li>
        </ul>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Suspected Fraud/Illegal Activity by your Customers
        </h3>
        <p className='para'>
          Occasionally, even the most cautious suppliers can become aware of acts by customers which may appear to
          be fraudulent, or connected with some other type of illegal activity, such as money laundering or terrorist
          financing. We ask that you notify us of any such suspicions or concerns that these types of issues may affect
          any payments to you by email to <Href to='email'
          className='u-link-color-p u-text-underline' itemProp='email' /> or by phone
          using the contact details provided on the GoCardless website.
        </p>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Incorrectly executed payment transactions
        </h3>
        <p className='para'>
          If you confirm to us that a payment from your account was incorrectly executed we will make immediate efforts
          to trace the payment transaction and notify you of the outcome.  Where we are liable, we will (i) without undue
          delay refund the amount of the incorrectly executed transaction and restore the debited payment account to the
          state in which it would have been had the incorrectly executed payment transactions not taken place, or (ii)
          in the case of direct debit payment re-transmit the direct debit, unless in either case we can prove that the
          recipient's payment service provider (e.g. the recipient's banks) received the amount of the payment transaction,
          in which case the recipient's payment service provider is liable to the recipient for the correct execution of
          the payment transaction.
        </p>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Possible Additional Restrictions
        </h3>
        <p className='para'>
          We are entitled to immediately suspend or withdraw your right to make payment transactions through your
          GoCardless account where we have reasonable grounds to believe that there may be a breach in the security of
          your account details, we suspect the unauthorised or fraudulent use of your account details or where we are
          required by law.
        </p>
        <p className='para'>
          Where we decide to take the above action, we will write to you in advance informing you that we intend to do
          so and the reasons for our actions. Where this is not possible we will inform you at the earliest opportunity
          and in any event within the time that you would expect any payments that are made through GoCardless to be
          processed. We will not inform you where this would compromise our reasonable security measures or is otherwise
          unlawful. Where the reasons for our actions then cease to exist, we will then either reinstate your access to
          your GoCardless account or issue you with new account details as soon as practicable.
        </p>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Restricted Activities
        </h3>
        <p className='para'>
          GoCardless does not condone the use of its system for certain purposes, as set out on our <Link to='legal_restrictions'
          className='u-link-color-p u-text-underline'>Restricted Activities page</Link> from time to time. If you engage or attempt
          to engage in those activities using GoCardless, we reserve the right to suspend or withdraw all or some of our services to you.
        </p>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Cancellations made by the Customer
        </h3>
        <p className='para'>
          Your customer is entitled to cancel their payment instruction any time before 6pm on the business day two business
          days before the day agreed to take the payment from their bank account.
        </p>
        <p className='para'>
          In the event that your customer cancels a payment as set out in the paragraph above GoCardless shall not be obliged
          to make payment to you in respect of the cancelled transaction. GoCardless will inform you (by making the information
            available when you log in to view your account or through the API) of any cancelled payment transaction as soon as
          reasonably practicable and in any event within 1 working day.
        </p>
        <p className='para'>
          Payments received by GoCardless are made under the UK Direct Debit Scheme. In the event that any of your customers
          do cancel their direct debit mandate we will be unable to process any payments that your customers may have committed
          to pay you through GoCardless. We will not be obliged to pay you those sums, but will notify you of the cancellation
          as soon as practicable.
        </p>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Cancelled orders with your customers
        </h3>
        <p className='para'>
          GoCardless cannot initiate refunds for transactions that are processed through the GoCardless system.
        </p>
        <p className='para'>
          If your customer cancels their order with you, you must either (i) tell us not to take payment if we are not
        already processing the payment or (ii) arrange to refund your customer. You can ask us to process a refund for you.
        If you tell us that an order has been cancelled, we will tell your customer and any partner which was enabling the payment
        that you have advised the order has been cancelled.
        </p>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Termination
        </h3>
        <p className='para'>
          This Contract will continue indefinitely until such time as either you or us terminate it in accordance with this section.
        </p>
        <p className='para'>
          Without limiting any other rights or remedies:
        </p>
        <ul className='list'>
          <li>
            you shall have the right to terminate the Contract by giving us one months' notice;
          </li>
          <li>
            we shall have a similar right to terminate the Contract by giving you not less than two months' notice;
          </li>
          <li>
            each party may terminate the Contract with immediate effect by giving notice to the other party if the other party
            commits a material breach of the Contract and (if such a breach is remediable) fails to remedy that breach within
            28 days of that party being notified of the breach;
          </li>
          <li>
            GoCardless may terminate the Contract with immediate effect by giving notice to you if you suffer an Insolvency
            Event; and
          </li>
          <li>
            GoCardless shall have the right to suspend the provision of the payment processing services under the Contract
            or any other contract between you and GoCardless if you suffer an Insolvency Event or GoCardless reasonably
            believes that you are about to suffer an Insolvency Event, or if you fail to pay any amount due under this
            Contract on the due date for payment.
          </li>
        </ul>
        <p className='para'>
          For the purpose of this Contract, a party suffers an '<em>Insolvency Event</em>' if:
        </p>
        <ol className='list'>
          <li>
            it suspends, or threatens to suspend, payment of its debts or is unable to pay its debts as they
            fall due or admits inability to pay its debts or (being a company) is deemed unable to pay its
            debts within the meaning of section 123 of the Insolvency Act 1986 or (being an individual) is
            deemed either unable to pay its debts or as having no reasonable prospect of so doing, in either
            case, within the meaning of section 268 of the Insolvency Act 1986 or (being a partnership) has
            any partner to whom any of the foregoing apply;
          </li>
          <li>
            it commences negotiations with all or any class of its creditors with a view to rescheduling any
            of its debts, or makes a proposal for or enters into any compromise or arrangement with its creditors
            other than (where a company) for the sole purpose of a scheme for a solvent amalgamation of that party
            with one or more other companies or the solvent reconstruction of that other party;
          </li>
          <li>
            a petition is filed, a notice is given, a resolution is passed, or an order is made, for or in
            connection with the winding up of that party (being a company) other than for the sole purpose of
            a scheme for a solvent amalgamation of that party with one or more other companies or the solvent
            reconstruction of that other party;
          </li>
          <li>
            that party (being an individual) is the subject of a bankruptcy petition or order;
          </li>
          <li>
            a creditor or encumbrancer of that party attaches or takes possession of, or a distress, execution,
            sequestration or other such process is levied or enforced on or sued against, the whole or any part
            of its assets and such attachment or process is not discharged within 14 days;
          </li>
          <li>
            an application is made to court, or an order is made, for the appointment of an administrator or
            if a notice of intention to appoint an administrator is given or if an administrator is appointed
              over that party (being a company);
          </li>
          <li>
            a floating charge holder over the assets of that party (being a company) has become entitled to
            appoint or has appointed an administrative receiver;
          </li>
          <li>
            a person becomes entitled to appoint a receiver over the assets of that party or a receiver is
            appointed over the assets of the other party;
          </li>
          <li>
            any event occurs or proceeding is taken with respect to that party in any jurisdiction to
            which it is subject that has an effect equivalent or similar to any of the events mentioned
            in paragraphs (a)–(h) inclusive; or
          </li>
          <li>
            it suspends or ceases, or threatens to suspend or cease, to carry on all or a substantial
            part of its business.
          </li>
        </ol>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Consequences of termination
        </h3>
        <p className='para'>
          On termination of the Contract for any reason:
        </p>
        <ul className='list'>
          <li>
            GoCardless shall be entitled to invoice you for any outstanding amounts that are set out
            in this Contract under the heading 'Deductions, payments and invoicing' which shall be due
            and payable upon receipt;
          </li>
          <li>
            the accrued rights, remedies, obligations and liabilities of the parties as at expiry or
            termination shall not be affected, including the right to claim damages in respect of any
            breach of the Contract which existed at or before the date of termination or expiry; and
          </li>
          <li>
            clauses which expressly or by implication have effect after termination shall continue
            in full force and effect.
          </li>
        </ul>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Law
        </h3>
        <p className='para'>
          Our relationship with you is governed by English law and the English courts shall have
          exclusive jurisdiction over any disputes relating or connected to it.
        </p>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Resolving disputes
        </h3>
        <p className='para'>
          Should you have any concerns or complaints about the service we provide, please contact
          us in the first instance using any of the methods set out on the GoCardless website. We
          will work with you in order to understand your issue and work towards a swift resolution.
          More information about how we handle complaints is available on our website and can be
          provided to you on request.
        </p>
        <p className='para'>
          If we are unable to resolve your issue to your satisfaction, you may be able to refer
          your complaint to the Financial Ombudsman Service. The Financial Ombudsman Service is
          a free and independent service which seeks to settle disputes between certain parties.
          You can find more information about the Financial Ombudsman Service on its
          website: http://www.financial-ombudsman.org.uk/.
        </p>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          General provisions
        </h3>
        <p className='para'>
          These terms and conditions are in English and all correspondence will be in English.
        </p>
        <p className='para'>
          Any changes to this Contract will be advised to you in writing, either to the
          email address or postal address that you have provided, no later than two months
          before the date on which they are to take effect. You will be deemed to accept these
          changes unless you notify us in writing before the changes are proposed to enter into force.
          In these circumstances you have the right to close your GoCardless account without incurring
          any charges or other penalties, though you will still be liable to make payments to us in
          respect of any monies owed to us.
        </p>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Confidentiality
        </h3>
        <p className='para'>
          Each party undertakes that it will not at any time hereafter use, divulge or communicate to
          any person, except to its professional representatives or advisers or as may be required by
          law or any legal or regulatory authority, any confidential information concerning the business
          or affairs of the other party which may have or may in future come to its knowledge and each
          of the parties shall use its reasonable endeavours to prevent the publication or disclosure
          of any confidential information concerning such matters.
        </p>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Data Protection
        </h3>
        <p className='para'>
          We will process information about you and other information which you give us in accordance
          with our Privacy Policy.  We will have to perform some identity checks on you before we can
          initiate a direct debit with you.
        </p>
        <p className='para'>
          You represent and warrant that you have provided notice to, and obtained consent from, any
          customer whose Personal Data you supply to GoCardless. We are not responsible for any
          consequences resulting from your failure to provide notice or receive consent from such individuals
          or for your providing outdated, incomplete, or inaccurate information. You are responsible for
          capturing and securing any Personal Data you need prior to submission to us for processing.
          GoCardless will use the Personal Data for processing the payment transactions requested by your
          customers. For the purposes of the Contract, 'Personal Data' shall have the meaning given to it
          by the Data Protection Act 1998.
        </p>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Force majeure
        </h3>
        <p className='para'>
          For the purposes of this Contract, '<em>Force Majeure Event</em>' means an event beyond the
          reasonable control of GoCardless including but not limited to strikes, lock-outs or other
          industrial disputes (whether involving the workforce of GoCardless or any other party),
          failure of a utility service or transport network, act of God, war, riot, civil commotion,
          malicious damage, compliance with any law or governmental order, rule, regulation or direction,
          accident, breakdown of plant or machinery, fire, flood, storm or default of suppliers or
          subcontractors.
        </p>
        <p className='para'>
          GoCardless shall not be liable to you as a result of any delay or failure to perform its
          obligations under this Contract as a result of a Force Majeure Event.
        </p>
        <p className='para'>
          If the Force Majeure Event prevents GoCardless from providing any of the Services for more
          than 4 weeks, GoCardless shall, without limiting its other rights or remedies, have the
        right to terminate this Contract immediately by giving written notice to you.
        </p>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Assignment and subcontracting
        </h3>
        <p className='para'>
          We may assign our rights under this contract or subcontract our obligations under it to
          a third party. You may not do these things without our written consent, and you may not
          grant any security over this contract.
        </p>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Notices
        </h3>
        <p className='para'>
          Any notice or other communication required to be given to a party under or in
          connection with this Contract shall be sent by e-mail or communicated by phone to
          an address or number used for any such communications by that party.
        </p>
        <p className='para'>
          Any notice or other communication shall be deemed to have been duly received the
          next business day following the notice being communicated.
        </p>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Waiver
        </h3>
        <p className='para'>
          A waiver of any right under this Contract is only effective if it is in writing
          and shall not be deemed to be a waiver of any subsequent breach or default. No
          failure or delay by a party in exercising any right or remedy under this Contract
          or by law shall constitute a waiver of that or any other right or remedy, nor preclude
          or restrict its further exercise. No single or partial exercise of such right or remedy
          shall preclude or restrict the further exercise of that or any other right or remedy.
        </p>
        <p className='para'>
          Unless specifically provided otherwise, rights arising under this Contract are cumulative
          and do not exclude rights provided by law.
        </p>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Severance
        </h3>
        <p className='para'>
          If a court or any other competent authority finds that any provision of this Contract
          (or part of any provision) is invalid, illegal or unenforceable, that provision or
          part provision shall, to the extent required, be deemed deleted, and the validity
          and enforceability of the other provisions of this Contract shall not be affected.
          If any invalid, unenforceable or illegal provision of this Contract would be valid,
          enforceable and legal if some part of it were deleted, the provision shall apply
          with the minimum modification necessary to make it legal, valid and enforceable.
        </p>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          No partnership
        </h3>
        <p className='para'>
          Nothing in this Contract is intended to, or shall be deemed to, constitute a
          partnership or joint venture of any kind between any of the parties, nor constitute
          any party the agent of another party for any purpose. No party shall have authority
          to act as agent for, or to bind, the other party in any way.
        </p>


        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Third parties
        </h3>
        <p className='para'>
          A person who is not a party to this Contract shall not have any rights under or
          in connection with it.
        </p>

        <h3 className='u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Contact
        </h3>
        <p className='para'>
          If you have any queries or wish to discuss our services, please contact us in
          writing or by telephone as set out on the GoCardless website or by email
          at <Href to='email' className='u-link-color-p u-text-underline'
          itemProp='email' />.
        </p>
        <p className='para'>
          We will contact you using the contact details you provided when you signed up
          to this service, or any updated details you have provided to us. It is your
          responsibility to update us with any new contact information, including any
          change in address. We will send any correspondence to the most recent email
          address or postal address that you have provided to us for your account and,
          therefore, you must advise us promptly of any change of your contact details
          in the interests of security (including name or address) and provide appropriate
          supporting evidence as required by us.
        </p>
      </Translation>
    );
  }
}
