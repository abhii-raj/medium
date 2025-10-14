// import React from 'react'

import Quote from "../component/Quote"
import Auth from "../component/Auth"

const Signup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
          <Auth type="signup"/>
      </div>
      <div className="hidden lg:block">
        <Quote/>
      </div>
    </div>

  )
}

export default Signup