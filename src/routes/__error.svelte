<script lang="ts" context="module">
	export const load = async ({ status }) => {
		if (status === 404) {
			return {
				status: 302,
				redirect: '/'
			};
		}
	};
</script>
