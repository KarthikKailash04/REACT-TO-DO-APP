import React from 'react'

export const Footer = () => {
    const dat = new Date();
  return (
<footer><h2> COPYTIGHT  &copy; {dat.getFullYear()}</h2>
</footer>    )
}
export default Footer;