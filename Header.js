import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGlobe, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header class="header">
    <div class="header-top">
      <div class="header-left">
        <a href="/">
          <img src="azo.png" alt="Fiverr Logo" class="logo" />
        </a>
      </div>
  
      <div class="header-center">
        <div class="search-bar">
          <input type="text" placeholder="What service are you looking for today?" class="search-input" />
          <button class="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
  
        <nav class="nav-links">
          <div class="dropdown">
            <a href="#" onClick={() => toggleDropdown('fiverr')}>
              Azop Pro <FontAwesomeIcon icon={openDropdown === 'fiverr' ? faCaretUp : faCaretDown} />
            </a>
            {openDropdown === 'fiverr' && (
              <div class="dropdown-menu">
                <a href="#">
                  <img src="icon1.png" alt="Hire Icon" />
                I'm looking to hire
                  <h5>Get vetted freelance experts for your business</h5>
                </a>
                <a href="#">
                  <img src="icon2.png" alt="Offer Services Icon" />
                 I want to Offer pro Services
                  <h5>Work on projects as a Pro freelancer or agency</h5>
                </a>
              </div>
            )}
          </div>
  
          <div class="dropdown">
            <a href="#" onClick={() => toggleDropdown('explore')}>
              Explore <FontAwesomeIcon icon={openDropdown === 'explore' ? faCaretUp : faCaretDown} />
            </a>
            {openDropdown === 'explore' && (
              <div class="dropdown-menu">
                <a href="#" class="dropdown-item">
                  <h3>Answers</h3>
                  <h5>Powered by AI, answered by Fiverr freelancers</h5>
                </a>
                <a href="#" class="dropdown-item">
                  <h3>Community</h3>
                  <h5>Connect with Fiverr's team and community</h5>
                </a>
                <a href="#" class="dropdown-item">
                  <h3>Guides</h3>
                  <h5>In-depth guides covering business topics</h5>
                </a>
                <a href="#" class="dropdown-item">
                  <h3>Podcast</h3>
                  <h5>Inside tips from top business minds</h5>
                </a>
                <a href="#" class="dropdown-item">
                  <h3>Learn</h3>
                  <p>Professional online courses, led by experts</p>
                </a>
                <a href="#" class="dropdown-item">
                  <h3>Blog</h3>
                  <h5>News, information and community stories</h5>
                </a>
                <a href="#" class="dropdown-item">
                  <h3>Logo Maker</h3>
                  <h5>Create your logo instantly</h5>
                </a>
              </div>
            )}
          </div>
  
          <span class="language">
            <FontAwesomeIcon icon={faGlobe} /> English
          </span>
        </nav>
      </div>
  
      <div class="header-right">
        <a href="#" class="sign-in">Sign in</a>
        <button class="join-btn">Join</button>
      </div>
    </div>
  
    <div class="secondary-nav-links">
    <a href="#" class="dropdown-link">

Graphics & Design

<div class="dropdown-menu">

<div class="dropdown-content">

<div class="dropdown-column">

<h3>Logo & Brand Identity</h3>
  <Link to="/Graphics-Design/Logo-Design">Logo Design</Link>
  <Link to="/Graphics-Design/Brand-Style-Guides">Brand Style Guides</Link>
  <Link to="/Graphics-Design/Business-Card&Stationery">Business Cards & Stationery</Link>
  <Link to="/Graphics-Design/Fonts&Typography">Fonts & Typography</Link>
  <Link to="/Graphics-Design/Logo-Maker-Tool" className="logo-maker-tool">Logo Maker Tool</Link>
</div>

<div class="dropdown-column">

<h3>Web & App Design</h3>

<Link to="/Graphics-Design/Website-Design">Website Design</Link>
  <Link to="/Graphics-Design/App-Design">App Design</Link>
  <Link to="/Graphics-Design/UX-Design">UX Design</Link>
  <Link to="/Graphics-Design/Landing-Page-Design">Landing Page Design</Link>
  <Link to="/Graphics-Design/Icon-Design">Icon Design <span className="new-label">NEW</span></Link>
</div>

<div class="dropdown-column">

<h3>Visual Design</h3>

<a href="/Graphics-Design/Image-Editing">Image Editing</a>

<a href="/Graphics-Design/AI-Image-Editing">AI Image Editing</a>

