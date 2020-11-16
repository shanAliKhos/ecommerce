<template>
    <div class="container border-t border-grey-dark">
        <div class="pt-10 sm:pt-12 pb-16 sm:pb-20 lg:pb-24 flex flex-col lg:flex-row justify-between">
            
            <dashboard-navigation></dashboard-navigation>

            <slot>
            </slot>            
 
        </div>
    </div>
</template>

<script>   
import DashboardNavigation from './Partials/DashboardNavigation'

export default { 
    components: {
        DashboardNavigation,        
    }
    
}
</script>