<script lang="ts">
	// 2023 BEA Data - GDP by Industry (chained 2017 dollars)
	// State-level data used as proxies: CA for SF, NY for NYC, IL for Chicago

	// California (proxy for San Francisco / Bay Area) - $3,221B state GDP
	const sfSectors = [
		{ name: 'Prof. Svcs', share: 16.2 },
		{ name: 'Information', share: 14.0 },
		{ name: 'Real Estate', share: 13.9 },
		{ name: 'Trade/Trans', share: 12.9 },
		{ name: 'Manuf.', share: 10.9 },
		{ name: 'Government', share: 10.6 },
		{ name: 'Health/Ed', share: 7.9 },
		{ name: 'Arts/Hosp', share: 4.1 },
		{ name: 'Finance', share: 4.0 },
	];
	const sfOther = { name: 'Other', share: Math.round((100 - sfSectors.reduce((s, x) => s + x.share, 0)) * 10) / 10 };
	const sf = [...sfSectors, sfOther];

	// New York (proxy for New York City) - $1,775B state GDP
	const nySectors = [
		{ name: 'Finance', share: 24.4 },
		{ name: 'Prof. Svcs', share: 14.7 },
		{ name: 'Information', share: 11.1 },
		{ name: 'Trade/Trans', share: 10.2 },
		{ name: 'Government', share: 9.9 },
		{ name: 'Health/Ed', share: 9.8 },
		{ name: 'Real Estate', share: 8.1 },
		{ name: 'Arts/Hosp', share: 4.1 },
		{ name: 'Manuf.', share: 3.9 },
	];
	const nyOther = { name: 'Other', share: Math.round((100 - nySectors.reduce((s, x) => s + x.share, 0)) * 10) / 10 };
	const ny = [...nySectors, nyOther];

	// Illinois (proxy for Chicago) - $873B state GDP
	const chiSectors = [
		{ name: 'Trade/Trans', share: 16.9 },
		{ name: 'Prof. Svcs', share: 16.0 },
		{ name: 'Real Estate', share: 13.4 },
		{ name: 'Manuf.', share: 12.3 },
		{ name: 'Government', share: 9.3 },
		{ name: 'Health/Ed', share: 9.2 },
		{ name: 'Finance', share: 7.9 },
		{ name: 'Information', share: 5.1 },
		{ name: 'Arts/Hosp', share: 4.0 },
	];
	const chiOther = { name: 'Other', share: Math.round((100 - chiSectors.reduce((s, x) => s + x.share, 0)) * 10) / 10 };
	const chi = [...chiSectors, chiOther];
</script>

