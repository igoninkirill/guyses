<template>
  <v-card>
    <v-card-title>
      Комментарии к <v-chip color="primary" class="ml-1">{{ name }}</v-chip>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="Имя"
            v-model="form.name"
            :error-messages="errors.name"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea
            label="Комментарий"
            placeholder="Если вы считаете, что это МЕРТВАЯ ДУША, то разоблачите дешевку"
            v-model="form.comment"
            :error-messages="errors.comment"
          ></v-textarea>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn
        color="primary"
        nuxt
        to="/"
      >
        Посмотреть участников
      </v-btn>
      <v-btn
        color="primary"
        @click="store"
      >
        Отправить
      </v-btn>
    </v-card-actions>
    <v-card-text>
      <h2>Комментарии</h2>
<!--      <v-row v-for="comment in comments">-->
<!--        <v-col cols="12">{{ comment.name }}</v-col>-->
<!--        <v-col cols="12">{{ comment.comment }}</v-col>-->
<!--      </v-row>-->
      <v-list three-line>
        <template v-for="comment in comments">
          <v-list-item
            :key="comment.name"
          >
            <v-list-item-content>
              <v-list-item-title v-html="comment.info"></v-list-item-title>
              <v-list-item-subtitle v-html="comment.comment"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card-text>
  </v-card>
</template>


<script>
import axios from "axios";

export default {
  name: 'Comments',

  data: () => ({
    name: '',
    form: ({
      post_id: '',
      name: '',
      comment: ''
    }),
    errors: ({
      name: '',
      comment: ''
    }),
    comments: []
  }),

  created() {
    this.form.post_id = this.$route.params.id
    this.init()
  },

  methods: {
    init () {
      axios
        .get("http://rucensus.loc/api/posts/" + this.$route.params.id, {
          headers: {
            Accept: "application/json"
          }
        })
        .then(
          response => {
            this.name = response.data.post.name
            this.comments = response.data.comments
          },
        )
        .catch(error => this.errors = error.response.data.errors)
      ;
    },
    store () {
      axios
        .post("http://rucensus.loc/api/comments", this.form, {
          headers: {
            Accept: "application/json"
          }
        })
        .then(
          response => {
            this.init()
            this.form.name = ''
            this.form.comment = ''
          },
        )
        .catch(error => this.errors = error.response.data.errors)
      ;
    }
  }
}
</script>
