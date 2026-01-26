<script lang="ts">
	import { Button, Card, SectionLabel, StarIcon } from '$lib/components';

	const philosophy = [
		{
			title: 'Builders First',
			description:
				'You make things. Code, hardware, designs, products—whatever. That\'s the only thing we all have in common, and it\'s enough.'
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
				A social club for Chicago's engineers, designers, and founders. We hang out, show each other what we're building, and occasionally help each other figure stuff out.
			</p>
		</div>

		<!-- CTA -->
		<div class="mt-10 flex animate-fade-up items-center gap-4" style="animation-delay: 0.2s;">
			<Button href="https://luma.com/chicago-builders">
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
					Most tech events in Chicago are networking events. You know the vibe—everyone scanning the room for useful contacts.
				</p>
				<p class="mt-6 text-lg leading-relaxed text-white/60">
					We wanted something different. A place where people actually talk about what they're making. Side projects, startups, weird experiments. You show up, you meet people, sometimes you end up collaborating on something. It's pretty simple.
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
							We give builders in Chicago a regular place to meet up. That's really the whole idea. No grand mission statement.
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
			We meet every few weeks around downtown. Bring your laptop if you want to demo something, or just show up and see what everyone else is working on. There's no agenda. Honestly we're mostly just hanging out.
		</p>
	</div>
</section>

<!-- CTA Section -->
<section class="border-t border-white/10 py-24 md:py-32">
	<div class="mx-auto max-w-4xl px-4 text-center md:px-6">
		<StarIcon class="mx-auto mb-8 h-10 w-10 text-white/30" />
		<h2 class="font-display text-5xl text-white md:text-6xl">Come to the Next One</h2>
		<p class="mx-auto mt-6 max-w-xl text-lg text-white/60">
			See when we're meeting up next.
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
