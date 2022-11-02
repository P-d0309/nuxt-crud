<script setup>
	import { ref, reactive } from "vue";
	import axios from 'axios';

	const route = useRoute();

	
	const user = reactive({
		valid: true,
		title: null,
		description: null,
		id: route.params.id,
		snackbar: false,
		text: null,
		status: null,
		isEdit: false,
        items: ["Pending", "Completed", "In Progress"],
        titleRules: [
            (v) => !!v || "Task title is required",
            (v) =>
                (v && v.length <= 25) || "Name must be less than 25 characters",
        ],
        descriptionRules: [
            (v) => !!v || "Description is required",
            (v) =>
                (v && v.length >= 10) ||
                "Description must be grater than 10 characters",
            (v) =>
                (v && v.length <= 100) ||
                "Description must be less than 100 characters",
        ],
        statusRules: [(v) => !!v || "Status is required"],
	});

	onMounted(() => {
		if(user.id) {
			axios.post(`/api/posts/list`, { id: user.id}).then((response) => {
				user.isEdit = true
				user.description = response.data.description
				user.title = response.data.name
				user.status = response.data.status
			})
		}
	})
	const add_task_form = ref(null);

	const submitForm = async () => {
		const router = useRouter()
		
		let task = null;

		const isFormValid = await add_task_form.value.validate()
		user.valid = isFormValid.valid
		const data = {
			name: user.title,
			description: user.description,
			status: user.status,	
			id: user.id,	
		}
		
		if (user.valid) {
			if (user.isEdit) {
				task = await axios.put(`/api/posts/update`, data);
			} else {
				task = await axios.post(`/api/posts/create`, data);
			}
		}

		if(task) {
			user.snackbar = true;
			if(!user.isEdit)
			{
				user.text = "Task Created successfully."
				add_task_form.value.reset()
			} else {
				user.text = "Task Updated successfully."
			}
		}
	}

</script>

<template>
	<v-form ref="add_task_form" v-model="user.valid" lazy-validation>
		<v-row>
			<v-col sm="12" md="6">
				<v-text-field
					label="Task title"
					v-model="user.title"
					:rules="user.titleRules"
				></v-text-field>
			</v-col>
			<v-col sm="12" md="6">
				<v-text-field
					label="Task description"
					:rules="user.descriptionRules"
					v-model="user.description"
				></v-text-field>
			</v-col>

			<v-col sm="12" md="6">
				<v-select
					:items="user.items"
					label="Status"
					v-model="user.status"
					:rules="user.statusRules"
				></v-select>
			</v-col>
		</v-row>
		<v-row>
			<v-col sm="12" md="6">
				<v-btn type="button" color="success" @click="submitForm">
					Submit
				</v-btn>
			</v-col>
		</v-row>
	</v-form>
	<v-snackbar v-model="user.snackbar" :timeout="5000">
		{{ user.text }}
	</v-snackbar>
</template>