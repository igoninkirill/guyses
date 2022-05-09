<template>
  <v-card>
    <v-card-title>
      Комментарии к <v-chip color="primary" class="ml-1">{{ post.name }}</v-chip>
      <v-col cols="12">
        <v-list-item-content>
          <v-list-item-title>Описание</v-list-item-title>
          <v-alert
            color="primary"
            dark
          >
            <v-list-item-subtitle>{{ post.description }}</v-list-item-subtitle>
          </v-alert>
        </v-list-item-content>
      </v-col>
      <v-col cols="12" md="auto" sm="12">
        <v-btn
          style="width: 100%"
          color="gray"
          nuxt
          to="/"
        >
          Посмотреть участников
        </v-btn>
      </v-col>
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
      <v-row>
        <v-spacer />
        <v-col cols="12" md="auto" sm="12">
          <v-btn
            style="width: 100%"
            color="primary"
            @click="store"
            :loading="load"
          >
            Отправить
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
    <v-card-text>
      <h2>Комментарии</h2>
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
    post: '',
    form: ({
      post_id: '',
      name: '',
      comment: ''
    }),
    errors: ({
      name: '',
      comment: ''
    }),
    comments: [],
    load: false
  }),

  created() {
    this.form.post_id = this.$route.params.id
    this.init()
  },

  methods: {
    init () {
      axios
        .get("/api/posts/" + this.$route.params.id, {
          headers: {
            Accept: "application/json"
          }
        })
        .then(
          response => {
            this.post = response.data.post
            this.comments = response.data.comments
          },
        )
        .catch(error => this.errors = error.response.data.errors)
      ;
    },
    store () {
      this.load = true
      axios
        .post("/api/comments", this.form, {
          headers: {
            Accept: "application/json"
          }
        })
        .then(
          response => {
            this.load = false
            this.init()
            this.form.name = ''
            this.form.comment = ''
          },
        )
        .catch(error => {
          this.load = false
          this.errors = error.response.data.errors
        })
      ;
    }
  }
}
</script>
