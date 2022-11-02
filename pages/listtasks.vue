<template>
	<v-card class="mx-auto">
		<v-card-title>
			<v-row>
				<v-col md="12" class="text-center">Tasks List</v-col>
				<v-col md="12" class="text-center" justify-center>
					<v-table>
						<thead>
							<tr>
								<th width="20%" align="left">ID</th>
								<th width="20%" align="left">Title</th>
								<th width="20%" align="left">Description</th>
								<th width="20%" align="left">Status</th>
								<th width="20%" align="left">Action</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="task in tasks.tasks" :key="task.id">
								<td width="20%" align="left">{{ task.id }}</td>
								<td width="20%" align="left">{{ task.name }}</td>
								<td width="20%" align="left">{{ task.description }}</td>
								<td width="20%" align="left">{{ task.status }}</td>
								<td width="20%" align="left">
									<v-btn depressed color="success" @click="this.$router.push(`edit-task/${task.id}`)">
										<v-icon
											large
											color="darken-2"
											>
											mdi-pencil
											</v-icon>
									</v-btn>
									<v-btn depressed color="error ml-2" @click="deleteTask(task.id)">
										<v-icon
											large
											color="darken-2"
											>
											mdi-delete
											</v-icon>
									</v-btn>
								</td>
							</tr>
						</tbody>
					</v-table>
				</v-col>
			</v-row>
		</v-card-title>
	</v-card>
</template>

<script setup>
    import axios from "axios";

    const tasks = reactive({
        tasks: []
    })
    onMounted(() => {
        getTasks()
    })

    const deleteTask = async (id) => {
        const TasksData = await axios.delete(`/api/posts/post`, {data:{id : id}});
		if(TasksData) {
			getTasks()	
		}
    }
    const getTasks = async () => {
        const TasksData = await axios.post('/api/posts/list');
        tasks.tasks = TasksData.data
    }
</script>