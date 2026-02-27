<script lang="ts">
	// 2023 BEA Data - GDP by Industry (chained 2017 dollars)
	// Illinois state-level data as proxy for Chicago MSA

	const sectors = [
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
	const other = { name: 'Other', share: Math.round((100 - sectors.reduce((s, x) => s + x.share, 0)) * 10) / 10 };
	const all = [...sectors, other];
</script>

<div class="chicago-card">
	<div class="chicago-header">
		<h4>Chicago GDP by Industry</h4>
		<span class="chicago-stat">No sector over 17%</span>
	</div>
	<div class="treemap chi-grid">
		{#each all as sector, i}
			<div class="cell chi-{i + 1}">
				<span class="pct">{sector.share}%</span>
				<span class="lbl">{sector.name}</span>
			</div>
		{/each}
	</div>
	<p class="caption">
		2023 BEA data · Illinois state GDP by industry (chained 2017 $)
	</p>
</div>

<style>
	.chicago-card {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		max-width: 460px;
		margin: 0 auto;
	}

	.chicago-header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}

	.chicago-header h4 {
		font-size: 1.1rem;
		font-weight: 600;
		color: white;
		margin: 0;
	}

	.chicago-stat {
		font-family: ui-monospace, monospace;
		font-size: 0.85rem;
		color: rgba(255,255,255,0.9);
		font-weight: 600;
	}

	.caption {
		text-align: center;
		font-size: 0.8rem;
		color: rgba(255,255,255,0.3);
		margin-top: 0.5rem;
	}

	.treemap {
		display: grid;
		gap: 2px;
		aspect-ratio: 1.4;
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
		font-size: 0.85rem;
		font-weight: 600;
		line-height: 1;
	}

	.lbl {
		font-size: 0.65rem;
		opacity: 0.8;
		line-height: 1;
		margin-top: 3px;
	}

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
		.lbl { font-size: 0.5rem; }
		.pct { font-size: 0.7rem; }
	}
</style>
