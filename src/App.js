import React, { useState } from 'react';
import './App.css';
import { PlantsArr } from './data.js';
import PlantBox from './components/PlantBox';

const App = () => {
	const [plants, setPlants] = useState(PlantsArr);
	const isEqualToZero = plants.every((plant) => plant.quantity === 0);
	return (
		<div className="container">
			<div className="list">
				<h1 className="list__title">Quiz por Lester Howard</h1>

				{isEqualToZero ? (
					<h2>No hay plantas disponibles</h2>
				) : (
					plants.map((plant) => (
						<PlantBox
							key={plant.id}
							plant={plant}
                            plants={plants}
							setPlants={setPlants}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default App;
