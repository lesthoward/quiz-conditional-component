import React, { Fragment } from 'react';
const ListPlants = ({ plant, plants, setPlants }) => {
	let { id, title, description, imgURL, quantity } = plant;
    const handleQuantity = () => {
        const allPlants = plants
        allPlants.forEach(plant => {
            if(plant.id == id) {
                plant.quantity += 1
            }
        })
        setPlants([
            ...allPlants
        ])
        
    }

    const handleDelete = () => {
        const allPlants = plants
        allPlants.forEach(plant => {
            if(plant.id == id) {
                plant.quantity = 0
            }
        })
        setPlants([
            ...allPlants
        ])
    }
	return (
		<Fragment>
			{quantity <= 0 ? (
				<p className="no-available">Planta no disponible</p>
			) : (
				<div className="card">
					<div className="card__image">
						{imgURL ? (
							<img src={imgURL} className="card__img" />
						) : (
							<p>No hay imagen disponible</p>
						)}
					</div>

					<div className="card__content">
						<p className="card__name">
							<p className="card__title">Name: {title}</p>
						</p>
						<p className="card__name">
							<p className="card__title">
								Description:{description}
							</p>
						</p>
						<p className="card__name">
							<p className="card__title">Quantity: {quantity}</p>
						</p>
                        <div className="card__buttons">
                            <button className="card__button"
                                onClick={() => handleQuantity()}
                            >Subir cantidades</button>
                            <button className="card__button"
                                onClick={handleDelete}
                            >Eliminar</button>
                        </div>
					</div>
				</div>
			)}
		</Fragment>
	);
};

export default ListPlants;
