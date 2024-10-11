import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import { uid } from "uid";
import { initialThemes } from "./lib/colors.js";
import ThemeRepository from "./Components/ThemeRepository/ThemeRepository.jsx";
import SelectTheme from "./Components/SelectTheme/SelectTheme.jsx";

function App() {

// === BISHERIGER CODE === 
  // const [colors, setColors] = useLocalStorageState("colors", {defaultValue: initialColors});
  // const defaultData = { role: "some color", hex: "#123456", contrastText: "#FFFFFF"};

  // function handleAddColor(newColor) {
  //   setColors([{id: uid(), ...newColor}, ...colors])
  // }

  // function handleDeleteColor(colorToDelete) {                                      // B: hier könnte man auch nur die id übergeben
  //   setColors(colors.filter((color) => color.id !== colorToDelete.id ))
  // }

  // function handleEditColor(id, changedColor) {
  //   setColors(colors.map((color) => color.id === id ? { ...color, role: changedColor.role, hex: changedColor.hex, contrastText: changedColor.contrastText } : color ))
  // }


  // === NEU ===
  const [themes, setThemes] = useLocalStorageState("themes", { defaultValue: initialThemes });
	const [currentThemeId, setCurrentThemeId] = useLocalStorageState("currentThemeId", { defaultValue: "t1" });

  // Warum brauchen wir currentTheme hier? // wir übergeben currentTheme als prop in die Form Function
	const currentTheme = themes.find((theme) => theme.id === currentThemeId);


  //man benötigt zwei separate Funktionen:
  // die normale addColor function -> neu: man fügt sie dem aktuellen Theme hinzu, muss sie also in initialThemes.currentTheme.colors packen
  // die addTheme function -> man fügt ein neues Theme als Objekt in das initialThemes Array hinzu


  function handleAddColor(newColor) {
    // nach dem aktuellen Theme suchen -> find
    // color in das colors array des aktuellen themes packen

    const currentTheme = themes.find((theme) => theme.id === currentThemeId );
    const addedColor = [{id: uid(), ...newColor}, ...currentTheme.colors];
    setThemes(addedColor, ...themes);
    setThemes(themes.map((theme) => theme.id === currentThemeId ? { ...currentTheme, colors: addedColor } : theme ));
  }

  function handleDeleteColor(colorToDelete) {
    // nach dem aktuellen Theme suchen -> find
    // color in dem colors array des aktuellen themes löschen
    const currentTheme = themes.find((theme) => theme.id === currentThemeId );
    const removedColor = currentTheme.colors.filter((color) => color.id !== colorToDelete.id );
    setThemes(themes.map((theme) => theme.id === currentThemeId ? { ...currentTheme, colors: removedColor } : theme ));
  }

  function handleEditColor(id, changedColor) {
    // nach dem aktuellen Theme suchen -> find
    // color in dem colors array des aktuellen themes verändern
    const currentTheme = themes.find((theme) => theme.id === currentThemeId );
    const editedColor = currentTheme.colors.map((color) => (color.id === id ? { ...color, role: changedColor.role, hex: changedColor.hex, contrastText: changedColor.contrastText }: color ));
    setThemes(themes.map((theme) => theme.id === currentThemeId ? { ...currentTheme, colors: editedColor } : theme ));
  }

    // die Theme functions 
    // Bsp handleAddTheme-> man fügt ein neues Theme als Objekt in das initialThemes Array hinzu

    function handleAddTheme(newThemeName) {
      const id = uid();
      setThemes([...themes, {id: id, name: newThemeName, colors: []}]); 
      setCurrentThemeId(id);
    }

    function handleDeleteTheme(removedThemeId) {        // nur die Id weil wir in der Select Component nur die ID des Themes übergeben
      setThemes(themes.filter((theme) => theme.id !== removedThemeId ));
      setCurrentThemeId(themes[0].id); // warum? Wir setzen currentTheme auf das erste Array-Element im Themesobjekt
    }

    function handleEditTheme(id, editedThemeName) {    // nur "name" weil wir in der Select Component nur den Namen des Themes übergeben
      setThemes(themes.map((theme) => (theme.id === id ? { ...theme, name: editedThemeName } : theme )))
    }
  

  return (
    <>
      <h1>Theme Creator</h1>
      {/* === Codeblock ist jetzt in der Theme Component gespeichert ===
      
        <ColorForm defaultData={defaultData} addColor={handleAddColor} editColor={handleEditColor} mode={"ADD"} />

      {colors.length === 0 && <p>No colors saved. Start adding one!.</p>}

      {currentTheme.colors.map((color) => {
        return <Color key={color.id} color={color} deleteColor={handleDeleteColor} editColor={handleEditColor} />;
      })} */}
      <SelectTheme themes={themes} currentTheme={currentTheme} setCurrentThemeId={setCurrentThemeId} addTheme={handleAddTheme} deleteTheme={handleDeleteTheme} editTheme={handleEditTheme} />
      <ThemeRepository currentTheme={currentTheme} addColor={handleAddColor} deleteColor={handleDeleteColor} editColor={handleEditColor} />  
    </>
  );
}

export default App;
