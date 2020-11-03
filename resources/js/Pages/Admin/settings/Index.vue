<template>
<div>

    <div class="app-title">
        <div>
            <h1><i class="fa fa-cogs"></i> Setting </h1>
        </div>
    </div>
    
    <div class="row user">
        <div class="col-md-3">
            <div class="tile p-0">
                <ul class="nav flex-column nav-tabs user-tabs">
                    <li class="nav-item"><a class="nav-link active" href="#general" data-toggle="tab">General</a></li>
                    <li class="nav-item"><a class="nav-link" href="#site-logo" data-toggle="tab">Site Logo</a></li>
                    <li class="nav-item"><a class="nav-link" href="#footer-seo" data-toggle="tab">Footer &amp; SEO</a></li>
                    <li class="nav-item"><a class="nav-link" href="#social-links" data-toggle="tab">Social Links</a></li>
                    <li class="nav-item"><a class="nav-link" href="#analytics" data-toggle="tab">Analytics</a></li>
                    <li class="nav-item"><a class="nav-link" href="#payments" data-toggle="tab">Payments</a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-9">
            <div class="tab-content">
                <div class="tab-pane active" id="general">
                    <general-form :settings="settings" 
                        @form-is-updated="update">
                    </general-form>
                </div>
                <div class="tab-pane fade" id="site-logo"> 
                    <logo-form 
                        :site_logo="settings.site_logo" 
                        :site_favicon="settings.site_favicon" 
                        @form-is-updated="update">
                    </logo-form> 
                </div>
                <div class="tab-pane fade" id="footer-seo">
                    <footer-seo-form 
                        :settings="settings" 
                        @form-is-updated="update">
                    </footer-seo-form> 
                </div>
                <div class="tab-pane fade" id="social-links">
                    <social-links-form 
                        :settings="settings" 
                        @form-is-updated="update">
                    </social-links-form> 
                </div>
                <div class="tab-pane fade" id="analytics">
                    <analytics-form 
                        :google_analytics="settings.google_analytics" 
                        :facebook_pixels="settings.facebook_pixels" 
                        @form-is-updated="update">
                    </analytics-form> 
                </div>
                <div class="tab-pane fade" id="payments">
                    <payments-form 
                        :settings="settings" 
                        @form-is-updated="update">
                    </payments-form> 
                </div>
            </div>
        </div>
    </div> 
</div>
</template>
<script>
import AppLayout from './../Layouts/AppLayout'  
import AnalyticsForm from './components/AnalyticsForm'  
import FooterSeoForm from './components/FooterSeoForm'  
import GeneralForm from './components/GeneralForm'  
import LogoForm from './components/LogoForm'  
import PaymentsForm from './components/PaymentsForm'  
import SocialLinksForm from './components/SocialLinksForm'  
export default {
    metaInfo: { title: 'Setting' },
    layout: AppLayout, 
    components:{
        AnalyticsForm,
        FooterSeoForm,
        GeneralForm,
        LogoForm,
        PaymentsForm,
        SocialLinksForm,
    },
    methods: {
        update(formData){ 
            this.$inertia.post(route('admin.setting.update'), formData, {
                preserveState: true,
                preserveScroll: true,  
            })            
             
        }
    },
    computed: {
        settings(){
            return this.$page.settings;
        }
    },

}
 </script>