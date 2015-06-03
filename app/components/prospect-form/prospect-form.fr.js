import React from 'react';
import Translation from '../translation/translation';

export default class ProspectFormFr extends React.Component {
  displayName = 'ProspectFormFr'

  render() {
    return (
      <Translation locales='fr'>
        <label className='label label--stacked' htmlFor='prospect_metadata_number_of_payments'>
            Combien de paiements souhaitez-vous collecter chaque mois?
          </label>
        <select className='select input--stacked' id='prospect_metadata_number_of_payments' name='prospect[metadata][number_of_payments]'>
          <option></option>
          <option value='0-50'>0-50</option>
          <option value='50+'>50+</option>
        </select>
      </Translation>
    );
  }
}
