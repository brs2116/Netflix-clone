import React from 'react'
import "./Footer.css";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  return (
    <div className='footer'>
      <div className="footer-icon">
      <FacebookIcon/>
      <InstagramIcon/>
      <XIcon/>
      <YouTubeIcon/>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Card</li>
        <li>Media Center</li>
        <li>Inventor Relations</li>
        <li>Jobs</li>
        <li>Term of Uses</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>&copy; 1997-2026 Netflix,inc</p>
    </div>
  )
}

export default Footer