<a href="/Graphics-Design/Presentation-Design">Presentation Design</a>

<a href="/Graphics-Design/Background-Removal">Background Removal</a>

<a href="/Graphics-Design/Infographic-Design">Infographic Design</a>

<a href="/Graphics-Design/Vector-Tracing">Vector Tracing</a>

<a href="/Graphics-Design/Resume-Design">Resume Design</a>

</div>

<div class="dropdown-column">

<h3>Architecture & Building Design</h3>

<a href="/Graphics-Design/Architecture-Interior-Design">Architecture & Interior Design</a>

<a href="/Graphics-Design/Landscape-Design">Landscape Design <span class="new-label">NEW</span></a>

<a href="/Graphics-Design/Building-Engineering">Building Engineering</a>

<a href="/Graphics-Design/Lighting-Design">Lighting Design</a>

</div>
<div class="dropdown-column">

<h3>Art & Illustration</h3>

<a href="/Graphics-Design/Illustration">Illustration</a>

<a href="/Graphics-Design/AI-Artists">AI Artists</a>

<a href="/Graphics-Design/AI-Avatar-Design">AI Avatar Design <span class="new-label">NEW</span></a>

<a href="/Graphics-Design/Children's-Book-Illustration">Children's Book Illustration</a>

<a href="/Graphics-Design/Portraits-Caricatures">Portraits & Caricatures</a>

<a href="/Graphics-Design/Cartoons-Comics">Cartoons & Comics</a>

<a href="/Graphics-Design/Pattern-Design">Pattern Design</a>

<a href="/Graphics-Design/Tattoo-Design">Tattoo Design</a>

<a href="/Graphics-Design/Story-boards">Storyboards</a>

</div>

<div class="dropdown-column">

<h3>Product & Gaming</h3>

<a href="/Graphics-Design/Industrial-Product-Design">Industrial & Product Design</a>

<a href="/Graphics-Design/Character-Modeling">Character Modeling</a>

<a href="/Graphics-Design/Game-Art">Game Art</a>

<a href="/Graphics-Design/Graphics-for-Streamers">Graphics for Streamers</a>
<h3>Print Design</h3>

<a href="/Graphics-Design/Flyer-Design">Flyer-Design</a>

<a href="/Graphics-Design/Brochure-Design">Brochure-Design</a>

<a href="/Graphics-Design/Poster-Design">Poster Design</a>

<a href="/Graphics-Design/Catalog-Design">Catalog Design</a>

</div>

<div class="dropdown-column">

<h3>Marketing Design</h3>

<a href="/Graphics-Design/Social-Media-Design">Social Media Design</a>

<a href="/Graphics-Design/Social-Posts&-Banners">Social Posts & Banners</a>

<a href="/Graphics-Design/Email-Design">Email Design <span class="new-label">NEW</span></a>

<a href="/Graphics-Design/Web-Banners">Web Banners</a>
<a href="/Graphics-Design/Signage-Design">Signage Design</a>
<h3>Packaging and cover</h3>

<a href="/Graphics-Design/Packaging-Label-Design">Packaging & Label Design</a>

<a href="/Graphics-Design/Brochure-Design">Brochure Design</a>

</div>

<div class="dropdown-column">

<h3>Fashion & Merchandise</h3>

<a href="/Graphics-Design/T-Shirts&Merchandise">T-Shirts & Merchandise</a>

<a href="/Graphics-Design/Fashion-Design">Fashion Design</a>

<a href="/Graphics-Design/Jewelry-Design">Jewelry Design</a>
<h3>3D Design</h3>
<a href="/Graphics-Design/3D-Architecture">3D Architecture</a>

<a href="/Graphics-Design/3D-Industrial-Design">3D Industrial Design</a>

<a href="/Graphics-Design/3D-Fashion&Garment">3D Fashion & Garment <span class="new-label">NEW</span></a>

<a href="/Graphics-Design/3D-Printing-Characters">3D Printing Characters</a>

<a href="/Graphics-Design/3D-Landscape">3D Landscape</a>

<a href="/Graphics-Design/3D-Game-Art">3D Game Art</a>

</div>

</div>

</div>

</a>

    <a href="#" class="dropdown-link">
    Digital Marketing
      <div class="dropdown-menu">

<div class="dropdown-content">

