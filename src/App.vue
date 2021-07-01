<template>
  <v-app>

    <Navbar />

    <Banner id="/banner"/>
    <About id="/apropos"/>
    <Qualification id="/qualifications"/>
    <Projets id="/projets"/>
    <Competences id="/competences"/>
    <Contact id="/contact"/>
    <Footer />



    
    
  

  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Qualification from './components/Qualifications';
import Projets from './components/Projets';
import Competences from './components/Competences';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Navbar,
    Banner,
    About,
    Qualification,
    Projets,
    Competences,
    Contact,
    Footer
  },

  data: () => ({
      
    }),
    
};
</script>

<style>

@font-face {
  font-family: "first";
  src: local("First"),
   url('./font/Neuwelt-Black.otf');
}

@font-face {
  font-family: "second";
  src: local("Second"),
   url('./font/Neuwelt-ExtraLight.otf');
}


</style>
