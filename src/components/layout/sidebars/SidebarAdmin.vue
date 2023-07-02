<template>
  <div class="wrapper">
    <!-- Sidebar  -->
    <nav id="sidebar" :class="{ active: sidebarActive }">
      <div class="sidebar-header">
        <h3>ADMIN</h3>

      </div>

      <ul class="list-unstyled components">
        <p>PERFIL</p>
        <li >
          <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false"
            >Home</a
          >
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"
            >Pages</a
          >
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>

    <!-- Page Content  -->
    <div id="content">
      <nav >
        <div class="container-fluid">
          <button type="button" id="sidebarCollapse" class="btn btn-dark">
            <i class="fas fa-align-left"></i>
            <span><i class="bi bi-justify"></i></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav navbar-nav ml-auto">

              <li class="nav-item">

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "SidebarAdmin",
  mounted() {
    $(document).ready(function () {
      $("#sidebarCollapse").on("click", function () {
        $("#sidebar").toggleClass("active");
      });
    });
  },
};
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
body {
  font-family: "Poppins", sans-serif;
  background: #fafafa;
}

p {
  font-family: "Poppins", sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
}

a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

.navbar {
  padding: 15px 10px;
  background: #fff;
  border: none;
  border-radius: 0;
  margin-bottom: 40px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
  box-shadow: none;
  outline: none !important;
  border: none;
}

.line {
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed #ddd;
  margin: 40px 0;
}

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */

.wrapper {
  display: flex;
  width: 15%;
  align-items: stretch;
}

#sidebar {
  /* min-width: 250px;
  max-width: 250px;
  background: #7386d5;
  color: #fff;
  transition: all 0.3s; */

  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background: #464956;
  color: #fff;
  transition: all 0.3s;
  overflow: hidden;
}

#sidebar.active {
  margin-left: -250px;
}

#sidebar .sidebar-header {
  padding: 20px;
  background: #464956;
}

#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #464956;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
}

#sidebar ul li a:hover {
  color: #7386d5;
  background: #fff;
}
.sidebar-content {
  padding-top: 20px;
  position: relative;
}
#sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
  background: #6d7fcc;
}

a[data-toggle="collapse"] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #6d7fcc;
}

ul.CTAs {
  padding: 20px;
}

ul.CTAs a {
  text-align: center;
  font-size: 0.9em !important;
  display: block;
  border-radius: 5px;
  margin-bottom: 5px;
}

a.download {
  background: #fff;
  color: #7386d5;
}

a.article,
a.article:hover {
  background: #6d7fcc !important;
  color: #fff !important;
}

/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */

#content {
  /* width: 100%;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s; */
  margin-left: 100px;
  padding: 20px;
  transition: all 0.3s;
  margin-top: -32px; 
}
#sidebar.active {
  margin-left: -250px;
}


/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
  #sidebar {
    margin-left: -250px;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #sidebarCollapse span {
    display: none;
  }
}
</style>