<div class="dropdown-column">

<h3>Search</h3>

<a href="/Digital-Marketing/Search-Engine-Optimization">Search Engine Optimization (SEO)</a>

<a href="/Digital-Marketing/Search-Engine-Marketing">Search Engine Marketing (SEM)</a>

<a href="/Digital-Marketing/Local-SEO">Local SEO</a>

<a href="/Digital-Marketing/E-Commerce-SEO">E-Commerce SEO</a>
<a href="/Digital-Marketing/Video-SEO">Video SEO</a>


<div class="dropdown-column">

<h3>Social</h3>

<a href="/Digital-Marketing/Social-Media-Marketing">Social Media Marketing</a>

<a href="/Digital-Marketing/Paid-Social-Media">Paid Social Media</a>

<a href="/Digital-Marketing/Social-Commerce">Social Commerce<span class="new-label">NEW</span></a>

<a href="/Digital-Marketing/Influencer-Marketing">Influencer Marketing</a>

<a href="/Digital-Marketing/Community-Management">Community Management</a>

</div>

</div>



<div class="dropdown-column">

<h3>Methods & Techniques
</h3>
<a href="/Digital-Marketing/Video-Marketing">Video Marketing</a>
<a href="/Digital-Marketing/E-Commerce-Marketing">E-Commerce Marketing</a>
<a href="/Digital-Marketing/Email-Marketing">Email Marketing</a>
<a href="/Digital-Marketing/Email-automation's">Email automation's</a>
<a href="/Digital-Marketing/Guest-Posting">Guest Posting <span class="new-label">NEW</span></a>
<a href="/Digital-Marketing/Affiliate-Marketing">Affiliate Marketing</a>
<a href="/Digital-Marketing/Display-Advertising">Display Advertising</a>
<a href="/Digital-Marketing/Public-Relations">Public Relations</a>
<a href="/Digital-Marketing/Text-Message-Marketing">Text Message Marketing</a>
</div>
<div class="dropdown-column">
<h3>Analytics & Strategy</h3>

<a href="/Digital-Marketing/Marketing-Strategy<">Marketing Strategy</a>

<a href="/Digital-Marketing/Marketing-Concepts&Ideation">Marketing Concepts & Ideation</a>

<a href="/Digital-Marketing/Marketing-Advice">Marketing Advice</a>

<a href="/Digital-Marketing/Web-Analytics">Web Analytics</a>

<a href="/Digital-Marketing/Conversion-Rate-Optimization">Conversion Rate Optimization (CRO)</a>
<h3>Channel Specific new</h3>
<a href="/Digital-Marketing/TikTok-Shop">TikTok Shop</a>
<a href="/Digital-Marketing/Facebook-Ads-Campaign">Facebook Ads Campaign</a>
<a href="/Digital-Marketing/Instagram-Marketing">Instagram Marketing</a>
<a href="/Digital-Marketing/Google-SEM">Google SEM <span class="new-label">NEW</span></a>
<a href="/Digital-Marketing/Shopify-Marketing">Shopify Marketing</a>
</div>

<div class="dropdown-column">

<h3>Industry & Purpose-Specific</h3>

<a href="/Digital-Marketing/Music-Promotion">Music Promotion</a>

<a href="/Digital-Marketing/Podcast-Marketing">Podcast Marketing</a>

<a href="/Digital-Marketing/Book&e-Book-Marketing">Book & eBook Marketing</a>

<a href="/Digital-Marketing/Mobile-App-Marketing">Mobile App Marketing</a>
<h3>Miscellaneous</h3>
<a href="/Digital-Marketing/Crowdfunding">Crowdfunding</a>
<a href="/Digital-Marketing/other">Other</a>
</div>
</div>
<div class="container">
    <div class="content">
        <h2>Seeking a full suite of services?</h2>
        <p>Find a comprehensive digital marketing agency to handle it all.</p>
    </div>
    <div class="cta-container">
    <button type="button" class="cta">Browse agencies</button>
    </div>
</div>

</div>

</a>
      