<div class="comparison-container">
	<!-- San Francisco -->
	<div class="city-card">
		<div class="city-header">
			<h4>San Francisco</h4>
			<span class="city-stat">Top 3: 44%</span>
		</div>
		<div class="treemap sf-grid">
			{#each sf as sector, i}
				<div class="cell sf-{i + 1}">
					<span class="pct">{sector.share}%</span>
					<span class="lbl">{sector.name}</span>
				</div>
			{/each}
		</div>
		<p class="city-note">Services & tech concentrated</p>
	</div>

	<!-- New York -->
	<div class="city-card">
		<div class="city-header">
			<h4>New York</h4>
			<span class="city-stat">Top 3: 50%</span>
		</div>
		<div class="treemap ny-grid">
			{#each ny as sector, i}
				<div class="cell ny-{i + 1}">
					<span class="pct">{sector.share}%</span>
					<span class="lbl">{sector.name}</span>
				</div>
			{/each}
		</div>
		<p class="city-note">Finance-dominated</p>
	</div>

	<!-- Chicago -->
	<div class="city-card chicago">
		<div class="city-header">
			<h4>Chicago</h4>
			<span class="city-stat highlight">Top 3: 46%</span>
		</div>
		<div class="treemap chi-grid">
			{#each chi as sector, i}
				<div class="cell chi-{i + 1}">
					<span class="pct">{sector.share}%</span>
					<span class="lbl">{sector.name}</span>
				</div>
			{/each}
		</div>
		<p class="city-note">Broadly diversified</p>
	</div>
</div>

<p class="comparison-caption">
	2023 BEA data · State-level GDP by industry (chained 2017 $)
</p>

<style>
	.comparison-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		width: 100%;
		max-width: 1100px;
		margin: 0 auto;
	}

	@media (max-width: 768px) {
		.comparison-container {
			grid-template-columns: 1fr;
			max-width: 320px;
		}
	}

	.city-card {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.city-card.chicago {
		border: 1px solid rgba(255,255,255,0.2);
		padding: 0.75rem;
		margin: -0.75rem;
		background: rgba(255,255,255,0.02);
	}

	.city-header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}

	.city-header h4 {
		font-size: 1.1rem;
		font-weight: 600;
		color: white;
		margin: 0;
	}

	.city-stat {
		font-family: ui-monospace, monospace;
		font-size: 0.85rem;
		color: rgba(255,255,255,0.5);
	}

	.city-stat.highlight {
		color: rgba(255,255,255,0.9);
		font-weight: 600;
	}

	.city-note {
		font-size: 0.8rem;
		color: rgba(255,255,255,0.4);
		margin: 0;
		text-align: center;
	}

	.comparison-caption {
		text-align: center;
		font-size: 0.8rem;
		color: rgba(255,255,255,0.3);
		margin-top: 1.5rem;
	}

	.treemap {
		display: grid;
		gap: 2px;
		aspect-ratio: 1.1;
		min-height: 280px;
		background: rgba(255,255,255,0.05);
	}

	.cell {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2px;
		text-align: center;
		overflow: hidden;
	}

	.pct {
		font-family: ui-monospace, monospace;
		font-size: 0.75rem;
		font-weight: 600;
		line-height: 1;
	}

	.lbl {
		font-size: 0.55rem;
		opacity: 0.8;
		line-height: 1;
		margin-top: 2px;
	}

	/* San Francisco Grid - 10 sectors, evenly distributed */
	.sf-grid {
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(6, 1fr);
	}
	.sf-1  { grid-area: 1 / 1 / 3 / 3; background: rgba(255,255,255,0.82); color: #000; } /* Prof 16.2 */
	.sf-2  { grid-area: 1 / 3 / 3 / 5; background: rgba(255,255,255,0.74); color: #000; } /* Info 14.0 */
	.sf-3  { grid-area: 1 / 5 / 3 / 7; background: rgba(255,255,255,0.72); color: #000; } /* RE 13.9 */
	.sf-4  { grid-area: 3 / 1 / 5 / 3; background: rgba(255,255,255,0.62); color: #000; } /* Trade 12.9 */
	.sf-5  { grid-area: 3 / 3 / 5 / 5; background: rgba(255,255,255,0.52); color: #000; } /* Manuf 10.9 */
	.sf-6  { grid-area: 3 / 5 / 5 / 7; background: rgba(255,255,255,0.50); color: #000; } /* Govt 10.6 */
	.sf-7  { grid-area: 5 / 1 / 7 / 3; background: rgba(255,255,255,0.38); color: #fff; } /* Health 7.9 */
	.sf-8  { grid-area: 5 / 3 / 7 / 4; background: rgba(255,255,255,0.22); color: #fff; } /* Arts 4.1 */
	.sf-9  { grid-area: 5 / 4 / 7 / 5; background: rgba(255,255,255,0.20); color: #fff; } /* Finance 4.0 */
	.sf-10 { grid-area: 5 / 5 / 7 / 7; background: rgba(255,255,255,0.10); color: #fff; } /* Other */

	/* New York Grid - 10 sectors, finance heavy */
	.ny-grid {
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(6, 1fr);
	}
	.ny-1  { grid-area: 1 / 1 / 4 / 4; background: rgba(255,255,255,0.92); color: #000; } /* Finance 24.4 */
	.ny-2  { grid-area: 1 / 4 / 3 / 7; background: rgba(255,255,255,0.72); color: #000; } /* Prof 14.7 */
	.ny-3  { grid-area: 3 / 4 / 4 / 7; background: rgba(255,255,255,0.55); color: #000; } /* Info 11.1 */
	.ny-4  { grid-area: 4 / 1 / 6 / 3; background: rgba(255,255,255,0.50); color: #000; } /* Trade 10.2 */
	.ny-5  { grid-area: 4 / 3 / 6 / 5; background: rgba(255,255,255,0.46); color: #fff; } /* Govt 9.9 */
	.ny-6  { grid-area: 4 / 5 / 6 / 7; background: rgba(255,255,255,0.44); color: #fff; } /* Health 9.8 */
	.ny-7  { grid-area: 6 / 1 / 7 / 3; background: rgba(255,255,255,0.36); color: #fff; } /* RE 8.1 */
	.ny-8  { grid-area: 6 / 3 / 7 / 4; background: rgba(255,255,255,0.22); color: #fff; } /* Arts 4.1 */
	.ny-9  { grid-area: 6 / 4 / 7 / 5; background: rgba(255,255,255,0.18); color: #fff; } /* Manuf 3.9 */
	.ny-10 { grid-area: 6 / 5 / 7 / 7; background: rgba(255,255,255,0.10); color: #fff; } /* Other */

	/* Chicago Grid - 10 sectors, balanced */
	.chi-grid {
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(6, 1fr);
	}
	.chi-1  { grid-area: 1 / 1 / 3 / 3; background: rgba(255,255,255,0.84); color: #000; } /* Trade 16.9 */
	.chi-2  { grid-area: 1 / 3 / 3 / 5; background: rgba(255,255,255,0.80); color: #000; } /* Prof 16.0 */
	.chi-3  { grid-area: 1 / 5 / 3 / 7; background: rgba(255,255,255,0.68); color: #000; } /* RE 13.4 */
	.chi-4  { grid-area: 3 / 1 / 5 / 3; background: rgba(255,255,255,0.60); color: #000; } /* Manuf 12.3 */
	.chi-5  { grid-area: 3 / 3 / 5 / 5; background: rgba(255,255,255,0.46); color: #fff; } /* Govt 9.3 */
	.chi-6  { grid-area: 3 / 5 / 5 / 7; background: rgba(255,255,255,0.44); color: #fff; } /* Health 9.2 */
	.chi-7  { grid-area: 5 / 1 / 7 / 3; background: rgba(255,255,255,0.36); color: #fff; } /* Finance 7.9 */
	.chi-8  { grid-area: 5 / 3 / 7 / 4; background: rgba(255,255,255,0.26); color: #fff; } /* Info 5.1 */
	.chi-9  { grid-area: 5 / 4 / 7 / 5; background: rgba(255,255,255,0.20); color: #fff; } /* Arts 4.0 */
	.chi-10 { grid-area: 5 / 5 / 7 / 7; background: rgba(255,255,255,0.10); color: #fff; } /* Other */

	@media (max-width: 500px) {
		.lbl { font-size: 0.45rem; }
		.pct { font-size: 0.6rem; }
	}
</style>
