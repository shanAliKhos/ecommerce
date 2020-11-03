<template>
    <div>

    <BreadCrumb>
        <template #CurrentPage>
            Dashboard
        </template>
    </BreadCrumb>
    <section class="product spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-5"> 
                    </div>
                    <div class="col-lg-9 col-md-7">
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import AppLayout from './shared/AppLayout' 
    import BreadCrumb from './shared/components/BreadCrumb'
    export default {
        layout: AppLayout, 
        components: {
         BreadCrumb
        },
    }
</script>
