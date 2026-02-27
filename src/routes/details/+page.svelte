<script lang="ts">
	import { Button, Card, SectionLabel, StarIcon } from '$lib/components';

	const whatHappens = [
		{
			title: 'Show Your Work',
			description:
				'Bring whatever you\'re working on. A prototype, something you shipped last week, a side project that\'s been eating your weekends. Pull up the code if you want. People here actually like looking at code.'
		},
		{
			title: 'Work Together',
			description:
				'Sometimes we end up debugging stuff together or pair programming on something interesting. Bring your laptop. Or don\'t—you can just watch and hang out.'
		},
		{
			title: 'Technical Conversations',
			description:
				'We talk about the actual work. Why you picked that stack, what\'s broken, what you\'re stuck on. Nobody\'s going to pitch you their framework hot take.'
		},
		{
			title: 'Find Collaborators',
			description:
				'Good way to meet people working on different stuff. Sometimes you find someone who wants to help. Sometimes you just learn how other people approach problems.'
		}
	];

	const whoItsFor = [
		{
			title: 'Making Something',
			description:
				'You\'re building something. Could be an app, a hardware project, a startup. Could be something weird you can\'t explain yet. The point is you\'re actually doing it.'
		},
		{
			title: 'Understands the Tech',
			description:
				'You know what\'s going on under the hood. You can pull up your repo and explain what you did. You won\'t get lost if the conversation gets technical.'
		},
		{
			title: 'Wants Real Feedback',
			description:
				'You want people to tell you what\'s wrong with your approach, not just nod along. You\'re here to learn, not to get your ego stroked.'
		}
	];

	const whoItsNotFor = [
		{
			icon: '❌',
			title: 'Raising Money',
			description:
				'We\'re not a pitch event. If you\'re looking to meet investors, there are better places for that.'
		},
		{
			icon: '❌',
			title: 'Hiring or Job Hunting',
			description:
				'Please don\'t come looking to fill roles or find a job. We want conversations about the work, not the job market.'
		},
		{
			icon: '❌',
			title: 'Selling Services',
			description:
				'No agency pitches, no consulting offers. If you\'re trying to land clients, you\'ll have a bad time here.'
		},
		{
			icon: '❌',
			title: 'Promoting Your Product',
			description:
				'We\'re not your user acquisition channel. Come to talk about what you\'re building, not to market it.'
		}
	];
</script>

<svelte:head>
	<title>Details - Chicago Builders</title>
	<meta
		name="description"
		content="Everything you need to know about Chicago Builders meetups - what we do, who should come, and who shouldn't."
	/>
	<link rel="canonical" href="https://chicagobuilders.io/details" />
	<meta property="og:title" content="Details - Chicago Builders" />
	<meta property="og:description" content="Everything you need to know about Chicago Builders meetups - what we do, who should come, and who shouldn't." />
	<meta property="og:url" content="https://chicagobuilders.io/details" />
</svelte:head>

<!-- Hero Section -->
<section class="relative flex min-h-[60vh] flex-col justify-center px-4 pt-20 md:px-6">
	<div class="mx-auto w-full max-w-6xl">
		<div class="mb-8 opacity-0 animate-fade-up">
			<h1
				class="font-display text-[clamp(3rem,12vw,8rem)] leading-[0.85] tracking-tight text-white"
			>
				The
				<br />
				<span class="text-white/60">Details</span>
			</h1>
		</div>

		<div class="max-w-2xl opacity-0 animate-fade-up" style="animation-delay: 0.1s;">
			<p class="text-lg leading-relaxed text-white/60 md:text-xl">
				Here's the full picture. What actually happens at these things, who they're for, and who should probably skip them.
			</p>
		</div>

		<div class="mt-10 flex opacity-0 animate-fade-up items-center gap-4" style="animation-delay: 0.2s;">
			<Button href="https://luma.com/chicago-builders">
				View Upcoming Events
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
				</svg>
			</Button>
			<Button href="/" variant="secondary">Back to Home</Button>
		</div>
	</div>
</section>

<!-- What Happens Section -->
<section class="border-t border-white/10 py-16 md:py-24">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="mb-12">
			<SectionLabel>What Happens</SectionLabel>
			<h2 class="mt-4 font-display text-5xl text-white md:text-6xl">At the Meetups</h2>
			<p class="mt-6 max-w-3xl text-lg leading-relaxed text-white/60">
				Honestly it varies. Sometimes people demo their projects, sometimes we end up pair programming, sometimes everyone just sits around talking about whatever problem they're stuck on. There's no script.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2">
			{#each whatHappens as item (item.title)}
				<Card>
					<h3 class="font-display text-2xl text-white">{item.title}</h3>
					<p class="mt-4 leading-relaxed text-white/50">{item.description}</p>
				</Card>
			{/each}
		</div>
	</div>
</section>

<!-- Who It's For Section -->
<section class="border-t border-white/10 py-16 md:py-24">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="mb-12">
			<SectionLabel>Who It's For</SectionLabel>
			<h2 class="mt-4 font-display text-5xl text-white md:text-6xl">People Building Things</h2>
			<p class="mt-6 max-w-3xl text-lg leading-relaxed text-white/60">
				You're working on something. Could be a thing you started last weekend, could be a company. Doesn't really matter how far along you are. What matters is you're actually building it.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-3">
			{#each whoItsFor as item (item.title)}
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

<!-- Who It's NOT For Section -->
<section class="border-t border-white/10 py-16 md:py-24">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="mb-12">
			<SectionLabel>Who It's Not For</SectionLabel>
			<h2 class="mt-4 font-display text-5xl text-white md:text-6xl">Not For Everyone</h2>
			<p class="mt-6 max-w-3xl text-lg leading-relaxed text-white/60">
				We want to keep this focused. That means some people will show up and realize it's not their thing. Better to know ahead of time.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2">
			{#each whoItsNotFor as item (item.title)}
				<Card>
					<div class="mb-3 text-3xl">{item.icon}</div>
					<h3 class="font-display text-2xl text-white">{item.title}</h3>
					<p class="mt-4 leading-relaxed text-white/50">{item.description}</p>
				</Card>
			{/each}
		</div>

		<div class="mt-12">
			<Card class="max-w-3xl border-white/20 bg-white/5">
				<div class="flex items-start gap-4">
					<div class="text-2xl">💡</div>
					<div>
						<h3 class="font-display text-xl text-white">Still Unsure?</h3>
						<p class="mt-3 leading-relaxed text-white/60">
							If you're working on something and want to talk to other people who are too, just come. You'll figure out pretty quickly if it's your kind of thing.
						</p>
					</div>
				</div>
			</Card>
		</div>
	</div>
</section>

<!-- Final CTA -->
<section class="border-t border-white/10 py-16 md:py-24">
	<div class="mx-auto max-w-4xl px-4 text-center md:px-6">
		<StarIcon class="mx-auto mb-8 h-10 w-10 text-white/30" />
		<h2 class="font-display text-5xl text-white md:text-6xl">See You There</h2>
		<p class="mx-auto mt-6 max-w-xl text-lg text-white/60">
			If this sounds like your kind of thing, come to the next one.
		</p>
		<div class="mt-10">
			<Button href="https://luma.com/chicago-builders">
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
					href="/why-chicago"
					class="text-sm text-white/60 transition-colors hover:text-white"
				>
					Why Chicago
				</a>
				<a
					href="https://luma.com/chicago-builders"
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
