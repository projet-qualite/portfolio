<template>

<div class="grey lighten-5">
  <div  style="margin-left: 10%; margin-right: 10%">
  <v-col align="center"
      justify="center">
       <div align="center" class="mt-12">  <h3 style="font-family: first; color:#FF9B00; font-size:3rem;">Contactez moi</h3></div>


  <v-form  @submit.prevent="sendEmail">
    <v-container>

      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
          required
          outlined
            label="Nom"
            :rules="[v => !!v || 'Nom requis']"
            v-model="name"
          ></v-text-field>

         
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          
            

            <v-text-field
                outlined
                label="Email"
                id="email2"
                :rules="emailRules"
                v-model="email"
            ></v-text-field>


         

          
        </v-col>

      </v-row>

      <v-row>

            <v-col
            sm="12"
            >
            <v-text-field
                outlined
                label="Sujet"
                v-model="sujet"
                :rules="[v => !!v || 'Sujet requis']"
            ></v-text-field>

            
            </v-col>

       
        </v-row>


        <v-row>

            <v-col
            sm="12"
            >
            <v-textarea
            outlined
            id="message"
                color="orange"
                :rules="[v => !!v || 'Message requis']"
                v-model="message"
                >
                <template v-slot:label>
                    <div>
                    Message
                    </div>
                </template>
                </v-textarea>

            
            </v-col>

       
        </v-row>

        <v-row>

            <v-col
            sm="12"
            >
                <v-btn
                    @click="validate"
                    color="warning"
                    
                    >
                    
                    Envoyer message
                </v-btn>
            
            </v-col>

       
        </v-row>
    </v-container>
  </v-form>

  </v-col>
  <v-snackbar
      v-model="snackbar"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="orange"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
</div>

</div>

</template>
<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  import axios from 'axios';

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      select: { required },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
      name: '',
      email: '',
      sujet: '',
      message: '',
      emailRules: [
        v => !!v || 'E-mail est requis',
        v => /.+@.+\..+/.test(v) || 'E-mail invalide',
      ],
      snackbar: false,
      text: `Hello, I'm a snackbar`,

      
    }),

    

    methods: {

      validate () {
        this.snackbar = true;
        if(this.name === '' || this.sujet === '' || this.message === '' || !(this.email.includes("@")) || !(this.email.includes(".")) )
        {
          this.snackbar = true;
          this.text = "Veuillez saisir tous les champs";

          if( this.$refs.form)
          {
            this.$refs.form.validate();
          }
        }
        else{
            

            axios
            .get('https://www.rapidkar.com/api/public/api/send2/email/'+this.email+"/"+this.name+"/"+this.sujet+"/"+this.message)
            .then(response => (this.info = response));

            this.snackbar = true;
            this.text = "Message envoyé";
        }
        
        
      },

      voir(){

        console.log("message: "+this.message);
        console.log(document.getElementById("email").value);
        console.log(document.getElementById("email2").value);

      }
      
      ,
    },
  }
</script>