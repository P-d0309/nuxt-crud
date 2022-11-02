<script setup>
	useHead({
		title: "Edit task",    
		viewport: "width=device-width, initial-scale=1, maximum-scale=1",
		charset: "utf-8",
		meta: [{ name: "description", content: "My amazing site." }],
		bodyAttrs: {
			class: "test",
		},
	});
</script>
<template>
	<v-card class="mx-auto">
		<v-card-title>
			<v-row>
				<v-col md="12" class="text-center">Update the task</v-col>
			</v-row>
		</v-card-title>
		<v-card-text>
			<TaskForm />
		</v-card-text>
	</v-card>
</template>