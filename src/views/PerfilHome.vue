<template>
    <body >
      <SidebarHome />
      <main>
        <div class="contenido">
          <body>
            
            <div class="profile-container">
              <h1>Tu Perfil</h1>
              <div class="profile-form">
                <label for="profile-picture">Foto de perfil:</label>
                <div class="profile-picture">
                  <img
                    id="profile-picture"
                    src="../assets/img/user.png"
                    alt="Foto de perfil"
                  />
                  <input
                    type="file"
                    id="profile-picture-input"
                    accept="image/*"
                    onchange="editProfilePicture()"
                  />
                </div>
              </div>
              <div class="profile-form">
                <label for="name">Nombres:</label>
                <input type="text" id="name" value="Your Name" readonly />
              </div>
              <div class="profile-form">
                <label for="name">Correo Electronico:</label>
                <input
                  type="text"
                  id="correo"
                  value="yourname@gmail.com"
                  readonly
                />
              </div>
              <div class="profile-form">
                <label for="name">Celular:</label>
                <input type="text" id="celular" value="xxx-xxx-xxx" readonly />
              </div>
              <div class="profile-form">
                <label for="name">Contraseña:</label>
                <input type="text" id="contraseña" value="xxxxxxxxx" readonly />
              </div>
              <button
                id="edit-button"
                class="edit-button"
                onclick="editProfile()"
              >
                Editar
              </button>
            </div>
          </body>
        </div>
      </main>
    </body>
  </template>
    <script>
  import SidebarHome from "@/components/SidebarHome.vue";
  export default {
    components() {
      SidebarHome;
    },
    components: { SidebarHome },
  };
  
  function editProfile() {
    var nameField = document.getElementById("name");
    var correoField = document.getElementById("correo");
    var celularField = document.getElementById("celular");
    var contraseñaField = document.getElementById("contraseña");
    var editButton = document.getElementById("edit-button");
  
    if (nameField.getAttribute("readonly") === "readonly") {
      nameField.removeAttribute("readonly");
      bioField.removeAttribute("readonly");
      editButton.innerHTML = "Guardar";
    } else {
      nameField.setAttribute("readonly", "readonly");
      bioField.setAttribute("readonly", "readonly");
      editButton.innerHTML = "Editar";
    }
  }
  function editProfilePicture() {
    var fileInput = document.getElementById("profile-picture-input");
    var profilePicture = document.getElementById("profile-picture");
  
    fileInput.click();
  
    fileInput.onchange = function (e) {
      var file = e.target.files[0];
      var reader = new FileReader();
  
      reader.onload = function () {
        profilePicture.src = reader.result;
      };
  
      reader.readAsDataURL(file);
    };
  }
  </script>
    <style>
  .contenido {
    margin-left: 600px;
    margin-right: 400px;
  }
  
  
  body {
    font-family: Arial, sans-serif;
  }
  
  .profile-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f7f7f7;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }
  
  .profile-container h1 {
    text-align: center;
    margin-bottom: 50px;
  }
  
  .profile-form {
    margin-bottom: 40px;
  }
  
  .profile-form label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .profile-form input[type="text"],
  .profile-form textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: none;
  }
  
  .profile-form .profile-picture {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .profile-form .profile-picture img {
    max-width: 200px;
    max-height: 200px;
    border-radius: 50%;
  }
  
  .profile-form .profile-picture input[type="file"] {
    display: none;
  }
  
  .edit-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #0075b9;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .edit-button:hover {
    background-color: #45a054;
  }
  body {
    padding-top: 0.5rem;
    padding-bottom: 0rem;
    color: #5a5a5a;
  }
  </style>