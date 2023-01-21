<template>
    <section class="aboutSection">
      <div class="wrapper">
        <div class="aboutSection-content">
          <img src="@/assets/images/about-us.jpg" alt="">
          <div class="aboutSection-description">
            <h2>Nosotros</h2>
            <p>Brindamos servicios orientados a la mejora continua en las áreas contable, fiscal y diseño de su sitio web de todo tipo de negocios, en forma personalizada, en un ambiente de cordialidad y total disposición aportando innovación y creatividad, siempre de la mano con nuestros clientes, asegurando con ello una relación profesional confiable y duradera. Lo cual ha permitido fortalecer las empresas, dando seguridad a su patrimonio.</p>
            <h3>Misión</h3>
            <p>Ofrecer una excelente atención a nuestros clientes, mediante servicios profesionales de calidad y con ello se sientan en constante seguridad, confianza y tranquilidad.</p>
            <h3>Visión</h3>
            <p>Ser reconocidos por nuestros clientes, brindando servicios de calidad mediante el uso de tecnología, conocimientos y experiencia necesarios para hacer frente a la gama de necesidades del mercado.</p>
            <h3>Valores:</h3>
            <ul>
                <li>Compromiso</li>
                <li>Lealtad</li>
                <li>Honestidad</li>
                <li>Respeto</li>
                <li>Confianza</li>
                <li>Perseverancia</li>
                <li>Innovación</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>
.aboutSection {
    background-color: var(--lightGray);
    padding-block: 35px;
}

.aboutSection-content {
    display: flex;
    flex-wrap: wrap;
}

.aboutSection img {
    border-radius: 12px 0 0 12px;
    max-width: 464px;
    object-fit: cover;
}
.aboutSection-description {
    background-color: white;
    border-radius: 0 12px 12px 0;
    flex-basis: 320px;
    flex: 1;
    padding-inline: 30px;
    padding-block: 20px;
}

@media screen and (max-width: 470px) {
    .wrapper {
        padding-inline: 30px;
    }
    .aboutSection img {
        max-width: 100%;
        border-radius: 12px 12px 0 0;
    }

    .aboutSection-description {
        border-radius: 0 0 12px 12px;
    }
}
</style>