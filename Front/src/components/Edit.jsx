function Edit() {
    return (
        <div className="flex justify-around">
            <div id="1" className="mt-2 bg-gris w-24 h-24 justify-center items-center flex flex-wrap border border-noir">
            <select className="outline-none appearance-none bg-gris w-full h-full flex text-center" id="genre" name="genre">
                        <option className="bg-noir text-white" value="genre1">Masculin</option>
                        <option className="bg-noir text-white" value="genre2">Feminin</option>
                    </select>
            </div>
            <div id="2" className="mt-2 bg-gris w-24 h-24 justify-center items-center flex flex-wrap border border-noir">
            <select className="outline-none appearance-none bg-gris w-full h-full flex text-center" id="race" name="race">
                        <option className="bg-noir text-white" value="race1">Race 1</option>
                        <option className="bg-noir text-white" value="race2">Race 2</option>
                        <option className="bg-noir text-white" value="race3">Race 3</option>
                    </select>
            </div>
            <div id="3" className="mt-2 bg-gris w-24 h-24 justify-center items-center flex flex-wrap border border-noir">
            <select className="outline-none appearance-none bg-gris w-full h-full flex text-center" id="classe" name="classe">
                        <option className="bg-noir text-white" value="classe1">Classe 1</option>
                        <option className="bg-noir text-white" value="classe2">Classe 2</option>
                        <option className="bg-noir text-white" value="classe3">Classe 3</option>
                    </select>
            </div>
            <div id="4" className="mt-2 bg-gris w-80 h-fit justify-around flex flex-wrap border border-noir">
                <div className="w-72 h-24 p-2 border border-noir m-1 flex justify-center left-0">
                    <input className="bg-gris flex text-center flex-col justify-center items-center outline-none" placeholder="Nom du stuff" type="text" id="nomStuff" name="nom" autoComplete="off" maxLength="24" required></input>
                </div>
                <div className="bg-[url('/casque.png')] bg-contain w-24 h-24 p-2 border border-noir m-1 flex justify-center">
                    <label for="casque"></label>
                    <select className="outline-none appearance-none bg-transparent text-white" id="casque" name="casque">
                        <option className="bg-noir" value="casque1">Casque 1</option>
                        <option className="bg-noir" value="casque2">Casque 2</option>
                        <option className="bg-noir" value="casque3">Casque 3</option>
                    </select>
                </div>
                <div className="bg-[url('/armure.png')] bg-contain w-24 h-24 p-2 border border-noir m-1 flex justify-center">
                    <label for="armure"></label>
                    <select className="outline-none appearance-none bg-transparent text-white" id="armure" name="armure">
                        <option className="bg-noir" value="armure1">Armure 1</option>
                        <option className="bg-noir" value="armure2">Armure 2</option>
                        <option className="bg-noir" value="armure3">Armure 3</option>
                    </select>
                </div>
                <div className="bg-[url('/bouclier.png')] bg-contain w-24 h-24 p-2 border border-noir m-1 flex justify-center left-0 justify-self-end">
                    <label for="bouclier"></label>
                    <select className="outline-none appearance-none bg-transparent text-white" id="bouclier" name="bouclier">
                        <option className="bg-noir" value="bouclier1">Bouclier 1</option>
                        <option className="bg-noir" value="bouclier2">Bouclier 2</option>
                        <option className="bg-noir" value="bouclier3">Bouclier 3</option>
                    </select>
                </div>
                <div className="bg-[url('/pantalon.png')] bg-contain w-24 h-24 p-2 border border-noir m-1 flex justify-center left-0">
                    <label for="pantalon"></label>
                    <select className="outline-none appearance-none bg-transparent text-white" id="pantalon" name="pantalon">
                        <option className="bg-noir" value="pantalon1">Pantalon 1</option>
                        <option className="bg-noir" value="pantalon2">Pantalon 2</option>
                        <option className="bg-noir" value="pantalon3">Pantalon 3</option>
                    </select>
                </div>
                <div className="w-24 h-48 p-2 border border-noir m-1 flex justify-center content-center left-0">
                    <p className="flex text-center justify-center items-center">Preview du stuff</p>
                </div>
                <div className="bg-[url('/gants.png')] bg-contain w-24 h-24 p-2 border border-noir m-1 flex justify-center">
                    <label for="gants"></label>
                    <select className="outline-none appearance-none bg-transparent text-white" id="gants" name="gants">
                        <option className="bg-noir" value="gants1">Gants 1</option>
                        <option className="bg-noir" value="gants2">Gants 2</option>
                        <option className="bg-noir" value="gants3">Gants 3</option>
                    </select>
                </div>
                <div className="bg-[url('/bottes.png')] bg-contain w-24 h-24 p-2 border border-noir m-1 flex justify-center left-0">
                    <label for="bottes"></label>
                    <select className="outline-none appearance-none bg-transparent text-white" id="bottes" name="bottes">
                        <option className="bg-noir" value="bottes1">Bottes 1</option>
                        <option className="bg-noir" value="bottes2">Bottes 2</option>
                        <option className="bg-noir" value="bottes3">Bottes 3</option>
                    </select>
                </div>
                <div className="w-24 h-24 p-2 border border-noir m-1 flex justify-center">
                    <input className="bg-transparent flex text-center flex-col justify-center items-center outline-none" placeholder="LVL (1-100)" type="level" id="niveau" name="niveau" autoComplete="off" maxLength="3" min="1" max="100" style={{ lineHeight: '2em' }} required></input>
                </div>
                <div className="bg-[url('/arme.png')] bg-contain w-24 h-24 p-2 border border-noir m-1 flex justify-center left-0 bg-armes.png">
                    <label for="arme"></label>
                    <select className="outline-none appearance-none bg-transparent text-white" id="arme" name="arme">
                        <option className="bg-noir" value="arme1">Arme 1</option>
                        <option className="bg-noir" value="arme2">Arme 2</option>
                        <option className="bg-noir" value="arme3">Arme 3</option>
                    </select>
                </div>
            </div>
                <div className="absolute ml-2 mt-36 w-7/12 h-96 p-2 border border-noir m-1 flex justify-center left-0">
                    <p className="flex text-center justify-center items-center">Statistiques</p>
                </div>
        </div>
    );
}
export default Edit;
