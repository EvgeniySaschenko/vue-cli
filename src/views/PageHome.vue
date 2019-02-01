<template lang="pug">
	include ../assets/mixin.pug

	+b.page.page_home
		app-header
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header/Header.vue";

export default {
	name: "page-home",
	components: {
		appHeader: Header
	}
};
</script>