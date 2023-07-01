<template>
  <div class="sidebar">
    <!-- <div class="dots">
        <img src="images/dots.png" alt="dots" />
      </div> -->
    <div  class="profile">
      <i class="bi bi-person-fill"></i>
    </div>
    <ul>
      <span>Analytics</span>
      <li>
        <a href="/admin">
          <i class="bi bi-house-door"></i>
          <p>Dashboard</p>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="bi bi-bar-chart-line"></i>
          <p>Insights</p>
        </a>
      </li>
    </ul>
    <ul>
      <span>Content</span>
      <!-- <li class="noti">
        <a href="#">
          <i class="bi bi-bell"></i>
          <p>Notifications</p>
        </a>
      </li> -->
      <li>
        <a href="#">
          <i class="bi bi-gear"></i>
          <p>Configuración</p>
        </a>
      </li>
      <!-- <li class="likes">
        <a href="#">
          <i class="bi bi-heart"></i>
          <p>Likes</p>
        </a>
      </li> -->
    </ul>
    <ul>
      <span>Custom</span>
      <!-- <li class="switch-theme">
        <a href="#">
          <i class="bi bi-moon"></i>
          <p>Darkmode</p>
          <button>
            <div class="circle"></div>
          </button>
        </a>
      </li> -->
      <li>
        <a href="#">
          <i class="bi bi-box-arrow-right"></i>
          <p>Logout</p>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HeaderAdmin",
  methods: {
    logout() {
     
      console.log("Logout button clicked");
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;900&display=swap");
/* Start Global Rules */
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
}
:root {
  --main-color: #2d325b;
  --main-transition: 0.5s all ease-in-out;
}
body {
  background-color: #f0f0f0;
}
::selection {
  color: white;
  background: var(--main-color);
}
/* End Global Rules */
/* Start Sidebar */
.sidebar {
  width: 115px;
  background-color: #474d89;
  padding: 0px;
  position: fixed;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  height: 100%;
  top: 50%;
  transform: translateY(-50%);
  overflow: hidden;
  transition: var(--main-transition);
  overflow-y: auto;
}
.sidebar:hover {
  width: 300px;
}
.sidebar .dots {
  width: 60px;
}
.sidebar .profile {
  width: 55px;
  height: 55px;
  border-radius: 15px;
  color: #fff;
  background-color: var(--main-color);
  display: grid;
  place-items: center;
  font-size: 25px;
  margin: 30px 0;
  margin-left: 35px;
}
.sidebar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.sidebar ul {
  padding-bottom: 30px;
  list-style: none;
}
.sidebar ul span {
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 13px;
  display: block;
  padding-bottom: 20px;
}
.sidebar ul li {
  padding-left: 10px;
  transition: var(--main-transition);
}
.sidebar:hover ul li {
  padding-left: 0px;
}
.sidebar ul li a {
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 15px;
  transition: 0.3s all ease-in-out;
  font-size: 16px;
  width: 300px;
  color: #c2c0c7;
  font-weight: 500;
  text-decoration: none;
}
.sidebar:hover a {
  width: 100%;
}
.sidebar ul li a:hover {
  background-color: #ebf0fe;
  color: var(--main-color);
}
.sidebar ul li a i {
  font-size: 22px;
}
.sidebar ul li.noti a i {
  position: relative;
}
.sidebar ul li.noti a i::before {
  content: "";
  position: absolute;
  right: 0;
  background-color: #3761ee;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.sidebar ul li.likes a i {
  position: relative;
}
.sidebar ul li.likes a i::before {
  content: "";
  position: absolute;
  right: 0;
  background-color: #e45447;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.sidebar ul li a p {
  visibility: hidden;
  opacity: 0;
  transition: var(--main-transition);
}
.sidebar:hover ul li a p {
  visibility: visible;
  opacity: 1;
}
.sidebar ul li.switch-theme {
  position: relative;
}
.sidebar ul li.switch-theme button {
  background-color: #ddd;
  border: none;
  border-radius: 50px;
  height: 25px;
  width: 50px;
  padding: 5px;
  position: absolute;
  right: 30px;
  visibility: hidden;
  opacity: 0;
  transition: var(--main-transition);
}
/* scroll oculto*/
.sidebar:hover ul li.switch-theme button {
  visibility: visible;
  opacity: 1;
}
.sidebar ul li.switch-theme button .circle {
  border-radius: 50%;
  background-color: #ffffff;
  height: 100%;
  width: 15px;
}
.sidebar::-webkit-scrollbar {
  width: 0.8em;
  background-color: #ffffff;
}
.sidebar::-webkit-scrollbar-thumb {
  background-color: #ffffff;
  border-radius: 0.5em;
}
@media screen and (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: auto;
    max-width: 140px; 
    top: 0;
    transform: none;
    border-radius: 0;
    padding-bottom: 30px;
    transition: none;
  }

  .sidebar:hover {
    width: 100%;
  }

  .sidebar .profile {
    margin: 10px 0;
    margin-right: auto;
    margin-left: auto;
  }

  .sidebar ul {
    padding-bottom: 0;
  }

  .sidebar ul span {
    padding-bottom: 10px;
  }

  .sidebar ul li {
    padding-left: 0;
  }

  .sidebar ul li a {
    width: 100%;
    justify-content: center;
  }

  .sidebar ul li a p {
    visibility: visible;
    opacity: 1;
  }

  .sidebar ul li.switch-theme button {
    visibility: visible;
    opacity: 1;
  }
}
</style>
