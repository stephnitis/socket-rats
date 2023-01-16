import React from 'react';
import {useEffect, useContext} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { SettingsContext } from '../../Context/Settings'

import {Button} from '@mui/material';

const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently, setUserMetadata } = useAuth0();
  const { handleShowForm } = useContext(SettingsContext);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = process.env.REACT_APP_AUTH_DOMAIN;
  
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });
  
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const { user_metadata } = await metadataResponse.json();
  
        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };
  
    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }


  return (
  
    isAuthenticated && (
      <>
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <div>
      <Button onClick={handleShowForm}>Update Personal Info</Button>
      </div>
      </>
    )

  );
};

export default Profile;