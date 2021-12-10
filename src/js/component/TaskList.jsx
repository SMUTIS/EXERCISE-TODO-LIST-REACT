import React from "react";
import PropTypes from "prop-types";

const TaskList = ({ task, newTask, deleteTask, index }) => {
	return (
		<li className={"list " + (task === newTask ? "warningToo" : " ")}>
			<span>{task}</span>
			<button
				className="btn btn-outline deletetask"
				onClick={() => {
					deleteTask(index);
				}}>
				<i className="fas fa-trash trash" />
			</button>
		</li>
	);
};

TaskList.propTypes = {
	task: PropTypes.string,
	newTask: PropTypes.string,
	deleteTask: PropTypes.func,
	index: PropTypes.number,
};
export default TaskList;
