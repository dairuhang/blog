<template>
    <nav>
        <ul>
            <li>
                <router-link to="/" exact>博客</router-link>
            </li>
            <li>
                <router-link to="/AddBlog" exact>写博客</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "BlogNav"
    }
</script>

<style scoped>
    ul{
        list-style: none;
        text-align: center;
        margin: 0;
    }
    li{
        display: inline-block;
        margin: 0;
    }
    a{
        color: #fff;
        text-decoration: none;
        padding: 12px;
        border-radius: 5px;
    }
    nav{
        background: crimson;
        padding: 30px 0 ;
        margin-bottom: 40px;
    }
    .router-link-active{
        background: rgba(255,255,255,.8);
        color: #444;
    }
</style>