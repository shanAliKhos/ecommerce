<template> 
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li v-for="(link, linkindex) in links" :key="linkindex" :class="{'page-item':true,'active':link.active}">
                <inertia-link 
                    v-if="link.url"
                    :href="link.url"
                    preserve-scroll
                    :class="{'page-link':true}">
                    {{link.label}}
                </inertia-link>
            </li> 
        </ul> 
    </nav>    
 
</template>
<script>
export default {
    props:['links'],
}
</script>
