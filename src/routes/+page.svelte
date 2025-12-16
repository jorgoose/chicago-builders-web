<script lang="ts">
	import { Button, Card, SectionLabel, StarIcon } from '$lib/components';

	const philosophy = [
		{
			title: 'Builders First',
			description:
				'For people who make things - code, designs, products. Doing is the common thread.'
		},
		{
			title: 'Community Over Transactions',
			description:
				'Build real relationships with other makers. This isn\'t a lead-gen event.'
		},
		{
			title: 'Open & Collaborative',
			description:
				'Share ideas, get feedback, meet people outside your usual circles. The backend engineer should meet the industrial designer.'
		},
		{
			title: 'Casual & Real',
			description:
				'No polished panels or pitch decks. Just honest conversations about what you\'re building.'
		}
	];

	const community = [
		{
			title: 'Working on Something',
			description:
				'Software engineers, designers, and product people building side projects, startups, or open source.'
		},
		{
			title: 'Want to Start Something',
			description:
				'People looking to get into making things and want to meet others doing it.'
		},
		{
			title: 'Looking for Collaborators',
			description:
				'Need a co-founder, technical help, design feedback, or just another set of eyes on what you\'re building.'
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
				A social club for Chicago's engineers, designers, and founders. No sales pitches, no recruiting - just people making things.
			</p>
		</div>

		<!-- CTA -->
		<div class="mt-10 flex animate-fade-up items-center gap-4" style="animation-delay: 0.2s;">
			<Button href="https://lu.ma/chicag-builders">
				Join Our Next Event
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7" />
				</svg>
			</Button>
			<Button href="#about" variant="secondary">Learn More</Button>
		</div>
	</div>
</section>

<!-- About Section -->
<section id="about" class="border-t border-white/10 py-24 md:py-32">
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
					Chicago has plenty of networking events. This isn't one of them.
				</p>
				<p class="mt-6 text-lg leading-relaxed text-white/60">
					We host casual gatherings for people building things - startups, side projects, open source, whatever. Come meet other makers, talk about what you're working on, and maybe find someone to collaborate with.
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
							Give people in Chicago who are building things a regular place to meet, hang out, and share ideas. That's it.
						</p>
					</div>
				</div>
			</Card>
		</div>
	</div>
</section>

<!-- Philosophy Section -->
<section id="philosophy" class="border-t border-white/10 py-24 md:py-32">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="mb-16">
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
<section id="community" class="border-t border-white/10 py-24 md:py-32">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="mb-16">
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
<section class="border-t border-white/10 py-24 md:py-32">
	<div class="mx-auto max-w-4xl px-4 text-center md:px-6">
		<SectionLabel>What to Expect</SectionLabel>
		<h2 class="mt-4 font-display text-5xl text-white md:text-6xl lg:text-7xl">
			Just Hang Out
			<br />
			<span class="text-white/60">And Share Ideas</span>
		</h2>
		<p class="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60">
			We meet regularly around downtown Chicago. No agenda. Bring your laptop if you want to show what you're working on, or just come grab a drink and meet people.
		</p>
	</div>
</section>

<!-- CTA Section -->
<section class="border-t border-white/10 py-24 md:py-32">
	<div class="mx-auto max-w-4xl px-4 text-center md:px-6">
		<StarIcon class="mx-auto mb-8 h-10 w-10 text-white/30" />
		<h2 class="font-display text-5xl text-white md:text-6xl">Come to the Next One</h2>
		<p class="mx-auto mt-6 max-w-xl text-lg text-white/60">
			Check out upcoming gatherings and RSVP.
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
