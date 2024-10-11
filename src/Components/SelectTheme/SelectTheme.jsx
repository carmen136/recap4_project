import "./SelectTheme.css";
import { useState } from "react";

export default function SelectTheme({ themes, currentTheme, setCurrentThemeId, editTheme, deleteTheme, addTheme }) {
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
		editTheme(currentTheme.id, name);								// Funktion editTheme die als Prop aus der App Component übergeben wurde
	}
	function handleDelete() {
		deleteTheme(currentTheme.id);
		setToggleDelete(false);
	}
	function handleAdd(event) {
		event.preventDefault();
		const response = new FormData(event.target);					// FormData(event.target) -> Daten aus der Form, hier: Name eines neuen Themes
		const { newThemeName } = Object.fromEntries(response);

		addTheme(newThemeName);											// Funktion addTheme die als Prop aus der App Component übergeben wurde. Hier übergeben wir den Namen des neuen Themes mit dem in der Form eingetragenen Namen an die addTheme Function
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
				<form className="select-form" onSubmit={handleEdit}>
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
				<form className="select-form" onSubmit={handleAdd}>
					<input type="text" name="newThemeName" defaultValue="New Theme" required />
					<button type="submit">Add Theme</button>
					<button type="button" onClick={() => setToggleAdd(false)}>
						Cancel
					</button>
				</form>
			</section>
		);

	// Der Default Zustand der Select Component:	
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
				Edit 🖊
			</button>
			<button type="button" onClick={() => setToggleDelete(true)} disabled={currentTheme.name === "Default Theme"}>
				Delete
			</button>
		</section>
	);
}