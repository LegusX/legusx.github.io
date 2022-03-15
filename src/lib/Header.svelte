<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let header = null;
	let overlay = null;
	let height = 0;

	page.subscribe((d) => {
		if (header === null || overlay === null || window.div === null) return;
		height = 0;
		header.style.backgroundPositionY = 0;
	});

	// transition for header
	onMount(() => {
		header = document.getElementsByTagName('header')[0];
		overlay = document.getElementById('overlay');

		window.onscroll = () => {
			if (window.div === null) return;
			if (height === 0) {
				height = '-' + window.getComputedStyle(window.div).marginTop;
				header.style.backgroundPositionY = height;
			}
			if (window.div.getBoundingClientRect().top > header.getBoundingClientRect().height) {
				header.classList.remove('bg-[url(/xbg.png)]');
				overlay.classList.remove('bg-logo-dark/50');
			} else {
				header.classList.add('bg-[url(/xbg.png)]');
				// overlay.classList.add("bg-logo-dark/50")
			}
		};
	});
</script>

<header class="w-full text-white sticky top-0">
	<div id="overlay" class="transition-colors w-full flex items-center">
		<div class="w-14 m-2 rounded-ful p-1 place-self-start ">
			<a href="/"
				><img src="/transparentx.png" alt="transparent legusx logo" class="rounded-full" /></a
			>
		</div>
		<div class="justify-end flex w-full pr-3">
			<a href="/">
				<div
					class="px-4 py-2 mx-4 transition-all  {$page.url.pathname === '/' ||
					$page.url.pathname === ''
						? 'rounded-md bg-white text-logo-blue px-6'
						: 'ring-offset-1 ring-0 ring-white rounded-md bg-white/0 hover:px-6 hover:mx-2 duration-300'}"
				>
					Home
				</div>
			</a>
			<a href="/projects">
				<div
					class="px-4 py-2 mx-4 transition-all {$page.url.pathname === '/projects'
						? 'rounded-md bg-white text-logo-blue px-6'
						: 'ring-offset-1 ring-0 ring-white rounded-md bg-white/0 hover:px-6 hover:mx-2 duration-300'}"
				>
					Projects
				</div>
			</a>
			<a href="/about">
				<div
					class="px-4 py-2 mx-4 transition-all {$page.url.pathname === '/about'
						? 'rounded-md bg-white text-logo-blue px-6'
						: 'ring-offset-1 ring-0 ring-white rounded-md bg-white/0 hover:px-6 hover:mx-2 duration-300'}"
				>
					About
				</div>
			</a>
		</div>
	</div>
</header>
