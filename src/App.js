import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App grid gap-4 ">
      <h1 className="border border-solid py-[23px] hover:border-dotted sm:text-center bg-purple text-gray-light">
        Merhaba nasılsın iyi misin?
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
        sapiente. Non quod qui voluptatum suscipit, optio eaque culpa magni
        dolor!
      </p>
      <div className="w-[450px] flex ">
        <img
          className=" rounded-full"
          src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
          alt=""
        />
        <ul className="flex flex-col items-center">
          <a className="items-center" href="#">
            <li>ocak</li>
          </a>
          <a href="#">
            <li>ocak</li>
          </a>
          <a href="#">
            <li>ocak</li>
          </a>
          <a href="#">
            <li>ocak</li>
          </a>
          <a href="#">
            <li>ocak</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default App;
