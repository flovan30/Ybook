function Accueil() {
    return (
        <div className="flex justify-around">
            <div id="1" className="mt-2 bg-gris w-80 h-fit justify-around flex flex-wrap border border-noir">
                <div className="w-72 h-24 p-2 border border-noir m-1 flex justify-center left-0">
                    <input className="bg-gris flex text-center flex-col justify-center items-center outline-none" placeholder="Nom du stuff" type="text" id="nomStuff" name="nom" autoComplete="off" required></input>
                </div>
                <div className=" w-24 h-24 p-2 border border-noir m-1 flex justify-center">
                    <label for="casque"></label>
                    <select className="outline-none appearance-none bg-transparent" id="casque" name="casque">
                        <option value="casque1">Casque 1</option>
                        <option value="casque2">Casque 2</option>
                        <option value="casque3">Casque 3</option>
                    </select>
                </div>
                <div className="w-24 h-24 p-2 border border-noir m-1 flex justify-center">
                    <label for="armure"></label>
                    <select className="outline-none appearance-none bg-transparent" id="armure" name="armure">
                        <option value="armure1">Armure 1</option>
                        <option value="armure2">Armure 2</option>
                        <option value="armure3">Armure 3</option>
                    </select>
                </div>
                <div className="w-24 h-24 p-2 border border-noir m-1 flex justify-center">
                    <label for="gants"></label>
                    <select className="outline-none appearance-none bg-transparent" id="gants" name="gants">
                        <option value="gants1">Gants 1</option>
                        <option value="gants2">Gants 2</option>
                        <option value="gants3">Gants 3</option>
                    </select>
                </div>
                <div className="w-24 h-24 p-2 border border-noir m-1 flex justify-center left-0">
                    <label for="pantalon"></label>
                    <select className="outline-none appearance-none bg-transparent" id="pantalon" name="pantalon">
                        <option value="pantalon1">Pantalon 1</option>
                        <option value="pantalon2">Pantalon 2</option>
                        <option value="pantalon3">Pantalon 3</option>
                    </select>
                </div>
                <div className="w-24 h-48 p-2 border border-noir m-1 flex justify-center content-center left-0">
                    <p className="flex text-center justify-center items-center">Preview du stuff</p>
                </div>
                <div className="w-24 h-24 p-2 border border-noir m-1 flex justify-center left-0">
                    <label for="bottes"></label>
                    <select className="outline-none appearance-none bg-transparent" id="bottes" name="bottes">
                        <option value="bottes1">Bottes 1</option>
                        <option value="bottes2">Bottes 2</option>
                        <option value="bottes3">Bottes 3</option>
                    </select>
                </div>
                <div className="w-24 h-24 p-2 border border-noir m-1 flex justify-center left-0 justify-self-end">
                    <label for="bouclier"></label>
                    <select className="outline-none appearance-none bg-transparent" id="bouclier" name="bouclier">
                        <option value="bouclier1">Bouclier 1</option>
                        <option value="bouclier2">Bouclier 2</option>
                        <option value="bouclier3">Bouclier 3</option>
                    </select>
                </div>
                <div className="w-24 h-24 p-2 border border-noir m-1 flex justify-center left-0 bg-armes.png">
                    <label for="arme"></label>
                    <select className="outline-none appearance-none bg-transparent" id="arme" name="arme">
                        <option value="arme1">Arme 1</option>
                        <option value="arme2">Arme 2</option>
                        <option value="arme3">Arme 3</option>
                    </select>
                </div>
                <div className="w-72 h-24 p-2 border border-noir m-1 flex justify-center left-0">
                    <p className="flex text-center justify-center items-center">Statistiques</p>
                </div>
            </div>
            <div id="2" className="mt-2 bg-gris w-24 h-24 justify-center items-center flex flex-wrap border border-noir">
            <select className="outline-none appearance-none bg-gris" id="race" name="race">
                        <option value="race1">Race 1</option>
                        <option value="race2">Race 2</option>
                        <option value="race3">Race 3</option>
                    </select>
            </div>
            <div id="3" className="mt-2 bg-gris w-24 h-24 justify-center items-center flex flex-wrap border border-noir">
            <select className="outline-none appearance-none bg-gris" id="classe" name="classe">
                        <option value="classe1">Classe 1</option>
                        <option value="classe2">Classe 2</option>
                        <option value="classe3">Classe 3</option>
                    </select>
            </div>
            <div id="4" className="mt-2 bg-gris w-24 h-24 justify-center items-center flex flex-wrap border border-noir">
            <select className="outline-none appearance-none bg-gris" id="genre" name="genre">
                        <option value="genre1">Masculin</option>
                        <option value="genre2">Feminin</option>
                    </select>
            </div>
        </div>
    );
}
export default Accueil;
