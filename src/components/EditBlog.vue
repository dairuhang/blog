<template>
    <div id="edit-blog">
        <h2>编辑博客</h2>
        <form v-if="!submited">
            <label for="">博客标题</label>
            <input type="text" v-model="blog.title" required>

            <label for="">博客内容</label>
            <textarea name="" id="" cols="30" rows="10" v-model="blog.content"></textarea>

            <div id="checkboxes">
                <label for="">Vue.js</label>
                <input type="checkbox" value="Vue.js" v-model="blog.tp">
                <label for="">Node.js</label>
                <input type="checkbox" value="Node.js" v-model="blog.tp">
                <label for="">React.js</label>
                <input type="checkbox" value="React.js" v-model="blog.tp">
                <label for="">Angular4</label>
                <input type="checkbox" value="Angular4" v-model="blog.tp">
            </div>

            <label for="">作者</label>
            <select v-model="blog.author">
                <option v-for="(author,i) in authors" :key="i">
                    {{author}}
                </option>
            </select>
            <button @click.prevent="infoPost()">编辑博客</button>
        </form>
        <div v-if="submited">
            <h2>您的博客编辑成功</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EditBlog",
        data(){
            return{
                id:this.$route.params.id,
                blog:{},
                authors:['戴儒航','蒋圣福','蔡天炜'],
                submited:false
            }
        },
        methods:{
            infoPost(){
                this.axios.put('https://wd0690233751hbwboj.wilddogio.com/posts/'+this.id+'.json',this.blog).then(res=>{
                    this.submited = true;
                })
            },
            fetchData(){
                this.axios('https://wd0690233751hbwboj.wilddogio.com/posts/'+this.id+'.json').then(res=>{
                    this.blog = res.data;
                })
            }
        },
        created() {
            this.fetchData()
        }
    }
</script>

<style scoped>
    #edit-blog *{
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    #edit-blog{
        margin: 20px auto;
        min-width: 600px;
        padding: 20px;
    }
    label{
        display: block;
        margin: 20px 0 10px;
    }
    input[type='text'],textarea,select{
        display: block;
        width: 100%;
        padding: 8px;
    }
    #checkboxes{
        display: inline-block;
        margin-top: 0;
    }
    #checkboxes input,#checkboxes label{
        display: inline-block;
        margin-right: 10px;
    }
    button{
        display: block;
        margin: 20px 0;
        background: crimson;
        color: #fff;
        border: 0;
        padding: 14px;
        border-radius: 4px;
        font-size: 18px;
        cursor: pointer;
    }
</style>