<template>
    <SidebarAdminGym style="z-index: 5;" />
    <HeaderAdminGym />
    <div class="home_content">
        <div class="pagetitle">
            <h2>Perfil</h2>
        </div><!-- End Page Title -->

        <section class="section_profile">
            <div class="row">

                <div class="col-xl-4">
                    <div class="card">
                        <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
                            <img src="@/assets/img/icongym.jpg" width="120px" height="120px" alt="Profile" class="rounded-circle">
                            <h2>N. Gimnasio</h2>
                            <h3>Gimnasio</h3>
                            <div class="social-links mt-2">
                                <a href="#" class="twitter"><i class="bi bi-twitter"  style="margin-left: 5px"></i></a>
                                <a href="#" class="facebook"><i class="bi bi-facebook"  style="margin-left: 5px"></i></a>
                                <a href="#" class="instagram"><i class="bi bi-instagram"  style="margin-left: 5px"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-8">
                    <div class="card card2">
                        <div class="card-body pt-3">
                            <!-- Bordered Tabs -->
                            <ul class="nav nav-tabs nav-tabs-bordered">

                                <li class="nav-item">
                                    <button class="nav-link active" data-bs-toggle="tab"
                                        data-bs-target="#profile-overview">Descripción</button>
                                </li>

                                <li class="nav-item">
                                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Editar
                                        Perfil</button>
                                </li>

                                <li class="nav-item">
                                    <button class="nav-link" data-bs-toggle="tab"
                                        data-bs-target="#profile-settings">Configuraciones</button>
                                </li>

                                <li class="nav-item">
                                    <button class="nav-link" data-bs-toggle="tab"
                                        data-bs-target="#profile-change-password">Cambiar Contraseña</button>
                                </li>

                            </ul>
                            <div class="tab-content pt-2">

                                <div class="tab-pane fade show active profile-overview" id="profile-overview">
                                    <h5 class="card-title">Acerca de Nosotros</h5>
                                    <p class="small fst-italic">Sunt est soluta temporibus accusantium neque nam maiores
                                        cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure
                                        rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at
                                        unde.</p>

                                    <h5 class="card-title">Detalles</h5>

                                    <div class="row">
                                        <div class="col-lg-3 col-md-4 label ">Nombre</div>
                                        <div class="col-lg-9 col-md-8">N. Gimnasio</div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-3 col-md-4 label">Tipo</div>
                                        <div class="col-lg-9 col-md-8">Tipo Gimnasio</div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-3 col-md-4 label">País</div>
                                        <div class="col-lg-9 col-md-8">Perú</div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-3 col-md-4 label">Provincia</div>
                                        <div class="col-lg-9 col-md-8">Arequipa</div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-3 col-md-4 label">Dirección</div>
                                        <div class="col-lg-9 col-md-8">A108 Adam Street, New York, NY 535022</div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-3 col-md-4 label">Telefono</div>
                                        <div class="col-lg-9 col-md-8">(436) 486-3538 x29071</div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-3 col-md-4 label">Email</div>
                                        <div class="col-lg-9 col-md-8">gym@example.com</div>
                                    </div>

                                </div>

                                <div class="tab-pane fade profile-edit pt-3" id="profile-edit">

                                    <!-- Profile Edit Form -->
                                    <form>
                                        <div class="row mb-3">
                                            <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Foto de
                                                Perfil</label>
                                            <div class="col-md-8 col-lg-9">
                                                <img src="@/assets/img/icongym.jpg" alt="Profile" width="120px" height="120px">
                                                <div class="pt-2">
                                                    <a href="#" class="btn btn-primary btn-sm"
                                                        title="Upload new profile image"><i class="bi bi-upload"></i></a>
                                                    <a href="#" class="btn btn-danger btn-sm"
                                                        title="Remove my profile image"><i class="bi bi-trash"></i></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <label for="nongym" class="col-md-4 col-lg-3 col-form-label">Nombre</label>
                                            <div class="col-md-8 col-lg-9">
                                                <input name="nongym" type="text" class="form-control" id="nongym"
                                                    value="N. Gimnasio">
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <label for="about" class="col-md-4 col-lg-3 col-form-label">Acerca de Nosotros</label>
                                            <div class="col-md-8 col-lg-9">
                                                <textarea name="about" class="form-control" id="about"
                                                    style="height: 100px">Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</textarea>
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <label for="paisgym" class="col-md-4 col-lg-3 col-form-label">País</label>
                                            <div class="col-md-8 col-lg-9">
                                                <input name="paisgym" type="text" class="form-control" id="paisgym"
                                                    value="Peú">
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <label for="provgym" class="col-md-4 col-lg-3 col-form-label">Provincia</label>
                                            <div class="col-md-8 col-lg-9">
                                                <input name="provgym" type="text" class="form-control" id="provgym"
                                                    value="Arequipa">
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <label for="diregym" class="col-md-4 col-lg-3 col-form-label">Dirección</label>
                                            <div class="col-md-8 col-lg-9">
                                                <input name="diregym" type="text" class="form-control" id="diregym"
                                                    value="A108 Adam Street, New York, NY 535022">
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <label for="telfgym" class="col-md-4 col-lg-3 col-form-label">Telefono</label>
                                            <div class="col-md-8 col-lg-9">
                                                <input name="telfgym" type="text" class="form-control" id="telfgym"
                                                    value="(436) 486-3538 x29071">
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <label for="emailgym" class="col-md-4 col-lg-3 col-form-label">Email</label>
                                            <div class="col-md-8 col-lg-9">
                                                <input name="emailgym" type="emailgym" class="form-control" id="emailgym"
                                                    value="k.anderson@example.com">
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <label for="Twitter" class="col-md-4 col-lg-3 col-form-label">Twitter
                                                Profile</label>
                                            <div class="col-md-8 col-lg-9">
                                                <input name="twitter" type="text" class="form-control" id="Twitter"
                                                    value="https://twitter.com/#">
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <label for="Facebook" class="col-md-4 col-lg-3 col-form-label">Facebook
                                                Profile</label>
                                            <div class="col-md-8 col-lg-9">
                                                <input name="facebook" type="text" class="form-control" id="Facebook"
                                                    value="https://facebook.com/#">
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <label for="Instagram" class="col-md-4 col-lg-3 col-form-label">Instagram
                                                Profile</label>
                                            <div class="col-md-8 col-lg-9">
                                                <input name="instagram" type="text" class="form-control" id="Instagram"
                                                    value="https://instagram.com/#">
                                            </div>
                                        </div>

                                        <div class="text-center">
                                            <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                                        </div>
                                    </form><!-- End Profile Edit Form -->

                                </div>

                                <div class="tab-pane fade pt-3" id="profile-settings">

                                    <!-- Settings Form -->
                                    <form>

                                        <div class="row mb-3">
                                            <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Email
                                                Notifications</label>
                                            <div class="col-md-8 col-lg-9">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="changesMade"
                                                        checked>
                                                    <label class="form-check-label" for="changesMade">
                                                        Changes made to your account
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="newProducts"
                                                        checked>
                                                    <label class="form-check-label" for="newProducts">
                                                        Information on new products and services
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="proOffers">
                                                    <label class="form-check-label" for="proOffers">
                                                        Marketing and promo offers
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="securityNotify"
                                                        checked disabled>
                                                    <label class="form-check-label" for="securityNotify">
                                                        Security alerts
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="text-center">
                                            <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                                        </div>
                                    </form><!-- End settings Form -->

                                </div>

                                <div class="tab-pane fade pt-3" id="profile-change-password">
                                    <!-- Change Password Form -->
                                    <form>

                                        <div class="row mb-3">
                                            <label for="currentPassword" class="col-md-4 col-lg-3 col-form-label">Current
                                                Password</label>
                                            <div class="col-md-8 col-lg-9">
                                                <input name="password" type="password" class="form-control"
                                                    id="currentPassword">
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <label for="newPassword" class="col-md-4 col-lg-3 col-form-label">New
                                                Password</label>
                                            <div class="col-md-8 col-lg-9">
                                                <input name="newpassword" type="password" class="form-control"
                                                    id="newPassword">
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <label for="renewPassword" class="col-md-4 col-lg-3 col-form-label">Re-enter New
                                                Password</label>
                                            <div class="col-md-8 col-lg-9">
                                                <input name="renewpassword" type="password" class="form-control"
                                                    id="renewPassword">
                                            </div>
                                        </div>

                                        <div class="text-center">
                                            <button type="submit" class="btn btn-primary">Cambiar Contraseña</button>
                                        </div>
                                    </form><!-- End Change Password Form -->

                                </div>

                            </div><!-- End Bordered Tabs -->

                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>
  
