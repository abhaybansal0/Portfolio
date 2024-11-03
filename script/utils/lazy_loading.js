const lazyloading = () =>{

    const lazyImgs = document.querySelectorAll(".lazy");

    const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                
                let img = entry.target;
                // console.log(entry.target);
                
                img.src = img.dataset.src;

                img.classList.remove('loading');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
            
        })
    }, {
        root: null,
        rootMargin: '10px',
        threshold: 0}
    );

    lazyImgs.forEach(img =>{
        observer.observe(img);
    });
};


export default lazyloading;