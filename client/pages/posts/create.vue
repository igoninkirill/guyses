<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-hover v-slot="{ hover }">
        <v-card class="logo d-flex justify-center">
          <v-img
            :aspect-ratio="16/9"
            src="http://s12.pikabu.ru/post_img/big/2021/01/03/9/160968628221569829.png"
            style="max-width: 100%"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out deep-purple darken-2 v-card--reveal text-h2 white--text"
                style="height: 100%;"
              >
                  РАЯН ГОСЛИНГ
              </div>
            </v-expand-transition>
          </v-img>
        </v-card>
      </v-hover>
      <v-card>
        <v-card-title class="headline justify-center">
          ПЕРВАЯ РЕАЛЬНАЯ ОБЩЕМИРОВАЯ ПЕРЕПИСЬ НАСЕЛЕНИЯ
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Ваше РЕАЛЬНОЕ имя"
                v-model="form.name"
                :error-messages="errors.name"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                label="Докажите что вы СУЩЕСТВУЕТЕ"
                placeholder="Нужно написать что-то, чтобы можно было понять что ВЫ СУЩЕСТВУЕТЕ"
                v-model="form.description"
                :error-messages="errors.description"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-row>
            <v-spacer />
            <v-col cols="12" md="auto" sm="12">
              <v-btn
                style="width: 100%;"
                color="gray"
                nuxt
                to="/"
              >
                Посмотреть участников
              </v-btn>
            </v-col>
            <v-col cols="12" md="auto" sm="12">
              <v-btn
                style="width: 100%;"
                color="primary"
                :loading="load"
                @click="store"
              >
                Отправить
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  name: 'IndexPage',

  data: () => ({
    form: ({
      name: '',
      description: ''
    }),
    errors: ({
      name: '',
      description: ''
    }),
    load: false
  }),

  created () {
    console.log(process.env)
  },

  methods: {
    store () {
      this.load = true
      axios
        .post("http://rucensus.loc/api/posts", this.form, {
          headers: {
            Accept: "application/json"
          }
        })
        .then(
          response => {
            this.$router.push('/')
          },
        )
        .catch(error => {
          this.load = false
          this.errors = error.response.data.errors
        });
    }
  }
}
</script>
