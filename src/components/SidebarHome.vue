<template>
    <body>
      <nav class="sidebar locked">
        <div class="logo_items flex">
          <img
            src="../assets/img/fithub.png"
            alt="logo_img"
            class="centered_image"
          />
        </div>
        <div class="user-p">
                  <img src="../assets/img/user.png">
                  <h4>Your Name</h4>
              </div>
        <div class="menu_container">
          <div class="menu_items">
            <ul class="menu_item">
              <div class="menu_title flex">
                <span class="line"></span>
              </div>
              <li class="item">
                <a href="/home"
                 class="link flex">
                  <i class="bi bi-house" aria-current="page" href="#"></i>
                  <span>Home</span>
                </a>
              </li>
              <li class="item">
                <a href="/perfil" class="link flex">
                  <i class="bi bi-person" ></i>
                  <span>Mi Perfil</span>
                </a>
              </li>
              <li class="item">
                <a href="/uasistencia" class="link flex">
                  <i class="bi bi-clipboard2-check-fill"></i>
                  <span>Mis Asistencias</span>
                </a>
              </li>
            </ul>
  
            <ul class="menu_item">
              <div class="menu_title flex">
                <span class="title">Más</span>
                <span class="line"></span>
              </div>
              <li class="item">
                <a href="#" class="link flex">
                  <i class="bi bi-geo-alt"></i>
                  <span>Gimnasios Cerca</span>
                </a>
              </li>
              <li class="item">
                <a href="#" class="link flex">
                  <i class="bi bi-shop"></i>
                  <span>Tienda</span>
                </a>
              </li>
              <li class="item">
                <a href="#" class="link flex">
                  <i class="bi bi-gear"></i>
                  <span>Settings</span>
                </a>
              </li>
            </ul>
            <div class="sidebar_profile flex">
            <div class="data_text">
              <span class="name" style="display: block">Your Name</span>
              <span class="email">user@gmail.com</span>
            </div>
          </div>
          </div>
        </div>
      </nav>
    </body>
  
  </template>
  <script>
  function showContent(event) {
    event.preventDefault();
    var target = event.target;
    var content = target.dataset.content;
    document.getElementById("main-content").textContent = content;
  }
  </script>
  <style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  
  /* Pre css */
  .flex {
    display: flex;
    align-items: center;
  }
  /* Sidebar */
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 260px;
    background: #001b49;
    padding: 15px 1px;
    box-shadow: 0 0 2px rgba(96, 83, 83, 0.1);
    transition: all 0.4s ease;
  }
  
  .menu_container {
    display: flex;
    color: #ffffff;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 40px;
    overflow-y: auto;
    height: calc(100% - 82px);
  }
  .menu_container::-webkit-scrollbar {
    display: none;
  }
  .menu_title {
    position: relative;
    height: 50px;
    width: 55px;
  }
  .menu_title .title {
    margin-left: 15px;
    transition: all 0.3s ease;
  }
  
  .link {
    text-decoration: none;
    border-radius: 8px;
    margin-bottom: 8px;
    color: #efeded;
  }
  .link:hover {
    color: #fff;
    background-color: #5da0df;
  }
  .link span {
    white-space: nowrap;
  }
  .link i {
    height: 50px;
    min-width: 55px;
    display: flex;
    font-size: 22px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
  }
  
  .sidebar_profile {
    padding-top: 15px;
    margin-top: 15px;
    gap: 15px;
    border-top: 2px solid rgba(0, 0, 0, 0.1);
  }
  .sidebar_profile .name {
    font-size: 18px;
    color: #e2dede;
  }
  .sidebar_profile .email {
    font-size: 15px;
    color: #9f9d9d;
  }
  /* Responsive */
  .menu_item {
    padding-left: 0;
  }
  .centered_image {
    display: block;
    margin: 0 auto;
  }
  .user-p {
      text-align: center;
      padding-left: 10px;
      padding-top: 25px;
  }
  .user-p img {
      width: 100px;
      border-radius: 50%;
  }
  .user-p h4 {
      color: #ccc;
      padding: 5px 0;
  
  }
  
  </style>