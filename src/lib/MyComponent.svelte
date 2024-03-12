<script lang="ts">
    const { y } = $props<{ y: string }>();
</script>
{#snippet someSnippet(x: string)}
    {x}
{/snippet}
{@render someSnippet('')}