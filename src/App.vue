<template lang="pug">
	include assets/mixin.pug

	+b.wrapper#app
		router-view
</template>

<style lang="sass">
	@import 'assets/style.sass'
</style>