<a href="#" class="dropdown-link">
  Programming & Tech
  <div class="dropdown-menu">
    <div class="dropdown-content">
     
      <div class="dropdown-column">
        <h3>Website Development</h3>
        <a href="/Programming-Tech/Business-Websites">Business Websites</a>
        <a href="/Programming-Tech/E-Commerce-Development">E-Commerce Development</a>
        <a href="/Programming-Tech/Landing-Pages">Landing Pages</a>
        <a href="/Programming-Tech/Dropshipping-Websites">Dropshipping Websites</a>
        <a href="/Programming-Tech/Build-a-Complete-Website">Build a Complete Website</a>
        
        <h3>Website Platforms</h3>
        <a href="/Programming-Tech/wordpress">WordPress</a>
        <a href="/Programming-Tech/Shopify">Shopify</a>
        <a href="/Programming-Tech/wix">Wix</a>
        <a href="/Programming-Tech/custom-Websites">Custom Websites</a>
        <a href="/Programming-Tech/GoDaddy">GoDaddy</a>

        <h3>Website Maintenance</h3>
        <a href="/Programming-Tech/Website-Customization">Website Customization</a>
        <a href="/Programming-Tech/Bug-Fixes">Bug Fixes</a>
        <a href="/Programming-Tech/Backup-Migration">Backup & Migration</a>
      </div>
      
      <div class="dropdown-column">
        <h3>AI Development</h3>
        <a href="/Programming-Tech/AI-Chatbot">AI Chatbot</a>
        <a href="/Programming-Tech/AI-Applications">AI Applications</a>
        <a href="/Programming-Tech/AI-Integration">AI Integrations<span class="new-label">NEW</span></a>
        <a href="/Programming-Tech/AI-Agents">AI Agents</a>
        <a href="/Programming-Tech/AI-Fine-Tunning">AI Fine-Tuning</a>
        <a href="/Programming-Tech/OpenAI-GPT-Store">OpenAI GPT Store</a>

        <h3>Chatbot Development</h3>
        <a href="/Programming-Tech/Discord">Discord</a>
        <a href="/Programming-Tech/Telegram">Telegram</a>
        <a href="/Programming-Tech/Tiktok">TikTok</a>
        <a href="/Programming-Tech/Facebook-Messenger">Facebook Messenger</a>

        <h3>Game Development</h3>
        <a href="/Programming-Tech/Game-Play-Experience-Feedback">Game play Experience & Feedback</a>
        <a href="/Programming-Tech/PC-Games">PC Games</a>
        <a href="/Programming-Tech/Mobile-Games">Mobile Games</a>
      </div>

      <div class="dropdown-column">
        <h3>Mobile App Development</h3>
        <a href="/Programming-Tech/Cross-platform-Development">Cross-platform Development</a>
        <a href="/Programming-Tech/Android-App-Development">Android App Development</a>
        <a href="/Programming-Tech/IOS-App-Development">iOS App Development</a>
        <a href="/Programming-Tech/Website-to-App">Website to App</a>
        <a href="/Programming-Tech/Mobile-App-Maintenance">Mobile App Maintenance</a>
        <a href="/Programming-Tech/VR-AR-Development">VR & AR Development<span class="new-label">NEW</span></a>

        <h3>Cloud & Cybersecurity</h3>
        <a href="/Programming-Tech/Cloud-Computing">Cloud Computing</a>
        <a href="/Programming-Tech/DevOps-Engineering">DevOps Engineering</a>
        <a href="/Programming-Tech/Cybersecurity">Cybersecurity</a>
         
      <div class="dropdown-column">
        <h3>Data Science & ML</h3>
        <a href="/Programming-Tech/Machine-Learning">Machine Learning</a>
        <a href="/Programming-Tech/Computer-Vision">Computer Vision</a>
        <a href="/Programming-Tech/NLP">NLP<span class="new-label">NEW</span></a>
        <a href="/Programming-Tech/Deep-Learning">Deep Learning</a>
      </div>
      </div>

      <div class="dropdown-column">
        <h3>Software Development</h3>
        <a href="/Programming-Tech/Web-Application">Web Applications</a>
        <a href="/Programming-Tech/Desktop-Application">Desktop Applications</a>
        <a href="/Programming-Tech/APIS-Integrations">APIs & Integrations</a>
        <a href="/Programming-Tech/Database">Databases</a>
        <a href="/Programming-Tech/Scripting">Scripting</a>
        <a href="/Programming-Tech/Browser-Extensions">Browser Extensions</a>
        <a href="/Programming-Tech/QA-Review">QA & Review</a>
        <a href="/Programming-Tech/User-Testing">User Testing</a>

        <h3>Blockchain & Cryptocurrency</h3>
        <a href="/Programming-Tech/Decentralized-Apps">Decentralized Apps (dApps)</a>
        <a href="/Programming-Tech/Cryptocurrencies&Tokens">Cryptocurrencies & Tokens</a>
        <a href="/Programming-Tech/Exchange-Platforms">Exchange Platforms</a>

        <h3>Miscellaneous</h3>
        <a href="/Programming-Tech/Electronics-Engineering">Electronics Engineering</a>
        <a href="/Programming-Tech/Support&IT">Support & IT</a>
      </div>   
    </div>
  </div>
