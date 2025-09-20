// Collapsible timings for mobile
function toggleTimingTable(e) {
  if(window.innerWidth > 600) return; // Only on mobile
  const h3 = e.currentTarget;
  const targetClass = h3.getAttribute('data-target');
  const table = document.querySelector('.' + targetClass);
  if(table) {
    table.classList.toggle('collapsed');
    // Toggle arrow
    const arrow = h3.querySelector('.toggle-arrow');
    if(table.classList.contains('collapsed')) {
      arrow.textContent = '+';
    } else {
      arrow.textContent = '–';
    }
  }
}
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.collapsible-timing').forEach(h3 => {
    h3.addEventListener('click', toggleTimingTable);
  });
  // On resize, show tables if not mobile
  window.addEventListener('resize', () => {
    if(window.innerWidth > 600) {
      document.querySelectorAll('.timing-table').forEach(t => t.classList.remove('collapsed'));
      document.querySelectorAll('.toggle-arrow').forEach(a => a.textContent = '');
    } else {
      document.querySelectorAll('.collapsible-timing').forEach(h3 => {
        const targetClass = h3.getAttribute('data-target');
        const table = document.querySelector('.' + targetClass);
        const arrow = h3.querySelector('.toggle-arrow');
        if (table && arrow) {
          if (table.classList.contains('collapsed')) {
            arrow.textContent = '+';
          } else {
            arrow.textContent = '–';
          }
        }
      });
    }
  });
});
