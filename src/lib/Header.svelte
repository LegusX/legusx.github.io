<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte'

	const transPoint = 400

	onMount(()=>{
		let header = document.getElementsByTagName("header")[0]

		window.onscroll = ()=>{
			console.log(window.div.getBoundingClientRect().top)
			if (window.div.getBoundingClientRect().top < transPoint) {
				header.style.backgroundColor = `rgba(30, 37, 205, ${(transPoint-window.div.getBoundingClientRect().top)/transPoint}`
		}
			if (window.div.getBoundingClientRect().top > transPoint) {
				header.style.backgroundColor = `rgba(30, 37, 205, ${(transPoint-window.div.getBoundingClientRect().top)/transPoint}`
			}
		}
	})
</script>

<div class="hidden bg-logo-blue/100">
	I'm here just so classes get added :D
</div>
<header class="w-full flex bg-logo-blue/0 text-white items-center sticky top-0">
	<div class="w-8 md:w-14 m-2 rounded-ful p-1 place-self-start">
		<a href="/"><img src="/transparentx.png" alt="transparent legusx logo" class="rounded-full" ></a>
	</div>
	<div class="justify-end flex w-full">
		<a href="/">
			<div class="px-4 py-2 mr-8 {$page.url.pathname === "/" ? "rounded-md bg-white text-logo-blue":"ring-offset-1 ring-0 ring-white rounded-md"}">
				Home
			</div>
		</a>
		<a href="/projects">
			<div class="px-4 py-2 mr-8 {$page.url.pathname === "/projects" ? "rounded-md bg-white text-logo-blue":"ring-offset-1 ring-0 ring-white rounded-md"}">
				Projects
			</div>
		</a>
	</div>
</header>