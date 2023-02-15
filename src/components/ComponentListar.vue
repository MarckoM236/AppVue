<template>
  <div class="container">

    <router-link class="btn btn-success" to="/crear">Agregar Nuevo Empleado</router-link> 

    <br><br>

    <div class="card">
      <div class="card-header">
        Empleados
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="empleado in empleados" :key="empleado.id">
              <td>{{ empleado.id }}</td>
              <td>{{ empleado.nombre }}</td>
              <td>{{ empleado.correo }}</td>
              <td>
                <router-link :to="{name:'Editar',params:{id:empleado.id}}" class="btn btn-primary">Editar</router-link>
                <button type="button" class="btn btn-danger" v-on:click="borrarEmpleado(empleado.id)">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>

    
  </div>
</template>

<script>
export default {
    data(){
      return{
        empleados:[]
      }
    },
    created:function(){
      this.consultarEmpleados();
    },
    methods:{
      consultarEmpleados(){
        fetch('http://localhost/empleados/')
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
          //console.log(datosRespuesta)
          this.empleados=[]
          if(typeof datosRespuesta[0].success==='undefined'){
            this.empleados=datosRespuesta;
          }
        })
        .catch(console.log())
      },

      borrarEmpleado(id){
        fetch('http://localhost/empleados/?borrar='+id)
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
          console.log(datosRespuesta)
          window.location.href='listar'
        })
        .catch(console.log())
      }
    }
}
</script>

<style>

</style>