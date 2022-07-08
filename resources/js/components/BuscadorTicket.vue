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

                <input class="form-control me-2" type="text"  placeholder="Ciudad de Origen" aria-label="Search">
                <input class="form-control me-2" type="text"  placeholder="Ciudad de Destino" aria-label="Search">
                <input class="form-control me-2" type="date" placeholder="Fecha de salida" aria-label="Search">
                <input class="form-control me-2" type="date"  placeholder="Fecha de retorno" aria-label="Search">
                
                <router-link :to="{name:'resultados'}">

                    <button class="btn btn-outline-success" type="submit">Buscar</button>
                </router-link>
                

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