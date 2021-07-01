<template>

   <div fill-height fluid class="grey lighten-5" >
     <div align="center" class="mt-12">  <h3 style="font-family: first; color:#FF9B00; font-size:3rem;">Mes qualifications</h3></div>


  <v-row class="mr-16 ml-16">

       <v-col>

             <v-row>
               <v-icon x-large color="#004B82">mdi-school-outline</v-icon>
               <h3 style="font-family: second; color:#004B82; font-size:2rem;" class="ml-4">Formations</h3>
             </v-row> 
              <v-row >

                <v-timeline
                  align-top
                  dense
                >
                  <v-timeline-item
                    v-for="message in formations"
                    :key="message.time"
                    :color="message.color"
                    small

                    id="yole93"
                  >
                    <div>
                      <div class="font-weight-normal">
                       <strong>{{ message.time }}</strong> <strong class="text-uppercase" style="color: #007F7F">{{ message.from }}</strong> - 
                          <span style="color:#00BFBF"><strong>{{ message.other }} </strong></span>
                      </div>
                      <div><strong>{{ message.message }} </strong></div>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-row>
             

       </v-col>

       <v-col>

             <v-row>
               <v-icon x-large color="#004B82">mdi-bag-checked</v-icon>
               <h3 style="font-family: second; color:#004B82; font-size:2rem;" class="ml-4">Expériences</h3>
             </v-row>        

             <v-row >

                <v-timeline
                  align-top
                  dense
                >
                  <v-timeline-item
                    v-for="experience in experiences"
                    :key="experience.time"
                    :color="experience.color"
                    small
                    id="yole93"
                  >
                    <div>
                      <div class="font-weight-normal">

                        
                          <v-row> <strong>{{ experience.time }}</strong>  -  <strong style="color: #007F7F">{{ experience.title }}</strong>  </v-row>
                          <v-row> <strong style="color:#007F7F; font-family: second">{{ experience.from }}</strong> -
                           <span style="color:#00BFBF; ">{{ experience.other }}</span></v-row>
                           <v-row><strong style="font-family: second">{{ experience.goal }} </strong></v-row>
                           <v-row><strong> <h5> Outils: {{ experience.outils }} </h5></strong></v-row>
                      </div>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-row>   

       </v-col>

       
    

    </v-row>
</div>
</template>

<script>
  export default {
    data: () => ({
      formations: [
        {
          from: 'Université de Haute Alsace',
          other:'Mulhouse, France',
          message: `Master 1 Miage`,
          time: '2020-2021',
          color: 'red',
        },
        {
          from: 'Université de Haute Alsace',
          other:'Mulhouse, France',
          message: `Licence 3 Miage`,
          time: '2019-2020',
          color: 'green',
        },
        {
          from: 'Université Felix Houphouët Boigny',
          other:'Abidjan, Côte D\'ivoire',
          message: 'Licence Miage-Génie informatique',
          time: '2016-2019',
          color: 'green',
        },
        {
          from: 'Lycée Garçons de Bingerville',
          other:'Bingerville, Côte D\'ivoire',
          message: 'Baccaulauréat Scientifique Série C',
          time: '2015-2016',
          color: 'green',
        },
      ],

      experiences: [
        {
          from: 'Université de Haute Alsace',
          other:'Mulhouse, France',
          title: ' Projet de substitution de stage',
          goal: `Réalisation d'une application web de gestion d'un amphi`,
          time: 'Juin 2020 - Août 2020 ',
          outils: 'Vue JS',
          color: 'red',
        },
        {
          from: 'Université de Haute Alsace',
          other:'Mulhouse, France',
          title: 'Projet C++',
          goal: 'Réalisation d\'un jeu de robot écraseur',
          time: 'Novembre 2019 - Janvier 2020',
          outils: 'Code Blocks, Winbgim',
          color: 'green',
        },

        {
          from: 'Université Felix Houphouët Boigny',
          other:'Abidjan, Côte d\'Ivoire',
          title: 'Projet de fin d\'études de Licence',
          goal: 'Réalisation d\'une plateforme de gestion intégré d\'assurance maladie',
          time: 'Mai 2019 - Juillet 2019',
          outils: 'Php, Bootstrap, JavaScript',
          color: 'green',
        },
      ],
    }),
  }
</script>

<style>

  #yole93{
    font-family: second;
  }

</style>