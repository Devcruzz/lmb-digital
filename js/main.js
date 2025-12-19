
// Evento da parte de denúncias 
document.addEventListener("DOMContentLoaded", () => {
  const selectTipo = document.getElementById("tipo");
  const formGroupOutro = document.createElement("div");

  // cria dinamicamente o campo extra
  formGroupOutro.classList.add("form-group");
  formGroupOutro.innerHTML = `
    <label for="outroTipo">Descreva o tipo de denúncia</label>
    <input type="text" id="outroTipo" name="outroTipo" placeholder="Informe o tipo de denúncia">
  `;
  formGroupOutro.style.display = "none"; // escondido por padrão

  // adiciona depois do select
  selectTipo.parentNode.insertAdjacentElement("afterend", formGroupOutro);

  // evento de mudança no select
  selectTipo.addEventListener("change", () => {
    if (selectTipo.value === "outro") {
      formGroupOutro.style.display = "block";
    } else {
      formGroupOutro.style.display = "none";
    }
  });
});


// Swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 800, // velocidade da transição

  autoplay: {
    delay: 3500, // tempo entre os slides (ms)
    disableOnInteraction: false, // continua mesmo após clique
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});