<template lang="pug">
<!-- 這裡是 works  -->
.works-container#works
  vue-particles(color="#dedede"
                :particleOpacity="0.7"
                :particlesNumber="80"
                shapeType="circle"
                :particleSize="4"
                linesColor="#dedede"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="150"
                :moveSpeed="3"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push")
  .container
    h1.my-title Projects
    .row
      .col
        .transform_3d
          .my-card
            img(src="../assets/project/shinyue.png" class="my-card-image" alt="img")
          h3.title OA辦公家具
</template>