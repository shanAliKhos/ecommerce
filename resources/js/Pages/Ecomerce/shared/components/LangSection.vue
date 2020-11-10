<template>
    <div class="header__top__right__language ">

        <LangImage></LangImage> 
        <div>English</div>

        <span class="arrow_carrot-down"></span>

        <ul>

            <li><a href="#">Spanis</a></li>

            <li><a href="#">English</a></li>

        </ul>

    </div>
</template>
<script>
import LangImage from './LangImage'  
export default {
    components:{
        LangImage,
    },
}
</script>