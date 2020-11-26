<template>
	<form class="card auth-card" @submit.prevent="onSubmit">
		<div class="card-content">
			<span class="card-title">Домашняя бухгалтерия</span>
			<div class="input-field">
				<input
					id="email"
					type="text"
					v-model="email"
					:class="{ invalid: $v.email.$error }"
				/>
				<label for="email">Email</label>
				<small class="helper-text invalid" v-if="$v.email.$error">Ошибка</small>
			</div>
			<div class="input-field">
				<input
					id="password"
					type="password"
					v-model="password"
					:class="{ invalid: $v.password.$error }"
				/>
				<label for="password">Пароль</label>
				<small class="helper-text invalid" v-if="$v.password.$error">
					Ошибка
				</small>
			</div>
			<div class="input-field">
				<input
					id="name"
					type="text"
					v-model="name"
					:class="{ invalid: $v.name.$error }"
				/>
				<label for="email">Email</label>
				<small class="helper-text invalid" v-if="$v.name.$error">
					Введите ваше имя
				</small>
			</div>
			<p>
				<label>
					<input type="checkbox" v-model="agree" />
					<span>С правилами согласен</span>
				</label>
			</p>
		</div>
		<div class="card-action">
			<div>
				<button class="btn waves-effect waves-light auth-submit" type="submit">
					Зарегистрироваться
					<i class="material-icons right">send</i>
				</button>
			</div>

			<p class="center">
				Уже есть аккаунт?
				<router-link to="/login">Войти!</router-link>
			</p>
		</div>
	</form>
</template>

<script>
import { email, required, minLength } from "@vuelidate/validators";

export default {
	data: () => ({
		email: "",
		password: "",
		name: "",
		agree: false,
	}),
	validations: {
		email: { email, required },
		password: { required, minLength: minLength(6) },
		name: { required },
		agree: { checked: v => v },
	},
	methods: {
		onSubmit() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				return;
			}

			const formData = {
				email: this.email,
				password: this.password,
				name: this.name,
			};

			this.$router.push("./");
		},
	},
};
</script>
