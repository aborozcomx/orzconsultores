<script lang="ts" setup></script>

<template>
  <div class="theHeader">
    <div class="wrapper">
      <header class="header">
        <div class="header-top">
          <img src="" alt="">
          <div class="header-infoMenu">
            <div class="cardInfo">
              <img src="@/assets/icons/mail.svg" width="32" alt="">
              <div class="cardInfo-description">
                <b>Correo</b>
                <a href="mailto:contabilidad@orzconsultores.com">contabilidad@orzconsultores.com</a>
              </div>
            </div>
            <div class="cardInfo">
              <img src="@/assets/icons/phone.svg" width="32" alt="">
              <div class="cardInfo-description">
                <b>Telefono</b>
                <a href="tel:9983629701">998 362 9701</a>
              </div>
            </div>
          </div>
        </div>
        <nav class="header-bottom">
          <ul class="header-menu">
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>

          <ul class="header-socialMenu">
            <li><a href="#"><img src="@/assets/icons/instagram.svg" width="24" alt=""></a></li>
          </ul>
        </nav>
      </header>
    </div>
  </div>
</template>

<style scoped>
.header-bottom {
  background-color: var(--darkBlue);
  padding: 18px;
}

.header-top {
  height: 145px;
  align-items: center;
}
.header-bottom, .header-top {
  display: flex;
  justify-content: space-between;
}
.header-menu, .header-socialMenu {
  display: flex;
  list-style: none;
  gap: 12px;
  padding: 0;
  margin: 0;
  align-items: center;
}

.header-bottom a {
  color: var(--lightGray);
  text-decoration: none;
}

.header-menu a:hover {
  color: var(--orange);
}

.header-infoMenu {
  display: flex;
  gap: 12px;
}

.cardInfo {
  display: flex;
  gap: 8px ;
  padding-inline: 25px;
}

.cardInfo + .cardInfo {
  border-left: 1px solid var(--darkBlue);
}
.cardInfo-description {
  display: flex;
  flex-direction: column;
}

.cardInfo-description a {
  color: var(--darkBlue);
  text-decoration: none;
}
</style>
