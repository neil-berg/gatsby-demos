import React from "react"

import Header from "./header"
import "../styles/layout.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout
