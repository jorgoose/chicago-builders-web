<script lang="ts">
	import { Button, Card, SectionLabel, StarIcon } from '$lib/components';

	const contrasts = [
		{
			city: 'San Francisco',
			problem: 'Optimizing for metrics that don\'t matter. Building features for other tech workers. Solving problems that only exist inside a very specific bubble.',
		},
		{
			city: 'New York',
			problem: 'Everything filtered through finance and media. Success measured in exits and headlines. The work becomes secondary to the story about the work.',
		},
		{
			city: 'Austin / Miami',
			problem: 'Imported scenes chasing the same playbook. Tax arbitrage dressed up as innovation. The problems being solved are "how do I get funded" not "how do I help people."',
		}
	];

	const chicagoTraits = [
		{
			title: 'Born from Necessity',
			description: 'The city burned down and we rebuilt it better. Then we invented the skyscraper because we had to. That\'s how it works here. Problems show up, people fix them.'
		},
		{
			title: 'Where Things Actually Work',
			description: 'Railroad hub. Manufacturing center. Commerce crossroads. This has always been where things actually have to work. Not just look good in a demo.'
		},
		{
			title: 'Substance Over Story',
			description: 'Midwest directness means less performance, more delivery. People here don\'t tell you how important they are. They show you what they\'ve solved.'
		},
		{
			title: 'Freedom to Solve Real Problems',
			description: 'You can afford to live here and work on what matters. No VC funding required just to survive. That means you can solve problems worth solving, not just fundable ones.'
		}
	];

	const whyItMatters = [
		{
			title: 'Closer to Real Problems',
			description: 'Outside the coastal bubble, you\'re closer to the problems most people actually face. Less trend-chasing. More actually helping people.'
		},
		{
			title: 'All Kinds of People',
			description: 'Hardware people, industrial designers, architects, engineers. Real problems don\'t care what your job title is. Chicago has all of them in the same room.'
		},
		{
			title: 'People Actually Help Each Other',
			description: 'When you\'re not all competing for the same VC money, you can actually work together. The goal is solving the problem, not winning the funding round.'
		}
	];
</script>

<svelte:head>
	<title>Why Chicago - Chicago Builders</title>
	<meta
		name="description"
		content="Chicago isn't just where we meet. It's why we exist. A city that solves real problems, not imaginary ones."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="relative flex min-h-[70vh] flex-col justify-center px-4 pt-20 md:px-6">
	<div class="mx-auto w-full max-w-6xl">
		<div class="mb-8 opacity-0 animate-fade-up">
			<SectionLabel>The Place</SectionLabel>
			<h1
				class="mt-4 font-display text-[clamp(3rem,12vw,8rem)] leading-[0.85] tracking-tight text-white"
			>
				Why
				<br />
				<span class="text-white/60">Chicago</span>
			</h1>
		</div>

		<div class="max-w-3xl opacity-0 animate-fade-up" style="animation-delay: 0.1s;">
			<p class="text-xl leading-relaxed text-white/60 md:text-2xl">
				This isn't arbitrary. Chicago is the point. A city where people solve real problems for real people, not imaginary problems for imaginary users. Where you can afford to work on what matters.
			</p>
		</div>

		<div class="mt-10 flex opacity-0 animate-fade-up items-center gap-4" style="animation-delay: 0.2s;">
			<Button href="https://lu.ma/chicag-builders">
				Join Our Next Event
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7" />
				</svg>
			</Button>
			<Button href="/" variant="secondary">Back to Home</Button>
		</div>
	</div>
</section>