</a>

<a href="#" class="dropdown-link">
  Video and Animation
  <div class="dropdown-menu">
    <div class="dropdown-content">
    
      <div class="dropdown-column">
        <h3>Editing & Post-Production</h3>
        <a href="/Video-Animation/Video-Editing">Video Editing</a>
        <a href="/Video-Animation/Visual-Effects">Visual Effects</a>
        <a href="/Video-Animation/Video-Art">Video Art<span class="new-label">NEW</span></a>
        <a href="/Video-Animation/Intro&Outro-Videos">Intro & Outro Videos</a>
        <a href="/Video-Animation/Video-Templates-Editing">Video Templates Editing</a>
        <a href="/Video-Animation/Subtitles&Captions">Subtitles & Captions</a>
        <div class="dropdown-column">
        <h3>Social & Marketing Videos</h3>
        <a href="/Video-Animation/Video-Ads&Commercials">Video Ads & Commercials</a>
        <a href="/Video-Animation/Social-Media-Videos">Social Media Videos</a>
        <a href="/Video-Animation/Music-Videos">Music Videos</a>
        <a href="/Video-Animation/Slideshow-Videos">Slideshow Videos</a>
      
        <h3>Motion Graphics</h3>
        <a href="/Video-Animation/Logo-Animation">Logo Animation</a>
        <a href="/Video-Animation/Lottie&Web-Animation">Lottie & Web Animation</a>
        <a href="/Video-Animation/Text-Animation">Text Animation</a>
    
      </div>
      
      </div>
      <div class="dropdown-column">
        <h3>Presenter Videos</h3>
        <a href="/Video-Animation/UGC-Videos">UGC Videos</a>
        <a href="/Video-Animation/Spokesperson-Videos">Spokesperson Videos</a>
        <a href="/Video-Animation/UGC-Ads">UGC Ads<span class="new-label">NEW</span></a>
        <a href="/Video-Animation/TikTok-UGC-Videos">TikTok UGC Videos</a>
        <div class="dropdown-column">
        <h3>Animation</h3>
        <a href="/Video-Animation/Character-Animation">Character Animation</a>
        <a href="/Video-Animation/Animated-GIFs">Animated GIFs</a>
        <a href="/Video-Animation/Animation-for-Kids">Animation for Kids</a>
        <a href="/Video-Animation/Animation-for-Streamers">Animation for Streamers</a>
        <a href="/Video-Animation/Rigging">Rigging</a>
        <a href="/Video-Animation/NFT-Animation">NFT Animation</a>
       
        <h3>Filmed Video Production</h3>
        <a href="/Video-Animation/Video_Grapher">Videographers</a>
    
      </div>
      </div>
      <div class="dropdown-column">
        <h3>Explainer Videos</h3>
        <a href="/Video-Animation/Animated-Explainers">Animated Explainers</a>
        <a href="/Video-Animation/Live-Action-Explainers">Live Action Explainers</a>
        <a href="/Video-Animation/Screen-casting-Videos">Screen casting Videos</a>
        <a href="/Video-Animation/eLearning-Video-Production">eLearning Video Production</a>
        <a href="/Video-Animation/Crowdfunding-Videos">Crowdfunding Videos</a>
         
      <div class="dropdown-column">
        <h3>Product Videos</h3>
        <a href="/Video-Animation/3D-Product-Animation">3D Product Animation</a>
        <a href="/Video-Animation/E-Commerce-Product-Videos">E-Commerce Product Videos</a>
        <a href="/Video-Animation/Corporate-Videos">Corporate Videos</a>
        <a href="/Video-Animation/App&Website-Previews">App & Website Previews</a>
        
        <h3>AI Video</h3>
        <a href="/Video-Animation/AI-Video-Art<">AI Video Art</a>
        <a href="/Video-Animation/AI-Music-Videos">AI Music Videos</a>
        <a href="/Video-Animation/AI-Video-Avatars">AI Video Avatars</a>
      
      </div>
      </div>
      <div class="dropdown-column">
        <h3>Miscellaneous</h3>
        <a href="/Video-Animation/Virtual-Streaming-Avatars">Virtual & Streaming Avatars</a>
        <a href="/Video-Animation/Article-to-Video">Article to Video</a>
        <a href="/Video-Animation/Game-Trailers">Game Trailers</a>
        <a href="/Video-Animation/Game-Recordings-Guides">Game Recordings & Guides</a>
        <a href="/Video-Animation/Meditation-Videos">Meditation Videos</a>
        <a href="/Video-Animation/Real-Estate-Promos">Real Estate Promos</a>
        <a href="/Video-Animation/Book-Trailers">Book Trailers</a>
        <a href="/Video-Animation/Video-Advice">Video Advice</a>
        <a href="/Video-Animation/Other">Other</a>
      </div>
          
    </div>
  </div>
