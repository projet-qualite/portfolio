<template>

<v-container>

  <v-app-bar flat color="white">
    
    
    <v-layout row class="hidden-sm-and-down">
      <v-flex xs2 md4 sm4 lg4>

        <v-toolbar-title><h3 style="font-family: first">FM</h3></v-toolbar-title>
        

      </v-flex>

      <v-flex v-for="(menu, i) in menus"
          :key="menu.titre" xs2 md2 sm2 lg2>

        <v-btn text
          :color="menu.couleur"
          @click="changerCouleur(i, menu.route)"
          router :to="menu.route"
          >
            {{ menu.titre }}
            </v-btn>

            

      </v-flex>

      <v-flex xs2 md2 sm2 lg2>
        <v-btn
              rounded
              color="orange"
              text--white
              router to="/contact"
              @click="bouge('/contact')"
              
            >
              Contactez moi

            </v-btn>
      </v-flex>

        

    </v-layout>
    <v-toolbar-title class="hidden-sm-md-up"><h3 style="font-family: first">FM</h3></v-toolbar-title>
    <v-spacer></v-spacer>

    <v-app-bar-nav-icon  class="hidden-md-and-up"  @click="drawer=!drawer"></v-app-bar-nav-icon>
     

          
     
   </v-app-bar>

   <v-navigation-drawer v-model="drawer"  app class="orange lighten-2 hidden-md-and-up">
     <v-layout column align-center>
       <v-flex class="mt-5">
         <v-avatar size="150">
           <img src="../assets/pic.jpg" alt="">
         </v-avatar>
       </v-flex>

     </v-layout>
            <v-list class="mt-10">
                <v-list-item-group
                    color="white"
                >
                    <v-list-item
                    v-for="(item, i) in links"
                    :key="i"
                    @click="bouge(item.route)"
                    route :to="item.route"
                    >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
</v-container>
   
</template>

<script>

  export default {
    name: "Navbar",
    data: () => ({
      links:[
                { icon: 'mdi-home', text: 'Accueil', route: '/banner' },
                { icon: 'mdi-alpha-c-circle', text: 'Compétences', route: '/competences' },
                { icon: 'mdi-folder', text: 'Portfolio', route: '/apropos' },
                { icon: 'mdi-brain', text: 'Projets', route: '/projets' },
                { icon: 'mdi-school-outline', text: 'Qualifications', route: '/qualifications' },
                { icon: 'mdi-email', text: 'Contactez moi', route: '/contact' },
            ],
      drawer: false,
      menus: [
        {titre: 'Accueil', couleur: '#FF9803', route:"banner"
         },

        {titre: 'Portfolio', couleur: '#0070C2' , route:"apropos"},


        {titre: 'Projets', couleur: '#0070C2', route:"projets"}
      ],
    }),
    computed:{

      target (identifiant) {
        const value = this.menus[identifiant].route;
        if (!isNaN(value)) return Number(value)
        else return value
      },
      options () {
        return {
          duration: this.duration,
          offset: this.offset,
          easing: this.easing,
        }
      }

    },
    methods:{
      changerCouleur: function(identifiant, route)
      {
        for(let i = 0; i<this.menus.length; i++)
        {
          this.menus[i].couleur = '#0070C2';
        }

        this.menus[identifiant].couleur = '#FF9803';
        //console.log('/'+route);
        document.getElementById('/'+route).scrollIntoView({behavior: 'smooth'})
        

      },
      bouge(route)
    {
      document.getElementById(route).scrollIntoView({behavior: 'smooth'})
    }

    },
    
  }
</script>
