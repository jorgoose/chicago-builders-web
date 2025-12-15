<script lang="ts">
	import { Button, Card, SectionLabel, StarIcon } from '$lib/components';

	const whatHappens = [
		{
			title: 'Demo Nights',
			description:
				'Members present what they\'re building. 5-10 minute demos showing real code, real products, real progress. Pop the hood and share your stack.'
		},
		{
			title: 'Code-Along Sessions',
			description:
				'Live coding, pair programming, debugging together. Bring your laptop and work alongside other builders.'
		},
		{
			title: 'Share Ideas',
			description:
				'Informal conversations about architecture decisions, tech stacks, what\'s working, what\'s not. No formal agenda, just real talk between makers.'
		},
		{
			title: 'Collaboration',
			description:
				'Find co-founders, get technical feedback, meet people outside your usual circles. The full-stack dev meets the hardware engineer.'
		}
	];

	const whoItsFor = [
		{
			title: 'Active Builders',
			description:
				'You\'re shipping code, designing products, or building something tangible. Side projects, startups, open source - doesn\'t matter. What matters is you\'re doing it.'
		},
		{
			title: 'Can Pop the Hood',
			description:
				'You can explain your tech stack, show your GitHub repo, or walk through your architecture. You don\'t just use tools - you understand how they work.'
		},
		{
			title: 'Want to Share & Learn',
			description:
				'You\'re excited to show your work and curious about others\' processes. You see value in code deep-dives and technical discussions.'
		}
	];

	const whoItsNotFor = [
		{
			icon: '❌',
			title: 'Investors Sourcing Deals',
			description:
				'This isn\'t a pitch event or demo day for fundraising. If you\'re primarily looking to source investment opportunities, this isn\'t the place.'
		},
		{
			icon: '❌',
			title: 'Recruiters & Job Seekers',
			description:
				'No recruiting pitches, no job boards, no "we\'re hiring" spiels. If you\'re here to find employees or employment, please look elsewhere.'
		},
		{
			icon: '❌',
			title: 'Marketers & Consultants',
			description:
				'This isn\'t a lead-gen event. If you\'re looking to pitch services, find clients, or build a prospect list, this community isn\'t for you.'
		},
		{
			icon: '❌',
			title: 'Product Promoters',
			description:
				'Not a place to shill your SaaS, plugin, or platform. If your main goal is promoting your product or getting users, this isn\'t the venue.'
		}
	];
</script>

<svelte:head>
	<title>Details - Chicago Builders</title>
	<meta
		name="description"
		content="What happens at Chicago Builders meetups, who it's for, and who it's not for. A builder-first community for makers shipping real work."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="relative flex min-h-[60vh] flex-col justify-center px-4 pt-20 md:px-6">
	<div class="mx-auto w-full max-w-6xl">
		<div class="mb-8 animate-fade-up">
			<h1
				class="font-display text-[clamp(3rem,12vw,8rem)] leading-[0.85] tracking-tight text-white"
			>
				The
				<br />
				<span class="text-white/60">Details</span>
			</h1>
		</div>

		<div class="max-w-2xl animate-fade-up" style="animation-delay: 0.1s;">
			<p class="text-lg leading-relaxed text-white/60 md:text-xl">
				What happens at our meetups, who this community is for, and who it's not for. We're
				builder-first: demos, code deep-dives, no fluff.
			</p>
		</div>

		<div class="mt-10 flex animate-fade-up items-center gap-4" style="animation-delay: 0.2s;">
			<Button href="https://lu.ma/chicago-builders">
				Join Our Next Event
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7" />
				</svg>
			</Button>
			<Button href="/" variant="secondary">Back to Home</Button>
		</div>
	</div>
</section>

<!-- What Happens Section -->
<section class="border-t border-white/10 py-24 md:py-32">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="mb-16">
			<SectionLabel>What Happens</SectionLabel>
			<h2 class="mt-4 font-display text-5xl text-white md:text-6xl">At the Meetups</h2>
			<p class="mt-6 max-w-3xl text-lg leading-relaxed text-white/60">
				Think Homebrew Computer Club: show what you're building, share your process, get feedback
				from other makers. No formal presentations, no pitch decks - just builders sharing ideas.
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
<section class="border-t border-white/10 py-24 md:py-32">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="mb-16">
			<SectionLabel>Who It's For</SectionLabel>
			<h2 class="mt-4 font-display text-5xl text-white md:text-6xl">Active Builders</h2>
			<p class="mt-6 max-w-3xl text-lg leading-relaxed text-white/60">
				Whether you're a CS grad who's now CTO of a startup, or part of the new generation shipping
				impressive work through low-code tools and AI pipelines - you must be able to pop the hood
				and share your stack, workflow, or setup to help others iterate and ship.
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
<section class="border-t border-white/10 py-24 md:py-32">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="mb-16">
			<SectionLabel>Who It's Not For</SectionLabel>
			<h2 class="mt-4 font-display text-5xl text-white md:text-6xl">Not For Everyone</h2>
			<p class="mt-6 max-w-3xl text-lg leading-relaxed text-white/60">
				We're explicit about this because it matters. This is a curated community for people
				actively building things. If you're in one of these categories, this isn't the right fit.
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
						<h3 class="font-display text-xl text-white">Not Sure If You Fit?</h3>
						<p class="mt-3 leading-relaxed text-white/60">
							If you're working on something - even if it's early or imperfect - you probably belong
							here. The key question: can you show us what you're building and explain how it works?
							If yes, come through.
						</p>
					</div>
				</div>
			</Card>
		</div>
	</div>
</section>

<!-- Final CTA -->
<section class="border-t border-white/10 py-24 md:py-32">
	<div class="mx-auto max-w-4xl px-4 text-center md:px-6">
		<StarIcon class="mx-auto mb-8 h-10 w-10 text-white/30" />
		<h2 class="font-display text-5xl text-white md:text-6xl">Ready to Join?</h2>
		<p class="mx-auto mt-6 max-w-xl text-lg text-white/60">
			If you're actively building something and want to meet other makers in Chicago, come to the
			next meetup.
		</p>
		<div class="mt-10">
			<Button href="https://lu.ma/chicago-builders">
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
					href="https://lu.ma/chicago-builders"
					target="_blank"
					rel="noopener noreferrer"
					class="text-sm text-white/60 transition-colors hover:text-white"
				>
					Events
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
