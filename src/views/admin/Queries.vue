<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Overview</span>
        <h3 class="page-title">Queries</h3>
      </div>
    </div>

        <d-row>
      <d-col v-for="(post, idx) in PostsListTwo" :key="idx" lg="3" sm="12" class="mb-4">
        <d-card class="card-small card-post card-post--aside card-post--1">
          <router-link :to="post.to">
            <div
              class="card-post__image"
              :style="{ backgroundImage: 'url(\'' + post.backgroundImage + '\')' }"
            >
              <d-badge
                pill
                :class="['card-post__category', 'bg-' + post.categoryTheme ]"
              >{{ post.category }}</d-badge>
            </div>
          </router-link>
          <d-card-body>
            <h5 class="card-title">
              <a class="text-fiord-blue" href="#">{{ post.title }}</a>
            </h5>
            <p class="card-text d-inline-block mb-3">{{ post.body }}</p>
          </d-card-body>
        </d-card>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>

import Pills from "@/data/Pills/queries-card-items-row-1"


export default {
  data() {
    return {
      PostsListTwo: Pills()
    };
  }
};
</script>
