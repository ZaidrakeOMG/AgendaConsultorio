<template>
  <div class="menu-container">
    <button class="home-button">Home</button>
    <div class="menu-links">
      <a href="AgregarCitas" class="menu-item">Agendar Cita</a>
      <a href="#" class="menu-item">Modificar Cita</a>
      <a href="#" class="menu-item">Ver Citas</a>
    </div>
  </div>
</template>

<style scoped>
.menu-container {
  position: absolute;
  top: 10px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 30px; 
}

.home-button {
  background: linear-gradient(45deg, #ffffff, #a3cfff);
  color: rgba(0, 0, 0, 0.368);
  border: none;
  padding: 12px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: 0.3s;
}

.home-button:hover {
  background: linear-gradient(45deg, #a3cfff, #ffffff);
}


.menu-links {
  display: flex;
  gap: 10px;
  opacity: 0;
  transform: translateX(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}

.menu-container:hover .menu-links {
  opacity: 1;
  transform: translateX(0);
  pointer-events: all;
}


.menu-item {
  background: white;
  color: black;
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 15px;
  text-decoration: none;
  transition: 0.3s;
}

.menu-item:hover {
  background: #ddd;
}
</style>
