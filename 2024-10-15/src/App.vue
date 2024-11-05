<script setup>
import Blog from './components/Blog.vue'
import { blogDatas } from "./data/blogs.js"
import { ref, watch } from "vue"

var blogs = ref(blogDatas)
var visible = ref(0)

const setVisible = () => {
  for (var i = 0; i < blogs.value.length; i++) {
    if (visible.value == 0) {
      blogs.value[i].show = true
    } else if (blogs.value[i].likes == 0) {
      blogs.value[i].show = false
    }
  }
}

watch(visible, () => {
  setVisible();
})

const increaseLikes = (index) => {
  blogs.value[index].likes++;
}
</script>

<template>
  <header>
    <h1>Bloglist</h1>
  </header>
  <main>
    <section>
      <select v-model="visible">
        <option value="0">All</option>
        <option value="1">Popular</option>
      </select>
    </section>
    <section>
      <div v-for="(blog, index) in blogs">
        <!--<Blog :title="blog.title" :body="blog.body" :likes="blog.likes" :show="blog.show" />-->
        <!--<Blog v-bind="blog"/> -->
        <Blog :blog="blog" v-if="blog.show" @increase-likes="increaseLikes(index)"/>
      </div>
    </section>
  </main>
  <footer>
    <p>Copyright</p>
  </footer>
</template>

<style scoped>
main {
  padding: 10px;
}

select {
  width: 100%;
  padding: 7px;
}
</style>
