<script lang="ts">
	// 2023 BEA Data - Comparative GDP by Industry

	// San Francisco - Highly concentrated in tech stack
	const sfSectors = [
		{ name: 'Financial', share: 19.2 },
		{ name: 'Prof. Services', share: 18.9 },
		{ name: 'Information', share: 18.7 },
		{ name: 'Manufacturing', share: 10.3 },
		{ name: 'Government', share: 6.9 },
	];
	const sfOther = { name: 'Other', share: Math.round((100 - sfSectors.reduce((s, x) => s + x.share, 0)) * 10) / 10 };
	const sf = [...sfSectors, sfOther];

	// New York - Dominated by finance
	const nySectors = [
		{ name: 'Financial', share: 29.0 },
		{ name: 'Prof. Services', share: 15.1 },
		{ name: 'Health/Ed', share: 9.0 },
		{ name: 'Information', share: 8.7 },
		{ name: 'Government', share: 8.0 },
		{ name: 'Retail', share: 4.7 },
		{ name: 'Manuf.', share: 3.2 },
	];
	const nyOther = { name: 'Other', share: Math.round((100 - nySectors.reduce((s, x) => s + x.share, 0)) * 10) / 10 };
	const ny = [...nySectors, nyOther];

	// Chicago - Diversified, no single industry over 13%
	const chiSectors = [
		{ name: 'Real Estate', share: 12.8 },
		{ name: 'Prof. Services', share: 11.7 },
		{ name: 'Manufacturing', share: 9.7 },
		{ name: 'Finance', share: 9.4 },
		{ name: 'Wholesale', share: 8.7 },
		{ name: 'Government', share: 8.0 },
		{ name: 'Healthcare', share: 6.7 },
		{ name: 'Retail', share: 5.4 },
		{ name: 'Logistics', share: 4.5 },
		{ name: 'Admin', share: 4.2 },
		{ name: 'Info/Tech', share: 3.8 },
		{ name: 'Construction', share: 3.4 },
		{ name: 'Hospitality', share: 3.0 },
	];
	const chiOther = { name: 'Other', share: Math.round((100 - chiSectors.reduce((s, x) => s + x.share, 0)) * 10) / 10 };
	const chi = [...chiSectors, chiOther];
</script>

