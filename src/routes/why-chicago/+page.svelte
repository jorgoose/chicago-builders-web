<script lang="ts">
	import { Button, Card, CityComparison, EventsButton, SectionLabel, StarIcon } from '$lib/components';

	const contrasts = [
		{
			city: 'San Francisco',
			problem: 'Everyone\'s building for other people in tech. The problems being "solved" only exist inside a very specific bubble. You start to lose track of what normal people actually need.',
		},
		{
			city: 'New York',
			problem: 'Everything runs through finance and media. Success means exits and press coverage. At some point the story about the work becomes more important than the work.',
		},
		{
			city: 'Austin / Miami',
			problem: 'Tax arbitrage dressed up as a scene. People moved there to run the same playbook somewhere cheaper. The main problem being solved is "how do I get funded."',
		}
	];

	const chicagoTraits = [
		{
			title: 'Born from Necessity',
			description: 'The city burned down in 1871. We rebuilt it and invented the skyscraper while we were at it. That\'s kind of how things work here. Problems show up, people fix them.'
		},
		{
			title: 'Where Things Actually Work',
			description: 'Still the #1 or #2 manufacturing metro in the US. Still the nation\'s freight hub. This is where stuff actually has to function. Nobody here is impressed by a demo that only works on stage.'
		},
		{
			title: 'Substance Over Story',
			description: 'Midwest directness. People don\'t spend a lot of time telling you how important they are. They just show you what they built.'
		},
		{
			title: 'Freedom to Solve Real Problems',
			description: 'You can actually afford to live here and work on what you want. You don\'t need VC money just to pay rent. That changes what you end up building.'
		}
	];

	const whyItMatters = [
		{
			title: 'Closer to Real Problems',
			description: 'When you\'re not surrounded by "tech people" all day, you stay connected to what normal people actually need. It\'s harder to disappear up your own ass.'
		},
		{
			title: 'All Kinds of People',
			description: 'Finance people, manufacturing engineers, healthcare folks, logistics operators, software people. They\'re all here in roughly equal numbers, and they actually talk to each other. That\'s how interesting stuff gets built.'
		},
		{
			title: 'People Actually Help Each Other',
			description: 'Nobody\'s competing for the same VC money, so people share what they know. The vibe is collaborative in a way that\'s hard to find on the coasts.'
		}
	];
</script>

<svelte:head>
	<title>Why Chicago - Chicago Builders</title>
	<meta
		name="description"
		content="Chicago isn't just where we meet. It's why we exist. A city that solves real problems, not imaginary ones."
	/>
	<link rel="canonical" href="https://chicagobuilders.io/why-chicago" />
	<meta property="og:title" content="Why Chicago - Chicago Builders" />
	<meta property="og:description" content="Chicago isn't just where we meet. It's why we exist. A city that solves real problems, not imaginary ones." />
	<meta property="og:url" content="https://chicagobuilders.io/why-chicago" />
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
				We didn't pick Chicago because it was convenient. We picked it because something about this city makes you want to build things that actually matter. Also you can afford rent.
			</p>
		</div>

		<div class="mt-10 flex opacity-0 animate-fade-up items-center gap-4" style="animation-delay: 0.2s;">
			<EventsButton />
			<Button href="/" variant="secondary">Back to Home</Button>
		</div>
	</div>
</section>

<!-- The Problem Section -->
<section class="border-t border-white/10 py-16 md:py-24">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="mb-12 max-w-3xl">
			<SectionLabel>The Problem</SectionLabel>
			<h2 class="mt-4 font-display text-5xl text-white md:text-6xl">Tech Lost the Plot</h2>
			<p class="mt-6 text-lg leading-relaxed text-white/60">
				At some point, tech stopped being about solving problems that matter. The coasts optimized for fundability instead of usefulness. Metrics instead of meaning. Everyone knows this but nobody seems to leave.
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
				Meanwhile, the world has actual problems. Healthcare, education, housing, transportation, food, energy, childcare, infrastructure. Problems that affect real people. But most of the talent keeps flowing toward apps that solve mild inconveniences for people who already have everything.
			</p>
		</div>
	</div>
