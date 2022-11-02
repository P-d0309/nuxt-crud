<template>
	<div>
		<v-app-bar color="deep-purple accent-4" dense dark>
			<v-toolbar-title>My Crud App</v-toolbar-title>

			<v-spacer></v-spacer>
			<NuxtLink to="/addtask">
				<v-btn depressed>
					Add New Task
				</v-btn>
			</NuxtLink>

			<NuxtLink to="/listtasks">
				<v-btn depressed>
					List Tasks
				</v-btn>
			</NuxtLink>
		</v-app-bar>
	</div>
</template>