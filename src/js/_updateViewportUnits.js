export const updateViewportUnits = () => {
    let vh = window.innerHeight * 0.01;
    $('body').css('--vh', `${vh}px`);
  };