</a>

      
   





<a href="#" class="dropdown-link">
  Writing & Translation
  <div class="dropdown-menu">
    <div class="dropdown-content">
  
      <div class="dropdown-column">
        <h3>Content Writing</h3>
        <a href="/Writing-Translation/Articles-Blog-Posts">Articles & Blog Posts</a>
        <a href="/Writing-Translation/Content-Strategy">Content Strategy <span class="new-tag">NEW</span></a>
        <a href="/Writing-Translation/Website-Content">Website Content</a>
        <a href="/Writing-Translation/Script-writing">Scriptwriting</a>
        <a href="/Writing-Translation/Creative-Writing">Creative Writing</a>
        <a href="/Writing-Translation/Podcast-Writing">Podcast Writing</a>
        <a href="/Writing-Translation/Speech-writing">Speech writing</a>
        <a href="/Writing-Translation/Research-Summaries">Research & Summaries</a>
        <a href="/Writing-Translation/Find-an-Expert-Writer">Find an Expert Writer</a>
        <div class="dropdown-column">
        <h3>Editing & Critique</h3>
        <a href="/Writing-Translation/Proof-reading-Editing&Law">Proofreading & Editing & Law <span class="new-tag">NEW</span></a>
        <a href="/Writing-Translation/AI-Content-Editing">AI Content Editing</a>
        <a href="/Writing-Translation/Writing-Advice">Writing Advice</a>
        </div>
      </div>

  
      <div class="dropdown-column">
        <h3>Book & eBook Publishing</h3>
        <a href="/Writing-Translation/Book&eBook-Writing<">Book & eBook Writing</a>
        <a href="/Writing-Translation/Book-Editing">Book Editing</a>
        <a href="/Writing-Translation/Beta-Reading">Beta Reading</a>
        <a href="/Writing-Translation/Self-Publish-Your-Book">Self-Publish Your Book</a>
        <div class="dropdown-column">
        <h3>Career Writing</h3>
        <a href="/Writing-Translation/Business-Finance&Law">Business, Finance & Law <span class="new-tag">NEW</span></a>
        <a href="/Writing-Translation/Resume-Writing">Resume Writing</a>
        <a href="/Writing-Translation/Cover-Letters">Cover Letters</a>
        <a href="/Writing-Translation/LinkedIn-Profiles">LinkedIn Profiles</a>
        <a href="/Writing-Translation/Job-Description">Job Descriptions</a>
      
      </div>
      <div class="dropdown-column">
        <h3>Miscellaneous</h3>
      
        <a href="/Writing-Translation/eLearning-Content-Development">
        eLearning Content Development</a>
        <a href="/Writing-Translation/Technical-Writing">Technical Writing</a>
      
      </div>
      </div>

      <div class="dropdown-column">
        <h3>Translation & Transcription</h3>
        <a href="/Writing-Translation/Translation">Translation</a>
        <a href="/Writing-Translation/Localization">Localization</a>
        <a href="/Writing-Translation/Transcription">Transcription</a>
        <a href="/Writing-Translation/Interpretation">Interpretation</a>
        <div class="dropdown-column">
        <h3>Industry Specific Content <span class="new-tag">NEW</span></h3>
        <a href="/Writing-Translation/Business-Finance&Law">Business, Finance & Law</a>
        <a href="/Writing-Translation/Health-Medical">Health & Medical</a>
        <a href="/Writing-Translation/Internet-Technology">Internet & Technology</a>
        <a href="/Writing-Translation/News-Politics">News & Politics</a>
        <a href="/Writing-Translation/Marketing">Marketing</a>
        <a href="/Writing-Translation/Real-Estate">Real Estate</a>
      </div>
        
      </div>

     
     

      <div class="dropdown-column">
        <h3>Miscellaneous</h3>
        <a href="/Writing-Translation/eLearning-Content-Development">eLearning Content Development</a>
        <a href="/Writing-Translation/Technical-Writing">Technical Writing</a>
      </div>
    </div>
  </div>
