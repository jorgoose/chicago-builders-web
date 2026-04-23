<svelte:head>
	<link rel="canonical" href="https://chicagobuilders.io" />
	<meta property="og:title" content="Chicago Builders" />
	<meta property="og:description" content="A social club for people building things in Chicago." />
	<meta property="og:url" content="https://chicagobuilders.io" />
</svelte:head>

<script lang="ts">
	import { Button, Card, EventsButton, SectionLabel, StarIcon } from '$lib/components';

	const philosophy = [
		{
			title: 'Builders First',
			description:
				'You make things. Code, hardware, designs, products, whatever. That\'s the only thing we all have in common, and it\'s enough.'
		},
		{
			title: 'Community Over Transactions',
			description:
				'We actually want to know what you\'re working on. Nobody\'s here collecting business cards or fishing for intros.'
		},
		{
			title: 'Open & Collaborative',
			description:
				'The best conversations happen when a backend engineer ends up talking to an industrial designer. We like those collisions.'
		},
		{
			title: 'Casual & Real',
			description:
				'Show up, grab a drink, talk about what you\'re building. That\'s the whole format.'
		}
	];

	const community = [
		{
			title: 'Working on Something',
			description:
				'You\'ve got a side project, a startup, or an open source thing you can\'t stop thinking about. You want to show someone.'
		},
		{
			title: 'Want to Start Something',
			description:
				'You haven\'t built anything yet but you want to. Being around people who are doing it helps.'
		},
		{
			title: 'Looking for Collaborators',
			description:
				'You need a co-founder, a design eye, or just someone to tell you if your idea is dumb. Hard to find those people at regular networking events.'
		}
	];

	// ASCII art symbols
	const iconSymbols = String.raw`

        ######     ###                                              
      ##########  ###                                        
    ######        ###   ##                       ###  
###########       ########              ###      ###  ###       
######  #####   ########              #####     ###   #####  
  ###     ##########                 ####      ###      #####   
            ######                 ####        ###         #### 
         #### ######                #####     ###        #####  
    ########    ######                #####   ###     ##### 
  ########       ######                 ###  ###      ### 
  #    ###        ######                     ###   
      ###           ###                                                                                      
                                                                                       
`;
</script>

<!-- Hero Section -->
<section class="relative flex min-h-screen flex-col justify-center px-4 pt-20 md:px-6">
	<div class="mx-auto w-full max-w-6xl">
		<!-- Main headline -->
		<div class="mb-4 animate-fade-up">
			<h1
				class="font-display text-[clamp(3.5rem,15vw,12rem)] leading-[0.85] tracking-tight text-white"
			>
				Chicago
				<br />
				Builders
			</h1>
		</div>

		<!-- ASCII Icons -->
		<div class="mb-12 overflow-hidden" aria-hidden="true">
			<pre class="ascii-art w-full text-[clamp(0.3rem,8vw,1.25rem)]">{iconSymbols}</pre>
		</div>

		<!-- Tagline -->
		<div class="max-w-2xl animate-fade-up" style="animation-delay: 0.1s;">
			<p class="text-lg leading-relaxed text-white/60 md:text-xl">
				A social club for people building things in Chicago.
			</p>
		</div>

		<!-- CTA -->
		<div class="mt-8 flex animate-fade-up items-center gap-4" style="animation-delay: 0.2s;">
			<EventsButton />
			<Button href="#about" variant="secondary">Learn More</Button>
		</div>
	</div>
</section>

<!-- About Section -->
<section id="about" class="border-t border-white/10 py-16 md:py-24">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="grid gap-12 lg:grid-cols-2 lg:gap-20">
			<div>
				<SectionLabel>About</SectionLabel>
				<h2 class="mt-4 font-display text-5xl text-white md:text-6xl lg:text-7xl">
					A Place to Meet
					<br />
					<span class="text-white/60">Other Makers</span>
				</h2>
			</div>
			<div class="flex flex-col justify-center">
				<p class="text-lg leading-relaxed text-white/60">
					Most tech events in Chicago are networking events. You know the vibe.
				</p>
				<p class="mt-6 text-lg leading-relaxed text-white/60">
					We wanted something different. A place where people actually talk about what they're making.
				</p>
			</div>
		</div>

		<!-- Mission card -->
		<div class="mt-20">
			<Card class="max-w-3xl">
				<div class="flex items-start gap-4">
					<StarIcon class="mt-1 h-5 w-5 shrink-0 text-white/60" />
					<div>
						<h3 class="font-display text-2xl text-white">What We're About</h3>
						<p class="mt-3 leading-relaxed text-white/60">
							A regular place for builders in Chicago to meet up. That's the whole idea.
						</p>
					</div>
				</div>
			</Card>
		</div>
	</div>
</section>

<!-- Philosophy Section -->
<section id="philosophy" class="border-t border-white/10 py-16 md:py-24">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="mb-12">
			<SectionLabel>Philosophy</SectionLabel>
			<h2 class="mt-4 font-display text-5xl text-white md:text-6xl">What We Believe</h2>
		</div>

		<div class="grid gap-px bg-white/10 sm:grid-cols-2">
			{#each philosophy as item, i (item.title)}
				<div class="bg-black p-8 md:p-10">
					<span class="font-mono text-sm text-white/60">{String(i + 1).padStart(2, '0')}</span>
					<h3 class="mt-4 font-display text-2xl text-white md:text-3xl">{item.title}</h3>
					<p class="mt-4 leading-relaxed text-white/50">{item.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Community Section -->
<section id="community" class="border-t border-white/10 py-16 md:py-24">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="mb-12">
			<SectionLabel>Community</SectionLabel>
			<h2 class="mt-4 font-display text-5xl text-white md:text-6xl">Who Is This For</h2>
		</div>

		<div class="grid gap-6 md:grid-cols-3">
			{#each community as item (item.title)}
				<Card>
					<h3 class="font-display text-2xl text-white">{item.title}</h3>
					<p class="mt-4 leading-relaxed text-white/50">{item.description}</p>
				</Card>
			{/each}
		</div>
	</div>
</section>

<!-- Expect Section -->
<section class="border-t border-white/10 py-16 md:py-24">
	<div class="mx-auto max-w-4xl px-4 text-center md:px-6">
		<SectionLabel>What to Expect</SectionLabel>
		<h2 class="mt-4 font-display text-5xl text-white md:text-6xl lg:text-7xl">
			Just Hang Out
			<br />
			<span class="text-white/60">And Share Ideas</span>
		</h2>
		<p class="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60">
			We meet every few weeks around downtown. Bring a laptop if you want to demo something, or just show up. No agenda.
		</p>
	</div>
</section>

<!-- CTA Section -->
<section class="border-t border-white/10 py-16 md:py-24">
	<div class="mx-auto max-w-4xl px-4 text-center md:px-6">
		<StarIcon class="mx-auto mb-8 h-10 w-10 text-white/30" />
		<h2 class="font-display text-5xl text-white md:text-6xl">Come to the Next One</h2>
		<p class="mx-auto mt-6 max-w-xl text-lg text-white/60">
			See when we're meeting up next.
		</p>
		<div class="mt-10">
			<EventsButton />
		</div>
	</div>
</section>

