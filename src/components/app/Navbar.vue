<template>
	<nav class="navbar orange lighten-1">
		<div class="nav-wrapper">
			<div class="navbar-left">
				<a href="#" @click="$emit('toggle')">
					<i class="material-icons black-text">dehaze</i>
				</a>
				<span class="black-text">{{ date }}</span>
			</div>

			<ul class="right hide-on-small-and-down">
				<li>
					<a
						class="dropdown-trigger black-text"
						href="#"
						data-target="dropdown"
						ref="dropdown"
					>
						USER NAME
						<i class="material-icons right">arrow_drop_down</i>
					</a>

					<ul id="dropdown" class="dropdown-content">
						<li>
							<router-link to="/profile" class="black-text">
								<i class="material-icons">account_circle</i>Профиль
							</router-link>
						</li>
						<li class="divider" tabindex="-1"></li>
						<li>
							<a href="#" class="black-text" @click.prevent="logout">
								<i class="material-icons">assignment_return</i>Выйти
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			date: this.formatDate(),
			interval: null,
			dropdown: null,
		};
	},
	methods: {
		logout() {
			console.log("logout");
			this.$router.push("/login?message=logout");
		},
		formatDate() {
			const options = {
				year: "numeric",
				month: "long",
				day: "numeric",
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
			};
			const date = new Date();
			return new Intl.DateTimeFormat("ru-Ru", options).format(date);
		},
	},

	mounted() {
		this.interval = setInterval(() => (this.date = this.formatDate()), 1000);
		// eslint-disable-next-line no-undef
		this.dropdown = M.Dropdown.init(this.$refs.dropdown);
	},

	beforeUnmount() {
		clearInterval(this.interval);
		if (this.dropdown && this.dropdown.destroy) {
			this.dropdown.destroy();
		}
	},
};
</script>
