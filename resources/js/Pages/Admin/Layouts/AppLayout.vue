<template>
  <div>  
    <Header></Header>

    <SideBar></SideBar>
   
    <main class="app-content">
        <Flash v-if="$page.flash"></Flash> 
        <slot></slot>     
    </main> 
    <!-- Modal Portal -->
    <portal-target name="modal" multiple>
    </portal-target>

  </div>
</template>

<script>   
    import Header from './partials/Header' 
    import SideBar from './partials/SideBar' 
    import Flash from './partials/Flash' 

    export default {
        components: {  
            Header,
            SideBar,
            Flash,
        },        

        computed: {
            path() {
                return window.location.pathname
            }
        },   
         
        mounted() {

            var treeviewMenu = $('.app-menu');

            // Toggle Sidebar
            $('[data-toggle="sidebar"]').click(function(event) {
                event.preventDefault();
                $('.app').toggleClass('sidenav-toggled');
            });

            // Activate sidebar treeview toggle
            $("[data-toggle='treeview']").click(function(event) {
                event.preventDefault();
                if(!$(this).parent().hasClass('is-expanded')) {
                    treeviewMenu.find("[data-toggle='treeview']").parent().removeClass('is-expanded');
                }
                $(this).parent().toggleClass('is-expanded');
            });

            // Set initial active toggle
            $("[data-toggle='treeview.'].is-expanded").parent().toggleClass('is-expanded');

            //Activate bootstrip tooltips
            $("[data-toggle='tooltip']").tooltip();            
        },
        
    }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>