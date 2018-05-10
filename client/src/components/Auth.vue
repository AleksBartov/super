<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="#4C586F">
                <v-toolbar-title>регистрация</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <v-btn
                    slot="activator"
                    :href="source"
                    icon
                    large
                    target="_blank"
                  >
                  </v-btn>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field color="#4C586F" name="username" label="Username" type="text" v-model="username"></v-text-field>
                  <v-text-field color="#4C586F" name="email" label="Email" type="email" v-model="email"></v-text-field>
                  <v-text-field color="#4C586F" id="password" name="password" label="Password" type="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="auth" dark color="#4C586F">зарегистрироваться</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</v-app>
</template>

<script>
import AuthService from '../services/AuthService'
export default {
  data () {
    return {
      username: '',
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async auth () {
      try {
        await AuthService.auth({
          username: this.username,
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
        console.log(this.error)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
