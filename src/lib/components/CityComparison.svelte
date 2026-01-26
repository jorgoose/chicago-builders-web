<script lang="ts">
	// 2023 BEA Data - Comparative GDP by Industry (Consolidated NAICS)

	// San Francisco ($778.9B) - Tech/Info concentrated
	const sfSectors = [
		{ name: 'Finance', share: 19.2 },
		{ name: 'Prof. Svcs', share: 18.9 },
		{ name: 'Information', share: 18.7 },
		{ name: 'Trade/Trans', share: 10.9 },
		{ name: 'Manuf.', share: 10.3 },
		{ name: 'Government', share: 6.9 },
		{ name: 'Health/Ed', share: 6.4 },
		{ name: 'Hospitality', share: 3.2 },
	];
	const sfOther = { name: 'Other', share: Math.round((100 - sfSectors.reduce((s, x) => s + x.share, 0)) * 10) / 10 };
	const sf = [...sfSectors, sfOther];

	// New York ($2,298.9B) - Finance dominated
	const nySectors = [
		{ name: 'Finance', share: 29.0 },
		{ name: 'Prof. Svcs', share: 15.1 },
		{ name: 'Trade/Trans', share: 13.9 },
		{ name: 'Health/Ed', share: 9.0 },
		{ name: 'Information', share: 8.7 },
		{ name: 'Government', share: 8.0 },
		{ name: 'Hospitality', share: 4.0 },
		{ name: 'Manuf.', share: 3.1 },
	];
	const nyOther = { name: 'Other', share: Math.round((100 - nySectors.reduce((s, x) => s + x.share, 0)) * 10) / 10 };
	const ny = [...nySectors, nyOther];

	// Chicago ($894.9B) - Most balanced distribution
	const chiSectors = [
		{ name: 'Finance', share: 21.4 },
		{ name: 'Trade/Trans', share: 18.4 },
		{ name: 'Prof. Svcs', share: 15.6 },
		{ name: 'Manuf.', share: 11.9 },
		{ name: 'Health/Ed', share: 8.4 },
		{ name: 'Government', share: 7.8 },
		{ name: 'Hospitality', share: 4.3 },
		{ name: 'Information', share: 3.8 },
		{ name: 'Construction', share: 3.4 },
	];
	const chiOther = { name: 'Other', share: Math.round((100 - chiSectors.reduce((s, x) => s + x.share, 0)) * 10) / 10 };
	const chi = [...chiSectors, chiOther];
</script>

