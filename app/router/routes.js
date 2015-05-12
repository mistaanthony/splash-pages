import React from 'react';
import Immutable from 'immutable';
import {Route, DefaultRoute, NotFoundRoute } from 'react-router';
import {transformConfigItems, expandConfig, flattenPagesForLocale, getRoutesForPages} from './route-helpers';

import App from '../components/app/app';

import ExampleCheckout from '../pages/example-checkout/example-checkout';
import ContactSales from '../pages/contact-sales/contact-sales';

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

import Features from '../pages/features/features';
import FeaturesApi from '../pages/features/api/features-api';

import Home from '../pages/home/home';

import About from '../pages/about/about';
import Team from '../pages/about/team/team';
import Jobs from '../pages/about/jobs/jobs';
import AccountExecutive from '../pages/about/jobs/positions/account-executive';
import ProductEngineer from '../pages/about/jobs/positions/product-engineer';
import DeveloperCommunityManager from '../pages/about/jobs/positions/developer-community-manager';
import EngineeringInterships from '../pages/about/jobs/positions/engineering-internships';
import AccountExecutiveFrance from '../pages/about/jobs/positions/account-executive-fr';
import CustomerSupportFrance from '../pages/about/jobs/positions/customer-support-fr';
import BdGeneralist from '../pages/about/jobs/positions/bd-generalist';
import CountryLeadGermanyAustria from '../pages/about/jobs/positions/country-lead-de-at';
import CountryLeadNetherlandsBelgium from '../pages/about/jobs/positions/country-lead-nl-be';
import CountryLeadSpain from '../pages/about/jobs/positions/country-lead-es';
import CountryLeadSweden from '../pages/about/jobs/positions/country-lead-se';
import Designers from '../pages/about/jobs/positions/designers';
import SoftwareEngineer from '../pages/about/jobs/positions/software-engineer';
import WebOperationsEngineer from '../pages/about/jobs/positions/web-operations-engineer';

import NotFound from '../pages/not-found/not-found';

import Partners from '../pages/partners/partners';
import PartnersClearBooks from '../pages/partners/clearbooks/partners-clearbooks';
import PartnersFreeagent from '../pages/partners/freeagent/partners-freeagent';
import PartnersKashflow from '../pages/partners/kashflow/partners-kashflow';
import PartnersPitchero from '../pages/partners/pitchero/partners-pitchero';
import PartnersSage from '../pages/partners/sage/partners-sage';
import PartnersXero from '../pages/partners/xero/partners-xero';

import PaymentsByDirectDebit from '../pages/payments-by-direct-debit/payments-by-direct-debit';
import Pricing from '../pages/pricing/pricing';
import Pro from '../pages/pro/pro';
import Security from '../pages/security/security';

import Stories from '../pages/stories/stories';
import StoriesHasBeanCoffee from '../pages/stories/stories/has-bean-coffee';
import StoriesBlueskyBusiness from '../pages/stories/stories/bluesky-business';
import StoriesCrowdCube from '../pages/stories/stories/crowdcube';
import StoriesMomentum from '../pages/stories/stories/momentum-training';
import StoriesRockChoir from '../pages/stories/stories/rock-choir';
import StoriesSpencerHockey from '../pages/stories/stories/spencer-hockey';
import StoriesFoundationOfHearts from '../pages/stories/stories/foundation-of-hearts';
import StoriesGreaterAnglia from '../pages/stories/stories/greater-anglia';
import Europe from '../pages/europe/europe';
import Refer from '../pages/refer/refer';

export var homeRoute = 'home';

