<script lang="ts" setup></script>

<template>
  <div class="theHeader">
    <header class="header">
      <div class="headerTop">
        <div class="wrapper">
          <div class="header-top">
            <img src="@/assets/images/logo.png" alt="Logo ORZ consultores">
            <div class="header-infoMenu">
              <a href="mailto:contabilidad@orzconsultores.com"><div class="cardInfo">
                <img src="@/assets/icons/mail.svg" width="32" alt="">
                <div class="cardInfo-description">
                  <b>Correo</b>
                  <span>contabilidad@orzconsultores.com</span>
                </div>
              </div></a>
              <a href="tel:9983629701"><div class="cardInfo">
                <img src="@/assets/icons/phone.svg" width="32" alt="">
                <div class="cardInfo-description">
                  <b>Teléfono</b>
                  <span>998 362 9701</span>
                </div>
              </div></a>
            </div>
          </div>
        </div>
      </div>
      <nav class="headerBottom">
        <div class="wrapper">
          <div class="headerBottom-content">
            <ul class="header-menu">
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
    
            <ul class="header-socialMenu">
              <li><a href="#"><img src="@/assets/icons/instagram.svg" width="24" alt=""></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<style scoped>
.headerBottom {
  background-color: var(--darkBlue);
  padding: 18px;
}

.header-top {
  height: 145px;
  align-items: center;
}
.headerBottom-content, .header-top {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.header-menu, .header-socialMenu {
  display: flex;
  list-style: none;
  gap: 12px;
  padding: 0;
  margin: 0;
  align-items: center;
}

.headerBottom a {
  color: var(--lightGray);
  text-decoration: none;
}

.header-menu a:hover {
  color: var(--orange);
}

.header-infoMenu {
  display: flex;
  flex-wrap: wrap;
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

.header-top a {
  color: var(--darkBlue);
  text-decoration: none;
}

.cardInfo b {
  transition: .5s all ease;
}
.cardInfo:hover b{
  color: var(--orange);
  cursor: pointer;
}

@media screen and (max-width: 470px) {
  .cardInfo + .cardInfo {
    border-left: none;
  }

  .header-top {
    height: auto;
    justify-content: center;
    padding-block-start: 30px;
  }

  .header-top .header-infoMenu {
    order: -1;
  }
}
</style>
