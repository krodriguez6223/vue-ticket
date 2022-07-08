<template>

    <div>
        <h1>
            <vue-page-transition>
                <router-view></router-view>
            </vue-page-transition>

        </h1>
    </div>

</template>

<script>

    import store from '../store'

    export default {
        store,
    }

</script>