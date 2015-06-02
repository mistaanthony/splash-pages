import Immutable from 'immutable';

import Home from '../pages/home/home';
import Pricing from '../pages/pricing/pricing';
import Pro from '../pages/pro/pro';
import Features from '../pages/features/features';
import FeaturesApi from '../pages/features/api/features-api';
import Security from '../pages/security/security';
import ContactSales from '../pages/contact-sales/contact-sales';

import PaymentsByDirectDebit from '../pages/payments-by-direct-debit/payments-by-direct-debit';
import Europe from '../pages/europe/europe';
import Refer from '../pages/refer/refer';
import ExampleCheckout from '../pages/example-checkout/example-checkout';

import About from '../pages/about/about';
import Team from '../pages/about/team/team';

import Jobs from '../pages/about/jobs/jobs';
import AccountExecutive from '../pages/about/jobs/positions/account-executive';
import ProductEngineer from '../pages/about/jobs/positions/product-engineer';
import DeveloperCommunityManager from '../pages/about/jobs/positions/developer-community-manager';
import EngineeringInterships from '../pages/about/jobs/positions/engineering-internships';
import AccountExecutiveFrance from '../pages/about/jobs/positions/account-executive-fr';
import CustomerSupportFrance from '../pages/about/jobs/positions/customer-support-fr';
import OfficeManager from '../pages/about/jobs/positions/office-manager';
import BdGeneralist from '../pages/about/jobs/positions/bd-generalist';
import GlobalExpansionLead from '../pages/about/jobs/positions/global-expansion-lead';
import CountryLeadGermanyAustria from '../pages/about/jobs/positions/country-lead-de-at';
import CountryLeadNetherlandsBelgium from '../pages/about/jobs/positions/country-lead-nl-be';
import CountryLeadSpain from '../pages/about/jobs/positions/country-lead-es';
import CountryLeadSweden from '../pages/about/jobs/positions/country-lead-se';
import Designers from '../pages/about/jobs/positions/designers';
import SoftwareEngineer from '../pages/about/jobs/positions/software-engineer';
import WebOperationsEngineer from '../pages/about/jobs/positions/web-operations-engineer';

import LegalIntroduction from '../pages/legal/introduction/legal-introduction';
import LegalCustomers from '../pages/legal/customers/legal-customers';
import LegalMerchants from '../pages/legal/merchants/legal-merchants';
import LegalOldRestrictionsIndex from '../pages/legal/old-restrictions/index/legal-old-restrictions-index';
import LegalOldRestrictions20140731 from '../pages/legal/old-restrictions/2014-07-31/legal-old-restrictions-2014-07-31';
import LegalOldRestrictions20140919 from '../pages/legal/old-restrictions/2014-09-19/legal-old-restrictions-2014-09-19';
import LegalPartners from '../pages/legal/partners/legal-partners';
import LegalPrivacy from '../pages/legal/privacy/legal-privacy';
import LegalRestrictions from '../pages/legal/restrictions/legal-restrictions';

import Partners from '../pages/partners/partners';
import PartnersClearBooks from '../pages/partners/clearbooks/partners-clearbooks';
import PartnersFreeagent from '../pages/partners/freeagent/partners-freeagent';
import PartnersKashflow from '../pages/partners/kashflow/partners-kashflow';
import PartnersPitchero from '../pages/partners/pitchero/partners-pitchero';
import PartnersSage from '../pages/partners/sage/partners-sage';
import PartnersXero from '../pages/partners/xero/partners-xero';

