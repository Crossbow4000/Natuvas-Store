import { useEffect, useState } from 'react';

export default function CountNotBeFound() {
  const [referrer, setReferrer] = useState('');
  useEffect(() => { setReferrer(document.referrer); },[]);


  return (
    <div>
      <h1>401</h1>
      <h2>The page {referrer} could not be found</h2>
    </div>
  )
}
