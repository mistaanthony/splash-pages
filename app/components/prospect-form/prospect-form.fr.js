import React from 'react';
import Translation from '../translation/translation';

export default class ProspectFormFr extends React.Component {
  displayName = 'ProspectFormFr'

  render() {
    return (
      <Translation locales='fr'>
        <label className='label label--stacked' htmlFor='prospect_metadata_payments_per_month'>
            Combien de paiements voulez-vouz prendre chaque mois?
          </label>
        <select className='select input--stacked' id='prospect_metadata_payments_per_month' name='prospect[metadata][payments_per_month]'>
          <option value='0-50'>0-50</option>
          <option value='50+'>50+</option>
        </select>
      </Translation>
    );
  }
}