</a>









  <a href="#" class="dropdown-link">
  Music & Audio
      <div class="dropdown-menu">
      <div class="dropdown-content">
     
        <div class="dropdown-column">
        <h3>Music Production & Writing</h3>

<a href="/Music-Audio/Music-Producers">Music Producers</a>

<a href="/Music-Audio/Composers">Composers</a>

<a href="/Music-Audio/Singers-Vocalists">Singers & Vocalists</a>

<a href="/Music-Audio/Session-Musicians">Session Musicians</a>

<a href="/Music-Audio/Song-writers">Song writers</a>

<a href="/Music-Audio/ingles-Intros">Jingles & Intros</a>

<a href="/Music-Audio/Custom-Songs">Custom Songs <span class="new-tag">NEW</span></a>
        </div>
        <div class="dropdown-column">
        <h3>Voice Over & Narration</h3>

<a href="/Music-Audio/24hr-Turnaround">24hr Turnaround</a>

<a href="/Music-Audio/Female-Voice-Over">Female Voice Over</a>

<a href="/Music-Audio/Male-Voice-Over">Male Voice Over</a>

<a href="/Music-Audio/French-Voice-Over">French Voice Over</a>

<a href="/Music-Audio/German-Voice-Over">German Voice Over</a>
        </div>
        <div class="dropdown-column">
        <h3>DJing</h3>

<a href="/Music-Audio/DJ-Drops&Tags">DJ Drops & Tags</a>

<a href="/Music-Audio/DJ-Mixing">DJ Mixing</a>

<a href="/Music-Audio/Remixing">Remixing</a>
        </div>
        <div class="dropdown-column">
          <h3>Visual Design</h3>
          <a href="/Music-Audio/Image-Editing">Image Editing</a>
          <a href="/Music-Audio/AI-Image-Editing">AI Image Editing</a>
          <a href="/Music-Audio/Presentation-Design">Presentation Design</a>
          <a href="/Music-Audio/Background-Removal">Background Removal</a>
          <a href="/Music-Audio/Infographic-Design">Infographic Design</a>
          <a href="/Music-Audio/Vector-Tracing">Vector Tracing</a>
          <a href="/Music-Audio/Resume-Design">Resume Design</a>
        </div>

       
        <div class="dropdown-column">
          <h3>Audio Engineering & Post Production



</h3>
          <a href="/Music-Audio/Mixing-Mastering">Mixing & Mastering</a>
          <a href="/Music-Audio/Audio-Editing">Audio Editing</a>
          <a href="/Music-Audio/Vocal-Tuning">Vocal Tuning</a>
          
        </div>
        <div class="dropdown-column">
          <h3>Art & Illustration</h3>
          <a href="/Music-Audio/Illustration">Illustration</a>
          <a href="/Music-Audio/AI-Artists">AI Artists</a>
          <a href="/Music-Audio/AI-Avatar-Design">AI Avatar Design</a>
          <a href="/Music-Audio/Children's-Book-Illustration">Children's Book Illustration</a>
          <a href="/Music-Audio/Portraits-Caricatures">Portraits & Caricatures</a>
          <a href="/Music-Audio/Cartoons-Comics">Cartoons & Comics</a>
          <a href="/Music-Audio/Pattern-Design">Pattern Design</a>
          <a href="/Music-Audio/Tattoo-Design">Tattoo Design</a>
          <a href="/Music-Audio/Story-boards">Storyboards</a>
        </div>
        <div class="dropdown-column">
        <h3>Sound Design</h3>

