<template>
  <div class="paper">
    <router-view/>
  </div>
</template>

<style>
@page {
    size: A4;
    margin: 0;
}

body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #ddd;
}
* {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
}

.paper {
  width: 210mm;
  min-height: 297mm;
  padding: 20mm;
  margin: 10mm auto;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

@media print {
  html, body {
    width: 210mm;
    background-color: #fff;
  }

  .paper {
    margin: 0;
    border: initial;
    border-radius: initial;
    width: initial;
    min-height: initial;
    box-shadow: initial;
    background: initial;
    page-break-after: always;
  }
}

aside {
  width: 104px;
  margin-right: 15px;
  font-size: 8pt;
}

main {
  font-size: 9pt;
}

ul {
  margin-bottom: 3pt !important;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeInDown {
  transition: all 0.3;
  animation: fadeInDown 1 1.3s;
}

.fadeIn {
  animation: fadeIn 1 0.9s;
}

.fadeInLeft {
  animation: fadeInLeft 1 0.9s;
}
</style>
