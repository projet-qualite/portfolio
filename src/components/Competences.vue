<template>
  <div style="margin-left: 10%; margin-right: 10%">
      
    <div align="center" class="mt-12">  <h3 style="font-family: first; color:#FF9B00; font-size:3rem;">Mes Compétences</h3></div>


    <v-layout row>

       <v-flex xs12 md6 sm6 lg6>

             <v-row>
               <v-icon x-large color="#004B82">mdi-school-outline</v-icon>
               <h3 style="font-family: second; color:#004B82; font-size:2rem;" class="ml-4">Programmation</h3>
             </v-row> 

              <span
                v-for="domaine in domaines"
                :key="domaine.header">

                  <v-row>
                    <h3 style="font-family: second; color:#004B82; font-size:1rem;" class="mt-4"><b>{{ domaine.header }}</b></h3>
                  </v-row> 
                  <v-col 
                    v-for="element in domaine.elements"
                    :key="element.nom"
                  >

                    <v-subheader>
                      <v-row>
                        {{ element.nom }}
                        <v-spacer>
                    </v-spacer>
                        <strong>{{ Math.ceil(element.level) }}%</strong>

                      </v-row>
                        
                    </v-subheader>
                    
                     

                      
                      <v-progress-linear
                        v-model="element.level"
                        height="8"
                      >
                      </v-progress-linear>
                    </v-col>


              </span>


              
              

       </v-flex>

       <v-spacer></v-spacer>

       <v-flex xs12 md6 sm6 lg6>

             <v-row>
               <v-icon x-large color="#004B82">mdi-bag-checked</v-icon>
               <h3 style="font-family: second; color:#004B82; font-size:2rem;" class="ml-4">Langues</h3>
             </v-row> 

             <v-row>
                    <h3 style="font-family: second; color:#004B82; font-size:1rem;" class="mt-4"><b></b></h3>
              </v-row>        

            <span
                v-for="langue in langues"
                :key="langue.nom">

                  
                  <v-col 
                  >
                       <v-subheader>
                      <v-row>
                        {{ langue.nom }}
                        <v-spacer>
                    </v-spacer>
                        <strong>{{ Math.ceil(langue.level) }}%</strong>

                      </v-row>
                        
                    </v-subheader>
                    
                     

                      
                      <v-progress-linear
                        v-model="langue.level"
                        height="8"
                      >
                      </v-progress-linear>
                    </v-col>


              </span>

       </v-flex>

       
    

    </v-layout>


  
    
      
  </div>
</template>

<script>
  export default {
    data: () => ({

      

      
       domaines: [
          {
          header: "Programmation Web",
          elements: [
            {
              nom: 'PHP',
              level: 90
            },
            {
              nom: 'Vue JS',
              level: 85
            },

            {
              nom: 'Laravel',
              level: 68
            },

          ]
        },

        {
          header: "Programmation Mobile",
          elements: [
            {
              nom: 'Flutter',
              level: 95
            },
            {
              nom: 'Java',
              level: 80
            },

            {
              nom: 'Kotlin',
              level: 70
            },

          ]

        }
      
       ],

       langues: [
         {
           nom: "Français",
           level: 100
         }, 

         {
           nom: "Nouchi",
           level: 100
         },

         {
           nom: "Anglais",
           level: 65
         },

         {
           nom: "Allemand",
           level: 20
         },

       ]
         
            


    }),
    methods: {
      // Create an array the length of our items
      // with all values as true
      all () {
        this.panel = [...Array(this.items).keys()].map((k, i) => i)
      },
      // Reset the panel
      none () {
        this.panel = []
      },
    },
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