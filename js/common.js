$(function() {

  $(document).on('click.bs.dropdown.data-api', '.dropdown-menu', function (e) { 
  e.stopPropagation();
  });


  Waves.attach('.btn-donate');
  Waves.attach('.btn',  ['waves-light']);
  Waves.init();

((w, d, u, n) => {
  let opCSlider = {pause: (ms) => new Promise((r) => setTimeout(r, ms)),
  events: {
    click: async (e) => {
      if (e.target.classList.contains(`arrow-left`) &&
          e.target.parentElement.parentElement.classList.contains(
              `module-cascade-slider`)) {
          e.target.parentElement.parentElement.children[1].children[0].classList.add(
              `glide-up-first`);
          await opCSlider.pause(200);
          e.target.parentElement.parentElement.children[1].children[0].classList.remove(
              `glide-up-first`);
          e.target.parentElement.parentElement.children[1].children[0].classList.add(
              `glide-up-last`);
          e.target.parentElement.parentElement.children[1].appendChild(
          e.target.parentElement.parentElement.children[1].children[0]);
          await opCSlider.pause(200);
          e.target.parentElement.parentElement.children[1].lastElementChild.classList.remove(
              `glide-up-last`);}
      if (e.target.classList.contains(`arrow-right`) &&
          e.target.parentElement.parentElement.classList.contains(
              `module-cascade-slider`)) {
          e.target.parentElement.parentElement.children[1].lastElementChild.classList.add(
              `glide-down-last`);
          await opCSlider.pause(200);
          e.target.parentElement.parentElement.children[1].lastElementChild.classList.remove(
              `glide-down-last`);
          e.target.parentElement.parentElement.children[1].lastElementChild.classList.add(
              `glide-up-first`);
          e.target.parentElement.parentElement.children[1].insertBefore(
          e.target.parentElement.parentElement.children[1].lastElementChild,
          e.target.parentElement.parentElement.children[1].children[0]);
          await opCSlider.pause(200);
          e.target.parentElement.parentElement.children[1].children[0].classList.remove(
              `glide-up-first`);}
        }
      }
    };
    d.addEventListener(`click`, opCSlider.events.click);
    w.addEventListener(`beforeunload`, () => {
    d.removeEventListener(`click`, opCSlider.events.click);
    opCSlider = u;});
  })(
    window,
    document,
    undefined,
    null
  );

});

