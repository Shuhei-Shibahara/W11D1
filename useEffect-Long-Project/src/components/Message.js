import { useEffect, useState } from "react";

function Message({ size, featherCount }) {
  
  const [message, setMessage] = useState('')

  useEffect(()=>{
    if(featherCount === '0'){
      setMessage('Oh my! Your bird is naked!')
    }
    else{
      setMessage('We got feathers baby!')
    }

  },[featherCount])

  return (
    <div className="message medium">
      {message}
    </div>
  );
};

export default Message;