<div class="comparison-container">
	<!-- San Francisco -->
	<div class="city-card">
		<div class="city-header">
			<h4>San Francisco</h4>
			<span class="city-stat">Top 3: 57%</span>
		</div>
		<div class="treemap sf-grid">
			{#each sf as sector, i}
				<div class="cell sf-{i + 1}">
					<span class="pct">{sector.share}%</span>
					<span class="lbl">{sector.name}</span>
				</div>
			{/each}
		</div>
		<p class="city-note">Tech/Info concentrated</p>
	</div>

	<!-- New York -->
	<div class="city-card">
		<div class="city-header">
			<h4>New York</h4>
			<span class="city-stat">Top 3: 58%</span>
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
			<span class="city-stat highlight">Top 3: 55%</span>
		</div>
		<div class="treemap chi-grid">
			{#each chi as sector, i}
				<div class="cell chi-{i + 1}">
					<span class="pct">{sector.share}%</span>
					<span class="lbl">{sector.name}</span>
				</div>
			{/each}
		</div>
		<p class="city-note">Most balanced economy</p>
	</div>
</div>

<p class="comparison-caption">
	2023 BEA data · GDP by industry sector
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

	/* San Francisco Grid - 9 sectors */
	.sf-grid {
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(6, 1fr);
	}
	.sf-1 { grid-area: 1 / 1 / 3 / 3; background: rgba(255,255,255,0.90); color: #000; } /* Finance 19.2 */
	.sf-2 { grid-area: 1 / 3 / 3 / 5; background: rgba(255,255,255,0.82); color: #000; } /* Prof 18.9 */
	.sf-3 { grid-area: 1 / 5 / 3 / 7; background: rgba(255,255,255,0.74); color: #000; } /* Info 18.7 */
	.sf-4 { grid-area: 3 / 1 / 5 / 3; background: rgba(255,255,255,0.55); color: #000; } /* Trade 10.9 */
	.sf-5 { grid-area: 3 / 3 / 5 / 5; background: rgba(255,255,255,0.48); color: #fff; } /* Manuf 10.3 */
	.sf-6 { grid-area: 3 / 5 / 5 / 7; background: rgba(255,255,255,0.38); color: #fff; } /* Govt 6.9 */
	.sf-7 { grid-area: 5 / 1 / 7 / 3; background: rgba(255,255,255,0.30); color: #fff; } /* Health 6.4 */
	.sf-8 { grid-area: 5 / 3 / 7 / 5; background: rgba(255,255,255,0.18); color: #fff; } /* Hosp 3.2 */
	.sf-9 { grid-area: 5 / 5 / 7 / 7; background: rgba(255,255,255,0.10); color: #fff; } /* Other */

	/* New York Grid - 9 sectors, finance heavy */
	.ny-grid {
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(6, 1fr);
	}
	.ny-1 { grid-area: 1 / 1 / 4 / 4; background: rgba(255,255,255,0.92); color: #000; } /* Finance 29.0 */
	.ny-2 { grid-area: 1 / 4 / 3 / 7; background: rgba(255,255,255,0.70); color: #000; } /* Prof 15.1 */
	.ny-3 { grid-area: 3 / 4 / 5 / 7; background: rgba(255,255,255,0.58); color: #000; } /* Trade 13.9 */
	.ny-4 { grid-area: 4 / 1 / 6 / 3; background: rgba(255,255,255,0.45); color: #fff; } /* Health 9.0 */
	.ny-5 { grid-area: 4 / 3 / 6 / 4; background: rgba(255,255,255,0.40); color: #fff; } /* Info 8.7 */
	.ny-6 { grid-area: 5 / 4 / 7 / 6; background: rgba(255,255,255,0.35); color: #fff; } /* Govt 8.0 */
	.ny-7 { grid-area: 5 / 6 / 7 / 7; background: rgba(255,255,255,0.22); color: #fff; } /* Hosp 4.0 */
	.ny-8 { grid-area: 6 / 1 / 7 / 3; background: rgba(255,255,255,0.15); color: #fff; } /* Manuf 3.1 */
	.ny-9 { grid-area: 6 / 3 / 7 / 4; background: rgba(255,255,255,0.08); color: #fff; } /* Other */

	/* Chicago Grid - 10 sectors, balanced */
	.chi-grid {
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(6, 1fr);
	}
	.chi-1  { grid-area: 1 / 1 / 3 / 3; background: rgba(255,255,255,0.90); color: #000; } /* Finance 21.4 */
	.chi-2  { grid-area: 1 / 3 / 3 / 5; background: rgba(255,255,255,0.78); color: #000; } /* Trade 18.4 */
	.chi-3  { grid-area: 1 / 5 / 3 / 7; background: rgba(255,255,255,0.66); color: #000; } /* Prof 15.6 */
	.chi-4  { grid-area: 3 / 1 / 5 / 3; background: rgba(255,255,255,0.54); color: #000; } /* Manuf 11.9 */
	.chi-5  { grid-area: 3 / 3 / 5 / 5; background: rgba(255,255,255,0.42); color: #fff; } /* Health 8.4 */
	.chi-6  { grid-area: 3 / 5 / 5 / 7; background: rgba(255,255,255,0.36); color: #fff; } /* Govt 7.8 */
	.chi-7  { grid-area: 5 / 1 / 7 / 2; background: rgba(255,255,255,0.24); color: #fff; } /* Hosp 4.3 */
	.chi-8  { grid-area: 5 / 2 / 7 / 3; background: rgba(255,255,255,0.20); color: #fff; } /* Info 3.8 */
	.chi-9  { grid-area: 5 / 3 / 7 / 4; background: rgba(255,255,255,0.16); color: #fff; } /* Constr 3.4 */
	.chi-10 { grid-area: 5 / 4 / 7 / 7; background: rgba(255,255,255,0.10); color: #fff; } /* Other */

	@media (max-width: 500px) {
		.lbl { font-size: 0.45rem; }
		.pct { font-size: 0.6rem; }
	}
</style>