import FaqCustomersHowItWorks from '../pages/faq/customers/how-it-works/faq-customers-how-it-works';
import FaqCustomers from '../pages/faq/customers/overview/faq-customers-overview';
import FaqCustomersRefunds from '../pages/faq/customers/refunds/faq-customers-refunds';
import FaqCustomersSecurity from '../pages/faq/customers/security/faq-customers-security';
import FaqMerchantsCustomerExperience from '../pages/faq/merchants/customer-experience/faq-merchants-customer-experience';
import FaqMerchantsDeveloperApi from '../pages/faq/merchants/developer-api/faq-merchants-developer-api';
import FaqMerchantsDirectDebit from '../pages/faq/merchants/direct-debit/faq-merchants-direct-debit';
import FaqMerchantsHowItWorks from '../pages/faq/merchants/how-it-works/faq-merchants-how-it-works';
import FaqMerchantsInternationalPayments from '../pages/faq/merchants/international-payments/faq-merchants-international-payments';
import FaqMerchants from '../pages/faq/merchants/overview/faq-merchants-overview';
import FaqMerchantsPartners from '../pages/faq/merchants/partners/faq-merchants-partners';
import FaqMerchantsReferrals from '../pages/faq/merchants/referrals/faq-merchants-referrals';
import FaqMerchantsSecurity from '../pages/faq/merchants/security/faq-merchants-security';
import FaqMerchantsSigningUp from '../pages/faq/merchants/signing-up/faq-merchants-signing-up';

import Stories from '../pages/stories/stories';
import StoriesHasBeanCoffee from '../pages/stories/stories/has-bean-coffee';
import StoriesBlueskyBusiness from '../pages/stories/stories/bluesky-business';
import StoriesCrowdCube from '../pages/stories/stories/crowdcube';
import StoriesMomentum from '../pages/stories/stories/momentum-training';
import StoriesRockChoir from '../pages/stories/stories/rock-choir';
import StoriesSpencerHockey from '../pages/stories/stories/spencer-hockey';
import StoriesFoundationOfHearts from '../pages/stories/stories/foundation-of-hearts';
import StoriesGreaterAnglia from '../pages/stories/stories/greater-anglia';

export var homeRoute = 'home';

