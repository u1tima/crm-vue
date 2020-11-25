<template>
	<ul class="sidenav app-sidenav" :class="{ open: isOpen }">
		<li v-for="link in links" :key="link.url">
			<router-link class="waves-effect waves-orange pointer" :to="link.url"
				>{{ link.title }}
			</router-link>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		isOpen: { type: Boolean },
	},
	data: () => ({
		links: [
			{ title: "Счет", url: "/" },
			{ title: "История", url: "/history" },
			{ title: "Планирование", url: "/planning" },
			{ title: "Новая запись", url: "/record" },
			{ title: "Категории", url: "/categories" },
		],
	}),
};
</script>
