
document.addEventListener("mousemove", parallax);

function parallax(e) {
    document.querySelectorAll('.content').forEach(content => {
        const speed = content.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed)/90;
        const y = (window.innerHeight - e.pageY * speed)/90;
        content.style.transform = `translateX(${x}px) translateY(${y}px)`; 
    });
}

