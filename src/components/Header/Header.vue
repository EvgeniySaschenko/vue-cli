<template lang="pug">
	include ../../assets/mixin.pug

	+b.HEADER.header
		.container
			app-search
</template>

<script>
import Search from '../Search/Search.vue';

export default {
	name: 'Header',
	components: {
		appSearch: Search
	}
}
</script>