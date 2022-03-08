<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte'

	// transisition for header
	onMount(()=>{
		let header = document.getElementsByTagName("header")[0]
		let overlay = document.getElementById("overlay")
		let height = 0

		window.onscroll = ()=>{
			if (height === 0) {
				height = "-"+window.getComputedStyle(window.div).marginTop
				header.style.backgroundPositionY = height
			}
			if (window.div.getBoundingClientRect().top > header.getBoundingClientRect().height) {
				header.classList.remove("bg-[url(/xbg.png)]")
				overlay.classList.remove("bg-logo-dark/50")
			}
			else {
				header.classList.add("bg-[url(/xbg.png)]")
				overlay.classList.add("bg-logo-dark/50")
			}
		}
	})
</script>

<header class="w-full text-white sticky top-0">
	<div id="overlay" class="transition-colors w-full flex items-center">
		<div class="w-14 m-2 rounded-ful p-1 place-self-start ">
			<a href="/"><img src="/transparentx.png" alt="transparent legusx logo" class="rounded-full" ></a>
		</div>
		<div class="justify-end flex w-full">
			<a href="/">
				<div class="px-4 py-2 mr-8 {$page.url.pathname === "/" ? "rounded-md bg-white text-logo-blue":"ring-offset-1 ring-0 ring-white rounded-md transition-all bg-white/0 hover:bg-logo-dark/40 hover:px-6"}">
					Home
				</div>
			</a>
			<a href="/projects">
				<div class="px-4 py-2 mr-8 {$page.url.pathname === "/projects" ? "rounded-md bg-white text-logo-blue":"ring-offset-1 ring-0 ring-white rounded-md transition-all bg-white/0 hover:bg-logo-dark/40 hover:px-6"}">
					Projects
				</div>
			</a>
			<a href="/about">
				<div class="px-4 py-2 mr-8 {$page.url.pathname === "/about" ? "rounded-md bg-white text-logo-blue":"ring-offset-1 ring-0 ring-white rounded-md transition-all bg-white/0 hover:bg-logo-dark/40 hover:px-6"}">
					About
				</div>
			</a>
		</div>
	</div>
</header>