<template>
    <div class="agregar-citas-container">
      <!-- Menú reutilizado -->
      <Home />
  
      <div class="form-container">
        <h2>Agregar Nueva Cita</h2>
        <form @submit.prevent="guardarCita">
          <div class="form-group">
            <label for="nombre">Nombre del Paciente</label>
            <input type="text" id="nombre" v-model="nombre" required>
          </div>
  
          <div class="form-group">
            <label for="fecha">Fecha de la Cita</label>
            <input type="date" id="fecha" v-model="fecha" required>
          </div>
  
          <div class="form-group">
            <label for="hora">Hora de la Cita</label>
            <input type="time" id="hora" v-model="hora" required>
          </div>
  
          <div class="form-group">
            <label for="motivo">Motivo de la Consulta</label>
            <textarea id="motivo" v-model="motivo" rows="3" required></textarea>
          </div>
  
          <button type="submit">Guardar Cita</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import Home from "@/components/Home.vue"; // Importa el menú de Home.vue
  
  export default {
    components: {
      Home
    },
    data() {
      return {
        nombre: "",
        fecha: "",
        hora: "",
        motivo: ""
      };
    },
    methods: {
      guardarCita() {
        console.log("Cita guardada:", this.nombre, this.fecha, this.hora, this.motivo);
        alert("Cita guardada con éxito.");
      }
    }
  };
  </script>
  
  <style scoped>
  /* Fondo igual que en Index */
  .agregar-citas-container {
    background: url('@/assets/fondo-front-medicina.jpg') no-repeat center;
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  /* Formulario */
  .form-container {
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 500px;
  }
  
  .form-container h2 {
    text-align: center;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    font-weight: bold;
    display: block;
  }
  
  input, textarea {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #218838;
  }
  </style>
  