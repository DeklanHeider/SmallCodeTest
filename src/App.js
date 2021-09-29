import './App.css';
//import React, { useState, useEffect } from 'react'
import Footer from './components/footer'


const App = () => {
  //const [data, setData] = useState([]);

 // useEffect(() => { // Call api here
//    const result = 0 // 
//  })

  const footerContent = 'Powered by TfL Open Data\nContains OS data © Crown copyright and database rights [2016] and Geomni UK Map data © and database rights [2019]'

  let splitFooterContent = footerContent.split('\n').map(i => { // Split the above string to allow it to be correctly displayed across two lines.
    return <p>{i}</p>
  });

  return (
    <div className='container'>

      <Footer className='footer' 
      footerContent= {splitFooterContent}/>
    </div>
  );
}

export default App;