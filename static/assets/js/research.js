(() => {
  // 1. Publication Filter & Search (Publications Page)
  const tools = document.querySelector('.tools');
  if (tools) {
    tools.hidden = false;
    const buttons = [...tools.querySelectorAll('button')];
    const search = tools.querySelector('input');
    const groups = [...document.querySelectorAll('.year-group')];
    let kind = 'All';

    function update() {
      const query = search.value.trim().toLocaleLowerCase();
      let count = 0;
      groups.forEach(group => {
        let visible = 0;
        group.querySelectorAll('.paper').forEach(paper => {
          const matches = (kind === 'All' || paper.dataset.kind === kind) &&
            (group.querySelector('h2').textContent + ' ' + paper.textContent).toLocaleLowerCase().includes(query);
          paper.hidden = !matches;
          if (matches) visible++;
        });
        group.hidden = visible === 0;
        count += visible;
      });
      const counter = document.querySelector('#result-count');
      if (counter) counter.textContent = `${count} publication${count === 1 ? '' : 's'}`;
      const noRes = document.querySelector('#no-results');
      if (noRes) noRes.hidden = count !== 0;
    }

    buttons.forEach(button => button.addEventListener('click', () => {
      kind = button.dataset.filter;
      buttons.forEach(other => {
        other.classList.toggle('active', other === button);
        other.setAttribute('aria-pressed', String(other === button));
      });
      update();
    }));

    if (search) search.addEventListener('input', update);
  }

  // 2. Lightbox Modal for Figure and Award Zoom
  let lightbox = document.querySelector('.lightbox-overlay');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.className = 'lightbox-overlay';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Image viewer');
    lightbox.innerHTML = `
      <div class="lightbox-container">
        <button class="lightbox-close" aria-label="Close image viewer">&times;</button>
        <img class="lightbox-img" src="" alt="Enlarged view">
      </div>
    `;
    document.body.appendChild(lightbox);

    const closeBtn = lightbox.querySelector('.lightbox-close');
    const imgEl = lightbox.querySelector('.lightbox-img');

    function closeLightbox() {
      lightbox.classList.remove('active');
      imgEl.src = '';
    }

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
    });
  }

  function openLightbox(src, alt = 'Enlarged image') {
    const imgEl = lightbox.querySelector('.lightbox-img');
    imgEl.src = src;
    imgEl.alt = alt;
    lightbox.classList.add('active');
  }

  // Bind lightbox triggers
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.figure-lightbox-trigger, [data-lightbox]');
    if (trigger) {
      e.preventDefault();
      const src = trigger.dataset.lightbox || trigger.getAttribute('href');
      const img = trigger.querySelector('img');
      const alt = img ? img.alt : 'Enlarged figure';
      openLightbox(src, alt);
    }
  });

  // 3. Award Floating Popover on Hover
  let popover = document.querySelector('.award-popover');
  if (!popover) {
    popover = document.createElement('div');
    popover.className = 'award-popover';
    popover.innerHTML = `
      <div class="award-popover-header"><span>🏆</span> Award Certificate</div>
      <img src="" alt="Award certificate preview">
    `;
    document.body.appendChild(popover);
  }

  const popoverImg = popover.querySelector('img');

  function positionPopover(triggerEl) {
    const rect = triggerEl.getBoundingClientRect();
    const popWidth = Math.min(380, window.innerWidth - 30);
    const popHeight = 280;

    let left = rect.left;
    if (left + popWidth > window.innerWidth - 15) {
      left = window.innerWidth - popWidth - 15;
    }
    if (left < 15) left = 15;

    let top = rect.bottom + 10;
    if (top + popHeight > window.innerHeight - 15 && rect.top > popHeight + 15) {
      top = rect.top - popHeight - 10;
    }

    popover.style.left = `${left}px`;
    popover.style.top = `${top}px`;
    popover.style.width = `${popWidth}px`;
  }

  document.querySelectorAll('.award-preview-trigger, [data-award-img]').forEach(el => {
    const awardSrc = el.dataset.awardImg;
    if (!awardSrc) return;

    el.addEventListener('mouseenter', () => {
      popoverImg.src = awardSrc;
      positionPopover(el);
      popover.classList.add('active');
    });

    el.addEventListener('mouseleave', () => {
      popover.classList.remove('active');
    });

    // Also click to open full in lightbox
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox(awardSrc, 'Award Certificate');
    });
  });
})();