<div class="comparison-container">
	<!-- San Francisco -->
	<div class="city-card">
		<div class="city-header">
			<h4>San Francisco</h4>
			<span class="city-stat">Top 2: 38%</span>
		</div>
		<div class="treemap sf-grid">
			{#each sf as sector, i}
				<div class="cell sf-{i + 1}">
					<span class="pct">{sector.share}%</span>
					<span class="lbl">{sector.name}</span>
				</div>
			{/each}
		</div>
		<p class="city-note">Tech-dominated monoculture</p>
	</div>

	<!-- New York -->
	<div class="city-card">
		<div class="city-header">
			<h4>New York</h4>
			<span class="city-stat">Top 2: 44%</span>
		</div>
		<div class="treemap ny-grid">
			{#each ny as sector, i}
				<div class="cell ny-{i + 1}">
					<span class="pct">{sector.share}%</span>
					<span class="lbl">{sector.name}</span>
				</div>
			{/each}
		</div>
		<p class="city-note">Finance-dominated hegemon</p>
	</div>

	<!-- Chicago -->
	<div class="city-card chicago">
		<div class="city-header">
			<h4>Chicago</h4>
			<span class="city-stat highlight">Top 2: 25%</span>
		</div>
		<div class="treemap chi-grid">
			{#each chi as sector, i}
				<div class="cell chi-{i + 1}">
					<span class="pct">{sector.share}%</span>
					<span class="lbl">{sector.name}</span>
				</div>
			{/each}
		</div>
		<p class="city-note">Most diversified major metro</p>
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

	/* San Francisco Grid - 6 sectors, concentrated */
	.sf-grid {
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(6, 1fr);
	}
	.sf-1 { grid-area: 1 / 1 / 4 / 4; background: rgba(255,255,255,0.85); color: #000; }
	.sf-2 { grid-area: 1 / 4 / 4 / 7; background: rgba(255,255,255,0.75); color: #000; }
	.sf-3 { grid-area: 4 / 1 / 7 / 4; background: rgba(255,255,255,0.65); color: #000; }
	.sf-4 { grid-area: 4 / 4 / 6 / 7; background: rgba(255,255,255,0.45); color: #fff; }
	.sf-5 { grid-area: 6 / 4 / 7 / 6; background: rgba(255,255,255,0.25); color: #fff; }
	.sf-6 { grid-area: 6 / 6 / 7 / 7; background: rgba(255,255,255,0.10); color: #fff; }

	/* New York Grid - 8 sectors, finance heavy */
	.ny-grid {
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(6, 1fr);
	}
	.ny-1 { grid-area: 1 / 1 / 4 / 5; background: rgba(255,255,255,0.90); color: #000; }
	.ny-2 { grid-area: 1 / 5 / 4 / 7; background: rgba(255,255,255,0.70); color: #000; }
	.ny-3 { grid-area: 4 / 1 / 6 / 3; background: rgba(255,255,255,0.50); color: #fff; }
	.ny-4 { grid-area: 4 / 3 / 6 / 5; background: rgba(255,255,255,0.40); color: #fff; }
	.ny-5 { grid-area: 4 / 5 / 6 / 7; background: rgba(255,255,255,0.35); color: #fff; }
	.ny-6 { grid-area: 6 / 1 / 7 / 3; background: rgba(255,255,255,0.20); color: #fff; }
	.ny-7 { grid-area: 6 / 3 / 7 / 4; background: rgba(255,255,255,0.12); color: #fff; }
	.ny-8 { grid-area: 6 / 4 / 7 / 7; background: rgba(255,255,255,0.08); color: #fff; }

	/* Chicago Grid - 14 sectors, diversified */
	.chi-grid {
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: repeat(8, 1fr);
	}
	.chi-1  { grid-area: 1 / 1 / 3 / 3; background: rgba(255,255,255,0.90); color: #000; }
	.chi-2  { grid-area: 1 / 3 / 3 / 5; background: rgba(255,255,255,0.82); color: #000; }
	.chi-3  { grid-area: 1 / 5 / 3 / 7; background: rgba(255,255,255,0.74); color: #000; }
	.chi-4  { grid-area: 1 / 7 / 3 / 9; background: rgba(255,255,255,0.66); color: #000; }
	.chi-5  { grid-area: 3 / 1 / 5 / 3; background: rgba(255,255,255,0.58); color: #000; }
	.chi-6  { grid-area: 3 / 3 / 5 / 5; background: rgba(255,255,255,0.50); color: #fff; }
	.chi-7  { grid-area: 3 / 5 / 5 / 7; background: rgba(255,255,255,0.42); color: #fff; }
	.chi-8  { grid-area: 3 / 7 / 5 / 9; background: rgba(255,255,255,0.34); color: #fff; }
	.chi-9  { grid-area: 5 / 1 / 7 / 3; background: rgba(255,255,255,0.28); color: #fff; }
	.chi-10 { grid-area: 5 / 3 / 7 / 5; background: rgba(255,255,255,0.22); color: #fff; }
	.chi-11 { grid-area: 5 / 5 / 7 / 7; background: rgba(255,255,255,0.18); color: #fff; }
	.chi-12 { grid-area: 5 / 7 / 7 / 9; background: rgba(255,255,255,0.14); color: #fff; }
	.chi-13 { grid-area: 7 / 1 / 9 / 5; background: rgba(255,255,255,0.10); color: #fff; }
	.chi-14 { grid-area: 7 / 5 / 9 / 9; background: rgba(255,255,255,0.06); color: #fff; }

	@media (max-width: 500px) {
		.lbl { font-size: 0.45rem; }
		.pct { font-size: 0.6rem; }
	}
</style>
