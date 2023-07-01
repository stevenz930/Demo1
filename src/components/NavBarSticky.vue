<template>
    <nav class="navbar navbar-expand-sm bg-white border-bottom sticky-top z-2 justify-content-center">
        <div class="container">
            <ul class="navbar-nav">
                <li class="nav-item active mx-2">
                    <router-link class="nav-link" active-class="text-donate border-bottom border-donate border-3" to="/">
                        <span class="align-middle fw-bold linkHover">About</span>
                    </router-link>
                </li>
                <li class="nav-item mx-2">
                    <router-link class="nav-link" active-class="text-donate border-bottom border-donate border-3" to="/Posts">
                        <span class="align-middle fw-bold linkHover">Posts</span>
                    </router-link>
                </li>
                <li class="nav-item mx-2">
                    <router-link class="nav-link" active-class="text-donate border-bottom border-donate border-3" to="/Gallery">
                        <span class="align-middle fw-bold linkHover">Gallery</span>
                    </router-link>
                </li>
                <li class="nav-item mx-2">
                    <router-link class="nav-link" active-class="text-donate border-bottom border-donate border-3" to="/Shop">
                        <span class="align-middle fw-bold linkHover">Shop</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style>
.linkHover:hover {color:#fd7e14;}
</style>