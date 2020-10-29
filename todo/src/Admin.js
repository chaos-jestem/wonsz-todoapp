import React from 'react';
import { Button } from '@material-ui/core';
import ReactDOM from 'react-dom';
import Adminpanel from './Adminpanel';

function Admin() {
  function adminpanel() {
    ReactDOM.render(<Adminpanel/>, document.getElementById('root'));
  }

    return(
      <div>
        <Button onClick={adminpanel}>Panel Admina</Button>
      </div>
    )
}

export default Admin;