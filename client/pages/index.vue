<template>
  <v-card>
    <v-card-title>
      <v-row>
        <v-col cols="auto">
          <span class="heading">Участники ПЕРВОЙ ПРАВДИВОЙ ОБЩЕМИРОВОЙ переписи населения</span><br>
          Посчитанное количество людей:
          <v-chip
            color="Primary"
          >{{ posts.length }}</v-chip>
        </v-col>
        <v-spacer/>
        <v-col cols="auto">
          <v-btn
            color="primary"
            nuxt
            to="posts/create"
          >
            Отметить себбя
          </v-btn>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card>
      <v-data-table
        :headers="headers"
        :items="posts"
        :items-per-page="5"
        class="elevation-1"
      >
        <template #item.comments="{ item }">
          <v-btn
            color="primary"
            :to="'posts/' + item.id"
          >
            Комментарии
          </v-btn>
          <v-chip>{{ item.comments.length }}</v-chip>
        </template>
      </v-data-table>
    </v-card>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "Posts",

  data: () => ({
    posts: [],
    headers: [
      { text: 'ID', value: 'id', sortable: false },
      { text: 'Имя', value: 'name', sortable: false },
      { text: 'О себе', value: 'description', sortable: false },
      { text: 'Комментарии', value: 'comments', sortable: false }
    ]
  }),

  created () {
    this.init()
  },

  methods: {
    init () {
      axios
        .get("/api/posts", this.form, {
          headers: {
            Accept: "application/json"
          }
        })
        .then(
          response => {
            this.posts = response.data
          },
        );
    }
  }
}
</script>

<style>

.v-card {
  opacity: .98
}
.v-main__wrap {
  background: linear-gradient(-45deg, #eee, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
