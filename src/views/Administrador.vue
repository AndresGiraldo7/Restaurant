
<template>
<div class="container" id="tabla">
     <h1>Pedidos</h1>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Plato</th>
      <th scope="col">cantidad</th>
      <th scope="col">Precio</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,index) in pedidos" :key="index">
      <th scope="row">{{item._id}}</th>
      <td>{{item.Plato}}</td>
      <td>{{item.Cantidad}}</td>
      <td>{{item.Precio}}</td>
      <td>{{item.Total}}</td>

      <td>



      </td>
    </tr>
   
  </tbody>
</table>

</div>
</template>

<script>
export default {
    data(){
        return {
            pedidos: [
              
             
              
            ]
            

        }
    },
    created(){
        this.listarPedidos

    },
    methods:{
        listarPedidos(){
            this.axios.get('/administrador')
            .then(res=>{
                this.pedidos=res.data;


            })

            .catch(e=>{

                console.log(e.response)
            })
        }


    }

}


</script>

<style>

</style>