<!-- The Problem Section -->
<section class="border-t border-white/10 py-24 md:py-32">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="mb-16 max-w-3xl">
			<SectionLabel>The Problem</SectionLabel>
			<h2 class="mt-4 font-display text-5xl text-white md:text-6xl">Tech Lost the Plot</h2>
			<p class="mt-6 text-lg leading-relaxed text-white/60">
				Somewhere along the way, tech stopped being about solving problems that matter. The coasts optimized for fundability, not usefulness. For metrics, not meaning.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-3">
			{#each contrasts as item (item.city)}
				<Card>
					<h3 class="font-display text-2xl text-white">{item.city}</h3>
					<p class="mt-4 leading-relaxed text-white/50">{item.problem}</p>
				</Card>
			{/each}
		</div>

		<div class="mt-12 max-w-3xl">
			<p class="text-lg leading-relaxed text-white/60">
				The world has real problems. Healthcare, education, infrastructure, climate, logistics. Problems that affect actual people. But the talent and energy keeps flowing toward apps that solve mild inconveniences for the already-comfortable.
			</p>
		</div>
	</div>
</section>

<!-- Chicago Is Different Section -->
<section class="border-t border-white/10 py-24 md:py-32">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="mb-16">
			<SectionLabel>The Alternative</SectionLabel>
			<h2 class="mt-4 font-display text-5xl text-white md:text-6xl lg:text-7xl">
				Chicago Is
				<br />
				<span class="text-white/60">Different</span>
			</h2>
			<p class="mt-6 max-w-3xl text-lg leading-relaxed text-white/60">
				Not built for fundraising. Built to work. This city has always been about solving problems that need solving, not problems that sound good in a pitch deck.
			</p>
		</div>

		<div class="grid gap-px bg-white/10 sm:grid-cols-2">
			{#each chicagoTraits as item, i (item.title)}
				<div class="bg-black p-8 md:p-10">
					<span class="font-mono text-sm text-white/60">{String(i + 1).padStart(2, '0')}</span>
					<h3 class="mt-4 font-display text-2xl text-white md:text-3xl">{item.title}</h3>
					<p class="mt-4 leading-relaxed text-white/50">{item.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- American City Section -->
<section class="border-t border-white/10 py-24 md:py-32">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="grid gap-12 lg:grid-cols-2 lg:gap-20">
			<div>
				<SectionLabel>The Real Thing</SectionLabel>
				<h2 class="mt-4 font-display text-5xl text-white md:text-6xl">
					An Actually
					<br />
					<span class="text-white/60">American City</span>
				</h2>
			</div>
			<div class="flex flex-col justify-center">
				<p class="text-lg leading-relaxed text-white/60">
					New York is a global city. San Francisco is a company town for venture capital. Chicago is where America's problems actually get solved. Diverse, industrial, practical, connected to reality.
				</p>
				<p class="mt-6 text-lg leading-relaxed text-white/60">
					The city burned down in 1871. All of it. And instead of waiting for help, Chicago rebuilt itself. Invented the skyscraper along the way. Not as some grand statement, but because land was expensive and buildings needed to go up instead of out.
				</p>
				<p class="mt-6 text-lg leading-relaxed text-white/60">
					Same story with everything else. The railroads, the stockyards, the factories. If something needed to move across America, it came through here. You don't become the crossroads of a continent without learning how to actually get things done.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Why It Matters Section -->
<section class="border-t border-white/10 py-24 md:py-32">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="mb-16">
			<SectionLabel>Why It Matters</SectionLabel>
			<h2 class="mt-4 font-display text-5xl text-white md:text-6xl">For Problem Solvers</h2>
			<p class="mt-6 max-w-3xl text-lg leading-relaxed text-white/60">
				The place shapes the people. When you're surrounded by real industry and real needs, you start thinking about real solutions.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-3">
			{#each whyItMatters as item (item.title)}
				<Card>
					<div class="mb-3">
						<StarIcon class="h-6 w-6 text-white/60" />
					</div>
					<h3 class="font-display text-2xl text-white">{item.title}</h3>
					<p class="mt-4 leading-relaxed text-white/50">{item.description}</p>
				</Card>
			{/each}
		</div>
	</div>
</section>

<!-- The Point Section -->
<section class="border-t border-white/10 py-24 md:py-32">
	<div class="mx-auto max-w-4xl px-4 md:px-6">
		<Card class="border-white/20 bg-white/5">
			<div class="flex items-start gap-4">
				<StarIcon class="mt-1 h-6 w-6 shrink-0 text-white/60" />
				<div>
					<h3 class="font-display text-2xl text-white">The Point</h3>
					<p class="mt-4 leading-relaxed text-white/60">
						Chicago Builders exists because Chicago exists. The ethos of this community (no sales pitches, no recruiting, just people solving real problems) isn't something we invented. It's just what this city is like.
					</p>
					<p class="mt-4 leading-relaxed text-white/60">
						You only get one life. Most of us realized at some point that we didn't want to spend it making software for other people who make software. We wanted to contribute something real. To push things forward for actual people. Build something that makes life a little better, not just a little more convenient.
					</p>
					<p class="mt-4 leading-relaxed text-white/60">
						If you're here and you're working on something like that, you already get it. This is your people.
					</p>
				</div>
			</div>
		</Card>
	</div>
</section>

<!-- CTA Section -->
<section class="border-t border-white/10 py-24 md:py-32">
	<div class="mx-auto max-w-4xl px-4 text-center md:px-6">
		<StarIcon class="mx-auto mb-8 h-10 w-10 text-white/30" />
		<h2 class="font-display text-5xl text-white md:text-6xl">Join Us</h2>
		<p class="mx-auto mt-6 max-w-xl text-lg text-white/60">
			If you're solving real problems in Chicago, this is your community.
		</p>
		<div class="mt-10">
			<Button href="https://lu.ma/chicag-builders">
				View Upcoming Events
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
				</svg>
			</Button>
		</div>
	</div>
</section>

<!-- Footer -->
<footer class="border-t border-white/10 py-12">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="flex flex-col items-center justify-between gap-6 md:flex-row">
			<div class="flex items-center gap-3">
				<StarIcon class="h-4 w-4 text-white/60" />
				<span class="font-display text-lg text-white/60">Chicago Builders</span>
			</div>

			<div class="flex items-center gap-6">
				<a
					href="/"
					class="text-sm text-white/60 transition-colors hover:text-white"
				>
					Home
				</a>
				<a
					href="/details"
					class="text-sm text-white/60 transition-colors hover:text-white"
				>
					Details
				</a>
				<a
					href="https://lu.ma/chicag-builders"
					target="_blank"
					rel="noopener noreferrer"
					class="text-sm text-white/60 transition-colors hover:text-white"
				>
					Events
				</a>
				<a
					href="https://www.instagram.com/chicagobuilders/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-white/60 transition-colors hover:text-white"
					aria-label="Instagram"
				>
					<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
						<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
					</svg>
				</a>
				<a
					href="mailto:contact.jorgensen@gmail.com"
					class="text-sm text-white/60 transition-colors hover:text-white"
				>
					Contact
				</a>
			</div>

			<p class="text-sm text-white/60">© {new Date().getFullYear()}</p>
		</div>
	</div>
</footer>
