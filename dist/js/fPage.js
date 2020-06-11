new fullpage('#fullpage', {
  autoScrolling: true,
  navigation: true,
  responsiveWidth: 900,
  navigationTooltips: ['Home', 'What I do', 'Skills', 'Latest Projects', 'Projects', 'Contact me', 'Footer'],
  anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'],
  onLeave: (origin, destination, direction) => {
    const section = destination.item
    console.log(destination.index)

    if (destination.index === 1 && screen.width > 900) {
      const titleH1 = section.querySelector('h1');
      const text = section.querySelector('.whatIdoDesc');
      const tl = new TimelineMax({ delay: 0.5 });
      tl.fromTo(titleH1, 0.3, { x: "0", opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(text, 0.3, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
    } else if (destination.index === 2 && screen.width > 900) {
      const title = section.querySelector('h3');
      const text = section.querySelector('p');
      const container = section.querySelector('.grid-container');
      const tl = new TimelineMax({ delay: 0.3 });
      tl.fromTo(title, 0.2, { x: 50, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(text, 0.2, { x: -50, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(container, 0.2, { x: 50, opacity: 0 }, { x: 0, opacity: 1 })
    }
    else if (destination.index === 3 && screen.width > 900) {
      const img1 = section.querySelector('.img1');
      const img2 = section.querySelector('.img2');
      const tl = new TimelineMax({ delay: 0.3 });
      tl.fromTo(img1, 0.3, { x: '50', opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(img2, 0.3, { x: '50', opacity: 0 }, { x: 0, opacity: 1 })
    } else if (destination.index === 4 && screen.width > 900) {
      const img3 = section.querySelector('.img3');
      const img4 = section.querySelector('.img4');
      const tl = new TimelineMax({ delay: 0.3 });
      tl.fromTo(img3, 0.3, { x: '-50', opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(img4, 0.3, { x: '-50', opacity: 0 }, { x: 0, opacity: 1 })
    }
    else if (destination.index === 6 && screen.width > 900) {
      const footer = section.querySelector('.footer');
      const tl = new TimelineMax({ delay: 0.5 });
      tl.fromTo(footer, 0.3, { x: '0', opacity: 0 }, { x: 0, opacity: 1 })
    }
  }
})

