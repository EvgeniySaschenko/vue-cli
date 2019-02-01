<template lang="pug">
	include ../../assets/mixin.pug

	+b.search
		+e.row_1
			+e.INPUT(placeholder="Пошук")
			+e.BUTTON.btn
</template>

<script>
export default {
	name: 'Search'
}
</script>