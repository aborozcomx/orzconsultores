<script lang="ts" setup>
useHead({
  title: "Home"
})

const services = reactive([
  {
    id: 1,
    title: 'Contabilidad',
    description: 'Trabajamos de forma comprometida y somos responsables de la información financiera de su negocio, atendiendo a las empresas llevando su contabilidad de acuerdo con las normas de información financiera y a pegándonos a las normatividades establecidas por la autoridad fiscal.',
    icon: "https://res.cloudinary.com/dio0fuibe/image/upload/v1674319777/orz/accounting_bdijkw.svg"
  },
  {
    id: 2,
    title: 'Nómina',
    description: 'Administración de la nómina desde un solo trabajador, envío de sus recibos en PDF y XML, así como información sobre las actualizaciones que se deben implementar para cumplir en tiempo y forma con las normas establecidas.',
    icon: 'https://res.cloudinary.com/dio0fuibe/image/upload/v1674319777/orz/payroll_ip9wpx.svg'
  },
  {
    id: 3,
    title: 'IMSS',
    description: 'Asesorías para trámites ante la Subdelegación del IMSS, así como movimientos afiliatorios dentro de la plataforma, ayudando a cumplir con las obligaciones que tienes como patrón con las normas establecidas.',
    icon: 'https://res.cloudinary.com/dio0fuibe/image/upload/v1674319821/orz/imss_bpjrlj.svg'
  },
  {
    id: 4,
    title: 'Asesorías',
    description: 'Mantenerse fuera de riesgos fiscales es primordial para buen funcionamiento de las empresas por lo que nosotros ayudamos a las empresas a dar certeza al cumplimiento de sus obligaciones fiscales y contables, a través de nuestra asesoría especializada.',
    icon: 'https://res.cloudinary.com/dio0fuibe/image/upload/v1674319777/orz/advisory_swsfyo.svg'
  },
  {
    id: 5,
    title: 'Impuestos',
    description: 'Brindamos las directrices y ejecutamos los cálculos de manera efectiva para finalmente presentar en tiempo y forma las declaraciones de impuestos, esto para brindar seguridad y tranquilidad a nuestros clientes, todo de conformidad con las normas establecidas, ya sea a nivel federal, estatal y/o municipal.',
    icon: 'https://res.cloudinary.com/dio0fuibe/image/upload/v1674319777/orz/tax_mjem3h.svg'

  },
  {
    id: 6,
    title: 'Desarrollo web',
    description: 'Creamos y desarrollamos paginas y aplicaciones web que te ayudan a brindar soluciones y visibilidad a tu negocio.',
    icon: 'https://res.cloudinary.com/dio0fuibe/image/upload/v1674319777/orz/web_dcrls4.svg'
    
  },
  
])
</script>

<template>
  <div class="home">
    <div class="wrapper">
      <div class="hero"></div>
    </div>

    <service-section>
      <service-card v-for="service in services" :service="service" :key="service.id"></service-card>
    </service-section>

    <about-section></about-section>

    <contact-section></contact-section>
  </div>
</template>

<style scoped>
.hero {
  background-image: url('@/assets/images/hero.jpg');
  background-position: center;
  background-size: cover;
  height: 580px;
}
</style>
