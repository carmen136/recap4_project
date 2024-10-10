import "./Select.css";
import { useState } from "react";

export default function Select({ themes, currentTheme, setCurrentThemeId, editTheme, deleteTheme, addTheme }) {
	const [toggleEdit, setToggleEdit] = useState(false);
	const [toggleDelete, setToggleDelete] = useState(false);
	const [toggleAdd, setToggleAdd] = useState(false);

	function handleChange(event) {
		const targetTheme = themes.find((theme) => theme.name === event.target.value);
		setCurrentThemeId(targetTheme.id);
	}
	function handleEdit(event) {
		event.preventDefault();
		const response = new FormData(event.target);
		const { name } = Object.fromEntries(response);

		setToggleEdit(false);
		editTheme(currentTheme.id, name);
	}
	function handleDelete() {
		deleteTheme(currentTheme.id);
		setToggleDelete(false);
	}
	function handleAdd(event) {
		event.preventDefault();
		const response = new FormData(event.target);
		const { newThemeName } = Object.fromEntries(response);

		addTheme(newThemeName);
		setToggleAdd(false);
	}

	if (toggleDelete)
		return (
			<section className="select-section">
				<button type="button" onClick={handleDelete}>
					Yes, delete
				</button>
				<button type="button" onClick={() => setToggleDelete(false)}>
					Cancel
				</button>
			</section>
		);

	if (toggleEdit)
		return (
			<section className="select-section">
				<form onSubmit={handleEdit}>
					<input type="text" name="name" defaultValue={currentTheme.name} required />
					<button type="submit">Update Theme</button>
					<button type="button" onClick={() => setToggleEdit(false)}>
						Cancel
					</button>
				</form>
			</section>
		);

	if (toggleAdd)
		return (
			<section className="select-section">
				<form onSubmit={handleAdd}>
					<input type="text" name="newThemeName" defaultValue="New Theme" required />
					<button type="submit">Add Theme</button>
					<button type="button" onClick={() => setToggleAdd(false)}>
						Cancel
					</button>
				</form>
			</section>
		);

	return (
		<section className="select-section">
			<select name="themes" onChange={handleChange} defaultValue={currentTheme.name}>
				{themes.map((theme) => (
					<option key={theme.id} value={theme.name}>
						{theme.name}
					</option>
				))}
			</select>
			<button type="button" onClick={() => setToggleAdd(true)}>
				Add
			</button>
			<button type="button" onClick={() => setToggleEdit(true)} disabled={currentTheme.name === "Default Theme"}>
				Edit
			</button>
			<button type="button" onClick={() => setToggleDelete(true)} disabled={currentTheme.name === "Default Theme"}>
				Delete
			</button>
		</section>
	);
}