import React from 'react'

import { Helmet } from 'react-helmet'

import FormAutorisation from '../components/form-autorisation'
import './autorisation.css'

const Autorisation = (props) => {
  return (
    <div className="autorisation-container">
      <Helmet>
        <title>Autorisation - Lottery ver.1</title>
        <meta property="og:title" content="Autorisation - Lottery ver.1" />
      </Helmet>
      <FormAutorisation></FormAutorisation>
    </div>
  )
}

export default Autorisation