<a href="/Music-Audio/Sound-Design">Sound Design</a>

<a href="/Music-Audio/Meditation-Music">Meditation Music</a>

<a href="/Music-Audio/Audio-Logo&Sonic-Branding">Audio Logo & Sonic Branding</a>

<a href="/Music-Audio/Custom-Patches&Samples">Custom Patches & Samples</a>

<a href="/Music-Audio/Audio-Plugin-Development">Audio Plugin Development</a>
<h3>Lessons & Transcriptions</h3>

<a href="/Music-Audio/Online-Music-Lessons">Online Music Lessons</a>

<a href="/Music-Audio/Music-Transcription">Music Transcription</a>

<a href="/Music-Audio/Music&Audio-Advice">Music & Audio Advice</a>
        </div>
        <div class="dropdown-column">
          <h3>Visual Design</h3>
          <a href="/Music-Audio/Image-Editing">Image Editing</a>
          
        </div>
      </div>
    </div>
  </a>








  <a href="#" class="dropdown-link">
  Business
      <div class="dropdown-menu">
      <div class="dropdown-content">
     
        <div class="dropdown-column">
        <h3>Business Management</h3>

<a href="/Business/Business-Registration">Business Registration</a>

<a href="/Business/Business-Plans">Business Plans</a>

<a href="/Business/Business-Consulting">Business Consulting</a>

<a href="/Business/HR-Consulting">HR Consulting</a>

<a href="/Business/Market_Research">Market Research</a>

<a href="/Business/Presentations">Presentations</a>

<a href="/Business/Supply-Chain-Management">Supply Chain Management</a>

<a href="/Business/Project-Management">Project Management</a>

<a href="/Business/AI-for-Business">AI for Businesses</a>

<a href="/Business/AI-Strategy">AI Strategy<span class="new-tag">NEW</span></a>

<a href="/Business/AI-Lessons">AI Lessons</a>
<h3>Sales & Customer Care</h3>

<a href="/Business/Sales">Sales</a>

<a href="/Business/Lead-Generation">Lead Generation</a>

<a href="/Business/Call-Center&Calling">Call Center & Calling</a>

<a href="/Business/Customer-Care">Customer Care</a>

<a href="/Business/General-Administrative">General & Administrative</a>

<a href="/Business/Virtual-Assistant">Virtual Assistant</a>
        </div>
        <div class="dropdown-column">
        <h3>Legal Services</h3>

<a href="/Business/Applications-Registrations">Applications & Registrations</a>

<a href="/Business/Legal-Documents&Contracts">Legal Documents & Contracts</a>

<a href="/Business/Legal-Research">Legal Research</a>

<a href="/Business/E-Commerce-Management">E-Commerce Management</a>

<a href="/Business/Store-Management">Store Management</a>

<a href="/Business/Amazon-Experts">Amazon Experts</a>

<a href="/Business/Shopify-Experts">Shopify Experts</a>

<a href="/Business/Etsy-Experts">Etsy Experts</a>

<a href="/Business/Data&Business-Intelligence">Data & Business Intelligence</a>

<a href="/Business/Data-Visualization">Data Visualization</a>

<a href="/Business/Data-Analytics">Data Analytics</a>

<a href="/Business/Data-Scraping">Data Scraping</a>
<h3>General & Administrative</h3>

<a href="/Business/Virtual-Assistant">Virtual Assistant</a>

<a href="/Business/Online-Investigations">Online Investigations (NEW)</a>

<a href="/Business/Fact-Checking">Fact Checking<span class="new-tag">NEW</span></a>

<a href="/Business/Miscellaneous">Miscellaneous</a>

<a href="/Business/Software-Management">Software Management</a>

<a href="/Business/Product-Management">Product Management</a>

<a href="/Business/Event-Management">Event Management</a>
        </div>
        <div class="dropdown-column">
        <h3>Sales & Customer Care</h3>
        </div>
        <div class="dropdown-column">
          <h3>Visual Design</h3>
                 </div>     
               </div>
    </div>
  </a>







    </div>
  </header>
  );
}

export default Header;
