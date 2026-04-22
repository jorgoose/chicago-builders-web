<script lang="ts">
	import { Button, Card, EventsButton, SectionLabel, StarIcon } from '$lib/components';

	const whatHappens = [
		{
			title: 'Show Your Work',
			description:
				'Bring whatever you\'re working on. A prototype, something you shipped last week, a side project that\'s been eating your weekends. Pull up the code if you want. People here actually like looking at code.'
		},
		{
			title: 'Work Together',
			description:
				'Sometimes people end up working on something together or helping each other get unstuck. Bring whatever you\'re working on. Or don\'t. You can just watch and hang out.'
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
			title: 'Knows Their Craft',
			description:
				'You can go deep on what you\'re building. The tradeoffs you made, the problems you hit, the parts you\'re still figuring out. Not just the pitch version.'
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
			<EventsButton />
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
			<EventsButton />
		</div>
	</div>
</section>

