import './App.css';
//import React, { useState, useEffect } from 'react'
import Footer from './components/footer'
import Table  from './components/table';

const App = () => {




  const footerContent = 'Powered by TfL Open Data\nContains OS data © Crown copyright and database rights [2016] and Geomni UK Map data © and database rights [2019]';

  let splitFooterContent = footerContent.split('\n').map((i, index) => { // Split the above string to allow it to be correctly displayed across two lines.
    return <p key={index}>{i}</p>
  });
  console.log(splitFooterContent);
  

  return (
    <div className='container'>
      <Table className='table'/>
      <Footer className='footer'
        footerContent={splitFooterContent} />
    </div>
  );
}

export default App;