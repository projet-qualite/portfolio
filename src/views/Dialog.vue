<template>

    <v-card>
                                    <v-card-title class="headline grey lighten-5">
                                    {{ element.descriptionHeader }}


                                    </v-card-title>


                                    <v-divider></v-divider>

                                    <v-card-text>
                                        {{ element.description }}

                                         <a :href="element.lien">Lien d'accès</a>
                                    </v-card-text>

                                    <v-card-actions>
    <v-row>

    
    <v-col
    align-self="center"
    cols="5"
    >
      <v-img 
        :src="element.img1"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        v-if="element.img1"
        aspect-ratio="1"
        class="grey lighten-2"
      >
      </v-img>

    </v-col>

    <v-col
    cols="5"
    >

       <v-img 
        :src="element.img2"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        v-if="element.img2"
        aspect-ratio="1"
        class="grey lighten-2"
      >
       </v-img>

    </v-col>

    <v-col
    cols="10"
    >

       <v-img 
        :src="element.img3"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        v-if="element.img3"
        aspect-ratio="1"
        class="grey lighten-2"
      >
       </v-img>
      
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
    </v-col>
  </v-row>
                                    <v-spacer></v-spacer>

                                    
                                    </v-card-actions>
                                </v-card>
    
</template>

<script>
export default {
    name: "Dialog",
    props:{
        element: Object
    },
    
    
}
</script>