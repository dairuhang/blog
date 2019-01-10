<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <p>作者:{{blog.author}}</p>
        <ul>
            <li v-for="(ty,i) in blog.tp" :key="i">
                文章类型:{{ty}}
            </li>
        </ul>
        <button @click="del">删除</button>
        <router-link :to="'/edit/'+id" tag="button">编辑</router-link>
    </div>
</template>

<script>
    export default {
        name: "SingleBlog",
        data(){
            return{
                id:this.$route.params.id,
                blog:{}
            }
        },
        methods:{
            del(){
                this.axios.delete('https://wd0690233751hbwboj.wilddogio.com/posts/'+this.id+'.json').then(res=>{
                    this.$router.push({path:'/'})
                })
            }
        },
        created() {
            this.axios('https://wd0690233751hbwboj.wilddogio.com/posts/'+this.id+'.json').then(data=>{
                console.log(data);
                this.blog = data.data
            })
        }
    }
</script>

<style scoped>
    #single-blog{
        max-width: 960px;
        margin: 0 auto;
        padding: 20px;
        background: #eee;
        border: 1px dotted #aaa;
    }
    ul{
        list-style: none;
    }
</style>