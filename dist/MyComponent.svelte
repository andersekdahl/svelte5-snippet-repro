<script>const { y } = $props();
</script>
{#snippet someSnippet(x: string)}
    {x}
{/snippet}
{@render someSnippet('')}