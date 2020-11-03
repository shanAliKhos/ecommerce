<template>
    <div>

        <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
        <aside class="app-sidebar">
            <ul class="app-menu">
                <li>
                    <inertia-link :class="{'active':$page.currentRouteName == 'admin.dashboard','app-menu__item':true}" :href="$route('admin.dashboard')">
                        <i class="app-menu__icon fa fa-dashboard"></i>
                        <span class="app-menu__label">Dashboard</span>
                    </inertia-link>
                </li>
                <li>
                    <inertia-link :class="{'active':$page.currentRouteName == 'admin.order.index','app-menu__item':true}"  :href="$route('admin.order.index') ">
                        <i class="app-menu__icon fa fa-bar-chart"></i>
                        <span class="app-menu__label">Orders</span>
                    </inertia-link>
                </li>
                <li>
                    <inertia-link :class="{'active':$page.currentRouteName == 'admin.product.index','app-menu__item':true}" :href="$route('admin.product.index') ">
                        <i class="app-menu__icon fa fa-shopping-bag"></i>
                        <span class="app-menu__label">Products</span>
                    </inertia-link>
                </li>
                <li>
                    <inertia-link :class="{'active':$page.currentRouteName == 'admin.brand.index','app-menu__item':true}" :href="$route('admin.brand.index') ">
                        <i class="app-menu__icon fa fa-briefcase"></i>
                        <span class="app-menu__label">Brands</span>
                    </inertia-link>
                </li>
                <li>
                    <inertia-link :class="{'active':$page.currentRouteName == 'admin.category.index','app-menu__item':true}"  :href="$route('admin.category.index') ">
                        <i class="app-menu__icon fa fa-tags"></i>
                        <span class="app-menu__label">Categories</span>
                    </inertia-link>
                </li>
                <li>
                    <inertia-link :class="{'active':$page.currentRouteName == 'admin.attribute.index','app-menu__item':true}"  :href="$route('admin.attribute.index') ">
                        <i class="app-menu__icon fa fa-th"></i>
                        <span class="app-menu__label">Attributes</span>
                    </inertia-link>
                </li>
                <li>
                    <inertia-link :class="{'active':$page.currentRouteName == 'admin.setting','app-menu__item':true}" :href="$route('admin.setting') ">
                        <i class="app-menu__icon fa fa-cogs"></i>
                        <span class="app-menu__label">Settings</span>
                    </inertia-link>
                </li>
            </ul>
        </aside>
        
    </div>
</template>
<script> 
export default { 
 
  
}
</script>
 