<script>
import SidebarAdminGym from "@/components/layout/sidebars/SidebarAdminGym.vue";
import HeaderAdminGym from "@/components/layout/headers/HeaderGym.vue";

export default {
    components: {
        SidebarAdminGym,
        HeaderAdminGym
    },
}
</script>
  
<style>
.home_content {
    position: absolute;
    height: 100%;
    right: 0;
    left: 78px;
    transition: all 0.5s ease;
    flex-grow: 1;
    overflow-y: auto;
}

.sidebar.active~.home_content {
    left: 240px;
    right: 0;
}

.home_content .pagetitle {
    margin: 2.5rem;
    margin-top: 6rem;
    width: auto;
}


.home_content .section_profile{
    margin-right: 1.5rem;
    margin-top: 0rem;
    width: auto;
}

.home_content .card{
    margin: 2.5rem;
    margin-top: 0rem;
    width: auto;
}

.sidebar.active~.home_content .pagetitle .card{
    left: 240px;
    right: 0;
    margin: 1.5rem;
    width: auto;
}

.home_content .card2{
    margin: 0;
    margin-right: 2.5rem;
}

.sidebar.active~.home_content .pagetitle .card2{
    left: 240px;
    right: 0;
    margin: 1.5rem;
    width: auto;
}
</style>