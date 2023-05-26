import { useState } from "react";
import "./App.css";

const App = () => {
	const [Input, setInput] = useState([]);
	console.log(Input)
		
	
	const handleChange = () => {};
	const handleClick = (e) => {
		let btnelement = e.target.innerText;
		if (btnelement === "=") {
			let evaluatedValue = eval(Input.join(""));
			setInput([evaluatedValue]);
		} else if (btnelement === "C") {
			setInput([]);
		} else if (btnelement === 'b') {
			let slicedValue = Input.join("").slice(0, -1).split(" ");
			setInput(slicedValue);
		} else if (btnelement === "X") {
			let btnelement = "*";
			setInput([...Input, btnelement]);

		} 
		else {
			setInput([...Input, btnelement]);
		}
	};
	
	return (
		<>
			<div className="container">
				<h1>Calculator</h1>
				<div className="calculator">
					<input
						type="text"
						name="screen"
						value={Input.join("")}
						onChange={handleChange}
					/>
					<table>
						<tbody>
							<tr>
								<td>
									<button onClick={handleClick}>(</button>
									<button onClick={handleClick}>b </button>
									<button onClick={handleClick}>C</button>
									<button onClick={handleClick}>%</button>
								</td>
							</tr>
							<tr>
								<td>
									<button onClick={handleClick}>7</button>
									<button onClick={handleClick}>8</button>
									<button onClick={handleClick}>9</button>
									<button onClick={handleClick}>X</button>
								</td>
							</tr>
							<tr>
								<td>
									<button onClick={handleClick}>4</button>
									<button onClick={handleClick}>5</button>
									<button onClick={handleClick}>6</button>
									<button onClick={handleClick}>+</button>
								</td>
							</tr>
							<tr>
								<td>
									<button onClick={handleClick}> 1</button>
									<button onClick={handleClick}>2</button>
									<button onClick={handleClick}>3</button>
									<button onClick={handleClick}> -</button>
								</td>
							</tr>
							<tr>
								<td>
									<button onClick={handleClick}>0</button>
									<button onClick={handleClick}>.</button>
									<button onClick={handleClick}>=</button>
									<button onClick={handleClick}>/</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default App;
