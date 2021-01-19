<template>
 <div class="flex flex-wrap py-5 px-5 mb-10">
    <div class="w-full">
         <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center" v-for="tab in tabs" :key="`${tab.name}-tab`" :class="{ 'is-active': tab.isActive }">
                <a :href="tab.href" @click="selectTab(tab)" class="text-xs font-bold uppercase px-5 py-2 shadow-lg rounded block leading-normal" :class="{ 'text-white bg-orange-600 ': tab.isActive,'text-orange-600':!tab.isActive }"> 
                    <i class="fas fa-space-shuttle text-base mr-1"></i>  
                    {{ tab.name }}</a>
            </li>
        </ul> 
      
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div class="px-4 py-5 flex-auto">
                <div class="tab-content tab-space">
                    <slot></slot>
                </div>
            </div>
        </div>
    
    </div>    
</div>    
</template>
<script>
export default {
   data() {
        return { tabs: [] };
    },
    created() {
        this.tabs = this.$children;
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.href == selectedTab.href);
            });
        }
    }            
}
</script>