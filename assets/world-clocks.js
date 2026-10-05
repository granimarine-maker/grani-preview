(() => {
  const cards = [...document.querySelectorAll('[data-world-clock]')];
  if (!cards.length) return;
  const clocks = cards.map(card => ({
    card,
    parts: new Intl.DateTimeFormat('en-GB', {
      timeZone: card.dataset.timeZone, hourCycle: 'h23',
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    }),
    date: new Intl.DateTimeFormat('en-GB', {
      timeZone: card.dataset.timeZone, year: 'numeric', month: 'short', day: '2-digit'
    }),
    digital: card.querySelector('[data-clock-time]'),
    calendar: card.querySelector('[data-clock-date]'),
    hour: card.querySelector('[data-clock-hour]'),
    minute: card.querySelector('[data-clock-minute]'),
    second: card.querySelector('[data-clock-second]')
  }));
  function update() {
    const now = new Date();
    for (const clock of clocks) {
      const value = Object.fromEntries(clock.parts.formatToParts(now).map(part => [part.type, part.value]));
      const hour = Number(value.hour), minute = Number(value.minute), second = Number(value.second);
      const time = `${value.hour}:${value.minute}`;
      const date = `${value.year}-${value.month}-${value.day}`;
      clock.digital.textContent = time;
      clock.digital.dateTime = now.toISOString();
      clock.digital.setAttribute('aria-label', `${time} local time`);
      clock.calendar.textContent = clock.date.format(now);
      clock.calendar.dateTime = date;
      clock.hour.style.transform = `rotate(${(hour % 12) * 30 + minute / 2 + second / 120}deg)`;
      clock.minute.style.transform = `rotate(${minute * 6 + second / 10}deg)`;
      clock.second.style.transform = `rotate(${second * 6}deg)`;
    }
  }
  let timer;
  function resume() {
    clearInterval(timer);
    update();
    if (!document.hidden) timer = setInterval(update, 1000);
  }
  document.addEventListener('visibilitychange', resume);
  resume();
})();
