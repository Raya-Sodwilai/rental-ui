import React, { useState } from 'react';
import AddRental from './AddRental';

function Profile({ authorize, loggedUser }) {
  const [state, setState] = useState('');

  const triggerAddRentalState = () => {
    setState('add-rental');
  };

  return (
    <div>
      {state === '' && (<button onClick={triggerAddRentalState}>Add rental</button>)}

      {state === 'add-rental' &&  <AddRental userId={loggedUser.userId} />}
    </div>
  )
}

export default Profile;