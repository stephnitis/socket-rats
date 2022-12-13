import React, {useState} from 'react';
import axios from 'axios';

export const SettingsContext = React.createContext();
const server = process.env.REACT_APP_SERVER

const SettingsProvider = ({children}) => {

  const [info, setInfo] = useState();

  const updateInfo = async (id) => {
    try {
      let url = `${server}/users/${id}`
      let updatedInfo = await axios.put(url, id);
      setInfo([...info, updatedInfo]);
    } catch (e) {
      console.log(e);
    }
  }

  const values = {
    updateInfo
  }

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )

}

export default SettingsProvider;