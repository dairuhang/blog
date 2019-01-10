<template>
    <div id="add-blog">
        <h2>添加博客</h2>
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
            <button @click.prevent="infoPost()">添加博客</button>
        </form>
        <div v-if="submited">
            <h2>您的博客发布成功</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddBlog",
        data(){
            return{
                blog:{
                    title:'',
                    content:'',
                    tp:[],
                    author:''
                },
                authors:['戴儒航','蒋圣福','蔡天炜'],
                submited:false
            }
        },
        methods:{
            infoPost(){
                this.axios.post('https://wd0690233751hbwboj.wilddogio.com/posts.json',this.blog).then(res=>{
                    this.submited = true;
                })
            }
        }
    }
</script>

<style scoped>
    #add-blog *{
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    #add-blog{
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