const config = Immutable.fromJS([
  [Home, { name: homeRoute }, {
      'en-GB': {
          path: '/',
      },
      'fr-FR': {
          path: '/',
      },
      'fr-BE': {
          path: '/',
      },
    },
  ],
  [ExampleCheckout, { name: 'example_checkout' }, {
      'en-GB': {
          path: '/example-checkout',
      },
    },
  ],
  [Partners, { name: 'partners' }, {
      'en-GB': {
          path: '/partners',
      },
      'fr-FR': {
          path: '/partenaires',
      },
      'fr-BE': {
          path: '/partenaires',
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
  [PaymentsByDirectDebit, { name: 'payments_by_direct_debit' }, {
      'en-GB': {
          path: '/payments-by-direct-debit',
      },
    },
  ],
  [Pricing, { name: 'pricing' }, {
      'en-GB': {
          path: '/pricing',
      },
      'fr-FR': {
          path: '/tarifs',
      },
      'fr-BE': {
          path: '/tarifs',
      },
    },
  ],
  [Pro, { name: 'pro' }, {
      'en-GB': {
          path: '/pro',
      },
      'fr-FR': {
          path: '/pro',
      },
      'fr-BE': {
          path: '/pro',
      },
    },
  ],
  [ContactSales, { name: 'contact_sales' }, {
      'en-GB': {
          path: '/contact-sales',
      },
      'fr-FR': {
          path: '/contactez-nous',
      },
      'fr-BE': {
          path: '/contactez-nous',
      },
    },
  ],
  [Features, { name: 'features' }, {
      'en-GB': {
          path: '/features',
      },
    },
  ],
  [FeaturesApi, { name: 'features_api' }, {
      'en-GB': {
          path: '/features/api',
      },
    },
  ],
  [Security, { name: 'security' }, {
      'en-GB': {
          path: '/security',
      },
      'fr-FR': {
          path: '/securite',
      },
      'fr-BE': {
          path: '/securite',
      },
    },
  ],
  [About, { name: 'about' }, {
      'en-GB': {
          path: '/about',
      },
      'fr-FR': {
          path: '/a-propos',
      },
      'fr-BE': {
          path: '/a-propos',
      },
    },
  ],
  [Team, { name: 'team' }, {
      'en-GB': {
          path: '/about/team',
      },
      'fr-FR': {
          path: '/a-propos/equipe',
      },
      'fr-BE': {
          path: '/a-propos/equipe',
      },
    },
  ],
  [Jobs, { name: 'jobs' }, {
      'en-GB': {
          path: '/about/jobs',
      },
      'fr-FR': {
          path: '/a-propos/carrieres',
      },
      'fr-BE': {
          path: '/a-propos/carrieres',
      },
    },
  ],
  [ProductEngineer, { name: 'jobs_product_engineer', category: 'jobs.engineering' }, {
      'en-GB': {
          path: '/about/jobs/product-engineer',
      },
    },
  ],
  [SoftwareEngineer, { name: 'jobs_software_engineer', category: 'jobs.engineering' }, {
      'en-GB': {
          path: '/about/jobs/software-engineer',
      },
    },
  ],
  [WebOperationsEngineer, { name: 'jobs_web_operations', category: 'jobs.engineering' }, {
      'en-GB': {
          path: '/about/jobs/web-operations',
      },
    },
  ],
  [EngineeringInterships, { name: 'jobs_engineering_internships', category: 'jobs.engineering' }, {
      'en-GB': {
          path: '/about/jobs/engineering-internships',
      },
    },
  ],
  [DeveloperCommunityManager, { name: 'jobs_developer_community_manager', category: 'jobs.engineering' }, {
      'en-GB': {
          path: '/about/jobs/developer-community-manager',
      },
    },
  ],
  [Designers, { name: 'jobs_designers', category: 'jobs.ux_design' }, {
      'en-GB': {
          path: '/about/jobs/designers',
      },
    },
  ],
  [CountryLeadNetherlandsBelgium, { name: 'jobs_country_lead_nl_be', category: 'jobs.country_leads' }, {
      'en-GB': {
          path: '/about/jobs/country-lead-nl-be',
      },
    },
  ],
  [CountryLeadGermanyAustria, { name: 'jobs_country_lead_de_at', category: 'jobs.country_leads' }, {
      'en-GB': {
          path: '/about/jobs/country-lead-de-at',
      },
    },
  ],
  [CountryLeadSpain, { name: 'jobs_country_lead_es', category: 'jobs.country_leads' }, {
      'en-GB': {
          path: '/about/jobs/country-lead-es',
      },
    },
  ],
  [CountryLeadSweden, { name: 'jobs_country_lead_se', category: 'jobs.country_leads' }, {
      'en-GB': {
          path: '/about/jobs/country-lead-se',
      },
    },
  ],
  [BdGeneralist, { name: 'jobs_bd_generalist', category: 'jobs.business_development' }, {
      'en-GB': {
          path: '/about/jobs/bd-generalist',
      },
    },
  ],
  [AccountExecutive, { name: 'jobs_account_executive', category: 'jobs.sales_marketing' }, {
      'en-GB': {
          path: '/about/jobs/account-executive',
      },
    },
  ],
  [AccountExecutiveFrance, { name: 'jobs_account_executive_france', category: 'jobs.sales_marketing' }, {
      'en-GB': {
          path: '/about/jobs/account-executive-fr',
      },
      'fr-FR': {
          path: '/about/jobs/charge-de-clientele',
      },
      'fr-BE': {
          path: '/about/jobs/charge-de-clientele',
      },
    },
  ],
  [CustomerSupportFrance, { name: 'jobs_customer_support_france', category: 'jobs.operations' }, {
      'en-GB': {
          path: '/about/jobs/customer-support-fr',
      },
      'fr-FR': {
          path: '/about/jobs/service-client',
      },
      'fr-BE': {
          path: '/about/jobs/service-client',
      },
    },
  ],
  [FaqCustomers, { name: 'faq_customers', category: 'faq.customers' }, {
      'en-GB': {
          path: '/faq/customers',
      },
    },
  ],
  [FaqCustomersHowItWorks, { name: 'faq_customers_how_it_works', category: 'faq.customers' }, {
      'en-GB': {
          path: '/faq/customers/how-it-works',
      },
    },
  ],
  [FaqCustomersRefunds, { name: 'faq_customers_refunds', category: 'faq.customers' }, {
      'en-GB': {
          path: '/faq/customers/refunds',
      },
    },
  ],
  [FaqCustomersSecurity, { name: 'faq_customers_security', category: 'faq.customers' }, {
      'en-GB': {
          path: '/faq/customers/security',
      },
    },
  ],
  [FaqMerchants, { name: 'faq_merchants', category: 'faq.merchants' }, {
      'en-GB': {
          path: '/faq/merchants',
      },
      'fr-FR': {
          path: '/faq/commercant',
      },
      'fr-BE': {
          path: '/faq/commercant',
      },
    },
  ],
  [FaqMerchantsHowItWorks, { name: 'faq_merchants_how_it_works', category: 'faq.merchants' }, {
      'en-GB': {
          path: '/faq/merchants/how-it-works',
      },
      'fr-FR': {
          path: '/faq/commercant/fonctionnement',
      },
      'fr-BE': {
          path: '/faq/commercant/fonctionnement',
      },
    },
  ],
  [FaqMerchantsSigningUp, { name: 'faq_merchants_signing_up', category: 'faq.merchants' }, {
      'en-GB': {
          path: '/faq/merchants/signing-up',
      },
      'fr-FR': {
          path: '/faq/commercant/inscription',
      },
      'fr-BE': {
          path: '/faq/commercant/inscription',
      },
    },
  ],
  [FaqMerchantsDirectDebit, { name: 'faq_merchants_direct_debit', category: 'faq.merchants' }, {
      'en-GB': {
          path: '/faq/merchants/direct-debit',
      },
      'fr-FR': {
          path: '/faq/commercant/prelevement-bancaire',
      },
      'fr-BE': {
          path: '/faq/commercant/prelevement-bancaire',
      },
    },
  ],
  [FaqMerchantsSecurity, { name: 'faq_merchants_security', category: 'faq.merchants' }, {
      'en-GB': {
          path: '/faq/merchants/security',
      },
      'fr-FR': {
          path: '/faq/commercant/securite',
      },
      'fr-BE': {
          path: '/faq/commercant/securite',
      },
    },
  ],
  [FaqMerchantsCustomerExperience, { name: 'faq_merchants_customer_experience', category: 'faq.merchants' }, {
      'en-GB': {
          path: '/faq/merchants/customer-experience',
      },
      'fr-FR': {
          path: '/faq/commercant/consommateur',
      },
      'fr-BE': {
          path: '/faq/commercant/consommateur',
      },
    },
  ],
  [FaqMerchantsInternationalPayments, { name: 'faq_merchants_international_payments', category: 'faq.merchants' }, {
      'en-GB': {
          path: '/faq/merchants/international-payments',
      },
      'fr-FR': {
          path: '/faq/commercant/international',
      },
      'fr-BE': {
          path: '/faq/commercant/international',
      },
    },
  ],
  [FaqMerchantsDeveloperApi, { name: 'faq_merchants_developer_api', category: 'faq.merchants' }, {
      'en-GB': {
          path: '/faq/merchants/developer-api',
      },
      'fr-FR': {
          path: '/faq/commercant/api-developpeurs',
      },
      'fr-BE': {
          path: '/faq/commercant/api-developpeurs',
      },
    },
  ],
  [FaqMerchantsPartners, { name: 'faq_merchants_partners', category: 'faq.merchants' }, {
      'en-GB': {
          path: '/faq/merchants/partners',
      },
      'fr-FR': {
          path: '/faq/commercant/partenaires',
      },
      'fr-BE': {
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
]);

export function getLocalesForRouteName(routeName, givenConfig=config) {
  const expanded = expandConfig(givenConfig);
  const foundPage = expanded.find((page) => page.getIn(['routeConfig', 'name']) === routeName);

  if (foundPage) {
    return foundPage.get('localeConfig').toJS();
  }
}

export function filterRouteByCategory(routeCategory, locale, givenConfig=config) {
  const expanded = expandConfig(givenConfig);
  const foundPages = expanded.filter((page) => {
    const category = page.getIn(['routeConfig', 'category']);
    if (!category) { return false; }
    const categoryParts = category.split('.');
    return routeCategory.split('.').every(function(part, i) {
      return part === categoryParts[i];
    });
  });

  return foundPages
    .filter((page) => page.get('localeConfig').has(locale))
    .map((page) => {
      return page.setIn(['localeConfig', 'path'], page.getIn(['localeConfig', locale, 'path']));
    })
    .toJS();
}

export function getRoutes(locale, availableLocales, givenConfig=config) {
  const flattenedRoutes = flattenPagesForLocale(givenConfig.map(transformConfigItems), locale, availableLocales);
  const homePage = flattenedRoutes.first();

  return (
    <Route path={homePage.getIn(['localeConfig', 'path'])} handler={App}>
      {getRoutesForPages(flattenedRoutes.rest(), availableLocales)}

      <DefaultRoute handler={homePage.get('handler')} name={homePage.getIn(['routeConfig', 'name'])} />
      <NotFoundRoute handler={NotFound} />
    </Route>
  );
}

export function getAllPaths(givenConfig=config) {
  const expanded = expandConfig(givenConfig);

  return expanded.flatMap((page) => page.get('localeConfig').valueSeq())
                 .map((localeConfig) => localeConfig.get('path'));
}

