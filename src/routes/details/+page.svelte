<script lang="ts">
	import { Button, Card, SectionLabel, StarIcon } from '$lib/components';

	const whatHappens = [
		{
			title: 'Show Your Work',
			description:
				'Bring what you\'re building and walk people through it. Could be a prototype, a feature you shipped last week, or an open source project. Show the code, explain your choices.'
		},
		{
			title: 'Work Together',
			description:
				'Sometimes we code together. Debug a problem, pair program on something interesting, or just hack on projects side by side. Bring your laptop.'
		},
		{
			title: 'Technical Conversations',
			description:
				'Talk about the stuff that matters - why you chose that framework, how you\'re handling deployment, what challenges you\'re facing. Real problems, real solutions.'
		},
		{
			title: 'Find Collaborators',
			description:
				'Meet people working on different things. Get feedback on your approach, find someone to build with, or just learn from how others work.'
		}
	];

	const whoItsFor = [
		{
			title: 'Making Something',
			description:
				'You\'re building something - an app, a tool, a product. Maybe it\'s a side project, maybe it\'s your startup. Point is, you\'re actively working on it.'
		},
		{
			title: 'Understands the Tech',
			description:
				'You know what\'s under the hood. You can talk about your architecture, explain your code, show your repository. You\'re not afraid to get technical.'
		},
		{
			title: 'Wants Real Feedback',
			description:
				'You\'re looking for honest technical discussion, not validation. You want to learn from other builders and share what you\'ve figured out.'
		}
	];

	const whoItsNotFor = [
		{
			icon: '❌',
			title: 'Raising Money',
			description:
				'Not a pitch night. If you\'re here to meet investors or get funding, that\'s not what this is about.'
		},
		{
			icon: '❌',
			title: 'Hiring or Job Hunting',
			description:
				'This isn\'t for recruiting or job searching. Don\'t come to fill a role or find one. Keep it about the work, not the job market.'
		},
		{
			icon: '❌',
			title: 'Selling Services',
			description:
				'No agency pitches, no consulting offers. If you\'re trying to get clients or push your services, this isn\'t the place.'
		},
		{
			icon: '❌',
			title: 'Promoting Your Product',
			description:
				'Not here to gain users or push your SaaS. Come to share what you\'re building, not to market it.'
		}
	];
</script>

<svelte:head>
	<title>Details - Chicago Builders</title>
	<meta
		name="description"
		content="Everything you need to know about Chicago Builders meetups - what we do, who should come, and who shouldn't."
	/>
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
				Everything you need to know about Chicago Builders. What happens when we meet, who belongs here, and who doesn't.
			</p>
		</div>

		<div class="mt-10 flex opacity-0 animate-fade-up items-center gap-4" style="animation-delay: 0.2s;">
			<Button href="https://luma.com/chicago-builders">
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
				It's informal and flexible. Sometimes people demo what they're working on, sometimes we code together, sometimes it's just conversations about technical challenges. No rigid structure, just whatever's useful.
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
			<h2 class="mt-4 font-display text-5xl text-white md:text-6xl">People Building Things</h2>
			<p class="mt-6 max-w-3xl text-lg leading-relaxed text-white/60">
				You're working on something real. Doesn't matter if it's a side project you started last month or a company you've been running for years. What matters is you're actually making something, not just thinking about it.
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
				We keep this focused on people making things. That means some folks won't find what they're looking for here, and that's okay. Better to be clear upfront.
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
							If you're making something and want to talk about it with other people who are also making things, you'll probably fit right in. Just show up.
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
		<h2 class="font-display text-5xl text-white md:text-6xl">See You There</h2>
		<p class="mx-auto mt-6 max-w-xl text-lg text-white/60">
			Check out the next meetup and RSVP if it sounds like your kind of thing.
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
