fetch("blog.json")
  .then(function(response){
    return response.json();
  })
  .then(function(blogs){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let blog of blogs){
      out += `
      <div class="relative flex items-center m-10 bg-black shadow-2xl shadow-slate-500 grid-items group z-2 w-min h-min bg-opacity-5 rounded-2xl justify-conten backdrop-filter backdrop-blur-md">
        <div class="relative w-[17.5rem] sm:w-[15.5rem] md:w-[19rem] lg:w-[27rem] xl:w-[35rem] h-80 flex justify-center items-center flex-col opacity-80  hover:opacity-100">
          <div class="relative w-4/5 truncate duration-500 border-8 border-solid rounded-2xl border-black/25 group-hover:-translate-y-6">
            <img src="${blog.poster}" alt="blog image" class="relative top-0 left-0 object-cover w-full h-full"/>
          </div>
          <div class="relative flex-wrap items-center justify-center mx-0 my-0 text-center">
            <h3 class="group-hover:-translate-y-6 duration-500 text-black uppercase font-medium text-sm text-center tracking-wider py-2 mt-5 mr-2.5 ml-2.5 mb-2.5 leading-4">
              <b>${blog.title}</b><br><br>
              <span class="text-base font-light lowercase py-3">${blog.description}</span>
              <a href="${blog.read}" rel="noopener noreferrer" class="pl-4 pr-4 m-auto mt-0 mb-0 text-base font-normal bg-orange-500 hover:bg-orange-400 rounded-md">
                <b>Read</b>
              </a>
            </h3>
          </div>
        </div>
      </div>`;
    }

    placeholder.innerHTML = out;

    // Smooth scroll functionality
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
