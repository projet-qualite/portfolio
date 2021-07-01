<template>
  <div style="margin-left: 10%; margin-right: 10%" id="projet">
      
      <div align="center" class="mt-12">  <h3 style="font-family: first; color:#FF9B00; font-size:3rem;">Mes projets</h3></div>
      
      <v-card>
    <v-tabs
      color="deep-purple accent-4"
      right
    >
      <v-tab>Tous les projets</v-tab>
      <v-tab>Sites Web</v-tab>
      <v-tab>Applications mobiles</v-tab>


      <v-tab-item>

          <v-container fluid>
          <v-row>
            <v-col
              v-for="all in alls"
              :key="all.titre"
              cols="12"
              md="4"
            >
            
                    <v-hover v-slot="{ hover }">
                        <v-card
                        class="mx-auto"
                        color="grey lighten-4"
                        max-width="600"
                        >
                        <v-img
                            :aspect-ratio="5/5"
                            :src="all.img"
                        >
                            <v-expand-transition>
                            <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                                style="height: 100%;"
                            >
                                {{ all.titre }}
                            </div>
                            </v-expand-transition>
                        </v-img>
                        <v-card-text
                            class="pt-6"
                            style="position: relative;"
                        >

                            <v-dialog
                                width="500"
                                >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        absolute
                                        color="orange"
                                        class="white--text"
                                        fab
                                        large
                                        right
                                        top
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                    >
                                    <v-icon color="white">mdi-plus-circle</v-icon>
                                    </v-btn>
                                </template>

                                <Dialog :element="all" />
                                </v-dialog>



                            
                            <div class="font-weight-light grey--text title mb-2">
                                {{  }}
                            
                            </div>
                        </v-card-text>
                        </v-card>
                    </v-hover>
            </v-col>
          </v-row>
        </v-container>

      </v-tab-item>

      <v-tab-item>

          <v-container fluid>
          <v-row>
            <v-col
              v-for="web in webs"
              :key="web.titre"
              cols="12"
              md="4"
            >
                    <v-hover v-slot="{ hover }">
                        <v-card
                        class="mx-auto"
                        color="grey lighten-4"
                        max-width="600"
                        >
                        <v-img
                            :aspect-ratio="5/5"
                            :src="web.img"
                        >
                            <v-expand-transition>
                            <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                                style="height: 100%;"
                            >
                                {{ web.titre }}
                                <span v-if="cours"> <h5>(En developpement)</h5> </span>
                            </div>
                            </v-expand-transition>
                        </v-img>
                        <v-card-text
                            class="pt-6"
                            style="position: relative;"
                        >

                            <v-dialog
                                v-model="dialog"
                                width="500"
                                >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        absolute
                                        color="orange"
                                        class="white--text"
                                        fab
                                        large
                                        right
                                        top
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                    >
                                    <v-icon color="white">mdi-plus-circle</v-icon>
                                    </v-btn>
                                </template>

                                <Dialog :element="web" />
                                </v-dialog>



                            
                            <div class="font-weight-light grey--text title mb-2">
                                {{  }}
                            
                            </div>
                        </v-card-text>
                        </v-card>
                    </v-hover>
            </v-col>
          </v-row>
        </v-container>

      </v-tab-item>



      <v-tab-item>

          <v-container fluid>
          <v-row>
            <v-col
              v-for="mobile in mobiles"
              :key="mobile.titre"
              cols="12"
              md="4"
            >
                    <v-hover v-slot="{ hover }">
                        <v-card
                        class="mx-auto"
                        color="grey lighten-4"
                        max-width="600"
                        >
                        <v-img
                            :aspect-ratio="5/5"
                            :src="mobile.img"
                        >
                            <v-expand-transition>
                            <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                                style="height: 100%;"
                            >
                                {{ mobile.titre }}
                            </div>
                            </v-expand-transition>
                        </v-img>
                        <v-card-text
                            class="pt-6"
                            style="position: relative;"
                        >

                            <v-dialog
                                v-model="dialog"
                                width="500"
                                >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        absolute
                                        color="orange"
                                        class="white--text"
                                        fab
                                        large
                                        right
                                        top
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                    >
                                    <v-icon color="white">mdi-plus-circle</v-icon>
                                    </v-btn>
                                </template>

                                <Dialog :element="mobile" />
                                </v-dialog>



                            
                            <div class="font-weight-light grey--text title mb-2">
                                {{  }}
                            
                            </div>
                        </v-card-text>
                        </v-card>
                    </v-hover>
            </v-col>
          </v-row>
        </v-container>

      </v-tab-item>


    </v-tabs>
  </v-card>
  </div>
