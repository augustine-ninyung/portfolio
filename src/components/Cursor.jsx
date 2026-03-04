import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const trail = document.getElementById('cursorTrail');
    if (!cursor || !trail) return;

    let mx = 0, my = 0;
    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top  = my + 'px';
      setTimeout(() => {
        trail.style.left = mx + 'px';
        trail.style.top  = my + 'px';
      }, 80);
    };

    const grow  = () => { cursor.style.width = '28px'; cursor.style.height = '28px'; };
    const shrink = () => { cursor.style.width = '16px'; cursor.style.height = '16px'; };

    const bindInteractives = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', grow);
        el.addEventListener('mouseleave', shrink);
      });
    };

    document.addEventListener('mousemove', onMove);
    bindInteractives();

    const mo = new MutationObserver(bindInteractives);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-trail" id="cursorTrail"></div>
      <div className="ambient amb-gold"></div>
      <div className="ambient amb-blue"></div>
    </>
  );
}
