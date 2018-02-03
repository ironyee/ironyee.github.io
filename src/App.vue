<template>
  <router-view/>
</template>

<style>
@page {
    size: A4;
    margin: 0;
}

@media print {
  html, body {
    width: 210mm;
    height: 297mm;
    background: #fff;
  }
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