</section>

<!-- Chicago Is Different Section -->
<section class="border-t border-white/10 py-16 md:py-24">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="mb-12">
			<SectionLabel>The Alternative</SectionLabel>
			<h2 class="mt-4 font-display text-5xl text-white md:text-6xl lg:text-7xl">
				Chicago Is
				<br />
				<span class="text-white/60">Different</span>
			</h2>
			<p class="mt-6 max-w-3xl text-lg leading-relaxed text-white/60">
				Chicago wasn't built for fundraising. It was built to work. The culture here has always been about solving problems that need solving, not problems that sound good in a pitch deck.
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

<!-- Economic Diversity Section -->
<section class="border-t border-white/10 py-16 md:py-24">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="mb-12 max-w-3xl">
			<SectionLabel>The Numbers</SectionLabel>
			<h2 class="mt-4 font-display text-5xl text-white md:text-6xl">
				Actually
				<br />
				<span class="text-white/60">Builds Things</span>
			</h2>
			<p class="mt-6 text-lg leading-relaxed text-white/60">
				New York's economy is 24% finance and insurance. One sector, a quarter of everything. San Francisco's top three sectors are all white-collar services. Chicago? No single industry tops 17%, and manufacturing is still 12% of the economy.
			</p>
		</div>

		<CityComparison />

		<div class="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
			<div class="flex flex-col justify-center">
				<p class="text-lg leading-relaxed text-white/60">
					When tech crashes in SF, the whole city feels it. When Wall Street sneezes, New York catches a cold. Chicago doesn't have that problem. Manufacturing, finance, healthcare, logistics. They balance each other out.
				</p>
			</div>
			<div class="flex flex-col justify-center">
				<p class="text-lg leading-relaxed text-white/60">
					That diversity isn't an accident. This is where all six Class I railroads meet. Where food gets processed and shipped. Where derivatives get traded. When you're the crossroads of a continent, you don't get to specialize in just one thing.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Why It Matters Section -->
<section class="border-t border-white/10 py-16 md:py-24">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="mb-12">
			<SectionLabel>Why It Matters</SectionLabel>
			<h2 class="mt-4 font-display text-5xl text-white md:text-6xl">For Problem Solvers</h2>
			<p class="mt-6 max-w-3xl text-lg leading-relaxed text-white/60">
				Where you are changes what you build. When you're surrounded by real industry and real needs, you start thinking about real solutions. Funny how that works.
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
<section class="border-t border-white/10 py-16 md:py-24">
	<div class="mx-auto max-w-4xl px-4 md:px-6">
		<Card class="border-white/20 bg-white/5">
			<div class="flex items-start gap-4">
				<StarIcon class="mt-1 h-6 w-6 shrink-0 text-white/60" />
				<div>
					<h3 class="font-display text-2xl text-white">The Point</h3>
					<p class="mt-4 leading-relaxed text-white/60">
						Chicago Builders exists because Chicago does. The vibe of this community isn't something we invented. No sales pitches, no recruiting, just people working on stuff. It's just how Chicago is.
					</p>
					<p class="mt-4 leading-relaxed text-white/60">
						You get one life. A lot of us realized we didn't want to spend it making software for other people who make software. We wanted to build something that matters to someone outside the tech bubble. Something that makes life a little better, not just a little more optimized.
					</p>
					<p class="mt-4 leading-relaxed text-white/60">
						If you're working on something like that, you're in the right place. These are your people.
					</p>
				</div>
			</div>
		</Card>
	</div>
</section>

<!-- CTA Section -->
<section class="border-t border-white/10 py-16 md:py-24">
	<div class="mx-auto max-w-4xl px-4 text-center md:px-6">
		<StarIcon class="mx-auto mb-8 h-10 w-10 text-white/30" />
		<h2 class="font-display text-5xl text-white md:text-6xl">Join Us</h2>
		<p class="mx-auto mt-6 max-w-xl text-lg text-white/60">
			If you're building something real in Chicago, come hang out.
		</p>
		<div class="mt-10">
			<EventsButton />
		</div>
	</div>
</section>

