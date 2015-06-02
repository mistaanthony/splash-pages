import React from 'react';
import LegalPage from '../legal-page';
import LegalMerchantsEn from './legal-merchants.en';
import LegalMerchantsFr from './legal-merchants.fr';

export default class LegalMerchants extends React.Component {
  displayName = 'LegalMerchants'

  render() {
    return (
      <LegalPage>
        <LegalMerchantsEn />
        <LegalMerchantsFr />
      </LegalPage>
    );
  }
}