export const config = Immutable.fromJS([
  [Home, { name: homeRoute }, {
      en: {
        path: '/',
      },
      fr: {
        path: '/',
      },
      de: {
        path: '/',
      },
    },
  ],
  [Pricing, { name: 'pricing' }, {
      en: {
        path: '/pricing',
      },
      fr: {
        path: '/tarifs',
      },
      de: {
        path: '/preise',

      },
    },
  ],
  [Pro, { name: 'pro' }, {
      en: {
        path: '/pro',
      },
      fr: {
        path: '/pro',
      },
      de: {
        path: '/pro',
      },
    },
  ],
  [Security, { name: 'security' }, {
      en: {
        path: '/security',
      },
      fr: {
        path: '/securite',
      },
    },
  ],
  [Features, { name: 'features' }, {
      'en-GB': {
        path: '/features',
      },
      'en-IE': {
        path: '/features',
      },
      fr: {
          path: '/fonctionalites',
      },
    },
  ],
  [FeaturesApi, { name: 'features_api' }, {
      'en-GB': {
        path: '/features/api',
      },
    },
  ],
  [ContactSales, { name: 'contact_sales' }, {
      en: {
        path: '/contact-sales',
      },
      fr: {
        path: '/contactez-nous',
      },
      de: {
        path: '/kontakt',
      },
    },
  ],
  [PaymentsByDirectDebit, { name: 'payments_by_direct_debit' }, {
      'en-GB': {
        path: '/payments-by-direct-debit',
      },
    },
  ],
  [Europe, { name: 'europe' }, {
      'en-GB': {
        path: '/europe',
      },
    },
  ],
  [Refer, { name: 'refer' }, {
      'en-GB': {
        path: '/refer',
      },
    },
  ],
  [ExampleCheckout, { name: 'example_checkout' }, {
      'en-GB': {
        path: '/example-checkout',
      },
    },
  ],
  [About, { name: 'about' }, {
      en: {
        path: '/about',
      },
      fr: {
        path: '/a-propos',
      },
      de: {
        path: '/ueber-uns',
      },
    },
  ],
  [Team, { name: 'team' }, {
      en: {
        path: '/about/team',
      },
      fr: {
        path: '/a-propos/equipe',
      },
      de: {
        path: '/ueber-uns/team',
      },
    },
  ],
  [Jobs, { name: 'jobs' }, {
      en: {
        path: '/about/jobs',
      },
      fr: {
        path: '/a-propos/carrieres',
      },
    },
  ],
  [ProductEngineer, { name: 'jobs_product_engineer', category: 'jobs.engineering' }, {
      en: {
        path: '/about/jobs/product-engineer',
      },
    },
  ],
  [SoftwareEngineer, { name: 'jobs_software_engineer', category: 'jobs.engineering' }, {
      en: {
        path: '/about/jobs/software-engineer',
      },
    },
  ],
  [WebOperationsEngineer, { name: 'jobs_web_operations', category: 'jobs.engineering' }, {
      en: {
        path: '/about/jobs/web-operations',
      },
    },
  ],
  [EngineeringInterships, { name: 'jobs_engineering_internships', category: 'jobs.engineering' }, {
      en: {
        path: '/about/jobs/engineering-internships',
      },
    },
  ],
  [DeveloperCommunityManager, { name: 'jobs_developer_community_manager', category: 'jobs.engineering' }, {
      en: {
        path: '/about/jobs/developer-community-manager',
      },
    },
  ],
  [Designers, { name: 'jobs_designers', category: 'jobs.ux_design' }, {
      en: {
        path: '/about/jobs/designers',
      },
    },
  ],
  [CountryLeadNetherlandsBelgium, { name: 'jobs_country_lead_nl_be', category: 'jobs.country_leads' }, {
      en: {
        path: '/about/jobs/country-lead-nl-be',
      },
    },
  ],
  [CountryLeadGermanyAustria, { name: 'jobs_country_lead_de_at', category: 'jobs.country_leads' }, {
      en: {
        path: '/about/jobs/country-lead-de-at',
      },
    },
  ],
  [CountryLeadSpain, { name: 'jobs_country_lead_es', category: 'jobs.country_leads' }, {
      en: {
        path: '/about/jobs/country-lead-es',
      },
    },
  ],
  [CountryLeadSweden, { name: 'jobs_country_lead_se', category: 'jobs.country_leads' }, {
      en: {
        path: '/about/jobs/country-lead-se',
      },
    },
  ],
  [BdGeneralist, { name: 'jobs_bd_generalist', category: 'jobs.business_development' }, {
      en: {
        path: '/about/jobs/bd-generalist',
      },
    },
  ],
  [GlobalExpansionLead, { name: 'jobs_global_expansion_lead', category: 'jobs.business_development' }, {
      en: {
        path: '/about/jobs/global-expansion-lead',
      },
    },
  ],
  [AccountExecutive, { name: 'jobs_account_executive', category: 'jobs.sales_marketing' }, {
      en: {
        path: '/about/jobs/account-executive',
      },
    },
  ],
  [AccountExecutiveFrance, { name: 'jobs_account_executive_france', category: 'jobs.sales_marketing' }, {
      en: {
        path: '/about/jobs/account-executive-fr',
      },
      fr: {
        path: '/about/jobs/charge-de-clientele',
      },
    },
  ],
  [OfficeManager, { name: 'jobs_office_manager', category: 'jobs.operations' }, {
      en: {
        path: '/about/jobs/office-manager',
      },
    },
  ],
  [CustomerSupportFrance, { name: 'jobs_customer_support_france', category: 'jobs.operations' }, {
      en: {
        path: '/about/jobs/customer-support-fr',
      },
      fr: {
        path: '/about/jobs/service-client',
      },
    },
  ],
  [LegalIntroduction, { name: 'legal', category: 'legal' }, {
      en: {
        path: '/legal',
      },
      fr: {
        path: '/legal',
      },
      de: {
        path: '/impressum',
      },
    },
  ],
  [LegalCustomers, { name: 'legal_customers', category: 'legal' }, {
      en: {
        path: '/legal/customers',
      },
    },
  ],
  [LegalMerchants, { name: 'legal_merchants', category: 'legal' }, {
      en: {
        path: '/legal/merchants',
      },
       fr: {
        path: '/legal/marchands',
      },
    },
  ],
  [LegalOldRestrictionsIndex, { name: 'legal_old_restrictions' }, {
      en: {
        path: '/legal/old-restrictions',
      },
    },
  ],
  [LegalOldRestrictions20140731, { name: 'legal_old_restrictions_2014_07_31' }, {
      en: {
        path: '/legal/old-restrictions/2014-07-31',
      },
    },
  ],
  [LegalOldRestrictions20140919, { name: 'legal_old_restrictions_2014_09_19' }, {
      en: {
        path: '/legal/old-restrictions/2014-09-19',
      },
    },
  ],
  [LegalPartners, { name: 'legal_partners', category: 'legal' }, {
      en: {
        path: '/legal/partners',
      },
    },
  ],
  [LegalRestrictions, { name: 'legal_restrictions', category: 'legal' }, {
      en: {
        path: '/legal/restrictions',
      },
      fr: {
        path: '/legal/activites-restreintes',
      },
    },
  ],
  [LegalPrivacy, { name: 'legal_privacy', category: 'legal' }, {
      en: {
        path: '/legal/privacy',
      },
      fr: {
        path: '/legal/politique-de-confidentialite',
      },
      de: {
        path: '/impressum/datenschutz',
      },
    },
  ],
  [Partners, { name: 'partners' }, {
      'en-GB': {
        path: '/partners',
      },
      'en-IE': {
        path: '/partners',
      },
      fr: {
        path: '/partenaires',
      },
      de: {
        path: '/partner',
      },
    },
  ],
  [PartnersClearBooks, { name: 'partners_clearbooks' }, {
      'en-GB': {
        path: '/partners/clearbooks',
      },
    },
  ],
  [PartnersFreeagent, { name: 'partners_freeagent' }, {
      'en-GB': {
        path: '/partners/freeagent',
      },
    },
  ],
  [PartnersKashflow, { name: 'partners_kashflow' }, {
      'en-GB': {
        path: '/partners/kashflow',
      },
    },
  ],
  [PartnersPitchero, { name: 'partners_pitchero' }, {
      'en-GB': {
        path: '/partners/pitchero',
      },
    },
  ],
  [PartnersSage, { name: 'partners_sage' }, {
      'en-GB': {
        path: '/partners/sage',
      },
    },
  ],
  [PartnersXero, { name: 'partners_xero' }, {
      'en-GB': {
        path: '/partners/xero',
      },
    },
  ],
  [FaqCustomers, { name: 'faq_customers', category: 'faq.customers' }, {
      en: {
        path: '/faq/customers',
      },
    },
  ],
  [FaqCustomersHowItWorks, { name: 'faq_customers_how_it_works', category: 'faq.customers' }, {
      en: {
        path: '/faq/customers/how-it-works',
      },
    },
  ],
  [FaqCustomersRefunds, { name: 'faq_customers_refunds', category: 'faq.customers' }, {
      en: {
        path: '/faq/customers/refunds',
      },
    },
  ],
  [FaqCustomersSecurity, { name: 'faq_customers_security', category: 'faq.customers' }, {
      en: {
        path: '/faq/customers/security',
      },
    },
  ],
  [FaqMerchants, { name: 'faq_merchants', category: 'faq.merchants' }, {
      en: {
        path: '/faq/merchants',
      },
      fr: {
        path: '/faq/commercant',
      },
    },
  ],
  [FaqMerchantsHowItWorks, { name: 'faq_merchants_how_it_works', category: 'faq.merchants' }, {
      en: {
        path: '/faq/merchants/how-it-works',
      },
      fr: {
        path: '/faq/commercant/fonctionnement',
      },
    },
  ],
  [FaqMerchantsSigningUp, { name: 'faq_merchants_signing_up', category: 'faq.merchants' }, {
      en: {
        path: '/faq/merchants/signing-up',
      },
      fr: {
        path: '/faq/commercant/inscription',
      },
    },
  ],
  [FaqMerchantsDirectDebit, { name: 'faq_merchants_direct_debit', category: 'faq.merchants' }, {
      en: {
        path: '/faq/merchants/direct-debit',
      },
      fr: {
        path: '/faq/commercant/prelevement-bancaire',
      },
    },
  ],
  [FaqMerchantsSecurity, { name: 'faq_merchants_security', category: 'faq.merchants' }, {
      en: {
        path: '/faq/merchants/security',
      },
      fr: {
        path: '/faq/commercant/securite',
      },
    },
  ],
  [FaqMerchantsCustomerExperience, { name: 'faq_merchants_customer_experience', category: 'faq.merchants' }, {
      en: {
        path: '/faq/merchants/customer-experience',
      },
      fr: {
        path: '/faq/commercant/consommateur',
      },
    },
  ],
  [FaqMerchantsInternationalPayments, { name: 'faq_merchants_international_payments', category: 'faq.merchants' }, {
      en: {
        path: '/faq/merchants/international-payments',
      },
      fr: {
        path: '/faq/commercant/international',
      },
    },
  ],
  [FaqMerchantsDeveloperApi, { name: 'faq_merchants_developer_api', category: 'faq.merchants' }, {
      en: {
        path: '/faq/merchants/developer-api',
      },
      fr: {
        path: '/faq/commercant/api-developpeurs',
      },
    },
  ],
  [FaqMerchantsPartners, { name: 'faq_merchants_partners', category: 'faq.merchants' }, {
      'en-GB': {
        path: '/faq/merchants/partners',
      },
      fr: {
        path: '/faq/commercant/partenaires',
      },
    },
  ],
  [FaqMerchantsReferrals, { name: 'faq_merchants_referrals', category: 'faq.merchants' }, {
      'en-GB': {
        path: '/faq/merchants/referrals',
      },
    },
  ],
  [Stories, { name: 'stories' }, {
      'en-GB': {
        path: '/stories',
      },
    },
  ],
  [StoriesHasBeanCoffee, { name: 'stories_has_bean_coffee', category: 'stories' }, {
      'en-GB': {
        path: '/stories/has-bean-coffee',
      },
    },
  ],
  [StoriesBlueskyBusiness, { name: 'stories_bluesky_business', category: 'stories' }, {
      'en-GB': {
        path: '/stories/bluesky-business',
      },
    },
  ],
  [StoriesCrowdCube, { name: 'stories_crowdcube', category: 'stories' }, {
      'en-GB': {
        path: '/stories/crowdcube',
      },
    },
  ],
  [StoriesMomentum, { name: 'stories_momentum', category: 'stories' }, {
      'en-GB': {
        path: '/stories/momentum',
      },
    },
  ],
  [StoriesRockChoir, { name: 'stories_rock_choir', category: 'stories' }, {
      'en-GB': {
        path: '/stories/rock-choir',
      },
    },
  ],
  [StoriesSpencerHockey, { name: 'stories_spencer_hockey', category: 'stories' }, {
      'en-GB': {
        path: '/stories/spencer-hockey',
      },
    },
  ],
  [StoriesFoundationOfHearts, { name: 'stories_foundation_of_hearts', category: 'stories' }, {
      'en-GB': {
        path: '/stories/foundation-of-hearts',
      },
    },
  ],
  [StoriesGreaterAnglia, { name: 'stories_greater_anglia', category: 'stories' }, {
      'en-GB': {
        path: '/stories/greater-anglia',
      },
    },
  ],
]);
