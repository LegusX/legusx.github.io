<script>
	import Header from '../lib/Header.svelte';
	import Footer from '../lib/Footer.svelte';
	import '../app.css';

</script>

<div class="bg-[url(/xbg.png)] bg-no-repeat">
	<Header/>

	<main class="">
		<slot/>
	</main>

	<Footer/>
</div>