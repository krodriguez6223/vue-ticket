<template>

    <div class="container">
    <div class="card bg-card mb-3">
        <div class="card-body">
            <h2 class="text-center">Busqueda de tickets aéreos</h2>
        </div>
    </div>
    
    <div class="card p-3">
        <div class="card-body">
            <form class="d-flex" role="search">

                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Buscar</button>
              </form>
        </div>
      </div>
</div>
</template>

<script>
export default{


computed: {
     busqueda(){
        return this.$store.state.busqueda
     }
  }
}


</script>