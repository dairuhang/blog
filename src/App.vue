<template>
  <div id="app">
    <!--<add-blog></add-blog>-->
    <!--<show-blogs></show-blogs>-->
    <blog-nav></blog-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/AddBlog'
import showBlogs from './components/ShowBlogs'
import blogNav from './components/BlogNav'
export default {
  name: 'app',
  components: {
      addBlog,showBlogs,blogNav
  }
}
</script>

<style>

</style>
