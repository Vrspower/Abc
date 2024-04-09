import Button from "./components/Button";
import Button2 from "./components/Button2";
import Button4 from "./components/Button4";
const App = () => {
    return (
      <div className="flex flex-col min-h-screen bg-[#00A19B]">
        {/* Header */}
        <header className="bg-black text-[#C8CCCE]	flex justify-between items-center">
          {/* Logo on the left */}
          <div className="logo ml-6">
            <img src="logo/Amg.png" alt="Logo" className="h-32 w-auto" />
          </div>
          
          {/* Navigation Links on the right */}
          <nav>
            <ul className="flex space-x-4 mr-12">
              <li>
                <a href="#superhero" className="hover:underline">News</a>
              </li>
              <li>
                <a href="#action" className="hover:underline">Sign Up</a>
              </li>
              <li>
                <a href="#history" className="hover:underline">Log in</a>
              </li>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24" id="Search--Streamline-Guidance"><desc>Search Streamline Icon: https://streamlinehq.com</desc><path stroke="#00A19B" d="M18.425 18.425 23.5 23.5m-12.5 -2C5.201 21.5 0.5 16.799 0.5 11S5.201 0.5 11 0.5 21.5 5.201 21.5 11 16.799 21.5 11 21.5Z" stroke-width="1"></path></svg>
            </ul>
          </nav>
        </header>

        {/* Content Section with Images */}
       <h1><h1 className="text-4xl font-bold text-center text-[#e2ec4b] font-mono">Australian GP Recap</h1></h1> 
       <main className="flex-grow flex flex-col sm:flex-row justify-center items-center">
          <div className="flex flex-wrap justify-center gap-4 p-4 border-2 border-[#565F64] m-4">
            <img src="M421523.webp" alt="Description 1" className="w-full p-2"/>
            <Button />
          </div>
          <div className="flex flex-wrap justify-center gap-4 p-4 border-2 border-[#565F64] m-4">
            <img src="M421650.webp" alt="Description 2" className="w-full p-2"/>
            <Button />
          </div>
          <div className="flex flex-wrap justify-center gap-4 p-4 border-2 border-[#565F64] m-4">
            <img src="M421535.webp" alt="Description 3" className="w-full p-2"/>
            <Button />
          </div>
        </main>
        {/* Main content for website*/}
        <div>
        <h2 className="text-4xl font-bold text-center text-[#e2ec4b] font-mono gap-8">Upcoming Upgrades for W15 for Japanese GP</h2>
        <main class="container mx-auto px-4 py-8">
        <p class="inline-block text-white font-serif font-base gap-4 p-4">Coming to Mercedes, the upgrades include a new rear wing for the W15 which has an extra vane to the outer face of the rear wing endplate, thus enabling the creation of a small vortex, good enough to cause some amount of downforce and drag. </p>
        <p class="inline-block text-white font-serif font-base gap-4 p-4">The downforce being way less in Suzuka than last weekend's Marina Bay Street Circuit, several other teams have also made changes to their cars. McLaren gets a new sidepod inlet and beam wing for its MCL60 while Aston Martin's AMR23 receives a new front brake duct scoop.</p>
        <Button2/>
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-4xl mx-auto mb-8 bg-[#C8CCCE]" data-v0-t="card"><div class="space-y-1.5 p-6 flex flex-col gap-1"><h3 class="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">Japanese GP</h3><p class="text-sm text-muted-foreground">
      Race Calendar and Events
    </p></div><div class="p-6"><div class="grid gap-4"><div class="grid items-center gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-white dark:text-white"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg><h2 class="text-2xl font-semibold">12/14 April</h2></div><div class="grid gap-4"><div class="grid items-center gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><div class="grid grid-cols-3 items-center gap-2"><span class="text-sm text-white dark:text-white">5.30/9.00 PM</span><span class="col-span-2 text-sm text-white text-center dark:text-white">
              FP1/FP2
            </span></div></div><div class="grid items-center gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><div class="grid grid-cols-3 items-center gap-2"><span class="text-sm text-white dark:text-white">5.30/9.00 PM</span><span class="col-span-2 text-sm text-white text-center dark:text-white">
              FP3-QUALIFING
            </span></div></div><div class="grid items-center gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><div class="grid grid-cols-3 items-center gap-2"><span class="text-sm text-white dark:text-white">7.00 PM</span><span class="col-span-2 text-sm text-white text-center dark:text-white">
              PRE RACE
            </span></div></div><div class="grid items-center gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><div class="grid grid-cols-3 items-center gap-2"><span class="text-sm text-white dark:text-white">8.00 PM</span><span class="col-span-2 text-sm text-white text-center dark:text-white">
              RACE
            </span></div></div><div class="grid items-center gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><div class="grid grid-cols-3 items-center gap-2"><span class="text-sm text-white dark:text-white">4 PM</span><span class="col-span-2 text-sm text-white text-center dark:text-white">
              POST RACE
            </span></div></div></div></div></div></div>

            <div className="bg-[#C8CCCE] py-12 lg:py-24 mb-8">
  <div className="container grid items-center gap-4 px-4 text-center md:px-6">
    <div className="space-y-3 text-gray-100">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upcoming Events</h1>
      <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        Get your tickets to these action-packed events near you.
      </p>
    </div>
    <div className="grid w-full grid-cols-1 items-stretch justify-center md:grid-cols-2 lg:grid-cols-3">
      <div className="flex flex-col gap-1.5 p-4">
        <img
          alt="Summer Slam"
          className="aspect-[16/9] overflow-hidden rounded-lg object-cover object-center"
          src="/NYNFUVEMSBMPRFFP57TVXSMROA.jpg"></img>
        <div className="flex flex-col gap-1.5 items-center">
          <h2 className="text-xl font-bold hover:underline">Chinese GP</h2>
          <p className="text-sm text-gray-500">April 19-23,2024</p>
          <p className="text-sm text-gray-500">Shanghai International Circuit</p>
          <Button4/>  
        </div>
      </div>
      <div className="flex flex-col gap-1.5 p-4">
        <img
          alt="Royal Rumble"
          className="aspect-[16/9] overflow-hidden rounded-lg object-cover object-center"
          src="XPB_1204548_HiRes.jpg"></img>
        <div className="flex flex-col gap-1.5 items-center">
          <h2 className="text-xl font-bold hover:underline">Miami Gp</h2>
          <p className="text-sm text-gray-500">May 3-5,2024</p>
          <p className="text-sm text-gray-500">Miami International Autodrome</p>
          <Button4/>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 p-4">
      <img
    alt="WrestleMania"
    className="aspect-[16/9] overflow-hidden rounded-lg object-cover object-center items-center"
    src="F1-2021-IMOLA-CM1.jpg"></img>
  <div className="flex flex-col gap-1.5 items-center">
    <h2 className="text-xl font-bold hover:underline">Emilia Romagna GP</h2>
    <p className="text-sm text-gray-500">May 17-19, 2024</p>
    <p className="text-sm text-gray-500">Autodromo Enzo e Dino Ferrari</p>
    <Button4/>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto p-4 mb-8">
  <div class="relative group overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-transform duration-300 ease-in-out dark:shadow-lg">
    <img
      src="mercedes-amg-petronas-ineos-iwc-formula-1-vaittari-bottas-hd-wallpaper-preview.jpg"
      alt="Landscape 1"
      width="800"
      height="600"
      class="object-cover w-full aspect-video overflow-hidden group-hover:scale-105 transition-transform"
    />
    <div class="p-4">
      <h3 class="font-semibold transition-colors group-hover:underline">W11</h3>
      <p class="text-sm text-white dark:text-white">Silverstone,England</p>
      <p class="text-sm text-white dark:text-white">Photo by: @MercedesAmgF1</p>
    </div>
  </div>
  <div class="relative group overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-transform duration-300 ease-in-out dark:shadow-lg">
    <img
      src="1215704.jpg"
      alt="Landscape 2"
      width="800"
      height="600"
      class="object-cover w-full aspect-video overflow-hidden group-hover:scale-105 transition-transform"
    />
    <div class="p-4">
      <h3 class="font-semibold transition-colors group-hover:underline">W09</h3>
      <p class="text-sm text-white dark:text-white">Brackley,Engalnd</p>
      <p class="text-sm text-white dark:text-white">Photo by: @MercedesAmgF1</p>
    </div>
  </div>
  <div class="relative group overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-transform duration-300 ease-in-out dark:shadow-lg">
    <img
      src="FMIaKw3XsAgAb5j.jpg"
      alt="Landscape 3"
      width="800"
      height="600"
      class="object-cover w-full aspect-video overflow-hidden group-hover:scale-105 transition-transform"
    />
    <div class="p-4">
      <h3 class="font-semibold transition-colors group-hover:underline">W13</h3>
      <p class="text-sm text-white dark:text-white">Brackley,England</p>
      <p class="text-sm text-white dark:text-white">Photo by: @MercedesAmgF1</p>
    </div>
  </div>
  <div class="relative group overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-transform duration-300 ease-in-out dark:shadow-lg">
    <img
      src="Mercedes-AMG-F1-W11-EQ-AMD-renders.webp"
      alt="Landscape 4"
      width="800"
      height="600"
      class="object-cover w-full aspect-video overflow-hidden group-hover:scale-105 transition-transform"
    />
    <div class="p-4">
      <h3 class="font-semibold transition-colors group-hover:underline">W11</h3>
      <p class="text-sm text-white dark:text-white">Brixworth,Engalnd</p>
      <p class="text-sm text-white dark:text-white">Photo by: @MercedesAmgF1</p>
    </div>
  </div>
  <div class="relative group overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-transform duration-300 ease-in-out dark:shadow-lg">
    <img
      src="desktop-wallpaper-pole-position-for-lewis-in-styria-valtteri-p4-mercedes-f1-2020.jpg"
      alt="Landscape 5"
      width="800"
      height="600"
      class="object-cover w-full aspect-video overflow-hidden group-hover:scale-105 transition-transform"
    />
    <div class="p-4">
      <h3 class="font-semibold transition-colors group-hover:underline">W11</h3>
      <p class="text-sm text-white dark:text-white">Instabull,Turkey</p>
      <p class="text-sm text-white dark:text-white">Photo by: @MercedesAmgF1</p>
    </div>
  </div>
</div>
<div class="flex justify-between">
  <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-sm" data-v0-t="card">
  <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-sm" data-v0-t="card">
  <div class="space-y-1.5  inline-flex items-start p-6 justify-center">
    <div class="grid gap-1.5">
      <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Race Day Weather</h3>
      <p class="text-sm text-muted-foreground">Chinese GP</p>
    </div>
    <div class="flex flex-row ml-auto items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-8 h-8"
      >
        <path d="M12 2v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="M20 12h2"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
        <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"></path>
        <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-4 h-4 ml-auto shrink-0"
      >
        <path d="m6 9 6 6 6-6"></path>
      </svg>
    </div>
  </div>
  <div class="p-6">
    <div class="flex flex-row items-start gap-6">
      <div class="flex flex-col items-center">
        <div class="text-4xl font-semibold leading-none">
          24<span class="text-sm font-normal">°C</span>
        </div>
        <div class="text-sm text-white dark:text-white">Heavy rain</div>
      </div>
      <div class="flex flex-col items-center">
        <div class="grid gap-1.5">
          <div class="text-sm font-medium">Sunday</div>
          <div class="text-xs text-white dark:text-white">15°C / 28°C</div>
          <div class="flex flex-row items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4 h-4"
            >
              <path d="M22 12a10.06 10.06 1 0 0-20 0Z"></path>
              <path d="M12 12v8a2 2 0 0 0 4 0"></path>
              <path d="M12 2v1"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4 h-4"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4 h-4"
            >
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex items-center p-6">
    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
      View forecast
    </button>
  </div>
</div>
  </div>

  <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-sm" data-v0-t="card">
  <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-sm" data-v0-t="card">
  <div class="space-y-1.5  inline-flex items-start p-6 justify-center">
    <div class="grid gap-1.5">
      <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Race Day Weather</h3>
      <p class="text-sm text-muted-foreground">Miami GP</p>
    </div>
    <div class="flex flex-row ml-auto items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-8 h-8"
      >
        <path d="M12 2v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="M20 12h2"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
        <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"></path>
        <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-4 h-4 ml-auto shrink-0"
      >
        <path d="m6 9 6 6 6-6"></path>
      </svg>
    </div>
  </div>
  <div class="p-6">
    <div class="flex flex-row items-start gap-6">
      <div class="flex flex-col items-center">
        <div class="text-4xl font-semibold leading-none">
          19<span class="text-sm font-normal">°C</span>
        </div>
        <div class="text-sm text-white dark:text-white">Sunny</div>
      </div>
      <div class="flex flex-col items-center">
        <div class="grid gap-1.5">
          <div class="text-sm font-medium">Sunday</div>
          <div class="text-xs text-white dark:text-white">15°C / 28°C</div>
          <div class="flex flex-row items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4 h-4"
            >
              <path d="M22 12a10.06 10.06 1 0 0-20 0Z"></path>
              <path d="M12 12v8a2 2 0 0 0 4 0"></path>
              <path d="M12 2v1"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4 h-4"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4 h-4"
            >
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex items-center p-6">
    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
      View forecast
    </button>
  </div>
</div>
  </div>

  <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-sm" data-v0-t="card">
  <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-sm" data-v0-t="card">
  <div class="space-y-1.5  inline-flex items-start p-6 justify-center">
    <div class="grid gap-1.5">
      <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Race Day Weather</h3>
      <p class="text-sm text-muted-foreground">Emilia Romagna GP</p>
    </div>
    <div class="flex flex-row ml-auto items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-8 h-8"
      >
        <path d="M12 2v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="M20 12h2"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
        <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"></path>
        <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-4 h-4 ml-auto shrink-0"
      >
        <path d="m6 9 6 6 6-6"></path>
      </svg>
    </div>
  </div>
  <div class="p-6">
    <div class="flex flex-row items-start gap-6">
      <div class="flex flex-col items-center">
        <div class="text-4xl font-semibold leading-none">
          16<span class="text-sm font-normal">°C</span>
        </div>
        <div class="text-sm text-white dark:text-white">Partly cloudy</div>
      </div>
      <div class="flex flex-col items-center">
        <div class="grid gap-1.5">
          <div class="text-sm font-medium">Sunday</div>
          <div class="text-xs text-white dark:text-white">15°C / 28°C</div>
          <div class="flex flex-row items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4 h-4"
            >
              <path d="M22 12a10.06 10.06 1 0 0-20 0Z"></path>
              <path d="M12 12v8a2 2 0 0 0 4 0"></path>
              <path d="M12 2v1"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4 h-4"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4 h-4"
            >
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex items-center p-6">
    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
      View forecast
    </button>
  </div>
</div>
  </div>
</div>




       
  


    </main>
      </div>
        {/* Footer */}
        <footer className="bg-black text-white py-8">
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm mx-auto max-w-sm mb-8">
      <div className="flex flex-col p-6 space-y-1">
        <h3 className="whitespace-nowrap tracking-tight text-2xl font-bold">Sign In</h3>
        <p className="text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="p-6">
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none" htmlFor="email">Email</label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder-text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            id="email"
            placeholder="m@example.com"
            required
            type="email"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center">
            <label className="text-sm font-medium leading-none" htmlFor="password">Password</label>
            <a className="ml-auto inline-block text-sm underline" href="#">
              Forgot your password?
            </a>
          </div>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder-text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            id="password"
            required
            type="password"
          />
        </div>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
          type="submit"
        >
          Sign In
        </button>
        <div className="shrink-0 bg-gray-100 h-[1px] w-full my-6" data-orientation="horizontal" role="none"></div>
        <a className="w-full inline-block text-center text-sm underline" href="#">
          Create an Account
        </a>
      </div>
    </div>        
      <div className="flex justify-center items-center h-60">
        <div className="mb-4 md:mb-0">
            <p className="flex text-3xl align-middle text-center font-bold mb-4 justify-center">Follow Us</p>
            <p className="flex text-3xl align-middle text-center font-bold justify-center">Visit our official social media channels</p>
            <div class="flex items-center gap-6">
    <a class="text-gray-700 hover:text-[#00A19B]" aria-label="Visit TrendyMinds LinkedIn" href="" target="_blank"><svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-8">
            <path fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
            </path>
        </svg>
    </a>
    <a class="text-gray-700 hover:text-[#00A19B]" aria-label="Visit TrendyMinds YouTube" href="" target="_blank"><svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-8">
            <path fill="currentColor"
                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
            </path>
        </svg>
    </a>
    <a class="text-gray-700 hover:text-[#00A19B]" aria-label="Visit TrendyMinds Facebook" href="" target="_blank"><svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="h-8">
            <path fill="currentColor"
                d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
            </path>
        </svg>
    </a>
    <a class="text-gray-700 hover:text-[#00A19B]" aria-label="Visit TrendyMinds Instagram" href="" target="_blank"><svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-8">
            <path fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
            </path>
        </svg>
    </a>
    <a class="text-gray-700 hover:text-[#00A19B]" aria-label="Visit TrendyMinds Twitter" href="" target="_blank"><svg
            class="h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
            </path>
        </svg>
    </a>
    <footer class="bg-black md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
    <ul class="flex items-center flex-wrap mb-6 md:mb-0">
        <li><a href="#" class="text-sm font-normal text-[#00A19B] hover:underline mr-4 md:mr-6">Terms and conditions</a>
        </li>
        <li><a href="#" class="text-sm font-normal text-[#00A19B] hover:underline mr-4 md:mr-6">Privacy Policy</a></li>
        <li><a href="#" class="text-sm font-normal text-[#00A19B] hover:underline mr-4 md:mr-6">Licensing</a></li>
        <li><a href="#" class="text-sm font-normal text-[#00A19B] hover:underline mr-4 md:mr-6">Cookie Policy</a></li>
        <li><a href="#" class="text-sm font-normal text-[#00A19B] hover:underline">Contact</a></li>
    </ul>

</footer>
</div>
          </div>
        </div>
    </footer>
      </div>
    )
}

export default App
