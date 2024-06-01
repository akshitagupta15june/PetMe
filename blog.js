fetch("blog.json")
  .then(function(response){
    return response.json();
  })
  .then(function(blogs){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let blog of blogs){
      out += `
      <div class="relative flex items-center m-10 bg-white shadow-2xl shadow-slate-500 rounded-2xl justify-center backdrop-filter backdrop-blur-md">
        <div class="relative w-[17.5rem] sm:w-[15.5rem] md:w-[19rem] lg:w-[27rem] xl:w-[35rem] h-auto flex flex-col justify-center items-center opacity-80 hover:opacity-100">
          <div class="relative w-full truncate duration-500 border-8 border-solid rounded-t-2xl border-black/25">
            <img src="${blog.poster}" alt="blog image" class="object-cover w-full h-48 rounded-t-2xl"/>
          </div>
          <div class="relative flex flex-col items-center justify-center px-4 py-4 text-center bg-white rounded-b-2xl">
            <h3 class="duration-500 text-black uppercase font-medium text-sm tracking-wider py-2">
              <b>${blog.title}</b><br>
              <span class="text-base font-light lowercase">${blog.description}</span>
            </h3>

            <div class="mt-4">
               <a href="${blog.read}" rel="noopener noreferrer" class="px-4 py-2 text-white font-normal bg-amber-800 hover:bg-amber-900 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring focus:border-amber-900 transform hover:scale-105" aria-label="Read ${blog.title}">

                <b>Read</b>
              </a>
            </div>
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

// Change to the stored current theme.
changeToCurrTheme();
