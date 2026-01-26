<script lang="ts">
	// 2023 BEA Data - Chicago MSA $894.86B GDP
	// Showing all sectors ≥3%, bundling <3% into "Other"
	const aboveCutoff = [
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

	const totalAbove = aboveCutoff.reduce((sum, s) => sum + s.share, 0);
	const other = { name: 'Other', share: Math.round((100 - totalAbove) * 10) / 10 };
	const sectors = [...aboveCutoff, other];
</script>

<div class="w-full">
	<div class="treemap-grid">
		{#each sectors as sector, i}
			<div class="treemap-cell cell-{i + 1}">
				<span class="cell-percent">{sector.share}%</span>
				<span class="cell-name">{sector.name}</span>
			</div>
		{/each}
	</div>
	<p class="mt-4 text-center text-sm text-white/40">
		2023 BEA data · No single industry over 13%
	</p>
</div>

<style>
	.treemap-grid {
		display: grid;
		grid-template-columns: repeat(10, 1fr);
		grid-template-rows: repeat(10, 1fr);
		gap: 1px;
		aspect-ratio: 1.4;
		width: 100%;
		max-width: 480px;
		margin: 0 auto;
		background: rgba(255,255,255,0.05);
	}

	.treemap-cell {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2px;
		text-align: center;
		transition: filter 0.15s;
	}

	.treemap-cell:hover {
		filter: brightness(1.2);
		z-index: 10;
	}

	/* Clean grid layout - no overlaps */
	/* Row 1-3: Top tier */
	.cell-1  { grid-area: 1 / 1 / 4 / 4;   background: rgba(255,255,255,0.92); } /* Real Estate 12.8 */
	.cell-2  { grid-area: 1 / 4 / 4 / 7;   background: rgba(255,255,255,0.84); } /* Prof Svc 11.7 */
	.cell-3  { grid-area: 1 / 7 / 4 / 11;  background: rgba(255,255,255,0.76); } /* Manuf 9.7 */

	/* Row 4-6: Mid tier */
	.cell-4  { grid-area: 4 / 1 / 7 / 4;   background: rgba(255,255,255,0.68); } /* Finance 9.4 */
	.cell-5  { grid-area: 4 / 4 / 7 / 7;   background: rgba(255,255,255,0.60); } /* Wholesale 8.7 */
	.cell-6  { grid-area: 4 / 7 / 7 / 11;  background: rgba(255,255,255,0.52); } /* Govt 8.0 */

	/* Row 7-8: Lower tier */
	.cell-7  { grid-area: 7 / 1 / 9 / 3;   background: rgba(255,255,255,0.44); } /* Health 6.7 */
	.cell-8  { grid-area: 7 / 3 / 9 / 5;   background: rgba(255,255,255,0.36); } /* Retail 5.4 */
	.cell-9  { grid-area: 7 / 5 / 9 / 7;   background: rgba(255,255,255,0.28); } /* Logistics 4.5 */
	.cell-10 { grid-area: 7 / 7 / 9 / 9;   background: rgba(255,255,255,0.22); } /* Admin 4.2 */
	.cell-14 { grid-area: 7 / 9 / 11 / 11; background: rgba(255,255,255,0.08); } /* Other 8.7 */

	/* Row 9-10: Smallest */
	.cell-11 { grid-area: 9 / 1 / 11 / 3;  background: rgba(255,255,255,0.16); } /* Info 3.8 */
	.cell-12 { grid-area: 9 / 3 / 11 / 5;  background: rgba(255,255,255,0.12); } /* Constr 3.4 */
	.cell-13 { grid-area: 9 / 5 / 11 / 9;  background: rgba(255,255,255,0.09); } /* Hosp 3.0 */

	.cell-percent {
		font-family: ui-monospace, monospace;
		font-size: clamp(0.5rem, 1.5vw, 0.75rem);
		font-weight: 600;
		color: #000;
		line-height: 1;
	}

	.cell-name {
		font-size: clamp(0.35rem, 0.9vw, 0.5rem);
		color: #000;
		opacity: 0.7;
		line-height: 1;
		margin-top: 2px;
	}

	/* White text for darker cells */
	.cell-7 .cell-percent, .cell-7 .cell-name,
	.cell-8 .cell-percent, .cell-8 .cell-name,
	.cell-9 .cell-percent, .cell-9 .cell-name,
	.cell-10 .cell-percent, .cell-10 .cell-name,
	.cell-11 .cell-percent, .cell-11 .cell-name,
	.cell-12 .cell-percent, .cell-12 .cell-name,
	.cell-13 .cell-percent, .cell-13 .cell-name,
	.cell-14 .cell-percent, .cell-14 .cell-name {
		color: rgba(255,255,255,0.9);
	}

	@media (max-width: 400px) {
		.cell-name { display: none; }
	}
</style>
