<template>
<div class="grey lighten-5">

  <v-container >

    <v-layout row align-center
      >
          


          <v-flex xs12 md6 sm12 lg6 align-self-center class="ml-2">

          <h3 style="font-family: second; color:#FF9B00; font-size:2rem;" >Salut, Je suis</h3>
          <h1 style="font-family: first; color:#005695; font-size:4rem;" >Marshall FRY</h1>
          <h4 style="font-family: second; color:#004B82; font-size:120%;" ><b>Etudiant en Master Miage</b></h4>
          <h4 style="font-family: second; color:#004B82; font-size:120%;" >Développeur Web & Mobile</h4><br>

          <p class="text--secondary">
            Passionné de développement et de nouvelles
            technologies, dynamique et toujours prêt à prendre
            des initiatives.
          </p>

          

          <div
            v-for="user in users"
            :key="user.id"
          >
          <h1> {{ user.name }} </h1>
          <p> {{ user.email }} </p>

          </div>
          <v-btn
              rounded
              color="#FF9803"
              depressed
              dark
              href="https://www.rapidkar.com/img/CV.pdf"
              
            >
              Téléchargez mon CV
            </v-btn>

          </v-flex>


        <v-flex xs5 md5 sm5 lg5 align-self-center class="hidden-sm-and-down">
          <v-img src="../assets/avataaars.png"></v-img>


        </v-flex>

        


    </v-layout>

  </v-container>

</div>

  

</template>

<script>
import axios from 'axios';

  export default
  {
    name: "Banner",
    data:()=>({
      users: []
    }),
    methods: {

      enregistrer: function()
        {
          axios({
                    url: 'https://www.rapidkar.com/img/CV.pdf',
                    method: 'GET',
                    responseType: 'blob',
                }).then((response) => {
                     var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                     var fileLink = document.createElement('a');

                     fileLink.href = fileURL;
                     fileLink.setAttribute('download', 'CV.pdf');
                     document.body.appendChild(fileLink);

                     fileLink.click();
                });
        },

        fetchUsers: function () {
      const baseURI = 'https://jsonplaceholder.typicode.com/users'
      this.$http.get(baseURI)
      .then((result) => {
        this.users = result.data
      })
    }

      
    }
  }
</script>