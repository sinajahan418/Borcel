import React from 'react';

const page = ({params}: any) => {
    console.log(params);
    
  return (
    <div>
      {
        params?.id
      }
    </div>
  );
}

export default page;
