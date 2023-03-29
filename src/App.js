import { BiHeart as HeartIcon } from "react-icons/bi";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";

const App = () => {
	return (
		<div className="--page-container">
			<div className="--main-container ">
				<div className="--top-wrapper">
					<div className="flex">
						<button className="--btn --btn--active">All</button>
						<button className="--btn">USDT</button>
						<button className="--btn">BUSD</button>
						<button className="--btn">
							<HeartIcon />
						</button>
					</div>
					<div className="--search">
						<input type="search" placeholder="Search ETH, BTC, ..." />
						<SearchIcon className="--icon" />
					</div>
				</div>
				<div className="--bottom-wrapper">
					<div className="--item">
						<img src="./assets/btc.png" alt="" />
						<h2 className="">BTC</h2>
						<div className="ml-auto ">
							<HeartIcon />
						</div>
					</div>
					<div className="--item">
						<img src="./assets/eth.png" alt="" />
						<h2>ETH</h2>
						<div className="ml-auto">
							<HeartIcon />
						</div>
					</div>
					<div className="--item">
						<img src="./assets/doge.png" alt="" />
						<h2>Doge</h2>
						<div className="ml-auto ">
							<HeartIcon />
						</div>
					</div>
					<div className="--item">
						<img src="./assets/algo.png" alt="" />
						<h2>ALGO</h2>
						<div className="ml-auto ">
							<HeartIcon />
						</div>
					</div>
					<div className="--item">
						<img src="./assets/ada.png" alt="" />
						<h2>ADA</h2>
						<div className="ml-auto ">
							<HeartIcon />
						</div>
					</div>
					<div className="--item">
						<img src="./assets/luna.png" alt="" />
						<h2>LUNA</h2>
						<div className="ml-auto ">
							<HeartIcon />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
