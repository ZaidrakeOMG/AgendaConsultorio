<template>
   <nav>
     <router-link to="/Agendar">🗓️ Agendar Cita</router-link>
   </nav>
 </template>
 
 <style scoped>
 nav {
   background-color: #f4f4f9;
   padding: 10px;
   display: flex;
   gap: 20px;
   border-bottom: 2px solid #ddd;
 }
 
 router-link {
   color: #007bff;
   text-decoration: none;
   font-weight: bold;
   padding: 5px;
   border-radius: 5px;
   transition: background-color 0.2s ease;
 }
 
 router-link:hover {
   background-color: #e2e6ea;
 }
 
 .router-link-active {
   color: #fff;
   background-color: #007bff;
 }
 </style>
 