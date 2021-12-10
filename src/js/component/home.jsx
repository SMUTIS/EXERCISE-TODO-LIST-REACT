import React, { useEffect, useState } from "react";
import TaskList from "./TaskList.jsx";

const Home = () => {
	const [tasks, setTasks] = useState([
		"Procastinar",
		"Hacer los proyectos pendientes de 4geeks",
	]);
	const [newTask, setNewTask] = useState("");
	const [taskExists, setTaskExists] = useState(false);

	function newTaskAdd(event) {
		setNewTask(event.target.value);
	}
	function addNewOne(event) {
		if (event.key === "Enter") {
			let position = tasks.findIndex((task) => task === newTask);
			if (position === -1) {
				setTasks([...tasks, newTask]);
				setNewTask("");
			} else {
				setTaskExists(true);
			}
		}
	}

	useEffect(() => {
		let position = tasks.findIndex((task) => task === newTask);
		if (position === -1) {
			setTaskExists(false);
		} else {
			setTaskExists(true);
		}
	}, [newTask]);

	function deleteTask(indexToRemove) {
		setTasks(tasks.filter((task, index) => index !== indexToRemove));
	}

	return (
		<div className="container-fluid">
			<div className="jumbotron lista text-center" id="putofondo">
				<h1 className="mt-5 title">Welcome to my to do List!</h1>
				<input
					className={taskExists ? "warning" : " "}
					type="text"
					placeholder="¿alguna tarea pendiente?"
					onChange={newTaskAdd}
					onKeyDown={addNewOne}
					value={newTask}
				/>
				<ul className="list-item">
					{tasks.map((task, index) => (
						<TaskList
							key={index}
							task={task}
							newTask={newTask}
							index={index}
							deleteTask={deleteTask}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Home;
