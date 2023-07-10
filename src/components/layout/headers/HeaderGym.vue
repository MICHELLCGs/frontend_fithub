<template>
    <div class="home_content">
      <div class="content">
        <!-- Navbar Start -->
        <nav class="navbar navbar-expand sticky-top px-4 py-0" style="background-color: #2D325B">
          <a href="index.html" class="navbar-brand d-flex d-lg-none me-4">
            <h2 class="text-primary mb-0"><i class="fa fa-hashtag"></i></h2>
          </a>
          <form class="d-none d-md-flex ms-4">
            <input class="form-control border-0" type="search" placeholder="Search">
          </form>
          <div class="navbar-nav align-items-center ms-auto">
            <div class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                <i class="bi bi-bell-fill" style="color: #2D325B;"></i>
                <span class="d-none d-lg-inline-flex" style="margin-left: 10px;">Notificaciones</span>
              </a>
              <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                <a href="#" class="dropdown-item">
                  <h6 class="fw-normal mb-0">Profile updated</h6>
                  <small>15 minutes ago</small>
                </a>
                <hr class="dropdown-divider">
                <a href="#" class="dropdown-item">
                  <h6 class="fw-normal mb-0">New user added</h6>
                  <small>15 minutes ago</small>
                </a>
                <hr class="dropdown-divider">
                <a href="#" class="dropdown-item">
                  <h6 class="fw-normal mb-0">Password changed</h6>
                  <small>15 minutes ago</small>
                </a>
                <hr class="dropdown-divider">
                <a href="#" class="dropdown-item text-center">See all notifications</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      name: "HeaderAdminGym",
  }
  </script>
  
  <style>
  /*
  Home Content
  */
  
  .home_content {
    position: absolute;
    height: 100%;
    right: 0;
    left: 78px;
    transition: all 0.5s ease;
    flex-grow: 1;
    overflow-y: auto;
  }
  
  /* navbar*/
  .content .navbar .navbar-nav .nav-link {
      margin-left: 25px;
      padding: 12px 0;
      color: #FFFFFF;
      outline: none;
  }
  
  .content .navbar .sidebar-toggler,
  .content .navbar .navbar-nav .nav-link i {
      width: 40px;
      height: 40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: #FFFFFF;
      border-radius: 40px;
  }
  
  .content .navbar .dropdown-toggle::after {
      margin-left: 6px;
      vertical-align: middle;
  }
  
  .content .navbar .dropdown-toggle[aria-expanded=true]::after {
      transform: rotate(-180deg);
  }
  
  @media (max-width: 575.98px) {
      .content .navbar .navbar-nav .nav-link {
          margin-left: 15px;
      }
  }
  </style>