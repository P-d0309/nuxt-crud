<template>
	<v-footer dark padless>
		<v-card flat tile class="indigo lighten-1 white--text text-center">
			<v-card-text>
				<v-btn
					v-for="icon in icons"
					:key="icon"
					class="mx-4 white--text"
					icon
				>
					<v-icon size="24px">
						{{ icon }}
					</v-icon>
				</v-btn>
			</v-card-text>

			<v-card-text class="white--text pt-0"
				>The purpose of the respository is only to create the CRUD
				operation for the VueJS framework.</v-card-text
			>

			<v-divider></v-divider>

			<v-card-text class="white--text">
				{{ new Date().getFullYear() }} —
				<strong @click="redirecctToGithub"
					>Made with love by Paresh Parmar</strong
				>
			</v-card-text>
		</v-card>
	</v-footer>
</template>
<script>
	export default {
		name: "Footer",
		methods: {
			redirecctToGithub() {
				window.location = "https://github.com/P-d0309";
			},
		},
	};
</script>