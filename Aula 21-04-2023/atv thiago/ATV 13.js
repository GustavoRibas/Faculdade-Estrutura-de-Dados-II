let tarefas = [
	{
		"id": "1bc15ccc-d6df-4767-b113-cd04509ae9f1",
		"title": "Tarefa nova 2",
		"done": false,
		"deadline": "2023-04-11",
		"created_at": "2023-04-12T12:52:35.136Z"
	},
	{
		"id": "ae10bde8-16f2-4143-809d-eca4838fbab6",
		"title": "Tarefa nova 3",
		"done": true,
		"deadline": "2023-04-11",
		"created_at": "2023-04-12T12:53:31.701Z"
	},
  {
		"id": "ae10bde8-16f2-4143-809d-eca4838fbab6",
		"title": "Tarefa nova 4",
		"done": true,
		"deadline": "2023-04-11",
		"created_at": "2023-04-12T12:53:31.701Z"
	},
  {
		"id": "ae10bde8-16f2-4143-809d-eca4838fbab6",
		"title": "Tarefa nova 5",
		"done": true,
		"deadline": "2023-04-12",
		"created_at": "2023-04-12T12:53:31.701Z"
	},
  {
		"id": "ae10bde8-16f2-4143-809d-eca4838fbab6",
		"title": "Tarefa nova 6",
		"done": false,
		"deadline": "2023-04-10",
		"created_at": "2023-04-11T11:53:31.701Z"
	}
]
/*const filtroTarefas = tarefas.filter(
(tarefa) => tarefa.done === true
)
console.log(filtroTarefas)*/
const filtroTarefas = tarefas.filter(
    (tarefa) => tarefa.deadline === "2023-04-12"//Obs: não precisa converter a data, é só escreve-la no formato americano que o ano vem primeiro, depois o mês e depois o dia.
    )
    console.log(filtroTarefas)