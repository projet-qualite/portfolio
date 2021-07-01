<template>


    <v-layout row class="mx-6 mt-12" >

        <v-flex xs5 md5 sm5 lg5 align-self-center class="hidden-sm-and-down">
          <v-card
                
                max-width="400"
            >
                

                <v-img src="../assets/avataaars2.png"></v-img>

                
            </v-card>

        </v-flex>

       

       <v-flex xs12 sm12 md6 lg6 xl6>
            <h1 style="font-family: first; color:#FF9B00; font-size:3rem;">A propos</h1>
            <p class="text--secondary">
                Passionné de développement et de nouvelles
                technologies, <br>j'ai plus de 3 ans dans le développement web et 1 an dans le développement mobile
             </p>

           <v-layout row>  
            <v-flex xs12 sm12 md6 lg6 xl6>

                <v-list flat>
                <v-list-item-group
                    v-model="selectedItem"
                    color="#FF9B00"
                >
                    <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                            <v-list-item-title v-text="item.contenu"></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>

            </v-flex>

            
           </v-layout>

            <h1 style="font-family: first; color:#FF9B00; font-size:150%;">Mes hobbies</h1>
            <v-layout row class="ml-2">
                <v-flex xs12 sm4 md4 xl4 lg4>
                    <v-row>
                        <v-icon color="#FF9B00">mdi-basketball</v-icon>
                        <h4 style="font-family: first; color:#004B82;" class="ml-2"><b>Basketball</b></h4>

                    </v-row>
                    
                </v-flex>

                <v-flex xs12 sm4 md4 xl4 lg4>
                    <v-row>
                        <v-icon color="#FF9B00">mdi-gamepad-variant</v-icon>
                        <h4 style="font-family: first; color:#004B82;" class="ml-2"><b>Jeu vidéo</b></h4>

                    </v-row>
                    
                </v-flex>

                <v-flex xs12 sm4 md4 xl4 lg4>
                    <v-row>
                        <v-icon color="#FF9B00">mdi-book-open-variant</v-icon>
                        <h4 style="font-family: first; color:#004B82;" class="ml-2"><b>Lecture</b></h4>

                    </v-row>
                    
                </v-flex>

                
            </v-layout>

            

       </v-flex>
    

    </v-layout>
</template>

<script>
export default {
    name: "About",
    data: () => ({
      selectedItem: 1,
      items: [
        { text: 'Nom', icon: 'mdi-account' ,contenu: 'Marshall FRY'},
        { text: 'Téléphone', icon: 'mdi-phone', contenu: '+33763888725'},
        { text: 'Email ', icon: 'mdi-email' ,contenu: 'marshalfry1998@gmail.com'},
      ],
    }),
    
}
</script>