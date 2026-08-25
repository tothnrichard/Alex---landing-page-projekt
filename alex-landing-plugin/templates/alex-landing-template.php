<?php
/**
 * Template Name: Alex Mobilier Landing Page (Plugin)
 */

// Load WordPress Header (Includes tracking scripts, cookies, seo tags, etc.)
get_header(); 
?>

<!-- 
  We hide the traditional theme header and footer using CSS
  This ensures our React App takes over 100% of the viewport
  while still keeping the WP tracking scripts active in the background.
-->
<style>
  /* Hide standard elements from most popular WP themes */
  header, footer, .site-header, .site-footer, #header, #footer, #masthead, #colophon { 
      display: none !important; 
  }
  
  /* Reset body margins */
  body, html { 
      margin: 0; 
      padding: 0; 
      overflow-x: hidden; 
  }
  
  /* Remove container paddings */
  #page, #main, .site-content, .container, .wrapper { 
      padding: 0 !important; 
      margin: 0 !important; 
      max-width: 100% !important; 
      width: 100% !important;
  }
</style>

<!-- React Mount Point -->
<div id="root"></div>

<?php 
// Load WordPress Footer (Includes closing tags, tracking scripts, etc.)
get_footer(); 
?>
