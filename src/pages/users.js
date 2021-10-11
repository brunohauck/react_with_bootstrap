

import React from "react";
import Header from '../components/header';
import FormUser from '../components/form';
import MyComponent from '../components/propsTypes';
export default function Users() {
  const formTitle = 'DEVinhouse User Form';  
  return (
      <>
        <Header title={formTitle}/>
        <FormUser />
        <MyComponent />
      </>

  );
}