</template>

<script>
import Dialog from '../views/Dialog';

  export default {
      components:{
          Dialog
      },
    data: () => ({

        


        alls:[

            {
                'titre': 'Rapidkar.com',
                'descriptionHeader': 'Site d\'annonces de locations de voitures',
                'description': 'C\'est un site permettant de faire ou sa voiture ou de louer une voiture selon nos besoins et le budget',
                'img': require('../assets/rapidkar.png'),
                'img1': require('../assets/r.jpg'),
                'cours': false,
                'lien': 'https://www.rapidkar.com/home.php'
            },

            {
                titre: 'fandd.fr',
                descriptionHeader: 'Site de services comptables LMNP',
                description: 'Site proposant d\'éffectuer les démarches comptables LMNP pour les clients',
                img: require('../assets/fandd.png'),
                img1: require('../assets/a1.png'),
                img2: require('../assets/a2.png'),
                cours: true,
                'lien': 'https://www.fandd.fr'
                
            },

            {
                'titre': 'Rapidkar',
                'descriptionHeader': 'L\'application du site d\'annonces de locations de voitures',
                'description': 'Application fonctionnant en harmonie avec le site où les utilisateurs ont droit aux mêmes fonctionnalités',
                'img': require('../assets/rapidkar.png'),
                img1: require('../assets/app1.png'),
                img2: require('../assets/app2.png'),
                img3: require('../assets/app3.png'),
                cours: false,
                lien: 'https://play.google.com/store/apps/details?id=com.fry.rapidkar&hl=fr&gl=US'
            }, 

            {
                'titre': 'Projet de substitution stage',
                'descriptionHeader': 'L\'application Web de gestion d\'un amphi',
                'description': 'Application réalisé avec la collaboration de Insaf Salma BENAMARA en Vue JS qui permet de gérer un amphi et ses placements',
                'img': require('../assets/vue.png'),
                cours: false,
                lien: 'https://github.com/projet-qualite/projet_sub.git'
            }, 

        ],

        webs: [
            {
                'titre': 'Rapidkar.com',
                'descriptionHeader': 'Site d\'annonces de locations de voitures',
                'description': 'C\'est un site permettant de faire ou sa voiture ou de louer une voiture selon nos besoins et le budget',
                'img': require('../assets/rapidkar.png'),
                'img1': require('../assets/r.jpg'),
                'cours': false,
                lien: 'https://www.rapidkar.com/home.php'
            },

            {
                titre: 'fandd.fr',
                descriptionHeader: 'Site de services comptables LMNP',
                description: 'Site proposant d\'éffectuer les démarches comptables LMNP pour les clients',
                img: require('../assets/fandd.png'),
                img1: require('../assets/a1.png'),
                img2: require('../assets/a2.png'),
                cours: true,
                lien: 'https://www.fandd.fr'
                
            }, 

            {
                'titre': 'Projet de substitution stage',
                'descriptionHeader': 'L\'application Web de gestion d\'un amphi',
                'description': 'Application réalisé avec la collaboration de Insaf Salma BENAMARA en Vue JS qui permet de gérer un amphi et ses placements',
                'img': require('../assets/vue.png'),
                cours: false,
                lien: 'https://github.com/projet-qualite/projet_sub.git'
            }

        ],

        mobiles: [
            {
                'titre': 'Rapidkar',
                'descriptionHeader': 'L\'application du site d\'annonces de locations de voitures',
                'description': 'Application fonctionnant en harmonie avec le site où les utilisateurs ont droit aux mêmes fonctionnalités',
                'img': require('../assets/rapidkar.png'),
                img1: require('../assets/app1.png'),
                img2: require('../assets/app2.png'),
                img3: require('../assets/app3.png'),
                cours: false,
                lien: 'https://play.google.com/store/apps/details?id=com.fry.rapidkar&hl=fr&gl=US'
                
            }
            
            

        ]

      
  }
  )
  }
</script>


<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>