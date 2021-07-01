<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="orange white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.lien"
          class="mx-4 white--text"
          icon
          :href="icon.lien"
          
        >
          <v-icon size="24px">
            {{ icon.img }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
          Ce site a été entièrement réalisé de A à Z avec Vue JS et le Material Design Vuetify.
          Je suis actuellement à la recherche d'un stage en développement pouvant déboucher sur une alternance.
          Je reste disponible pour tous vos besoins.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>FRY Marshall</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        { img: 'mdi-facebook', lien: 'https://www.facebook.com/marshal.fry/'},
         { img: 'mdi-twitter', lien: 'https://twitter.com/mrFry98'},
         { img: 'mdi-linkedin', lien: 'https://www.linkedin.com/in/kanga-cédric-marshall-fry-099519129/'},
         { img:'mdi-instagram', lien: 'https://www.instagram.com/fry_marshall/'}
      ],
    }),
  }
</script>