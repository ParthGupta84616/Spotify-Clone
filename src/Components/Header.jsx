import React from 'react';
import { useMarketValue } from '../Datalayer';

function Header({ spotify }) {
  const [{ user }] = useMarketValue();
  return (
    <div className='flex'>
      <div className="flex items-center w-3/4 ml-4">
        <div className="p-2">
          <input 
            className="border rounded-xl text-white p-2 w-full md:w-80 transition duration-300 ease-in-out bg-gray-800 focus:bg-gray-700 focus:outline-none focus:border-transparent" 
            type="text" 
            placeholder="Search For Songs" 
          />
        </div>
        <div className="p-2 size-14">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsElEQVR4nO2ZzUuUURSHXzdlNAURoW41ym2boIVfiX9BSy2iQAz8H5JaqO3dZxBESx382NaiD21Z1qZNu8yVUc0YPXHxQLfT9TYznjvzTr0PDAwD7/mdw33PPR+TZQUF+QPoAW4CD4BXwCegKp9tYBNYBG4A3VneAIaBMvCd2tkDloHBPARwFljj8KwAfa0K4hrwGTt2gYlmB3En4tAbYBYYBc4Dx+XTL7/NAVuR52eaFcTdAxx4AYzUYecS8LQlwbD/OmkqwCTQ0YC9DmBKbGjGUya2zgl3vQ4Y2B4EdgI502vj/e9i+naqWATh2R+SeuNTtrLv1wnNpKnIvs6tgM6ApYArdj7PG8mJGnPmpdJasmw7XBX2GTIxHtYbUVp7QJeFYdc7+bw28Tiu+VZpXrcw6hpAn1kTb+Oa80rzvoVR18X6jJp4G9ccU5obFkZdrfA5Z+JtXNO1Nj4fLYzqqlsy8TauWVKa31IEcsLE27jmSaW5+6+8Wu8tjG7mINmfWRh1M7bPnIm3cc17SnMhRUHcMvE2rvlOaV6xMNodaFGGTTwO67kp0qcCnLYy7rYdehpM1TTqnFy0FHCDj2bKTOCXznRA54K1iFvZ+FQtd1LS9erB6qGVfV+oT8ZPnx2Lll4GNz3qus3kGRvv/xScCBx9VSa7RpcP04GTcDwBjiQJRMRnCLMBXK7zdtKJrVkBOlsRDDIUzUt17pcGsCTfx6TY6ToRYyn1yYwHciYVy8DRlMH0BhYT9fIDeAystzQYh1vZyCugO4AYX4FHwEWx0Qms/uWZcvJgxJkutyhwM7Yk/7a0GF+AD7LqWQCuAqcCz+cnmMPiEjvQEmlWk95mTQ5mrQim2fAfnsw6cCzLO9R2mzX3/8dEJ3M7aycIB9NeQRwQTHsGoXImzZ+lBQVZlJ/po/gO7uhxQgAAAABJRU5ErkJggg==" alt=''/>
        </div>
      </div>
      <div className="flex items-center">
        <div className="p-2">
          <img 
            src={user?.images[0]?.url} 
            alt={user?.display_name} 
            className="w-14 h-14 rounded-full border-2 border-gray-300 hover:shadow-lg transition duration-300 ease-in-out"
          />
        </div>
        <div className="p-2">
          <button>
            <h1 className="text-lg font-bold text-white hover:text-gray-200 transition duration-300 ease-in-out">
              <strong>{user?.display_name}</strong>
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
