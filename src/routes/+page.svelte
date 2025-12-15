<script lang="ts">
	import { Button, Card, SectionLabel, StarIcon } from '$lib/components';

	const philosophy = [
		{
			title: 'Builders First',
			description:
				'A space for those who get their hands dirty—coding, designing, making. The common thread is the act of creation.'
		},
		{
			title: 'Community Over Transactions',
			description:
				'Long-term relationships over short-term sales. Friends, co-founders, and peers—not clients.'
		},
		{
			title: 'Open & Collaborative',
			description:
				'Sharing ideas, offering feedback, breaking silos. The backend engineer should know the industrial designer.'
		},
		{
			title: 'Grassroots & Gritty',
			description:
				'We embrace the garage phase. Casual hangouts and honest conversations over polished panels.'
		}
	];

	const community = [
		{
			title: 'The Creators',
			description:
				'Software engineers, hardware hackers, UI/UX designers, and product builders working on side projects or startups.'
		},
		{
			title: 'The Curious',
			description:
				'People who want to learn how things are made and are looking for inspiration outside of their 9-to-5.'
		},
		{
			title: 'The Connectors',
			description:
				'Anyone looking to find a technical co-founder, a beta tester, or just a friend who gets it.'
		}
	];

	// ASCII art symbols
	const iconSymbols = String.raw`

          .. .-*%#=.    ......                                             
         .:####%*+==..=##*....                 #                          ...-**:....      
         .*####+..    -###. .=*..             ###                            :%##.
    . .:-+######-. ...=####%##+              #####                 ..+##. ..=##:-%#=..    
     .-%####-=%##%: :%######%-.         ################           .+###+. ..%#*.:###%-.
     ...*#%:...=########+.....           ##############          .-####.. ..=##:   .%###:..
   ..    ...   .:%####*..                 ############           *###:.    .##*.    .=###=.
      .. .....########%-....            ###############         .=###*.. .+##-.  ..%###-  
         .-*#######.-####%-.           #################           .+###+.:%##.  .*##%-
     ..:#######%:. ..+####%-.                #####                  .*#%.=##-.. -%#=.
       *%:..###+.     .#####%...              ###                        ###   
        .. ..##%:       .-%###=                #                                              
          .+##-.          .::.                                                                
                                                                                       
`;
</script>

<!-- Hero Section -->
<section class="relative flex min-h-screen flex-col justify-center px-4 pt-20 md:px-6">
	<div class="mx-auto w-full max-w-6xl">
		<!-- Main headline -->
		<div class="mb-8 animate-fade-up">
			<h1
				class="font-display text-[clamp(3.5rem,15vw,12rem)] leading-[0.85] tracking-tight text-white"
			>
				Chicago
				<br />
				Builders
			</h1>
		</div>

		<!-- ASCII Icons -->
		<div class="mb-12 overflow-x-auto overflow-y-hidden" aria-hidden="true">
			<pre class="ascii-art">{iconSymbols}</pre>
		</div>

		<!-- Tagline -->
		<div class="max-w-2xl animate-fade-up" style="animation-delay: 0.1s;">
			<p class="text-lg leading-relaxed text-white/60 md:text-xl">
				A social club for the city's engineers, designers, founders, and tinkers. No business cards,
				no sales pitches—just builders.
			</p>
		</div>

		<!-- CTA -->
		<div class="mt-10 flex animate-fade-up items-center gap-4" style="animation-delay: 0.2s;">
			<Button href="https://lu.ma/chicago-builders">
				Join Our Next Event
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7" />
				</svg>
			</Button>
			<Button href="#about" variant="secondary">Learn More</Button>
		</div>
	</div>

	<!-- Star decoration -->
	<div class="absolute right-6 bottom-12 md:right-12">
		<StarIcon class="h-8 w-8 text-white/20 md:h-12 md:w-12" />
	</div>
</section>

<!-- About Section -->
<section id="about" class="border-t border-white/10 py-24 md:py-32">
	<div class="mx-auto max-w-6xl px-4 md:px-6">
		<div class="grid gap-12 lg:grid-cols-2 lg:gap-20">
			<div>
				<SectionLabel>About</SectionLabel>
				<h2 class="mt-4 font-display text-5xl text-white md:text-6xl lg:text-7xl">
					A Third Place
					<br />
					<span class="text-white/40">For Builders</span>
				</h2>
			</div>
			<div class="flex flex-col justify-center">
				<p class="text-lg leading-relaxed text-white/60">
					In a city full of professional networking events and corporate mixers, we're building
					something different: a genuine community for builders.
				</p>
				<p class="mt-6 text-lg leading-relaxed text-white/60">
					We aren't here to exchange business cards or sell services. We connect with others who
					share the craft of creating, find collaborators for passion projects, and build meaningful
					relationships offline.
				</p>
			</div>
		</div>

		<!-- Mission card -->
		<div class="mt-20">
			<Card class="max-w-3xl">
				<div class="flex items-start gap-4">
					<StarIcon class="mt-1 h-5 w-5 shrink-0 text-white/40" />
					<div>
						<h3 class="font-display text-2xl text-white">Our Mission</h3>
						<p class="mt-3 leading-relaxed text-white/60">
							To cultivate a high-agency community where Chicago's most creative technical minds can
							meet, socialize, and support one another. We believe the best connections happen
							organically when passionate people are in the same room.
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
					<span class="font-mono text-sm text-white/30">{String(i + 1).padStart(2, '0')}</span>
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
			Casual. Authentic.
			<br />
			<span class="text-white/40">No Pressure.</span>
		</h2>
		<p class="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60">
			We host casual gatherings in and around downtown Chicago. No strict agenda, no pressure to
			perform. Come as you are, bring your laptop if you want to show off what you're working on, or
			just grab a drink and meet other builders.
		</p>
	</div>
</section>

<!-- CTA Section -->
<section class="border-t border-white/10 py-24 md:py-32">
	<div class="mx-auto max-w-4xl px-4 text-center md:px-6">
		<StarIcon class="mx-auto mb-8 h-10 w-10 text-white/20" />
		<h2 class="font-display text-5xl text-white md:text-6xl">Ready to Build?</h2>
		<p class="mx-auto mt-6 max-w-xl text-lg text-white/60">
			Join our next gathering and connect with Chicago's builders.
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
				<StarIcon class="h-4 w-4 text-white/40" />
				<span class="font-display text-lg text-white/60">Chicago Builders</span>
			</div>

			<div class="flex items-center gap-6">
				<a
					href="https://lu.ma/chicago-builders"
					target="_blank"
					rel="noopener noreferrer"
					class="text-sm text-white/40 transition-colors hover:text-white"
				>
					Events
				</a>
				<a
					href="mailto:hello@chicagobuilders.club"
					class="text-sm text-white/40 transition-colors hover:text-white"
				>
					Contact
				</a>
			</div>

			<p class="text-sm text-white/30">© {new Date().getFullYear()}</p>
		</div>
	</div>
</footer>
