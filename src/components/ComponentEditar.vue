<template>
  <div class="container">

    <div class="card">

      <div class="card-header">
        Actualizar Empleado
      </div>

      <div class="card-body">
        <form v-on:submit.prevent="actualizarRegistro">
          <div class="form-group">
            <label for="">Nombre</label>
            <input type="text"
              class="form-control" required name="nombre" v-model="empleado.nombre" id="nombre" aria-describedby="helpId" placeholder="">
            <small id="helpId" class="form-text text-muted">Escriba el nombre del empleado</small>
          </div>

          <div class="form-group">
            <label for="">Correo</label>
            <input type="email"
              class="form-control" required name="correo" v-model="empleado.correo" id="correo" aria-describedby="helpId" placeholder="">
            <small id="helpId" class="form-text text-muted">Escribe correo del empleado</small>
          </div>

          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-success">Actualizar</button>
            <button v-on:click="cancelar" type="button" class="btn btn-danger">Cancelar</button>
          </div>

        </form>

      </div>
      
    </div>

  </div>
  
</template>

<script>
export default {
  
  data(){
    return{
      empleado:{},
      id:this.$route.params.id
    }
  },
  created:function(){
      this.consultarEmpleadosById(this.id);
    },
  methods:{
    consultarEmpleadosById(id){
      fetch('http://localhost/empleados/?consultar='+id)
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
          console.log(datosRespuesta)
       
            this.empleado=datosRespuesta[0];
          
        })
        .catch(console.log())
    },
    actualizarRegistro(){
      console.log(this.empleado);
      var datosEnviar={id:this.id,nombre:this.empleado.nombre,correo:this.empleado.correo}

      fetch('http://localhost/empleados/?actualizar='+this.id,{
        method:"POST",
        body:JSON.stringify(datosEnviar)
      })
      .then(respuesta=>respuesta.json())
      .then((datosRespuesta =>{
        console.log(datosRespuesta);
        window.location.href='../listar'
      }))
    },

    cancelar(){
      window.location.href='../listar'
    }
  }

}
</script>

<style>

</style>