<template>
    <div id="show-blogs">
        <h1>博客总览</h1>
        <input type="text" v-model="searchs" placeholder="搜索">
        <div class="single-blog" v-for="(blog,i) in fBlogs" :key="i">
            <router-link :to="'/blog/' + blog.id"><h2>{{blog.title | to-uppercase}}</h2></router-link>
            <article>
                {{blog.content | snippet}}
            </article>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShowBlogs",
        data(){
            return{
                blogs:[],
                searchs:''
            }
        },
        created() {
            this.axios('https://wd0690233751hbwboj.wilddogio.com/posts.json').then(res=>{
                // console.log(res.data);
                for (let key in res.data) {
                    // this.blogs.push(key);
                    // console.log(res.data[key]);
                    res.data[key].id = key;
                    this.blogs.push(res.data[key])
                }
                // return res.json
                // console.log(this.blogs);
                // this.blogs = res.data.slice(0,10)
            })
        },
        computed:{
            fBlogs(){
                return this.blogs.filter((blog)=>{
                    return blog.title.match(this.searchs)
                })
            }
        }
    }
</script>

<style scoped>
#show-blogs{
    min-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
#show-blogs a{
    color: #444;
    text-decoration: none;
}
    input[type='text']{
        padding: 8px;
        width: 100%;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
</style>