<template>
  <div class="home__logo">
    <slot>
    </slot>
  </div>
</template>

<script>
/**
 * @module UsefulLinks
 */
export default {
  name: 'HomeLogo'
}
</script>

<style lang="stylus">
  #app .no-sidebar .home .hero img
    max-height 200px;
  #app .no-sidebar .home
    max-width: unset;
    padding: 0;
  #app .no-sidebar .home .hero
    position: relative;
    padding: 4rem 0 .1rem;
    background-color: rgba(255, 255, 255, 0.82);
    background: linear-gradient(-45deg, #057c92 0%, #4267b2e8 100%);
    min-height: 65vh; 
  #app .no-sidebar .features
    max-width: 960px;
    margin: 0 auto;
  body .no-sidebar .home .hero .action-button
    padding: 0.4rem 1.6rem;
    border-radius: 0;
  body .no-sidebar .home .hero .description
    color: #fff;
  body .no-sidebar .navbar
    background-color: transparent;
    border-bottom: 0;
  body .no-sidebar .navbar .links
    color: #fff;
    background-color: transparent;
  body .no-sidebar .navbar .site-name
    color: #fff;
  body .home .footer
    padding: .8rem 2.5rem;
    text-align: right;
</style>>
