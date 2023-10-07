import { useState } from "react";
import ListItem from "../components/ListItem";
import ListClasse from "../components/ListClasse";

function Edit() {
    const [inputsStateRace, setInputsStatesRace] = useState('');
    const [inputsStateClasse, setInputsStatesClasse] = useState('');
    const [inputsStateNomStuff, setInputsStatesNomStuff] = useState('');
    const [inputsStateCasque, setInputsStatesCasque] = useState('');
    const [inputsStateArmure, setInputsStatesArmure] = useState('');
    const [inputsStateBouclier, setInputsStatesBouclier] = useState('');
    const [inputsStatePantalon, setInputsStatesPantalon] = useState('');
    const [inputsStateGants, setInputsStatesGants] = useState('');
    const [inputsStateBottes, setInputsStatesBottes] = useState('');
    const [inputsStateNiveau, setInputsStatesNiveau] = useState('');
    const [inputsStateArme, setInputsStatesArme] = useState('');
    const [inputsStateUserId, setInputsStatesUserId] = useState('');




    const handleSubmit = async e => {
        e.preventDefault();
        const res = await fetch("/api/set", {
            body: JSON.stringify({
                race: inputsStateRace,
                classe: inputsStateClasse,
                NomStuff: inputsStateNomStuff,
                Casque: inputsStateCasque,
                Armure: inputsStateArmure,
                Bouclier: inputsStateBouclier,
                Pantalon: inputsStatePantalon,
                Gants: inputsStateGants,
                Bottes: inputsStateBottes,
                Niveau: inputsStateNiveau,
                Arme: inputsStateArme,
                UserId: inputsStateUserId
            }),
            
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        console.log(res.body);
    }
    return (
        <form onSubmit={handleSubmit} method="post">
            <>
        <div className="flex justify-around">
            
            <div id="1" className="mt-2 bg-noir w-24 h-24 justify-center items-center flex flex-wrap border border-noir">
                <select className="outline-none appearance-none text-white bg-transparent w-full h-full flex text-center" id="genre" name="genre">
                    <option className="bg-noir text-white" value="genre1">Masculin</option>
                    <option className="bg-noir text-white" value="genre2">Feminin</option>
                </select>
            </div>
            <div id="2" className="mt-2 bg-noir w-24 h-24 justify-center items-center flex flex-wrap border border-noir">
                <ListClasse />
            </div>
            <div id="3" className="mt-2 bg-noir w-24 h-24 justify-center items-center flex flex-wrap border border-noir">
            </div>
            <div id="4" className="mt-2 bg-noir w-96 h-fit justify-around flex flex-wrap border border-noir">
                <div className="w-72 h-24 p-2 border border-noir m-1 flex justify-center left-0">
                    <input className="border border-gris bg-noir flex text-center flex-col justify-center items-center outline-none" placeholder="Nom du stuff" type="text" id="nomStuff" name="nom" autoComplete="off" required></input>
                </div>
                
                <div className="bg-[url('/casque.png')] bg-contain w-24 h-24 p-2 border border-noir m-1 flex justify-center">
                 <ListItem item="casque" />        
                </div>
                
                <div className="bg-[url('/armure.png')] bg-contain w-24 h-24 p-2 border border-noir m-1 flex justify-center">
                    
                    <ListItem item="armure"/>
                
                </div>
                <div className="bg-[url('/bouclier.png')] bg-contain w-24 h-24 p-2 border border-noir m-1 flex justify-center left-0 justify-self-end">
                <ListItem item="bouclier"/>
                </div>
                <div className="bg-[url('/panthalon.png')] bg-contain w-24 h-24 p-2 border border-noir m-1 flex justify-center left-0">
                <ListItem item="pantalons"/>
                </div>
                <div className="w-24 h-48 p-2 border border-gris bg-noir m-1 flex justify-center content-center left-0">
                    <p className="flex text-center justify-center items-center text-gris">Preview du stuff</p>
                </div>
                <div className="bg-[url('/gants.png')] bg-contain w-24 h-24 p-2 border border-noir m-1 flex justify-center">
                <ListItem item="gants"/>
                </div>
                
                <div className="bg-[url('/bottes.png')] bg-contain w-24 h-24 p-2 border border-noir m-1 flex justify-center left-0">
                <ListItem item="bottes"/>
                </div>
                <div className="w-10 h-24 p-2  m-1 flex justify-center">
                    <input className="bg-noir border border-gris w-20 flex text-center flex-col justify-center items-center outline-none text-white" placeholder="LVL(1-100)" type="level" id="niveau" name="niveau" autoComplete="off" maxLength="3" min="1" max="100" style={{ lineHeight: '2em' }} required></input>
                </div>
                
                <div className="bg-[url('/arme.png')] bg-contain w-24 h-24 p-2 border border-noir m-1 flex justify-center left-0 bg-armes.png">
                <ListItem item="arme"/>
                </div>
                <div className="w-72 h-0.5 flex justify-center">
                </div>
                <div className="text-white bg-green w-24 h-fit borber border-noir">
                    <input type="submit" onSubmit={handleSubmit} value="Sauvegarder"></input>
                </div>
            </div>
                <div className="absolute bg-noir ml-12 mt-36 w-7/12 h-96 p-2 border border-noir m-1 flex justify-center left-0 ">
                    <p className="flex text-center justify-center text-gris">Statistiques</p>
                </div>
        </div>
        </>
        </form>
    );
}
export default Edit;